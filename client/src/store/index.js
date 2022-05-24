import { legacy_createStore as createStore} from 'redux' //xq createStore figura deprecada 
import { applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from "../reducer";






export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))