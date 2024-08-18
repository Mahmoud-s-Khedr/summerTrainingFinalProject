const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const role = document.getElementById('role');
const birthday = document.getElementById('birthday');
const button = document.getElementById('add');

addData = (obj) => {
    fetch('http://localhost:3000/addctrl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
}
button.addEventListener('click', () => {
    const obj = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        role: role.value,
        birthday: birthday.value
    }
    console.log(obj);
    if(!fname.value || !lname.value || !email.value || !role.value || !birthday.value) {
        alert('please fill all fields');
        return;
    }
    if(role.value !== 'teacher' && role.value !== 'assistant' && role.value !== 'student') {
        alert('please choose role');
        return;
    }
    if(fname.value.length < 3 || fname.value.length > 30) {
        alert('first name must be between 3 and 30 characters');
        return;
    }
    if(lname.value.length < 3 || lname.value.length > 30) {
        alert('last name must be between 3 and 30 characters');
        return;
    }
    if(email.value.length < 3 || email.value.length > 30) {
        alert('email must be between 3 and 30 characters');
        return;
    }
    if(new Date(birthday.value) > new Date()) {
        alert('please choose date in the past');
        return;
    }
   
    addData(obj);
});