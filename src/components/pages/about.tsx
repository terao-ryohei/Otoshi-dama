import { css } from '@emotion/react';
import React from 'react';
import { COLORS, min } from '../../style';

export function About(): React.ReactElement {
  return (
    <div css={style} className="About">
      <div className="head">
        <h1 className="text">選べる三つのお年玉</h1>
        <p className="text">
          さまざまな形でお年玉を利用できるように三種類のお年玉を用意しました
          <br />
          使って欲しい用途などのご希望に合わせてご選択ください
        </p>
      </div>
      <div className="explain">
        <div className="colmun">
          <h2 className="text">・Amazon（アマゾン）ギフト券</h2>
          <p className="text">
            最大手通販サイトのAmazonで使えるギフト券を贈るプランです
            <br />
            多くの商品から選べるため買うものを自由に選んでもらいたい時にオススメです
            <br />
            金額は三種類から選べます
          </p>
          <p className="link">
            詳細は
            <a href="https://www.amazon.co.jp/Amazon-VariableDenomination-Amazon%E3%82%AE%E3%83%95%E3%83%88%E5%88%B8-%E5%95%86%E5%93%81%E5%88%B8%E3%82%BF%E3%82%A4%E3%83%97-%E9%87%91%E9%A1%8D%E8%87%AA%E7%94%B1%E8%A8%AD%E5%AE%9A/dp/B07BYFCVJP/ref=lp_6111481051_1_1">
              コチラ
            </a>
          </p>
        </div>
        <div className="colmun">
          <h2 className="text">・図書カード</h2>
          <p className="text">
            全国の書店等で利用できるカードです
            <br />
            読書が好きなお孫さんや家族がいる方にオススメです
            <br />
            金額は二種類から選べます
          </p>
          <p className="link">
            詳細は<a href="https://www.toshocard.com/bookstore/">コチラ</a>
          </p>
        </div>
        <div className="colmun">
          <h2 className="text">・QUO（クオ）カード</h2>
          <p className="text">
            全国約6万店舗で利用できるカードです
            <br />
            お食事からファッションまでさまざまな場面で利用できます
            <br />
            金額は二種類から選べます
          </p>
          <p className="link">
            詳細は<a href="https://www.quocard.com/about/">コチラ</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const style = css`
  width: 100%;
  .text {
    font-family: 'Yu Gothic Medium', '游ゴシック Medium', YuGothic,
      '游ゴシック体', 'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
  }
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
