
![Screenshot](https://github.com/regenhans/countdown/blob/master/screenshot-png.js "Screenshot")

# Timer Component

This is an countdown component written using React JS. It takes a date with and calculates the difference between the date and time provided and now.

## Constraints

* If the date is past at the moment of the component mount it will not display the counter and ask for a valid date

*  If there is no date provided it will display the same message til a valid date is provided

* The component is designed to be agnostic of the use case. In this scenario we are using a date and time input selector to pass the date and time but it can be used without this only passing a valid date/time as props


### How to run the demo:

* Clone the repository

#### Run

* `npm install`

#### Run the demo with:

* `npm run dev`

#### Build:

* I you want to build it  you can use : `npm run build` and then `npm run start` to run the build.

The example should run at [http://localhost:3000/](http://localhost:3000/)