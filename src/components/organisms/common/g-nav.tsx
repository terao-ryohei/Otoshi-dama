import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailIcon from '@material-ui/icons/Mail';
import { SvgIcon } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { max, min, COLORS } from '../../../style';

export function GlobalNav(): React.ReactElement {
  const location = useLocation();
  const [select, setSelect] = useState(location.pathname);

  useEffect(() => {
    setSelect(location.pathname);
  }, [location.pathname]);

  return (
    <div css={style} className="GlobalNav">
      <ul className="navWrap">
        <li className={`${select === '/' && 'select'}`}>
          <Link to="/">
            <SvgIcon className="icon" component={HomeIcon} fontSize="large" />
            <span>ホーム</span>
          </Link>
        </li>
        <li className={`${select === '/about' && 'select'}`}>
          <Link to="/about">
            <SvgIcon className="icon" component={ChatIcon} fontSize="large" />
            <span>サービス</span>
          </Link>
        </li>
        <li className={`${select === '/service' && 'select'}`}>
          <Link to="/service">
            <SvgIcon
              className="icon"
              component={FavoriteIcon}
              fontSize="large"
            />
            <span>お申し込み</span>
          </Link>
        </li>

        <li className={`${select === '/contact' && 'select'}`}>
          <Link to="/contact">
            <SvgIcon className="icon" component={MailIcon} fontSize="large" />
            <span>ご質問</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

const style = css`
  width: 100%;
  .navWrap {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    padding: 5px 0;
    li {
      cursor: pointer;
      ${min('sp')} {
        :after {
          padding: 0 5px;
          content: '/';
        }
        &:last-of-type:after {
          content: '';
        }
        .icon {
          display: none;
        }
        &.select {
          a {
            color: ${COLORS.green};
            border-bottom: solid 1px ${COLORS.green};
            padding-bottom: 2px;
          }
        }
      }
      ${max('sp')} {
        border-top: 1px ${COLORS.green} solid;
        border-bottom: 1px ${COLORS.green} solid;
        background-color: ${COLORS.lightGreen};
        padding: 5px 10px;
        flex: 1;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-align-items: center;
        align-items: center;
        text-align: center;
        &.select {
          background-color: ${COLORS.green};
          a {
            color: ${COLORS.white};
          }
        }
        span {
          font-family: MV Boil;
          display: block;
        }
        .icon {
          width: 100%;
          display: block;
        }
      }
    }
  }
`;
