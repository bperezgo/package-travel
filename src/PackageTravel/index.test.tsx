import React from 'react';
import { Provider } from 'react-redux';
import { PackageTravel } from './';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { combineReducers, createStore } from 'redux';
import packageTravelReducer from './useCases';
import '@testing-library/jest-dom';

const rootReducer = combineReducers({
  packageTravel: packageTravelReducer,
});

const store = createStore(rootReducer);

describe('Package Travel', () => {
  test('should', async () => {
    render(
      <Provider store={store}>
        <PackageTravel />
      </Provider>
    );
  });
});
