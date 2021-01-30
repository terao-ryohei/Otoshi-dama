import { css } from '@emotion/react';
import React from 'react';
import { COLORS } from '../../style';

export type TextAreaProps = {
  header: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function TextArea(props: TextAreaProps): React.ReactElement {
  return (
    <div css={style} className={`TextArea ${props.className}`}>
      <p>{props.header}</p>
      <textarea onChange={props.onChange} />
    </div>
  );
}

const style = css`
  width: 100%;
  textarea {
    border: solid 1px ${COLORS.gray};
    background-color: #eff6e4;
    display: block;
    font-size: 16px;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    min-height: 200px;
  }
`;
