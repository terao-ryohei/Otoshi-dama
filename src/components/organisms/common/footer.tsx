/* eslint-disable react/prefer-stateless-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { css } from '@emotion/react';
import React, { Component } from 'react';
import { FOOTER_TEXT } from '../../../constants/common';
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
          <p>
            <small>
              {FOOTER_TEXT[0]}&copy;{FOOTER_TEXT[1]}
              <br className="sp" />
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
  text-align: center;
  color: ${COLORS.white};
  padding: 23px 0;
  ${max('sp')} {
    display: none;
  }
  ${max('pc', 'tab')} {
    padding-bottom: 66px;
  }
  ${max('tab')} {
    padding-bottom: 41px;
  }
`;
