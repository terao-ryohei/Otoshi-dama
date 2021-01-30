import { css } from '@emotion/react';
import React from 'react';
import Granpa from '../../assets/grandpa.jpg';
import {
  HOME_BUTTON,
  HOME_CONTRACT_COMPLETE,
  HOME_CONTRACT_LIMIT,
  HOME_HEADER,
  HOME_TEXT,
  HOME_CONTRACT_TEXT,
  HOME_CONTRACT_HEADER,
} from '../../constants/home';
import { COLORS, min } from '../../style';
import { Button } from '../atoms/button';

export function Home(): React.ReactElement {
  return (
    <div css={style} className="Home">
      <div className="banner">
        <img src={Granpa} alt="" />
      </div>
      <div className="explain">
        {HOME_HEADER.map((value: string, index: number) => (
          <div className="colmun">
            <h1>{value}</h1>
            <p>{HOME_TEXT[index]}</p>
          </div>
        ))}
      </div>
      <div className="contract">
        <h1>{HOME_CONTRACT_HEADER}</h1>
        <p>
          <span className="red">{HOME_CONTRACT_LIMIT}</span>
          {HOME_CONTRACT_TEXT[0]}
          <span className="red border">{HOME_CONTRACT_COMPLETE}</span>
          {HOME_CONTRACT_TEXT[1]}
        </p>
        <Button text={HOME_BUTTON} className="yellow" />
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
    .red {
      color: ${COLORS.red};
      font-size: 20px;
      font-weight: bold;
    }
    .border {
      border-bottom: solid 3px ${COLORS.red};
      padding-bottom: 2px;
    }
  }
  .Button {
    margin-top: 20px;
  }
`;
