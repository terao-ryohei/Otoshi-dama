import { css } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/organisms/common/header';
import { About } from './components/pages/about';
import { Contact } from './components/pages/contact';
import { Home } from './components/pages/home';
import { Serivce } from './components/pages/service';
import { PAGES } from './constants/pages';

function App(): React.ReactElement {
  return (
    <div css={style} className="main">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header>
          <Switch>
            <Route exact path={PAGES.HOME} component={Home} />
            <Route exact path={PAGES.ABOUT} component={About} />
            <Route exact path={PAGES.SERIVCE} component={Serivce} />
            <Route exact path={PAGES.CONTACT} component={Contact} />
          </Switch>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;

const style = css`
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 360px;
`;
