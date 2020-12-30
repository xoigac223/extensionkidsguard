chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    url = new URL(tabs[0].url)
    document.getElementById("link").innerText = String(url)
    idvideo = String(url).substring(32, 43)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/predict/" + idvideo, true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        var predict = String(resp['prediction']).charAt(1)
        if (predict === "0") document.getElementById("predict").innerHTML = "Phù hợp"
        else if (predict === "1") document.getElementById("predict").innerHTML = "Trung gian"
        else if (predict === "2") document.getElementById("predict").innerHTML = "Không phù hợp"
        }
    }
    xhr.send();
})




