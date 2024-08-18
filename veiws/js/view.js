const fill = document.getElementById('fill');
const role = document.getElementById('role');
const filter = document.getElementById('filter');

const getData = () => {
    const obj = {role: role.value.toLowerCase()};
    let html='';
    fetch('http://localhost:3000/veiwctrl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            let test=element.birthday;
            test = test.slice(0,10);
            element.birthday = test;
            html += `
                <div class="card">
                    <img src="images/someone.jpg" class="photo">
                    <h4>${element.fname} ${element.lname}</h4>
                    <h4>${element.userRole}</h4>
                    <h4>${element.email}</h4>
                    <h4>${element.birthday}</h4>
                    <button class="delete" onclick="deleteData(${element.id})">delete</button>
                </div>
                `
        });
    }).then(() => {
        if(html === '') {
            fill.innerHTML = '<h2>No data</h2>';
        }else{
            fill.innerHTML = html;
        }
    })
}
const deleteData = (data) => {
    const obj = {id: data};
    fetch('http://localhost:3000/deletectrl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(() => getData());
}
filter.addEventListener('click', getData);
document.addEventListener('DOMContentLoaded', getData);

