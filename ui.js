function UI(){
}

// console.log(new Object().prototype);
// console.log(UI.prototype);

UI.prototype.addStudentToUI = (newStudentObject) =>{
    console.log(newStudentObject);
    const tbody = document.getElementById("Students");
    tbody.innerHTML += 
    `<tr>
    <td><img src="${newStudentObject.imageUrl}" class="img-fluid img-thumbnail" style="width:100px; border-radius:50%"></td>
    <td>${newStudentObject.studentName}</td>
    <td>${newStudentObject.studentPath}</td>
    <td><a href="#" id="delete-student" class="btn btn-danger">Delete Student</a></td>
    </tr>`;
}
// console.log(typeof UI)
UI.prototype.clearInputs = (inputArray) =>{
    inputArray.forEach(element => {
        element.value = "";
    });
}






