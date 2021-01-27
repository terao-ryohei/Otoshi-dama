import { css } from '@emotion/react';
import React from 'react';
import {
  SERVICE_CONTRACTOR_TEXT,
  SERVICE_HEADER,
  SERVICE_PAY_VALUE,
  SERVICE_RECEIVER_TEXT,
  SERVICE_SELECT_TEXT,
  SERVICE_TEXT,
  SERVICE_TYPE_VALUE,
} from '../../constants/service';
import { COLORS } from '../../style';
import { SelectList } from '../molecules/select-list';
import { TextFormList } from '../molecules/text-form-list';

export function Serivce(): React.ReactElement {
  // const [type, setType] = useState(SERVICE_TYPE_VALUE[0]);
  // const [pay, setPay] = useState(SERVICE_PAY_VALUE[0]);

  // const typeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setType(event.currentTarget.value);
  // };

  // const payChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setPay(event.currentTarget.value);
  // };

  return (
    <div css={style} className="Serivce">
      <div className="head">
        <h1 className="text">{SERVICE_TEXT}</h1>
      </div>
      <TextFormList header={SERVICE_HEADER[0]} text={SERVICE_CONTRACTOR_TEXT} />
      <TextFormList header={SERVICE_HEADER[1]} text={SERVICE_RECEIVER_TEXT} />
      <div className="form">
        <SelectList
          header={SERVICE_HEADER[2]}
          selectData={[
            {
              header: SERVICE_SELECT_TEXT[0],
              option: SERVICE_TYPE_VALUE,
              defaultChecked: 0,
            },
            {
              header: SERVICE_SELECT_TEXT[1],
              option: SERVICE_PAY_VALUE,
              defaultChecked: 0,
            },
          ]}
        />
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
  p {
    display: block;
    margin-top: 10px;
    font-size: 18px;
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
`;
