import { css } from '@emotion/react';
import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import {
  INPUT_CHECK_BUTTON,
  INPUT_CHECK_TITLE,
} from '../../constants/input-check';
import { PAGES } from '../../constants/pages';
import {
  SERVICE_CONTRACTOR_TEXT,
  SERVICE_RECEIVER_TEXT,
  SERVICE_SELECT_TEXT,
} from '../../constants/service';
import { Button } from '../atoms/button';
import { TextViewList } from '../molecules/text-view-list';

type ServiceCheckProps = RouteComponentProps<
  {},
  {},
  {
    contractorData: string[];
    receiverData: string[];
    pay: string;
    type: string;
  }
>;

export function ServiceCheck(props: ServiceCheckProps): React.ReactElement {
  const history = useHistory();
  return (
    <div css={style} className="ServiceCheck">
      <div className="head">
        <h1>{INPUT_CHECK_TITLE}</h1>
      </div>
      <div className="form">
        <TextViewList
          header={SERVICE_CONTRACTOR_TEXT}
          text={props.location.state.contractorData}
        />
      </div>
      <div className="form">
        <TextViewList
          header={SERVICE_RECEIVER_TEXT}
          text={props.location.state.receiverData}
        />
      </div>
      <div className="form">
        <TextViewList
          header={SERVICE_SELECT_TEXT}
          text={[props.location.state.type, props.location.state.pay]}
        />
      </div>
      <div className="buttonWrap">
        <Button
          text={INPUT_CHECK_BUTTON[0]}
          onClick={() => {
            history.push({
              pathname: PAGES.SERIVCE_VIEW,
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
