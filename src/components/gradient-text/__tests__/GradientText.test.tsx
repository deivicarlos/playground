import { render } from '@testing-library/react';
import GradientText from '../GradientText';

describe('GradientText', () => {
  const componentText = 'This is a unit test';
  let asFragment: any;
  let getByText: any;

  beforeEach(() => {
    const component = render(<GradientText text={componentText} />);

    asFragment = component.asFragment;
    getByText = component.getByText;
  });

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correct text', () => {
    expect(getByText('This is a unit test')).toBeTruthy();
  });
});
