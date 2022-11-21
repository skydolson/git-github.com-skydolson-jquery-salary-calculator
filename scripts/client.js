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
    findSurplus();
    

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
    // loop over employees adding their salaries to total, then subtract total from budget.
    totalSalaries = 0
    
    for (employee of employees) {
        totalSalaries += Number(employee.annualSalary)/12;
        
    }
    console.log("total salaries:", totalSalaries);
    console.log("surplus:", budget - totalSalaries);
    
    let el1 = $('#salariesOut');
    el1.empty();
    el1.append(totalSalaries);
    
    const surplus = budget - totalSalaries;
    let el2 = $('#surplusOut');
    el2.empty(); 
    el2.append(surplus);

    if (totalSalaries > budget) {
        console.log("Too big!")
    }
 }

 function showEmployees(){
    let el = $('#employeesOut');
    el.empty();
    for (employee of employees){
        el.append( `<li>` + employee.firstName + ` ` + employee.lastName + 
        `, ID Number: ` + employee.idNumber + `, Job Title: ` + employee.jobTitle
         + `, Annual Salary: ` + employee.annualSalary + `<li>`);
    }

 }

 function deleteEmployee(){
    employees.pop();

 }
