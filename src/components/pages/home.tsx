import { css } from '@emotion/react';
import React from 'react';
import Granpa from '../../assets/grandpa.jpg';
import { COLORS, min } from '../../style';

export function Home(): React.ReactElement {
  return (
    <div css={style} className="Home">
      <div className="banner">
        <img src={Granpa} alt="" />
      </div>
      <div className="explain">
        <div className="colmun">
          <h1 className="text">お年玉もリモートへ</h1>
          <p className="text">
            コロナ禍が騒がれる今、家族に会うのも一苦労...
            <br />
            そんな時代でも大切なお孫さんにイベントぐらいは楽しんでもらいたい
            <br />
            現金を郵送するのは味気ないけど、何を送ればいいのか分からない
            <br />
            そんなあなたの代わりに私たちが心を込めてお年玉をお届けします
          </p>
        </div>
        <div className="colmun">
          <h1 className="text">選べる、選んでもらえるお年玉</h1>
          <p className="text">
            3種類のお年玉から選んでお送りすることができます
            <br />
            選んで送っていただくこともできますし、送ってからお孫さんや親御さんに選んでもらう事もできます
            <br />
            選んでもらう場合でもしっかり説明書きを同封するのでお孫さんのご家族に迷惑をかける事はありません
          </p>
        </div>
      </div>
      <div className="contract">
        <h1 className="text">お年玉で想いを届けよう</h1>
        <p className="text">
          <span className="red">12/31 </span>までのお申し込みで
          <span className="red-border"> 1/1 </span>
          に届くように手配できます
        </p>
        <button type="button">お申し込みはコチラ</button>
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  .banner {
    margin-bottom: 20px;
  }
  .text {
    font-family: 'Yu Gothic Medium', '游ゴシック Medium', YuGothic,
      '游ゴシック体', 'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
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
