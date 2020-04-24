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

document.getElementById("muokkausnappi").onclick = () => {
    let muokkausid = document.getElementById("nr2").value;
    let url = "xxxx://http://tommitopicapp-env.eba-qtzqep2n.eu-west-3.elasticbeanstalk.com/api/topics/";

    let title = document.getElementById("title2");
    let description = document.getElementById("description2");
    let additionalsource = document.getElementById("additionalsource2");
    let complete = document.getElementById("complete2");
    let creationdate = document.getElementById("creationdate2");
    let completiondate = document.getElementById("completiondate2");

    var data = JSON.stringify({
        "id": muokkausid,
        "title": title.value,
        "description": description.value,
        "additionalsource": additionalsource.value,
        "complete": complete.value,
        "creationdate": creationdate.value + "T00:00:00",
        "completiondate": completiondate.value + "T00:00:00"
    });

    const xhr = new XMLHttpRequest();

    xhr.open("PUT", url+muokkausid, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            this.responseText;
        }
    };

    history.go(0)
};