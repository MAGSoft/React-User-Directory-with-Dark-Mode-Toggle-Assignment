import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DataTable from './DataTable';

const mockData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders loading state initially', () => {
  render(<DataTable />);
  expect(screen.getByText('Loading data...')).toBeInTheDocument();
});

test('renders data in a table after fetching', async () => {
  render(<DataTable />);
  await waitFor(() => screen.getByText('John Doe'));

  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();
});

test('renders error message when data fetching fails', async () => {
  global.fetch.mockResolvedValue({ ok: false });
  render(<DataTable />);
  await waitFor(() => screen.getByText(/error/i));
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});
