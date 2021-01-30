import { css } from '@emotion/react';
import React from 'react';

export type InputProps = {
  id?: number;
  header: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input(props: InputProps): React.ReactElement {
  return (
    <div css={style} className={`Input ${props.className}`}>
      <p>{props.header}</p>
      <input id={String(props.id)} type="text" onChange={props.onChange} />
    </div>
  );
}

const style = css`
  width: 100%;
`;
