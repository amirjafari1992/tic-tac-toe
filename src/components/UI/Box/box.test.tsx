import { render } from '@testing-library/react';

import Box from '.';

describe('Box', () => {
  it('Renders without crashing', () => {
    render(<Box>test</Box>);
  });
  it('Props work', () => {
    const box = <Box center></Box>;
    expect(box.props.center).toBe(true);
  });
});
