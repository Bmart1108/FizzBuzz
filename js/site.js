function getValues() {
    let fizzValue= document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;


    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);


    //check to see if they are in fact integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //generate a list of data
        let fbData = generateNumbers(fizzValue, buzzValue);
        displayData(fbData);

    } else {
        Swal.fire({
            icon: "Error",
            title: "Oops...",
            text: "Only integers are allowed for FizzBuzz"
        })
    }

}
//generate an array of values

function generateNumbers(fizzValue, buzzValue ) {
    let returnArray = [];
    let isFizz = false;
    let isBuzz = false;
    for (let index = 1; index <= 100; index++) {

        isFizz = (index % fizzValue == 0);
        isBuzz = (index % buzzValue == 0);
        if (isFizz && isBuzz) {
            returnArray.push("fizzBuzz");
        } else if (isFizz) {
            returnArray.push("fizz");
        } else if (isBuzz) {
            returnArray.push("buzz");
        } else {
            returnArray.push(index);
        }
    }
    return returnArray;
}

//Dispay the values to the page

function displayData(fbData) {
    let contentDiv = document.getElementById("results");
    let content = "";

    //Clear previous data
    contentDiv.innerHTML = "";

    for (let index = 0; index < fbData.length; index++) {
        let dataValue = fbData[index];
        let dataElement = `<div class= "col ${dataValue}">${dataValue}</div>`;
        content += dataElement;
    }

    ///write the results to the page
    contentDiv.innerHTML = content;

}