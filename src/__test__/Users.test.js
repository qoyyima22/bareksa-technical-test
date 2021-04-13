import React from 'react'
import { shallow, mount } from 'enzyme';
import Users from '../components/Users'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from "highcharts"

it("renders without crashing", () => {
    shallow(<Users />);
});
it("renders component's title", () => {
  const wrapper = shallow(<Users />);
  const title = "Users";
  expect(wrapper.contains(title)).toEqual(true);
});
it("renders pie chart", () => {
    const wrapper = mount(<Users data={{
        "risk_averse": "364",
        "conservative": "603",
        "moderate": "311",
        "risk_taker": "718"
    }} />);
    setTimeout(() => {
        expect(wrapper.contains(<HighchartsReact />)).toEqual(true);
        expect(wrapper.contains(<Highcharts />)).toEqual(true);
        expect(wrapper.find('.highcharts-container').exists()).toBeTruthy()
    }, 2500);
});
it("renders top right button ", () => {
    const wrapper = shallow(<Users />);
    const button = "…";
    expect(wrapper.contains(button)).toBeTruthy();
});