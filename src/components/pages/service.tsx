import { css } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import {
  SERVICE_BUTTON,
  SERVICE_CONTRACTOR_TEXT,
  SERVICE_HEADER,
  SERVICE_PAY_VALUE,
  SERVICE_RECEIVER_TEXT,
  SERVICE_SELECT_TEXT,
  SERVICE_TEXT,
  SERVICE_TYPE_VALUE,
} from '../../constants/service';
import { Button } from '../atoms/button';
import { SelectList } from '../molecules/select-list';
import { TextFormList } from '../molecules/text-form-list';

export function Serivce(): React.ReactElement {
  const history = useHistory();
  const [type, setType] = useState(SERVICE_TYPE_VALUE[0]);
  const [pay, setPay] = useState(SERVICE_PAY_VALUE[0]);
  const contractorData = [''];
  const receiverData = [''];

  useEffect(() => {
    SERVICE_CONTRACTOR_TEXT.forEach(() => {
      contractorData.push('');
    });
    SERVICE_RECEIVER_TEXT.forEach(() => {
      receiverData.push('');
    });
  }, []);

  const contractorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      contractorData[Number(event.target.id)] = event.target.value;
    },
    [contractorData],
  );

  const receiverChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      receiverData[Number(event.target.id)] = event.target.value;
    },
    [receiverData],
  );

  const typeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setType(event.currentTarget.value);
    },
    [type],
  );

  const payChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPay(event.currentTarget.value);
    },
    [pay],
  );

  return (
    <div css={style} className="Serivce">
      <div className="head">
        <h1>{SERVICE_TEXT}</h1>
      </div>
      <TextFormList
        header={SERVICE_HEADER[0]}
        text={SERVICE_CONTRACTOR_TEXT}
        onChange={contractorChange}
      />
      <TextFormList
        header={SERVICE_HEADER[1]}
        text={SERVICE_RECEIVER_TEXT}
        onChange={receiverChange}
      />
      <div className="form">
        <SelectList
          header={SERVICE_HEADER[2]}
          selectData={[
            {
              header: SERVICE_SELECT_TEXT[0],
              option: SERVICE_TYPE_VALUE,
              defaultChecked: 0,
            },
            {
              header: SERVICE_SELECT_TEXT[1],
              option: SERVICE_PAY_VALUE,
              defaultChecked: 0,
            },
          ]}
          onChange={[typeChange, payChange]}
        />
      </div>
      <div className="buttonWrap">
        <Button
          text={SERVICE_BUTTON}
          onClick={() => {
            history.push({
              pathname: PAGES.SERIVCE_VIEW,
              state: { contractorData, receiverData, type, pay },
            });
          }}
        />
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  .head {
    margin-bottom: 20px;
  }
`;
