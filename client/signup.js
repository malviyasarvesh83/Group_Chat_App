document.querySelector(".close").onclick = () => {
  document.querySelector(".close").style.display = "none";
  document.querySelector(".open").style.display = "inline-block";
  document.getElementById("signUppassword").type = "text";
};

document.querySelector(".open").onclick = () => {
  document.querySelector(".open").style.display = "none";
  document.querySelector(".close").style.display = "inline-block";
  document.getElementById("signUppassword").type = "password";
};

// Form Validation

const validateForm = () => {
    let name = document.getElementById('signUpname').value;
    let email = document.getElementById('signUpemail').value;
    let phone = document.getElementById('signUpphone').value;
    let password = document.getElementById('signUppassword').value;

    if (name == '') {
        alert('Name is Required');
        return false;
    }
    if (email == '') {
        alert('Email is Required');
        return false;
    }
    if (phone == '') {
        alert('Phone Number is Required');
        return false;
    }
    if (password == '') {
        alert('Password is Required');
        return false;
    }
    return true;
}

// Function To Sign Up

const signUp = async () => {
    try {
        const token = localStorage.getItem('token');
        if (validateForm() == true) {
            let name = document.getElementById("signUpname").value;
            let email = document.getElementById("signUpemail").value;
            let phone = document.getElementById("signUpphone").value;
            let password = document.getElementById("signUppassword").value;

            let response = await axios.post('http://localhost:4000/user/signUp', {
                name: name,
                email: email,
                phone: phone,
                password: password,
            }, { headers: { 'Authorization': token } });
            alert(response.data.success);
        }
    } catch (error) {
        console.log(error);
    }
}