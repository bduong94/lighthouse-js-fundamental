//Function

function whichSchool(age){

/*
Elementary School if age is below 13
Secondary School if age is between 13 and 18 (Both inclusive)
Lighthouse Labs in all other cases
*/

    //If the age is below 13
    if (age < 13){

        //States age and what school you should attend
        console.log("You are " + age + "! You should attend elemenantary school!");

        //Return string elementary school
        return "Elementary School"

    } 
    //If the age is between 13 and 18 (inclusive)
    else if (age >= 13 && age <= 18) {

        //States age and what school you should attend
        console.log("You are " + age + "! You should attend Secondary school!");

        //Return string elementary school
        return "Secondary School"

    } //If the age is above 18
    else {

        //States age and what school you should attend
        console.log("You are " + age + "! You should attend Lighthouse Labs!");

        //Return string elementary school
        return "Lighthouse Labs"

    }

}

// //Test case 1:

// console.log('This is to test ages 13 or below')
// console.log(whichSchool(10));

// //Test case 2:

// console.log('This is to test ages between 13 and 18')
// console.log(whichSchool(13));
// console.log(whichSchool(15));
// console.log(whichSchool(18));

// //Test case 3:

// console.log('This is to test ages above 18')
// console.log(whichSchool(30));