 
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(rootReducer, bindMiddleware([sagaMiddleware])),
    runSaga: sagaMiddleware.run(rootSaga)
  }
};

export default configureStore();