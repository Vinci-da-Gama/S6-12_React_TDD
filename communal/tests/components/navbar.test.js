import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import NavbarCompo from '../../src/components/navbar';

test('should render navbar correctly.', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<NavbarCompo />);
    // expect(renderer.getRenderOutput()).toMatchInlineSnapshot();
    const wrapper = shallow(<NavbarCompo />);
    expect(wrapper).toMatchSnapshot();
});
