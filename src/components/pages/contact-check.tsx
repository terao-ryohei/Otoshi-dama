import { css } from '@emotion/react';
import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { CONTACT_HEADER } from '../../constants/contact';
import {
  INPUT_CHECK_BUTTON,
  INPUT_CHECK_TITLE,
} from '../../constants/input-check';
import { PAGES } from '../../constants/pages';
import { Button } from '../atoms/button';
import { TextViewList } from '../molecules/text-view-list';

type ContactCheckProps = RouteComponentProps<
  {},
  {},
  {
    name: string;
    data: string;
  }
>;

export function ContactCheck(props: ContactCheckProps): React.ReactElement {
  const history = useHistory();

  return (
    <div css={style} className="ContactCheck">
      <div className="head">
        <h1>{INPUT_CHECK_TITLE}</h1>
      </div>
      <div className="form">
        <TextViewList
          header={[CONTACT_HEADER[0]]}
          text={[props.location.state.name]}
        />
      </div>
      <div className="form">
        <TextViewList
          header={[CONTACT_HEADER[1]]}
          text={[props.location.state.data]}
        />
      </div>
      <div className="buttonWrap">
        <Button
          text={INPUT_CHECK_BUTTON[1]}
          onClick={() => {
            history.push({
              pathname: PAGES.CONTACT_VIEW,
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
