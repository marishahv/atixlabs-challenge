import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App', () => {
  test('renders header correctly', () => {
    render(<App />);

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  });

  test('renders title correctly', () => {
    render(<App />);
    expect(screen.getByTestId('title')).toBeInTheDocument()
  });

  test('On NavLink click should navigate corectly', async () => {
    render(<App />)

    const user = userEvent.setup()

    await user.click(screen.getByText(/home/i))
    expect(screen.getByTestId('upload-button')).toBeInTheDocument()

    await user.click(screen.getByText(/images/i))
    expect(screen.getByTestId('images-page')).toBeInTheDocument()

    await user.click(screen.getByText(/sheets/i))
    expect(screen.getByTestId('sheets-page')).toBeInTheDocument()
  });
})
