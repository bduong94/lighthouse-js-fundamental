const talkingCalendar = function(date) {// Nameless function assigned to the variable talkingCalendar

  /*
  Parameters:
  date - string of a date in the format of YYYY/MM/DD

  Return

  Date string in format of Month Day, Year (Human date)

  */

  let finalDate = ""; //Empty string

  //Checks date string for month
  if (date.slice(5,7) === "01"){ //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 01

    finalDate += "January "; //Adds month to the human date

  } else if(date.slice(5,7) === "02") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 02

    finalDate += "February "; //Adds month to the human date

  } else if(date.slice(5,7) === "03") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 03

    finalDate += "March "; //Adds month to the human date

  } else if(date.slice(5,7) === "04") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 04

    finalDate += "April "; //Adds month to the human date

  } else if(date.slice(5,7) === "05") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 05

    finalDate += "May "; //Adds month to the human date

  } else if(date.slice(5,7) === "06") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 06

    finalDate += "June "; //Adds month to the human date

  } else if(date.slice(5,7) === "07") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 07

    finalDate += "July "; //Adds month to the human date

  } else if(date.slice(5,7) === "08") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 08

    finalDate += "August "; //Adds month to the human date

  } else if(date.slice(5,7) === "09") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 09

    finalDate += "September "; //Adds month to the human date

  } else if(date.slice(5,7) === "10") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 10

    finalDate += "October "; //Adds month to the human date

  } else if(date.slice(5,7) === "11") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 11

    finalDate += "November "; //Adds month to the human date

  } else if(date.slice(5,7) === "12") { //SLices index start at 5 and ends up to index 7 (Includes 2 characters) to see if it is 12

    finalDate += "December "; //Adds month to the human date

  }

  //Adds the day of the date to the human date
  if(date[8] === "0"){

    finalDate += date.slice(-1); //Adds only one number instead of a double digit number

  } else{

    finalDate += date.slice(8);

  }


  //Checks date string for what day it is to add "st", "nd", "rd" or "th" to the string
  if (date.slice(8) === "01" || date.slice(8) === "21" || date.slice(8) === "31"){ //Checks to see if the day is 1, 21 or 31 to add "st" ordinal

    finalDate += "st, "; //Adds ordinals

  } else if(date.slice(8) === "02" || date.slice(8) === "22"){ //Checks to see if day 02 or 22 to add "nd" ordinal

    finalDate += "nd, "; //Adds ordinals

  } else if(date.slice(8) === "03" || date.slice(8) === "23"){ //Checks to see if day 03 or 23 to add "rd" ordinal

    finalDate += "rd, "; //Adds ordinals

  } else { //All other dates have the "th" ordinal

    finalDate += "th, "; //Adds ordinals

  }


  //Checks to see the year of the date string
  
  finalDate += date.slice(0,4); //Adds year to the final date

  return finalDate; //

}


//Test Cases
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));