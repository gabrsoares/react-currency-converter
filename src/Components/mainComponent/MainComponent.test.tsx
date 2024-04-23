import { render, screen, fireEvent } from '@testing-library/react';
import MainComponent from './MainComponent';
import { act } from 'react-dom/test-utils';

test('renders MainComponent correctly', async () => {
  const mockApi = {
    rates: {
      USD: 1.2,
      EUR: 1.5,
    },
  };

  const response = new Response(JSON.stringify(mockApi));

  jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
    Promise.resolve(response)
  );

  await act(async () => {
    render(<MainComponent />);
  });

  expect(screen.getByTestId('main-component')).toBeInTheDocument();
  expect(screen.getByText('Conversão de valores')).toBeInTheDocument();
  expect(screen.getByText('Converter')).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith("http://data.fixer.io/api/latest?access_key=28de673aed819346e5898b32c3cedcd1");
  expect(global.fetch).toHaveBeenCalledTimes(1);

  // Redefinir a implementação original do fetch após o teste
  global.fetch = jest.fn();

});

test('handles click event correctly', async () => {
  const mockApi = {
    rates: {
      USD: 1.2,
      EUR: 1.5,
    },
  };

  const response = new Response(JSON.stringify(mockApi));

  jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
    Promise.resolve(response)
  );

  await act(async () => {
    render(<MainComponent />);
  });

  // Redefinir a implementação original do fetch após o teste
  global.fetch = jest.fn();
});
