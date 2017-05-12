"use strict";

function Store( name, minHourlyCust, maxHourlyCust, avgCookiesPerCust ) {   //store constructor
    this.name = name; 
    this.minHourlyCust = minHourlyCust; 
    this.maxHourlyCust = maxHourlyCust; 
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.result = [];
}

Store.prototype.getRandom = function () {
    var randomCookies = (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust) * this.avgCookiesPerCust;
    this.result.push(Math.round(randomCookies));
} 

Store.prototype.render = function ( table ) {
    var row = document.createElement( 'tr' );
    createCell( 'td', this.name, row );
    for (var i = 0; i < times.length; i++) {
        this.getRandom();
        createCell( 'td', this.result[i], row );
    }
    table.appendChild(row);
}

var airport = new Store('PDX Airport', 23, 65, 6.3 );   // create Stores
var pioneer = new Store( 'Pioneer Square', 3, 24, 1.2 );
var powell = new Store( 'Powells', 11, 38, 3.7 );
var stJohns = new Store( 'St Johns', 20, 38, 2.3 );
var waterFront = new Store( 'Water Front', 2, 16, 4.6 );

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function addStoreHandler () {
    event.preventDefault();
    var form = event.target;
    var name = form.name.value;
    var minHourlyCust = parseInt( form.minHourlyCust.value );
    var maxHourlyCust = parseInt( form.maxHourlyCust.value );
    var avgCookiesPerCust = parseInt( form.avgCookiesPerCust.value );
    var newStore = new Store(name, minHourlyCust, maxHourlyCust, avgCookiesPerCust);

    newStore.render( document.getElementById( 'cookies' ) ); 
}

function createCell( cellType, content, row ) {  //helper function
    var cell = document.createElement( cellType );
    cell.innerText = content;
    row.appendChild( cell );
}

var tableElement = document.getElementById( 'cookies' ); //add header
var tableRowHeader = document.createElement( 'tr' );
createCell( 'th', 'LOCATION',  tableRowHeader );

for ( var i = 0; i < times.length; i++ ) {
    createCell( 'th', times[i], tableRowHeader );
}
tableElement.appendChild( tableRowHeader );

airport.render( document.getElementById( 'cookies' ) );  //add row
pioneer.render( document.getElementById( 'cookies' ) );
powell.render( document.getElementById( 'cookies' ) );
stJohns.render( document.getElementById( 'cookies' ) );
waterFront.render( document.getElementById( 'cookies' ) );

var storeForm = document.getElementById( 'addStore' );
storeForm.addEventListener( 'submit', addStoreHandler);
