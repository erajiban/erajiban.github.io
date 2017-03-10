function requeteApiWS(monapiURL, elementiD){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById(elementiD).innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET", monapiURL, true);
    xmlhttp.send();
}


function homePageLoading() {

    url = 'http://bitcoin.mubiz.com/info';
    element = 'info';
    requeteApiWS(url, element);

    url = 'http://bitcoin.mubiz.com/blockchaininfo';
    element = 'blockchaininfo';
    requeteApiWS(url, element);

    url = 'http://bitcoin.mubiz.com/mininginfo';
    element = 'mininginfo';
    requeteApiWS(url, element);

    url = 'http://bitcoin.mubiz.com/peerinfo';
    element = 'peerinfo';
    requeteApiWS(url, element);
}
