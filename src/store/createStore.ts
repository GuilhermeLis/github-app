import {
    createStore, compose, applyMiddleware,StoreEnhancer
  } from 'redux';
  
  export default (reducers: any, middlewares: any[]) => {
    const enhancer: StoreEnhancer <unknown, unknown> | undefined = '__DEV__'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);
  
    return createStore(reducers, enhancer);
  };

