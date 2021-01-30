import { css } from '@emotion/react';
import React from 'react';
import {
  ABOUT_EXPLAIN,
  ABOUT_HEADER,
  ABOUT_LINK,
  ABOUT_TEXT_1,
  ABOUT_TEXT_2,
  ABOUT_TEXT_3,
  ABOUT_TITLE,
} from '../../constants/about';
import {
  AMAZON_CARD_URL,
  BOOK_CARD_URL,
  QUO_CARD_URL,
} from '../../constants/url';
import { COLORS, min } from '../../style';

export function About(): React.ReactElement {
  return (
    <div css={style} className="About">
      <div className="head">
        <h1>{ABOUT_TITLE}</h1>
        <p>{ABOUT_EXPLAIN}</p>
      </div>
      <div className="explain">
        <div className="colmun">
          <h2>{ABOUT_HEADER[0]}</h2>
          <p>{ABOUT_TEXT_1}</p>
          <p className="link">
            {ABOUT_LINK[0]}
            <a href={AMAZON_CARD_URL}>{ABOUT_LINK[1]}</a>
          </p>
        </div>
        <div className="colmun">
          <h2>{ABOUT_HEADER[1]}</h2>
          <p>{ABOUT_TEXT_2}</p>
          <p className="link">
            {ABOUT_LINK[0]}
            <a href={BOOK_CARD_URL}>{ABOUT_LINK[1]}</a>
          </p>
        </div>
        <div className="colmun">
          <h2>{ABOUT_HEADER[2]}</h2>
          <p>{ABOUT_TEXT_3}</p>
          <p className="link">
            {ABOUT_LINK[0]}
            <a href={QUO_CARD_URL}>{ABOUT_LINK[1]}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  p {
    display: block;
    margin-top: 10px;
    font-size: 18px;
  }
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
