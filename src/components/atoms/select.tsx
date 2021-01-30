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
  position: relative;
  ${min('sp')} {
    margin: 10px 10px 20px 10px;
    padding: 10px 10px 20px 10px;
    border-radius: 10px;
  }
  select {
    background-color: #eff6e4;
    display: block;
    font-size: 16px;
    padding: 0 40px 0 16px;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    height: 36px;
    cursor: pointer;
  }
  &:after {
    display: block;
    content: '';
    position: absolute;
    right: 16px;
    top: 74%;
    transform: translateY(-4px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 7px 0 7px;
    border-color: ${COLORS.green} transparent transparent transparent;
    pointer-events: none;
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
