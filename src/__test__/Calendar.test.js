import React from 'react'
import { shallow, mount } from 'enzyme';
import Calendar from '../components/Calendar'
import RCalendar from "react-calendar"

it("renders without crashing", () => {
    shallow(<Calendar />);
});
it("renders pie calendar", () => {
    const wrapper = mount(<Calendar />);
    setTimeout(() => {
        expect(wrapper.contains(<RCalendar />)).toEqual(true);
        expect(wrapper.find('.react-calendar').exists()).toBeTruthy()
    }, 2500);
});
it("renders cancel button ", () => {
    const wrapper = shallow(<Calendar />);
    const tR = "Cancel";
    expect(wrapper.contains(tR)).toBeTruthy();
});
it("renders filter button ", () => {
    const wrapper = shallow(<Calendar />);
    const tR = "Filter";
    expect(wrapper.contains(tR)).toBeTruthy();
});