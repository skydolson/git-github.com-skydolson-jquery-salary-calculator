$( document ).ready(onReady);

const budget = 20000;

let employees = [];

function onReady() {
    let el = $('#budgetOut');
    el.empty();
    el.append(budget);
    $('#submitButton').on('click', submitEmployee);
}

function submitEmployee(){
    console.log("in submitEmployee");
    // get inputs, create object, push object, empty inputs, calculate surplus
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
    }
    employees.push( newEmployee);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}
