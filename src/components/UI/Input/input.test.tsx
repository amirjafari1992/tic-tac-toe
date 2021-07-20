import { render } from '@testing-library/react';

import { Input } from '.';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
  });
  it('props work', () => {
    const input = <Input name="test" />;
    expect(input.props.name).toBe('test');
  });
});
