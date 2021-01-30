import { css } from '@emotion/react';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CONTACT_BUTTON,
  CONTACT_HEADER,
  CONTACT_TITLE,
  CONTACT_WARN_TEXT,
} from '../../constants/contact';
import { PAGES } from '../../constants/pages';
import { COLORS } from '../../style';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { TextArea } from '../atoms/text-area';

export function Contact(): React.ReactElement {
  const history = useHistory();

  let name = '';
  let text = '';

  const nameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      name = event.target.value;
    },
    [name],
  );

  const textChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      text = event.target.value;
    },
    [text],
  );

  return (
    <div css={style} className="Contact">
      <div className="head">
        <h1>{CONTACT_TITLE}</h1>
      </div>
      <div className="form">
        <Input header={CONTACT_HEADER[0]} onChange={nameChange} />
      </div>
      <div className="form">
        <TextArea header={CONTACT_HEADER[1]} onChange={textChange} />
      </div>
      <div className="warn">
        {CONTACT_WARN_TEXT.map((value: string) => (
          <p>{value}</p>
        ))}
      </div>
      <div className="buttonWrap">
        <Button
          text={CONTACT_BUTTON}
          onClick={() => {
            history.push({
              pathname: PAGES.CONTACT_VIEW,
              state: { name, text },
            });
          }}
        />
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  .warn {
    font-size: 16px;
    color: ${COLORS.gray};
    margin-bottom: 10px;
  }
  .head {
    margin-bottom: 20px;
  }
  .form {
    margin: 20px 0;
    input {
      border: solid 1px ${COLORS.gray};
    }
    textarea {
      border: solid 1px ${COLORS.gray};
    }
  }
`;
