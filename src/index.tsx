import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './app/App';
// import GradientText from './components/gradient-text/GradientText';
import { store } from './store/store';
import * as serviceWorker from './serviceWorker';
import MainApp from './components/main-app/MainApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <MainApp />
      {/* <GradientText text="React with Tailwind CSS, Redux and TypeScript" /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
