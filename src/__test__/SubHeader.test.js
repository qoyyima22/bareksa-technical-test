import React from 'react'
import { shallow } from 'enzyme';
import SubHeader from '../components/SubHeader'

it("renders without crashing", () => {
    shallow(<SubHeader />);
});
it("renders Today's date", () => {
  const wrapper = shallow(<SubHeader />);
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
  expect(wrapper.contains(formattedDate)).toEqual(true);
});