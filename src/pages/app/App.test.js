import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders the app with a button, a quote and an image', () => {
  render(<App />);

  const textEl = screen.getByText(/quote/);
  const buttonEl = screen.getByRole('button')
  const imageEl = screen.getByRole('img')

  expect(textEl).toBeInTheDocument()
  expect(buttonEl).toBeInTheDocument()
  expect(imageEl).toBeInTheDocument()
});
