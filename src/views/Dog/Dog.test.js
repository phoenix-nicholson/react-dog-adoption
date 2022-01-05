import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Dog from './Dog';

test('renders dogDetails', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/10']}>
      <Route path="/dogs/:id" component={Dog} />
    </MemoryRouter>
  );

  await screen.findByText('Barton');
  expect(container).toMatchSnapshot();
});
