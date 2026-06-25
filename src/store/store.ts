
import { combineReducers, createStore } from "redux";
import { dataReducer } from "./reducers/dataReducer";
import { settingReducer } from "./reducers/settingReducer";

const rootReducer = combineReducers({
    dataReducer: dataReducer,
    setting: settingReducer
})

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>