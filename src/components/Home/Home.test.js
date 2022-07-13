import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  test('renders correctly', () => {
    render(<Home />);

    expect(screen.getByTestId('upload-button')).toBeInTheDocument()
  });

  test('uploads file', async() => {
    render(<Home />)

    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const inputFile = screen.getByTestId('upload-file-input');

    fireEvent.change(inputFile, {
      target: { files: [fakeFile] },
    })

    await waitFor(() => {
      expect(inputFile.files[0].name).toEqual('hello.png');
    });
  });
})
