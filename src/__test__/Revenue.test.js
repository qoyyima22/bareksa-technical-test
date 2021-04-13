import React from 'react'
import { shallow, mount } from 'enzyme';
import Revenue from '../components/Revenue'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from "highcharts"

it("renders without crashing", () => {
    shallow(<Revenue />);
});
it("renders component's title", () => {
  const wrapper = shallow(<Revenue />);
  const title = "Revenue";
  expect(wrapper.contains(title)).toEqual(true);
});
it("renders pie chart", () => {
    const wrapper = mount(<Revenue data={[{
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
it("renders total revenue ", () => {
    const wrapper = shallow(<Revenue />);
    const tR = "Total Revenue";
    expect(wrapper.contains(tR)).toBeTruthy();
});
it("renders revenue increase in percent ", () => {
    const wrapper = shallow(<Revenue />);
    const tR = "%";
    expect(wrapper.contains(tR)).toBeTruthy();
});