import { render, screen } from '@testing-library/react';
import Images from './Images';

describe('Images', () => {
  test('renders correctly', () => {
    render(<Images />)
    expect(screen.getByTestId('images-page')).toBeInTheDocument()
  });
})
