import { css } from '@emotion/react';
import React from 'react';
import { COLORS } from '../../style';

export function Contact(): React.ReactElement {
  return (
    <div css={style} className="Contact">
      <div className="head">
        <h1 className="text">お問い合わせ</h1>
      </div>
      <div className="form">
        <p>お名前</p>
        <input type="text" />
      </div>
      <div className="form">
        <p>お問い合わせ内容</p>
        <textarea />
      </div>
      <div className="warn">
        <p>※対応時間は平日10:00~19:00となります</p>
        <p>※返答にお時間をいただく場合がございます</p>
      </div>
      <div className="buttonWrap">
        <button className="text" type="button">
          申し込む
        </button>
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
  .warn {
    font-size: 16px;
    color: ${COLORS.gray};
    margin-bottom: 10px;
  }
  .head {
    margin-bottom: 20px;
  }
  .buttonWrap {
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
      font-size: 18px;
      font-weight: bold;
    }
  }
  .form {
    margin: 20px 0;
    p {
      display: block;
      margin-top: 10px;
      font-size: 18px;
    }
    input {
      border: solid 1px ${COLORS.gray};
    }
    textarea {
      border: solid 1px ${COLORS.gray};
      background-color: #eff6e4;
      display: block;
      font-size: 16px;
      padding: 0 40px 0 16px;
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      min-height: 200px;
      cursor: pointer;
    }
  }
`;
