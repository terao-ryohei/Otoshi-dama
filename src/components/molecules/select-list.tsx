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
`;
