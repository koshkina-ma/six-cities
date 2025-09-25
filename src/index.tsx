import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
//import {Setting} from './const'; //нужно ли мне?

//в демонстрации у него прямо тут сделано перечисление,
//а не создан отдельный файл констант 23.12

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      errorsCount = {Setting.ErrorsCount} //что я передаю в итоге?
    />
  </React.StrictMode>
);
