import { combineReducers } from 'redux';
import packageTravelReducer from './PackageTravel/useCases';
import itemListReducer from './Items/useCases';
import itemSelectedReducer from './ItemSelected/useCases';

const rootReducer = combineReducers({
  packageTravel: packageTravelReducer,
  itemList: itemListReducer,
  itemSelected: itemSelectedReducer,
});
export default rootReducer;
