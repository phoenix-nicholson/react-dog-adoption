import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dogs from './Dogs';

test('should render a list of dogs', async () => {
  const { container } = render(
    <MemoryRouter>
      <Dogs />
    </MemoryRouter>
  );
  await screen.findByText('Meet Barton');
  expect(container).toMatchSnapshot();
});
//fixing pull requests
