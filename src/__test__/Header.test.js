import React from 'react'
import { shallow } from 'enzyme';
import Header from '../components/Header'
import { BellOutlined } from '@ant-design/icons';

it("renders without crashing", () => {
    shallow(<Header />);
});
it("renders User Name", () => {
  const wrapper = shallow(<Header />);
  const name = "Reinhart H.";
  expect(wrapper.contains(name)).toEqual(true);
});
it("renders User Location", () => {
    const wrapper = shallow(<Header />);
    const location = "Kemang, Jakarta";
    expect(wrapper.contains(location)).toEqual(true);
});
it("renders search input", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('input').exists()).toBeTruthy();
});
it("renders notif icon", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<BellOutlined />)).toBeTruthy();
});