
"use strict";

function Location( name, minHourlyCust, maxHourlyCust, avgCookiesPerCust ) {
    this.name = name; 
    this.minHourlyCust = minHourlyCust; 
    this.maxHourlyCust = maxHourlyCust; 
    this.avgCookiesPerCust = avgCookiesPerCust 
}
    
Location.prototype.result = [];

Location.prototype.times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

Location.prototype.getRandom = function () {
    var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
    this.result.push(Math.round(randomCookies));
} 

Location.prototype.render = function ( table ) {

    for (var i = 0; i < this.times.length; i++) {
        var row = document.createElement( 'tr' );
        this.getRandom();

        createCell( 'td', this.times[i], row );
        createCell( 'td', this.result[i] + ' cookies', row );
        table.appendChild(row);
    }
}

// create locations
var airport = new Location('PDX Airport', 23, 65, 6.3 );
var pioneer = new Location( 'Pioneer Square', 3, 24, 1.2 );
var powell = new Location( 'Powells', 11, 38, 3.7 );
var stJohns = new Location( 'St Johns', 20, 38, 2.3 );
var waterFront = new Location( 'Water Front', 2, 16, 4.6 );

var locations = ['PDX Airport', 'Pioneer Square', 'Powells', 'St Johns', 'Water Front'];

function displayResult( loc ) { //table

    var tableElement = document.getElementById( 'cookies' );

    var tableRowHeader = document.createElement( 'tr' );
    createCell( 'th', loc.name,  tableRowHeader );

    tableElement.appendChild( tableRowHeader );
    
    loc.render( document.getElementById( 'cookies' ) ); // add data to the table
}

function createCell(cellType, content, row) { //helper function
    var cell = document.createElement(cellType);
    cell.innerText = content;
    row.appendChild(cell);
}

displayResult( airport );
displayResult( pioneer );
displayResult( powell );
displayResult( stJohns );
displayResult( waterFront );