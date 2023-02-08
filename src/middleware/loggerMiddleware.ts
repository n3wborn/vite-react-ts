import store from "../store";

const loggerMiddleware = (store) => (next) => (action) => {
    // do something
    console.log(store, action)

    // send this somewhere else
    next(action)
}

export default loggerMiddleware(store)
