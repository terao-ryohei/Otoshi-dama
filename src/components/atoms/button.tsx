import { css } from '@emotion/react';
import React from 'react';
import { COLORS } from '../../style';

export type InputProps = {
  text: string;
  className?: string;
};

export function Button(props: InputProps): React.ReactElement {
  return (
    <div css={style} className="Button">
      <button className={`${props.className}`} type="button">
        {props.text}
      </button>
    </div>
  );
}

const style = css`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  button {
    text-align: center;
    background-color: ${COLORS.green};
    color: ${COLORS.white};
    border-radius: 50px;
    padding: 20px 80px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
    &.yellow {
      background-color: ${COLORS.yellow};
      color: ${COLORS.black};
    }
  }
`;
