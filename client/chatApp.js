const validateForm = () => {
    let message = document.getElementById('sendM').value;

    if (message == '') {
        alert('Type Some Message');
        return false;
    }
    return true;
}

const sendMessage = async () => {
    try {
        const token = localStorage.getItem('token');
        if (validateForm() == true) {
            let message = document.getElementById('sendM').value;
            let response = await axios.post('http://localhost:4000/message/allMessage', {
                message: message,
            }, { headers: { 'Authorization': token } });
            console.log(response);
            document.getElementById('sendM').value = '';
            location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}

const getMessages = async () => {
    try {
        const token = localStorage.getItem('token');
        let response = await axios.get('http://localhost:4000/message/getMessage', { headers: { 'Authorization':token } } );
        for (let i = 0; i < response.data.response.length; i++){
            document.querySelector(".message").innerHTML = `
                <div class="message-list">
                    <p>${response.data.response[i].name} - ${response.data.response[i].message}</p>
                </div>
            `;
        }
    } catch (error) {
        console.log(error);
    }
}

document.onload = getMessages();

setInterval(() => getMessages(), 1000);