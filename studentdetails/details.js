const button = document.querySelector('button')
button.addEventListener('click', () => {
    const formDiv = button.parentElement.nextElementSibling;
    addRemove(true, formDiv)
  
});
function addRemove(active, formDiv){
    if(active){
        formDiv.classList.add('visible')
        formDiv.classList.remove('invisible')
    } else {
        formDiv.classList.add('invisible')
        formDiv.classList.remove('visible')
    }
}
const formDiv = button.parentElement.nextElementSibling;
const lastDivElement = formDiv.lastElementChild.children;
let studentInfo = [];
function formSubmit(){
    const submitParent = lastDivElement[0].parentElement
    const ageElement = submitParent.previousElementSibling
    const markElement = ageElement.previousElementSibling
    const departmentElement = markElement.previousElementSibling
    const nameElement = departmentElement.previousElementSibling

    const name = nameElement.lastElementChild.value;
    const age = ageElement.lastElementChild.value;
    const mark = markElement.lastElementChild.value;
    const department = departmentElement.lastElementChild.value;

    if (name == "", age == "" , mark == "" || department == "") {
        alert("All fields must be filled out");
    
    }else{
    const student = {
        studentName: name,
        studentAge: age,
        studentMark: mark,
        studentDepartment: department
    }
    studentInfo.push(student);
    nameElement.lastElementChild.value = "";
    ageElement.lastElementChild.value = "";
    markElement.lastElementChild.value = "";
    departmentElement.lastElementChild.value = "";

    addRemove(false, formDiv)
}
 if(studentInfo.length > 0){
    const ulElement = document.querySelector('ul');

    ulElement.innerHTML = '';
    for(let eachStudent of studentInfo){
       let liElement = document.createElement('li')
        liElement.textContent = `Name: ${eachStudent.studentName}, Age: ${eachStudent.studentAge}, Mark: ${eachStudent.studentMark},
         Department: ${eachStudent.studentDepartment}`;
         ulElement.append(liElement)
         

    }
}
}
console.log(studentInfo)
lastDivElement[0].addEventListener('click', formSubmit);