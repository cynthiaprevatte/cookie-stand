/*
calculate the number of cookies each location must make every day to manage its supply inventory and baking schedule.
The number of cookies to make depends on the hours (6:00 AM to 8:00 PM) and a few factors unique to each location:

--create a separate JS object literal (no constructor functions yet) for each shop location that does the following:
--Stores the min/max hourly customers, and the average cookies per customer, in object properties
--Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
--Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
--Store the results for each location in a separate array... perhaps as a property of the object representing that location
--Display the values of each array as unordered lists in the browser
--Calculate the sum of these hourly totals */


"use strict";

var airportLoc = {
    name: 'PDX Airport',
    minHourlyCust: 23,
    maxHourlyCust: 65,
    avgCookiesPerCust: 6.3,
    result: [],
    
    getRandom: function () {
        var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
        this.result.push(Math.round(randomCookies));
    }
};

var pioneerLoc = {
    name: 'Pioneer Square',
    minHourlyCust: 3,
    maxHourlyCust: 24,
    avgCookiesPerCust: 1.2,
    result: [],
    
    getRandom: function () {
        var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
        this.result.push(Math.round(randomCookies));
    }
};

var powellLoc = {
    name: 'Powells',
    minHourlyCust: 11,
    maxHourlyCust: 38,
    avgCookiesPerCust: 3.7,
    result: [],
    
    getRandom: function () {
        var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
        this.result.push(Math.round(randomCookies));
    }
};

var stJohnsLoc = {
    name: 'Saint Johns',
    minHourlyCust: 20,
    maxHourlyCust: 38,
    avgCookiesPerCust: 2.3,
    result: [],
    
    getRandom: function () {
        var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
        this.result.push(Math.round(randomCookies));
    } 
};

var waterFrontLoc = {
    name: 'Water Front',
    minHourlyCust: 2,
    maxHourlyCust: 16,
    avgCookiesPerCust: 4.6,
    result: [],
    
    getRandom: function () {
        var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
        this.result.push(Math.round(randomCookies));
    } 
};

function displayResult( loc ) {

    var section = document.createElement('section');
    var header = document.createElement('h2');

    var container = document.getElementById('container');
    container.appendChild(section);
    
    header.innerText = loc.name;
    section.appendChild(header);

    var ul = document.createElement('ul');
    section.appendChild(ul);

    var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

    for (var i = 0, total = 0; i < times.length; i++) {
        loc.getRandom();
        total += loc.result[i];
        var li = document.createElement('li');
        li.innerText = times[i] + ': ' + loc.result[i] + ' cookies';
        ul.appendChild(li);
    }

    li.innerText = 'total: ' + total;
    ul.appendChild( li );
}

displayResult( airportLoc );
displayResult( pioneerLoc );
displayResult( powellLoc );
displayResult( stJohnsLoc );
displayResult( waterFrontLoc );