const ordinal = require("ordinal");
const {days, months} = require("date-names");


export function formatDate(date, format){
    return format.repalce(/YYYY|M(MMM)?|DO?|dddd/g, tag=>{
        if(tag== "DO")return ordinal(date.getDate());
    });
}