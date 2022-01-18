// display a message to the user
function getValues() {
    alert("Hello App");
}

function getValues2() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    //check to see if they are in fact integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //generate a list of numbers
        let numbers = generateNumbers(startValue, endValue)



        //display a list of numbers
        displayNumbers(numbers);


    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Only integers are allowed for FizzBuzz"
        })
    }
}


function generateNumbers(start, end, ) {

    let numbers = [];
    for (let index = start; index <= end; index++) {
        numbers.push(index);
    }

    return numbers;



    /*
   pos=  0,1,2,3,4,5,6,7,8 
        [1,2,3,4,5,6,7,8,9]
*/

}


function displayNumbers(numbers) {
    let templateRows = "";

    for (let index = 1; index < numbers.length; index++) {

        let number = numbers[index];

        let result = "";

        if (number % 15 == 0) {
            result = "fizzbuzz";

        } else if (number % 5 == 0) {
            result = "buzz";

        } else if (number % 3 == 0) {
            result = "fizz"

        } else {
            result = number;
        }

        let row = `<tr><td class="${result}">${result}</td></tr>`;

        templateRows += row;

    }

    document.getElementById("results").innerHTML = templateRows;

}