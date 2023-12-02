

onReady();
function onReady() {
    console.log("Willhiem scream")//I'm building an App!!!
}

    function dominate() {
    event.preventDefault();

        console.log("We're totes positives");

        const firstNameInput = document.getElementById('firstNameInput');
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
        const   idInputvalueValue = idInput.value;
        console.log("idInput", idInputvalueValue);
        const titleInputValue = titleInput.value;
        console.log("titleInput", titleInputValue);
        const annualSalaryInputValue = annualSalaryInput.value;
        console.log("annualSalaryInput:", annualSalaryInputValue);








        const salaryTable = document.querySelector("#tableData tbody");
        salaryTable.innerHTML += "<tr><td>" + firstNameInput.value + "</td><td>" + lastNameInput.value + "</td><td>" + idInput.value + "</td><td>" + titleInput.value + "</td><td>" + annualSalaryInput.value + "</td><td>" +"</td></tr>"
        

    

    
    
}


