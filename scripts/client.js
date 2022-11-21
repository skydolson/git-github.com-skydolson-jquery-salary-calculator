$( document ).ready(onReady);

const budget = 20000;

let employees = [];

function onReady() {
    let el = $('#budgetOut');
    el.empty();
    el.append(budget);
    $('#submitButton').on('click', submitEmployee);
    $('#deleteButton').on('click', deleteEmployee);
    $('#deleteButton').on('click', showEmployees);
    $('#deleteButton').on('click', findSurplus);
    findSurplus();
}

function submitEmployee(){
    // get inputs, create object, push object, empty inputs, calculate surplus, display employees
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
    }
    employees.push(newEmployee);

    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

    findSurplus();
    showEmployees();
}

function findSurplus (){
    // loop over employees adding their salaries to total, then subtract total from budget
    // apply red background to over-budget condition
    totalSalaries = 0
    for (employee of employees) {
        totalSalaries += Number(employee.annualSalary)/12;
    }
    let totalSalariesTwoDecimalPlaces = Math.round((totalSalaries + Number.EPSILON) * 100) / 100;
    let el1 = $('#salariesOut');
    el1.empty();
    el1.append(totalSalariesTwoDecimalPlaces);
    
    const surplus = budget - totalSalaries;
    let surplusTwoDecimalPlaces = Math.round((surplus + Number.EPSILON) * 100) / 100;
    let el2 = $('#surplusOut');
    el2.empty(); 
    el2.append(surplusTwoDecimalPlaces);

    if (totalSalaries > budget) {
        document.getElementById("salariesOut").style.backgroundColor = 'Red';
        document.getElementById("surplusOut").style.backgroundColor = 'Red';
    }
    if (totalSalaries <= budget) {
        document.getElementById("salariesOut").style.backgroundColor = 'White';
        document.getElementById("surplusOut").style.backgroundColor = 'White';
    }
 }

 function showEmployees(){
    let el = $('#employeesOut');
    el.empty();
    for (employee of employees){
        el.append( `<li>` + `Full Name: ` + employee.firstName + ` ` + employee.lastName + 
        `, ID Number: ` + employee.idNumber + `, Job Title: ` + employee.jobTitle
         + `, Annual Salary: $` + employee.annualSalary + `<li>`);
    }
 }

 function deleteEmployee(){
    employees.pop();
 }
