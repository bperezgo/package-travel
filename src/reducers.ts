import { combineReducers } from 'redux';
import packageTravelReducer from './PackageTravel/useCases';
import itemListReducer from './Items/useCases';

const rootReducer = combineReducers({
  packageTravel: packageTravelReducer,
  itemList: itemListReducer,
});
export default rootReducer;
