import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import GuestReducer from '../reducers/guest';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    GuestReducer,
    window.devToolsExtension && window.devToolsExtension()
  );

ReactDOM.render(
<Provider store={store}>    
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
