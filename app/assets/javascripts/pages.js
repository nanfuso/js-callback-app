
// $.get('https://data.cityofchicago.org/resource/qnjv-hj2q.json', function(cafeData){
//     console.log(cafeData);
// })


// function getData() {
//     var employeesDiv = document.getElementById('employees');

//     $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {
//         console.log(employees);

//         var htmlString = "";

//         for (var i = 0; i < employees.length; i++) {
//             var employee = employees[i];
//             htmlString += '<h3>' + employee.name + '</h3>';
//             htmlString += '<p>Job Title: ' + employee.job_titles + '</p>';
//             htmlString += '<p>Department: ' + employee.department + '</p>';
//             htmlString += '<p>Salary: ' + employee.annual_salary + '</p>';
//             htmlString += '<br>';
//         }
//         employeesDiv.innerHTML = htmlString;
//     });
// }


function getData() {
    var inspectionsDiv = document.getElementById('inspections')

    $.get('https://data.cityofchicago.org/resource/cwig-ma7x.json', function(inspections) {
        console.log(inspections);

        var htmlString ="";

        for (var i = 0; i < inspections.length; i++) {
            var inspection = inspections[i];
            htmlString += '<div class="inspections" onclick="changeInspection(this)">'
                htmlString += '<h3>' + inspection.aka_name + '</h3>';
                htmlString += '<p>' + inspection.address + '</p>';
                htmlString += '<p>' + inspection.risk + '</p>';
                htmlString += '<p>' + inspection.results + '</p>';
            htmlString += '<br>'
            htmlString += '</div>'
        }
        inspectionsDiv.innerHTML = htmlString;
    });
}

function changeInspection(inspectionDiv) {
    if (inspectionDiv.style.color === 'lightgray') {
        inspectionDiv.style.color ="";
    } else {
        inspectionDiv.style.color = 'lightgray';
    }
}

function showAll() {
    var inspections = document.getElementsByClassName('inspections')

    for (var i = 0; i < inspections.length; i ++) {
        inspection = inspections[i];
        inspection.classList.remove('hidden');
    }
}

function showFail() {
    var inspections = document.getElementsByClassName('inspections')

    for (var i = 0; i < inspections.length; i ++) {
        inspection = inspections[i];
        if (inspection.innerHTML.indexOf('Fail') !== -1) {
            inspection.classList.remove('hidden');
        } else {
            inspection.classList.add('hidden');
        }
    } 
}

function showRisk() {
    var inspections = document.getElementsByClassName('inspections')

    for (var i = 0; i < inspections.length; i++) {
        inspection = inspections[i];
        if (inspection.innerHTML.indexOf('Risk 1') !== -1) {
            inspection.classList.remove('hidden');
        } else {
            inspection.classList.add('hidden');
        }
    }
}