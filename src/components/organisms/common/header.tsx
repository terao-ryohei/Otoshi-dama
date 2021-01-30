/* eslint-disable react/prefer-stateless-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/otoshi-dama.png';
import { GlobalNav } from './g-nav';
import { max, min } from '../../../style';
import Footer from './footer';
import { PAGES } from '../../../constants/pages';

class Header extends Component {
  constructor(props: never) {
    super(props);
  }

  render() {
    return (
      <>
        <div css={style} className="Header">
          <div className="logo">
            <Link to={PAGES.HOME}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="g-nav">
            <GlobalNav />
          </div>
        </div>
        <Footer>{this.props.children}</Footer>
      </>
    );
  }
}

export default Header;

const style = css`
  display: flex;
  display: -webkit-flex;
  ${max('sp')} {
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    .logo {
      width: 40%;
    }
    .g-nav {
      flex-grow: 1;
      width: 100%;
    }
  }
  ${min('sp')} {
    .logo {
      width: 30%;
    }
    .g-nav {
      flex-grow: 1;
      width: 100%;
    }
  }
`;
