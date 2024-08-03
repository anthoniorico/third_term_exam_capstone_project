import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../src/components/SearchBar';

describe('SearchBar Component', () => {
  test('renders without crashing', () => {
    render(<SearchBar searchQuery="" setSearchQuery={() => {}} />);
    expect(screen.getByPlaceholderText('Search hospitals...')).toBeInTheDocument();
  });

  test('handles input change correctly', () => {
    const setSearchQuery = jest.fn();
    render(<SearchBar searchQuery="" setSearchQuery={setSearchQuery} />);
    const input = screen.getByPlaceholderText('Search hospitals...');

    fireEvent.change(input, { target: { value: 'new search' } });
    expect(setSearchQuery).toHaveBeenCalledWith('new search');
  });
});