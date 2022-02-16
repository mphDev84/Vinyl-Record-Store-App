/**The REDUX package provides the createStore function, which sets up a new data store using a reducer. */

import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";


export const SportsStoreDataStore 
    = createStore(ShopReducer);