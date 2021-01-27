import { css } from '@emotion/react';
import React from 'react';
import { COLORS, min } from '../../style';
import { Select, SelectProps } from '../atoms/select';

export type SelectListProps = {
  header: string;
  selectData: SelectProps[];
};

export function SelectList(props: SelectListProps): React.ReactElement {
  return (
    <div css={style} className="SelectList">
      <h2>{props.header}</h2>
      {props.selectData.map(value => (
        <Select {...value} />
      ))}
    </div>
  );
}

const style = css`
  width: 100%;
  margin: 20px 0;
  padding: 5px 0 0 0;
  background-color: ${COLORS.white};
  padding: 10px;
  position: relative;
  border-bottom: solid 1px ${COLORS.border};
  ${min('sp')} {
    margin: 10px 10px 20px 10px;
    padding: 10px 10px 20px 10px;
    border-radius: 10px;
  }
  .text {
    font-family: 'Yu Gothic Medium', '游ゴシック Medium', YuGothic,
      '游ゴシック体', 'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
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
    top: 68%;
    transform: translateY(-4px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 7px 0 7px;
    border-color: ${COLORS.green} transparent transparent transparent;
    pointer-events: none;
  }
`;
