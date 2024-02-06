/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import ProductComponent from './productComponent';

describe('should render product component', () => {
  it('should render html div elment', () => {
    const { getByTestId } = render(<ProductComponent />);
    const htmlElement = getByTestId('outerDiv');
    expect(htmlElement).toBeTruthy();
  });
});
