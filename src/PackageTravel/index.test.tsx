import React from 'react';
import { Provider } from 'react-redux';
import { PackageTravel } from './';
import { render, fireEvent, screen } from '@testing-library/react';
import { combineReducers, createStore } from 'redux';
import packageTravelReducer from './useCases';
import '@testing-library/jest-dom';

const rootReducer = combineReducers({
  packageTravel: packageTravelReducer,
});

const store = createStore(rootReducer);

describe('Package Travel', () => {
  test('should add a new item in the package travel when is executed addItemToPackageTravel reducer', async () => {
    render(
      <Provider store={store}>
        <PackageTravel />
      </Provider>
    );
  });

  test('should remove an item in the package travel when is clicked the remove button', async () => {
    render(
      <Provider store={store}>
        <PackageTravel />
      </Provider>
    );
    // TODO: store.getState() is an implementation detail,
    // and the test should not have these kind of code
    // because is better to use another approach to avoid these implementation
    // details in the tests
    const { packageTravel } = store.getState();
    expect(packageTravel.puzzlePieces.length).toBe(1);
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);
    const { packageTravel: packageTravelAfter } = store.getState();
    expect(packageTravelAfter.puzzlePieces.length).toBe(0);
  });
});
