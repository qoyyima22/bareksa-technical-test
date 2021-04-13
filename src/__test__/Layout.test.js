import React from 'react'
import { shallow } from 'enzyme';
import Layout from '../layout/Layout'

it("renders without crashing", () => {
    shallow(<Layout />);
});