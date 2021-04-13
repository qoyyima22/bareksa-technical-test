import React from 'react'
import { shallow } from 'enzyme';
import Orders from '../components/Orders'

it("renders without crashing", () => {
    shallow(<Orders />);
});
it("renders component's title", () => {
    const wrapper = shallow(<Orders />);
    const title = "Orders";
    expect(wrapper.contains(title)).toEqual(true);
});
it("renders table", () => {
    const wrapper = shallow(<Orders />);
    expect(wrapper.find('table').exists()).toBeTruthy();
});
it("renders table head", () => {
    const wrapper = shallow(<Orders />);
    expect(wrapper.find('thead').exists()).toBeTruthy();
});
it("renders filter button ", () => {
    const wrapper = shallow(<Orders />);
    expect(wrapper.find('tbody').exists()).toBeTruthy();
});