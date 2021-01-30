import { css } from '@emotion/react';
import React from 'react';
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
  // const [type, setType] = useState(SERVICE_TYPE_VALUE[0]);
  // const [pay, setPay] = useState(SERVICE_PAY_VALUE[0]);

  // const typeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setType(event.currentTarget.value);
  // };

  // const payChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setPay(event.currentTarget.value);
  // };

  return (
    <div css={style} className="Serivce">
      <div className="head">
        <h1>{SERVICE_TEXT}</h1>
      </div>
      <TextFormList header={SERVICE_HEADER[0]} text={SERVICE_CONTRACTOR_TEXT} />
      <TextFormList header={SERVICE_HEADER[1]} text={SERVICE_RECEIVER_TEXT} />
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
        />
      </div>
      <div className="buttonWrap">
        <Button text={SERVICE_BUTTON} />
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  p {
    display: block;
    margin-top: 10px;
    font-size: 18px;
  }
  .head {
    margin-bottom: 20px;
  }
`;
