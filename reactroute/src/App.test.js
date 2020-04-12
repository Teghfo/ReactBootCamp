import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
/// react-test-renderer    jest-dom  Enzyme
20
test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  // const linkElement = getByText(/Mapsa/i);
  const linkElement = getByTestId('mapsaTest');
  const linkElement1 = getByTestId('mapsaTest1');
  expect(linkElement).toHaveTextContent('Mapsa');
  expect(linkElement1).toHaveTextContent('Mapsa1');
});
