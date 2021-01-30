import { css } from '@emotion/react';
import React from 'react';
import Granpa from '../../assets/grandpa.jpg';
import {
  HOME_BUTTON,
  HOME_CONTRACT_COMPLETE,
  HOME_CONTRACT_LIMIT,
  HOME_HEADER,
  HOME_TEXT_1,
  HOME_TEXT_2,
  HOME_TEXT_3,
} from '../../constants/home';
import { COLORS, min } from '../../style';

export function Home(): React.ReactElement {
  return (
    <div css={style} className="Home">
      <div className="banner">
        <img src={Granpa} alt="" />
      </div>
      <div className="explain">
        <div className="colmun">
          <h1>{HOME_HEADER[0]}</h1>
          <p>{HOME_TEXT_1}</p>
        </div>
        <div className="colmun">
          <h1>{HOME_HEADER[1]}</h1>
          <p>{HOME_TEXT_2}</p>
        </div>
      </div>
      <div className="contract">
        <h1>{HOME_HEADER[2]}</h1>
        <p>
          <span className="red">{HOME_CONTRACT_LIMIT}</span>
          {HOME_TEXT_3[0]}
          <span className="red-border">{HOME_CONTRACT_COMPLETE}</span>
          {HOME_TEXT_3[1]}
        </p>
        <button type="button">{HOME_BUTTON}</button>
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  .banner {
    margin-bottom: 20px;
  }
  .colmun {
    margin: 10px 0 20px 0;
    ${min('sp')} {
      margin: 10px 10px 20px 10px;
    }
    h1 {
      display: inline;
      border-bottom: solid 3px ${COLORS.green};
      padding-bottom: 2px;
    }
    p {
      display: block;
      margin-top: 10px;
      font-size: 18px;
    }
  }
  .contract {
    text-align: center;
    background-color: ${COLORS.lightGreen};
    padding: 20px 10px;
    h1 {
      display: inline;
      background-color: ${COLORS.green};
      border-radius: 10px;
      padding: 5px;
    }
    p {
      display: block;
      margin-top: 10px;
      font-size: 18px;
      .red {
        color: ${COLORS.red};
        font-size: 20px;
        font-weight: bold;
      }
      .red-border {
        color: ${COLORS.red};
        border-bottom: solid 3px ${COLORS.red};
        padding-bottom: 2px;
        font-size: 20px;
        font-weight: bold;
      }
    }
    button {
      margin-top: 15px;
      background-color: ${COLORS.yellow};
      border-radius: 10px;
      padding: 5px;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
