import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
  test('renders header correctly', () => {
    render(<Header />, {wrapper: BrowserRouter})
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  });
})