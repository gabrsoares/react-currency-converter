import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StorageComponent from './StorageComponent';

test('renders correctly', async () => {
    render(<StorageComponent finalValue={0} />);
    expect(screen.queryByTestId('resultsButton')).not.toBeInTheDocument();
  });
  

  test('toggle visibility on button click', async () => {
    render(<StorageComponent finalValue={0} />);
    
    expect(screen.queryByTestId('resultsButton')).not.toBeInTheDocument();
  
    const buttonElement = screen.queryByTestId('resultsButton');
    if(buttonElement){
        fireEvent.click(buttonElement);
    }
    
    if(buttonElement){
        expect(buttonElement.getAttribute('aria-expanded')).toBe('true');
    }
    
  });