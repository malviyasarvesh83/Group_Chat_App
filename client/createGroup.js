const getName = async () => {
    try {
        const token = localStorage.getItem('token');
        let response = await axios.get('http://localhost:4000/user/allUsers',{headers:{'Authorization':token}});
        console.log(response);
        const name = response.data.name;
        document.getElementById("add").innerHTML = `
            <option>Select Member</option>
        `;
        for (let i = 0; i < response.data.response.length; i++){
            if (response.data.response[i].name != name) {
                document.getElementById("add").innerHTML += `
                    <option value="${response.data.response[i].name}">${response.data.response[i].name}</option>
                `;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

getName();

const validateForm = () => {
    let name = document.getElementById('name').value;
    let member = document.getElementById('add').value;
    let groupName = document.getElementById('Gname').value;

    if (name == '') {
        alert('Name is Required');
        return false;
    }
    if (member == '') {
        alert('Select Member To Add');
        return false;
    }
    if (groupName == '') {
        alert('Group Name is Required');
        return false;
    }
    return true;
}

const addMemberToGroup = async () => {
    try {
        if (validateForm() == true) {
            let name = document.getElementById("name").value;
            let member = document.getElementById("add").value;
            let groupName = document.getElementById('Gname').value;
            let response = await axios.post('http://localhost:4000/group/addMember', {
                name: name,
                member: member,
                groupName: groupName,
            });
            console.log(response);
            alert('Group Created Successfully');
            location.href = 'chatApp.html';
        }
    } catch (error) {
        console.log(error);
    }
}

