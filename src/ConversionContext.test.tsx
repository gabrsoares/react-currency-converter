import React from 'react';
import { render, fireEvent, act, renderHook } from '@testing-library/react';
import { ConversionContext, useConversion } from './ConversionContext';


describe('ConversionContext', () => {
    test('provides the correct initial value', () => {
      let valueFromContext;
  
      const TestComponent = () => {
        const context = useConversion();
        valueFromContext = context?.value;
        return null;
      };
  
      render(
        <ConversionContext.Provider value={{ value: 10, changeValue: jest.fn() }}>
          <TestComponent />
        </ConversionContext.Provider>
      );
  
      expect(valueFromContext).toBe(10);
    });
  
    test('calls changeValue correctly', () => {
      const changeValueMock = jest.fn();
  
      render(
        <ConversionContext.Provider value={{ value: 10, changeValue: changeValueMock }}>
          <div />
        </ConversionContext.Provider>
      );
  
      act(() => {
        changeValueMock(20);
      });
  
      expect(changeValueMock).toHaveBeenCalledWith(20);
    });
  });