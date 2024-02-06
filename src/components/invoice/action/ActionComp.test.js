/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import ActionComp from './ActionComp';

describe('should render product component', () => {
  it('should render html div elment', () => {
    const { getByTestId } = render(<ActionComp />);
    const htmlElement = getByTestId('invoiceAction');
    expect(htmlElement).toBeTruthy();
  });

  it('should render componet text', () => {
    const { getByTestId } = render(<ActionComp />);
    const htmlDiv = getByTestId('compText');
    expect(htmlDiv).toBeTruthy();
  });

  it('should render onboarding carousel', () => {
    const { getByTestId } = render(<ActionComp />);
    const htmlButton = getByTestId('actionBtn');
    expect(htmlButton).toBeTruthy();
  });
});
