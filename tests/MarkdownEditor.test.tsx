import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MarkdownEditor from '../src/components/MarkdownEditor';

describe('MarkdownEditor Component', () => {
  test('renders without crashing', () => {
    render(<MarkdownEditor value="" onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('handles input change correctly', () => {
    const handleChange = jest.fn();
    render(<MarkdownEditor value="test" onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'new text' } });
    expect(handleChange).toHaveBeenCalledWith('new text');
  });
});