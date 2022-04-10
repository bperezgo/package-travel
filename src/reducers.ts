import { combineReducers } from 'redux';
import packageTravelReducer from './PackageTravel/data/packageTravelSlice';

const rootReducer = combineReducers({
  packageTravel: packageTravelReducer,
});
export default rootReducer;
