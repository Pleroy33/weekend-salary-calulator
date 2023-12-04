

onReady();
function onReady() {
    console.log("Willhiem scream")//I'm building an App!!!
}



let yearlyTotal = 0
let monthlyTotal = 0
let rowNumber = 0    //rownumber on table
let sal = 0  //salary id
function dominate() {
    event.preventDefault();

    console.log("We're totes positives");

    const firstNameInput = document.getElementById("firstNameInput");
    console.log("submitFirstNameInput", firstNameInput);
    const lastNameInput = document.getElementById("lastNameInput");
    console.log("submitlastNameInput", lastNameInput);
    const idInput = document.getElementById("idInput");
    console.log("inInput", idInput);
    const titleInput = document.getElementById("titleInput")
    console.log("titleInput", titleInput);
    const annualSalaryInput = document.getElementById("annualSalaryInput");
    console.log("submitSalary", annualSalaryInput);








    const firstNameInputValue = firstNameInput.value;
    console.log("firstNameInput:", firstNameInputValue);
    const lastNameInputValue = lastNameInput.value;
    console.log("lastNameInput:", lastNameInputValue);
    const idInputvalueValue = idInput.value;
    console.log("idInput", idInputvalueValue);
    const titleInputValue = titleInput.value;
    console.log("titleInput", titleInputValue);
    const annualSalaryInputValue = annualSalaryInput.value;
    console.log("annualSalaryInput:", annualSalaryInputValue);








    const salaryTable = document.querySelector("#tableData tbody");
    salaryTable.innerHTML += "<tr id = \"" + rowNumber + "\"><td>" + firstNameInput.value + "</td><td>" + lastNameInput.value + "</td><td>" + idInput.value + "</td><td>" + titleInput.value + "</td><td id =\"s"+rowNumber+"\">" + annualSalaryInput.value + "</td><td><button type='button' onclick = 'deleteEmployee( " + rowNumber + ")'>Delete Employee</button>" + "</td></tr>"
 


    rowNumber++;



    yearlyTotal = +annualSalaryInput.value + yearlyTotal;
    console.log(yearlyTotal);
    monthlyTotal = yearlyTotal / 12;
    console.log(monthlyTotal);
    total.innerHTML = monthlyTotal;

    document.getElementById('firstNameInput').value= '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('idInput').value = '';
    document.getElementById('titleInput').value = '';
    document.getElementById('annualSalaryInput').value = '';




}




function overSpent() {
    console.log('overSpent is Running');

    const monthlyTotal2 = +document.getElementById("total").textContent
    console.log(monthlyTotal2);

    if (monthlyTotal2 > 20000) {
        document.getElementById("bottom").classList.add("over-budget")
    }

}




function deleteEmployee(id) {
    console.log("This employee has been moved to the basement!:", id)
    let row = document.getElementById(id)
    changeMonthlyTotal(id);
    console.log(row)
    row.remove()

    
    
}

function changeMonthlyTotal(x){
    let sdata = "s"+x
    console.log(sdata)
    let employeeCost = +document.getElementById(sdata).textContent
    console.log(employeeCost);
    employeeCost= employeeCost /12;
    console.log(employeeCost);
    console.log(+total.innerHTML)
    total.innerHTML=+total.innerHTML-employeeCost;

}
//changeMonthlyTotal();






/** 
function totalMontlySalary(){
    const salaryTotal = document.getElementById("Total")
    //let text = salaryTotal.textContent
    console.log(salaryTotal)
    //let number = Number.text
    console.log(number)
    console.log(salaryTotal)
    //console.log("hi", annualSalaryInput.value)
    const oneSal = +document.getElementById(s)
    console.log(oneSal,s)
    salaryTotal.innerHTML += oneSal + salaryTotal

}


/**
 * var text = p.textContent;
var number = Number(text);
document.write(number)
 */

/**function totalMonthlySalary(rowNumber){
    
        console.log('totalMonthly');
        const totalSalary = document.getElementById('Total')
        const sal = document.getElementById(rowNumber)
        console.log(totalSalary)
        console.log(sal)
            count = +totalSalary.innerHTML;
            count2 = +sal.innnerHTML
            console.log(count, count2)
       // totalSalary.innerHTML = count + totalSalary;
    }*/
