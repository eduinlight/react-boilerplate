import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import IssueLink from '../IssueLink';

const renderComponent = (props = {}) => {
  const text = 'Test';
  const utils = render(<IssueLink {...props}>{text}</IssueLink>);
  const element = utils.queryByText(text);
  return { ...utils, element };
};

describe('<IssueLink />', () => {
  it('should match the snapshot', () => {
    const { element } = renderComponent();
    expect(element).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const { element } = renderComponent();
    expect(element).toHaveAttribute('class');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { element } = renderComponent({ id });
    expect(element).toHaveAttribute('id', id);
  });

  it('should not adopt an invalid attribute', () => {
    const { element } = renderComponent({ attribute: 'test' });
    expect(element).not.toHaveAttribute('attribute');
  });
});
