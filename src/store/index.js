import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import reducer from '../reducers';

// Apply middleware for createStore
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line
  //   window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 }) // eslint-disable-line
);

export default store;
