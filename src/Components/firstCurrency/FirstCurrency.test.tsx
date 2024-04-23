import { render, screen, fireEvent } from '@testing-library/react';
import FirstCurrency from './FirstCurrency';
import ConversionProvider from '../../ConversionContext';

test('renders correctly', () => {
  const currency = ['USD', 'EUR'];
  const currencyRate = [1.2, 1.5];
  const setMoneyValue = jest.fn();
  const setFirstCurrencyValue = jest.fn();

  render(
    <ConversionProvider>
      <FirstCurrency
        currency={currency}
        currencyRate={currencyRate}
        setMoneyValue={setMoneyValue}
        setFirstCurrencyValue={setFirstCurrencyValue}
      />
    </ConversionProvider>
  );

  expect(screen.queryByTestId('moneyValue')).toBeInTheDocument();
  expect(screen.queryByTestId('currencySelector')).toBeInTheDocument();
});
