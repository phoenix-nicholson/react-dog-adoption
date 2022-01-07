import { render } from '@testing-library/react';
import Admin from './Admin';

test('renders Admin page', () => {
  const container = render(<Admin />);
  expect(container).toMatchSnapshot();
});
