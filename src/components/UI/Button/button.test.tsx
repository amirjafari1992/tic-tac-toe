import { render } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>test</Button>);
  });
  it('props work', () => {
    const button = <Button fullSize></Button>;
    expect(button.props.fullSize).toBe(true);
  });
});
