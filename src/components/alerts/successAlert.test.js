/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import SuccessAlert from './successAlert';

describe('should render successaAlert component', () => {
  it('should render h2 tag', () => {
    const { getByTestId } = render(<SuccessAlert />);
    const h2 = getByTestId('heading');
    expect(h2).toBeTruthy();
  });
  it('should render resend button', () => {
    const { getByRole } = render(<SuccessAlert />);
    const button = getByRole('resend');
    expect(button).toBeTruthy();
  });
  it('shouls show try another way', () => {
    const { getByTestId } = render(<SuccessAlert />);
    const divElement = getByTestId('try');
    expect(divElement).toBeTruthy();
  });
});
