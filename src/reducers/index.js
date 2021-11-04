import { combineReducers} from "redux";
import loadTheBanner from "../reducers/loadBanners";
import loadTheCategory from "./loadCategoryreducer";
import loadTheProvider from './loadServiceProviderReducer'
const DEFAULT_REDUCER = (initstate,action) => {
  return{
    key: "hello there",
  }
}

const rootReducer = combineReducers({
DEFAULT: DEFAULT_REDUCER,
banners:loadTheBanner,
category:loadTheCategory,
provider:loadTheProvider,
});
export default rootReducer;