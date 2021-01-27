import { css } from '@emotion/react';
import React from 'react';

export type InputProps = {
  header: string;
  className?: string;
};

export function Input(props: InputProps): React.ReactElement {
  return (
    <div css={style} className={`Input ${props.className}`}>
      <p>{props.header}</p>
      <input type="text" />
    </div>
  );
}

const style = css`
  width: 100%;
  .text {
    font-family: 'Yu Gothic Medium', '游ゴシック Medium', YuGothic,
      '游ゴシック体', 'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
  }
`;
