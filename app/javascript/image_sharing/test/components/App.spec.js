/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import App from '../../components/App';

describe('<App />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<App />);
    assert(wrapper.contains('Tell us what you think'));
  });

  it('should render a form', () => {
    const wrapper = mount(<App />);
    const form = wrapper.find('Form');
    assert.strictEqual(form.length, 1);
    assert.strictEqual(form.find('Input').length, 2);
  });

  it('should render a footer', () => {
    const wrapper = mount(<App />);
    const footer = wrapper.find('footer');
    assert.strictEqual(footer.length, 1);
    assert.strictEqual(footer.text(), 'Copyright: Appfolio Inc. Onboarding');
  });
});
