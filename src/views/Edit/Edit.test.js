import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import DogEdit from './Edit';

test('renders edit form', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/4/edit']}>
      <Route path="/dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Luna');
  expect(container).toMatchSnapshot();
});
