/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import App from '../../components/App';
import * as helpers from '../../utils/helper';

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

  it('submit should render a success alert', async () => {
    const stub = sinon.stub(helpers, 'post').resolves();
    const wrapper = mount(<App />);
    await wrapper.find('button').simulate('click');
    wrapper.update();
    assert(wrapper.contains('Form submitted successfully'));
    stub.restore();
  });

  it('submit should render a fail alert', () => {
    const stub = sinon.stub(helpers, 'post').rejects();
    const wrapper = mount(<App />);
    wrapper.find('button').simulate('click');
    setTimeout(() => {
      wrapper.update();
      assert(wrapper.contains('Form had an error'));
    });
    stub.restore();
  });
});
