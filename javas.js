document.getElementById("nappi").onclick = () => {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let additionalsource = document.getElementById("additionalsource");
    let complete = document.getElementById("complete");
    let creationdate = document.getElementById("creationdate");
    let completiondate = document.getElementById("completiondate");
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            this.responseText;
        }
    };

    if ((document.getElementById("completiondate").value.toString() === "")) {
        var data = JSON.stringify({
            "title": title.value,
            "description": description.value,
            "additionalsource": additionalsource.value,
            "complete": complete.value,
            "creationdate": creationdate.value + "T00:00:00"
        });

        xhr.open("POST", 'xxxx://http://tommitopicapp-env.eba-qtzqep2n.eu-west-3.elasticbeanstalk.com/api/topics/');
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
        console.log(data)
    } else {

        data = JSON.stringify({
            "title": title.value,
            "description": description.value,
            "additionalsource": additionalsource.value,
            "complete": complete.value,
            "creationdate": creationdate.value + "T00:00:00",
            "completiondate": completiondate.value + "T00:00:00"
        });

        xhr.open("POST", 'xxxx://http://tommitopicapp-env.eba-qtzqep2n.eu-west-3.elasticbeanstalk.com/api/topics/');
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
        console.log(data)
    }
};




