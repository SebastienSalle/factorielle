import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';
import factorisator from '../factoriser';


describe('App tests', () => {
  test('should render the input', () => {
    render(<App />);
    const input = screen.getByTestId('main-input');

    expect(input).toBeInTheDocument();
  });

  test('should display nothing when launch', () => {
    render(<App />);
    const output = screen.getByTestId('output-value');
    
    const value = output.textContent;
    
    expect(value).toBe(`${factorisator(0)}`);
  });

//   test('should not go under 0', async () => {
//     render(<App />);
//     const input = screen.getByTestId('main-input');
// //    input.value = 0;
//     console.log('input2',input.value);
//     const output = await screen.findByTestId('output-value');
//     const value = input.textContent;

//     expect(output.textContent).toEqual('0');
//   });

});
