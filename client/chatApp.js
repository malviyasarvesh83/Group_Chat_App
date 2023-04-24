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
        let messages = [];
        let html = '';
        const token = localStorage.getItem('token');
        let response = await axios.get('http://localhost:4000/message/getMessage', { headers: { 'Authorization':token } } );
        for (let i = 0; i < response.data.response.length; i++){
            messages.push(response.data.response[i].message);
            html += '<div class="message-list">';
            html += `<p>${response.data.response[i].name} - ${response.data.response[i].message} <i class="fas fa-trash" onclick="deleteMessage(${response.data.response[i].id})"></i> </p>`;
            html += '</div>';
        }
        localStorage.setItem('messages', JSON.stringify(messages));
        document.querySelector('.message').innerHTML = html;
    } catch (error) {
        console.log(error);
    }
}

document.onload = getMessages();

setInterval(() => getMessages(), 1000);

const deleteMessage = async (id) => {
    try {
        const token = localStorage.getItem("token");
        let response = await axios.delete(
          `http://localhost:4000/message/deleteMessage/${id}`,
          { headers: { Authorization: token } }
        );
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}