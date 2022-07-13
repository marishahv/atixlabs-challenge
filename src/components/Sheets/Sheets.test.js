import { render, screen } from '@testing-library/react';
import Sheets from './Sheets';

describe('Sheets', () => {
  test('renders correctly', () => {
    render(<Sheets />)
    expect(screen.getByTestId('sheets-page')).toBeInTheDocument()
  });
})
