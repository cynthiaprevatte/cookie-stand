/*
calculate the number of cookies each location must make every day to manage its supply inventory and baking schedule.
The number of cookies to make depends on the hours (6:00 AM to 8:00 PM) and a few factors unique to each location:

--create a separate JS object literal (no constructor functions yet) for each shop location that does the following:
--Stores the min/max hourly customers, and the average cookies per customer, in object properties
--Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
--Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
--Store the results for each location in a separate array... perhaps as a property of the object representing that location
--Display the values of each array as unordered lists in the browser

Calculating the sum of these hourly totals; your output for each location should look like this:

1st and Pike

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
...
8pm: 29 cookies
Total: 657 cookies*/

"use strict";

var airportLoc = {
    minHourlyCust: 23,
    maxHourlyCust: 65,
    avgCookiesPerCust: 6.3,
    result: [],
    
    getRandom: function (minHourlyCust, maxHourlyCust) {

        Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust;
    },

    getResults: function ( xxx ) {
        this.result.push ( xxx );
    }
};

/*
var pioneerLoc = {
    minHourlyCust: 3,
    maxHourlyCust: 24,
    avgCookiesPerCust: 1.2,
    results: [] 
};

var powellLoc = {
    minHourlyCust: 11,
    maxHourlyCust: 38,
    avgCookiesPerCust: 3.7,
    results: [] 
};

var stJohnsLoc = {
    minHourlyCust: 20,
    maxHourlyCust: 38,
    avgCookiesPerCust: 2.3,
    results: [] 
};

var waterFrontLoc = {
    minHourlyCust: 2,
    maxHourlyCust: 16,
    avgCookiesPerCust: 4.6,
    results: [] 
};
*/