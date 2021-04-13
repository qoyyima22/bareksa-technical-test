import React from 'react'
import { mount } from 'enzyme';
import Home from '../pages/Home'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
        {
            "code": 2200,
            "data": {
                "user_category": {
                    "risk_averse": "364",
                    "conservative": "603",
                    "moderate": "311",
                    "risk_taker": "718"
                },
                "orders": [
                    {
                        "order_id": "62d7763d-78ac-4345-867e-30553c330d2c",
                        "start_date": "2020-01-03 02:15:24",
                        "due_date": "2020-02-03 02:15:24",
                        "full_name": "Lina Luettgen Jr.",
                        "location": "Emmetborough, Benin",
                        "status": "completed",
                        "conversion_item": "Bonds",
                        "conversion_revenue": "93"
                    },
                    {
                        "order_id": "81671442-2c2c-4a0e-ae29-3f3e4b558d6f",
                        "start_date": "2020-01-03 11:17:22",
                        "due_date": "2020-02-03 11:17:22",
                        "full_name": "Ally Shields",
                        "location": "North Waldoburgh, Botswana",
                        "status": "canceled",
                        "conversion_item": "Mutualfund",
                        "conversion_revenue": "460"
                    }
                ]
            }
        }
    ),
  })
);

it("renders without crashing", () => {
    mount(<Home />);
});