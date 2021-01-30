import { css } from '@emotion/react';
import React from 'react';
import { COLORS, min } from '../../style';
import { Input } from '../atoms/input';

export type TypeFormProps = {
  header: string;
  text: string[];
};

export function TextFormList(props: TypeFormProps): React.ReactElement {
  return (
    <div css={style} className="TextFormList">
      <ul>
        <h2>{props.header}</h2>
        {props.text.map((value: string) => (
          <li key={value}>
            <Input header={value} />
          </li>
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
  p {
    display: block;
    margin-top: 10px;
    font-size: 18px;
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
