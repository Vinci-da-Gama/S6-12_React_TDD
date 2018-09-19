import React from 'react';
import { shallow } from 'enzyme';

import LivingExpenseDashboard from '../../src/containers/pages/expeDashboard';

test('should render dashboard correctly.', () => {
    const wrapper = shallow(<LivingExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
});
