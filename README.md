# Bareksa Technical Test

## Objective

### Git Understanding
This project created with github as versioning tools, basic command of git was used for this such as git add, commit, push, branching, etc. I also use **github actions and workflow for automatic deployment**.

### ReactJS framework
The project created using React js as main framework. There are also additional dependencies such as Highcharts to generate pie, and area chart, antdesign/icon for some icons, and react-calendar to generate calendar picker.

### Clean Code
The code is created with up-to-date **React Hooks Component**. Project directory was made in such a way so that maintainability will be easier. There are several **levels of component: Pages, Layouts, and Components**.

### Data and Page displayed
Data was obtained via request-response to specified API. To generate charts and tables, the data was being manipulated to be fit with each charts and tables component. Displayed page was made to be **exactly the same with the UI design** that was provided. Although there are some difference specifically in Area chart and calendar component because of library limitation and time constraint.

### Page Responsiveness
The page was developed to be **responsive in all devices** in mind. There are layout adjustment to make it fit with tab and mobile devices. The content which are horizontally aligned in desktop, was made to be vertically aligned below 1020px device width (tab and mobile device).

### Unit test
This project also developed also with **unit and component testing** environment. The library used for this purpose is Jest and Enzyme. Testing coverage report can be accessed here https://bareksa-technical-test.foreach.id/coverage/lcov-report/index.html.


## Requirements

### ReactJS and Github
This project **using React.js** as main library and **Github** as versioning tools.

### Webpack
This project also **using webpack**. Webpack configuration for production stage can be found in webpack.prod.js.

### Responsive Page
To check the page responsiveness, you can change browser size. The project was made to be **layout-responsive** for all device including tab and mobile.

### Deploy
The project is deployed into https://bareksa-technical-test.foreach.id. **Deployment was made to be automated using github actions and workflows**. The domain was also secured (using https). Also using **Cloudflare as Content Delivery Network (CDN)**.

Kindly check this website for demo: https://bareksa-technical-test.foreach.id