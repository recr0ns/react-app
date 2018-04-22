import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore(initialState, context={}) {
    const sagaMiddleware = createSagaMiddleware()
    
    const reducers = combineReducers({
        facebook: rootReducer,
        routing: routerReducer
    })

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(
            sagaMiddleware,
            createLogger()
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}