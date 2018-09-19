import React from 'react';
import { shallow } from 'enzyme';

import NoFoundCompo from '../../src/components/NoFound';

test('should render NoFound Page correctly.', () => {
    const wrapper = shallow(<NoFoundCompo />);
    expect(wrapper).toMatchSnapshot();
});
