import { css } from '@emotion/react';
import React from 'react';
import { COLORS, min } from '../../style';

export type SelectProps = {
  header: string;
  option: string[];
  defaultChecked: number;
  changeEvent?: () => void;
};

export function Select(props: SelectProps): React.ReactElement {
  return (
    <div css={style} className="Select">
      <p>{props.header}</p>
      <select onChange={props.changeEvent}>
        {props.option.map((value: string, index: number) => (
          <option
            key={value}
            value={value}
            defaultChecked={props.defaultChecked === index}
          >
            {value}
          </option>
        ))}
      </select>
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
  .text {
    font-family: 'Yu Gothic Medium', '游ゴシック Medium', YuGothic,
      '游ゴシック体', 'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
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
