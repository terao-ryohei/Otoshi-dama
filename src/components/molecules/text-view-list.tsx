import { css } from '@emotion/react';
import React from 'react';
import { COLORS, min } from '../../style';

export type TextViewProps = {
  header: string[];
  text: string[];
};

export function TextViewList(props: TextViewProps): React.ReactElement {
  return (
    <div css={style} className="TextFormList">
      <ul>
        {props.header.map((value: string, index: number) => (
          <>
            {props.text[index] !== '' && (
              <li key={value}>
                <h2>{value}</h2>
                <p>{props.text[index]}</p>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}

const style = css`
  width: 100%;
  margin: 20px 0;
  padding: 5px 0 0 0;
  background-color: ${COLORS.white};
  ${min('sp')} {
    margin: 10px 10px 20px 10px;
    padding: 10px 10px 20px 10px;
    border-radius: 10px;
  }
  ul {
    li {
      padding: 10px;
      border-bottom: solid 1px ${COLORS.border};
      p {
        margin-bottom: 5px;
      }
    }
  }
`;
