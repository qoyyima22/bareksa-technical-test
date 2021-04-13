import React from 'react'
import { shallow, mount } from 'enzyme';
import Conversion from '../components/Conversion'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from "highcharts"

it("renders without crashing", () => {
    shallow(<Conversion />);
});
it("renders component's title", () => {
  const wrapper = shallow(<Conversion />);
  const title = "Conversion";
  expect(wrapper.contains(title)).toEqual(true);
});
it("renders pie chart", () => {
    const wrapper = mount(<Conversion data={[{
        conversion_item: "Bonds",
        conversion_revenue: "93",
        due_date: "2020-02-03 02:15:24",
        full_name: "Lina Luettgen Jr.",
        location: "Emmetborough, Benin",
        order_id: "62d7763d-78ac-4345-867e-30553c330d2c",
        start_date: "2020-01-03 02:15:24",
        status: "completed",
    }]} />);
    setTimeout(() => {
        expect(wrapper.contains(<HighchartsReact />)).toEqual(true);
        expect(wrapper.contains(<Highcharts />)).toEqual(true);
        expect(wrapper.find('.highcharts-container').exists()).toBeTruthy()
    }, 2500);
});
it("renders top right button ", () => {
    const wrapper = shallow(<Conversion />);
    const button = "…";
    expect(wrapper.contains(button)).toBeTruthy();
});