/* eslint-disable react/prefer-stateless-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { css } from '@emotion/react';
import React, { Component } from 'react';
import { COLORS, max } from '../../../style';

class Footer extends Component {
  constructor(props: never) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.children}
        <div css={style} className="Footer">
          <p className="text">
            <small>
              Copyright&copy; Ryohei Terao <br className="sp" />
            </small>
          </p>
        </div>
      </>
    );
  }
}

export default Footer;

const style = css`
  background-color: ${COLORS.green};
  margin-top: 64px;
  ${max('sp')} {
    display: none;
  }
  .text {
    color: ${COLORS.white};
    text-align: center;
    padding: 23px 0;
  }
  ${max('pc', 'tab')} {
    margin-bottom: 66px;
  }
  ${max('tab')} {
    margin-bottom: 41px;
  }
`;
