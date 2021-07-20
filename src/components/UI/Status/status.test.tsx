import { render } from '@testing-library/react';

import Status from '.';

describe('Status', () => {
  it('Renders without crashing', () => {
    render(<Status mode="playing">test</Status>);
  });
  it('Props work', () => {
    const status = <Status mode="winner">test</Status>;
    expect(status.props.mode).toBe('winner');
    expect(status.props.children).toBe('test');
  });
});
