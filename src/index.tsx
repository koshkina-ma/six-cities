import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { App } from './components';
import { Setting } from './const';
import { mockOffers } from './mocks/offers';
import { mockComments } from './mocks/comments';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offersCount = {Setting.OffersCount}
        offers = {mockOffers}
        comments = {mockComments}
      />
    </Provider>
  </React.StrictMode>,
);
