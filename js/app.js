
"use strict";

//store constructor
function Store( name, minHourlyCust, maxHourlyCust, avgCookiesPerCust ) {
    this.name = name; 
    this.minHourlyCust = minHourlyCust; 
    this.maxHourlyCust = maxHourlyCust; 
    this.avgCookiesPerCust = avgCookiesPerCust 
}
    
Store.prototype.result = [];

Store.prototype.times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

Store.prototype.getRandom = function () {
    var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
    this.result.push(Math.round(randomCookies));
} 

Store.prototype.render = function ( table ) {

    for (var i = 0; i < this.times.length; i++) {
        var row = document.createElement( 'tr' );
        this.getRandom();

        createCell( 'td', this.times[i], row );
        createCell( 'td', this.result[i] + ' cookies', row );
        table.appendChild(row);
    }
}

// create Stores
var airport = new Store('PDX Airport', 23, 65, 6.3 );
var pioneer = new Store( 'Pioneer Square', 3, 24, 1.2 );
var powell = new Store( 'Powells', 11, 38, 3.7 );
var stJohns = new Store( 'St Johns', 20, 38, 2.3 );
var waterFront = new Store( 'Water Front', 2, 16, 4.6 );

var stores = ['airport', 'pioneer', 'powells', 'stJohns', 'waterFront'];

function addStoreHandler () {
    event.preventDefault();
    var form = event.target;

    var name = form.name.value;
    var minHourlyCust = form.minHourlyCust.value;
    var maxHourlyCust = form.maxHourlyCust.value;
    var avgCookiesPerCust = form.avgCookiesPerCust.value;
    var newStore = new Store(name, minHourlyCust, maxHourlyCust, avgCookiesPerCust);
    console.log (form, name, minHourlyCust, maxHourlyCust, avgCookiesPerCust, newStore);
    //name.render( document.getElementById( 'cookies' ) ); 
}

function displayResult( loc ) { //table

    var tableElement = document.getElementById( 'cookies' );

    var tableRowHeader = document.createElement( 'tr' );
    createCell( 'th', loc.name,  tableRowHeader );

    tableElement.appendChild( tableRowHeader );
    // add data to the table
    loc.render( document.getElementById( 'cookies' ) ); 
    console.log (loc);
}

function createCell(cellType, content, row) { //helper function
    var cell = document.createElement(cellType);
    cell.innerText = content;
    row.appendChild(cell);
    //try using xxx.setAttribute('id','tr'+1);
}

displayResult( airport );
displayResult( pioneer );
displayResult( powell );
displayResult( stJohns );
displayResult( waterFront );

var storeForm = document.getElementById( 'addStore' );
storeForm.addEventListener( 'submit', addStoreHandler);

/*
A table is drawn out row by row. Each row is created
with the <tr> element.

Inside each row there are a number of cells
represented by the <td> element (or <th> if it is a
header).

You can make cells of a table span more than one row
or column using the rowspan and colspan attributes.
*/