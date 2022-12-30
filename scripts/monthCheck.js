"use strict";
import events from "/JSON/events.json" assert {type: "json"};

  
var data ="02/07/2023";
const dateToCheck = new Date(data);


var sizeOfevents = events.length;
var tematMiesiąca = "";
console.log
for(let i=0; i<sizeOfevents; i++)
{
    const startDate = new Date(events[i].Data.startDate);
    const endDate = new Date(events[i].Data.endDate);
    console.log(startDate);
    console.log(endDate);

if(dateToCheck >= startDate  && dateToCheck <= endDate){
  console.log(data);
  tematMiesiąca = events[i].Temat;
}
}
document.getElementById("eventCheck").innerHTML = tematMiesiąca;
