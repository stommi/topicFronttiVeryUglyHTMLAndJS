const lista = document.getElementById("lista");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const haettu = JSON.parse(xhr.responseText);
        lisaaAlkiot(haettu);
    }
}

xhr.open("GET", 'xxxx://http://tommitopicapp-env.eba-qtzqep2n.eu-west-3.elasticbeanstalk.com/api/topics/');
xhr.send();

function lisaaAlkiot(taulu) {
    taulu.forEach(topic => {
        lista.innerHTML += `<tr>${"<td>" + topic.id + "</td> <td>" + topic.title + "</td> <td>" + topic.description
        + "</td> <td>" + topic.additionalsource + "</td> <td>" + topic.complete + "</td> <td>" + topic.creationdate + "</td> <td>" + topic.completiondate}</tr>`;

    })

}

document.getElementById("poistonappi").onclick = () => {
    let poistoid = document.getElementById("nr1").value;
    let url = "xxxx://http://tommitopicapp-env.eba-qtzqep2n.eu-west-3.elasticbeanstalk.com/api/topics/";
    const xhr = new XMLHttpRequest();

    xhr.open("DELETE", url + poistoid, true);

    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(this.status)
        } else {
            console.error();
        }

        console.log(url)
    };

    history.go(0)
};