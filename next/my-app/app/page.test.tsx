import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
// import userEvent from '@testing-library/user-event';
import Home from './page';

test('Home page test', async () => {
  // const user = userEvent.setup();
  // const f = vi.fn();
  render(await Home());

  expect(screen.getByText(/Global Page/)).toBeInTheDocument();
});
