import React from 'react';
import { render, screen } from '@testing-library/react';
import SecondCurrency from './SecondCurrency';
import ConversionProvider from '../../ConversionContext';

test('renders correctly', () => {
    const currency = ['USD', 'EUR'];
    const currencyRate = [1.2, 1.5];
    const setSecondCurrencyValue = jest.fn();
  
    render(
      <ConversionProvider>
        <SecondCurrency
            currency={currency}
            currencyRate={currencyRate}
            setSecondCurrencyValue={setSecondCurrencyValue}
        />
      </ConversionProvider>
      
    );
  
    // Verifica se o elemento select está presente na tela usando data-testid
    expect(screen.queryByTestId('secondCurrency')).toBeInTheDocument();

  });
  