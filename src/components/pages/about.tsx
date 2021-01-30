import { css } from '@emotion/react';
import React from 'react';
import {
  ABOUT_EXPLAIN,
  ABOUT_HEADER,
  ABOUT_LINK,
  ABOUT_TEXT,
  ABOUT_TITLE,
} from '../../constants/about';
import { PAY_EXPLAIN_URL } from '../../constants/url';
import { COLORS, min } from '../../style';

export function About(): React.ReactElement {
  return (
    <div css={style} className="About">
      <div className="head">
        <h1>{ABOUT_TITLE}</h1>
        <p>{ABOUT_EXPLAIN}</p>
      </div>
      <div className="explain">
        {ABOUT_HEADER.map((value: string, index: number) => (
          <div key={value} className="colmun">
            <h2>{value}</h2>
            <p>{ABOUT_TEXT[index]}</p>
            <p className="link">
              {ABOUT_LINK[0]}
              <a href={PAY_EXPLAIN_URL[index]}>{ABOUT_LINK[1]}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  .head {
    margin-bottom: 20px;
  }
  .colmun {
    margin: 10px 0 20px 0;
    ${min('sp')} {
      margin: 10px 10px 20px 10px;
    }
    h2 {
      display: inline;
      border-bottom: solid 3px ${COLORS.green};
      padding-bottom: 2px;
    }
    .link {
      font-size: 16px;
      a {
        text-decoration: underline;
      }
    }
  }
`;
