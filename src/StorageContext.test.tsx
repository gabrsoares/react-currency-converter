import React from 'react';
import { render } from '@testing-library/react';
import { StorageContext, useStorage } from './StorageContext';

interface StorageContextValue {
  value: string[];
  storageValue: (newValue: string) => void;
}

const MockComponent: React.FC = () => {
  const storage = useStorage();
  return (
    <div>
      <p>Storage Value: {JSON.stringify(storage?.value)}</p>
    </div>
  );
};

test('renders correctly with storage context', () => {
  const storageValue: StorageContextValue = {
    value: ['value1', 'value2'],
    storageValue: jest.fn(),
  };

  const { getByText } = render(
    <StorageContext.Provider value={storageValue}>
      <MockComponent />
    </StorageContext.Provider>
  );

  expect(getByText(/Storage Value:/i)).toBeInTheDocument();
  expect(getByText(/value1/i)).toBeInTheDocument();
  expect(getByText(/value2/i)).toBeInTheDocument();
});
