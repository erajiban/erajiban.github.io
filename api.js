/* fonction quon appel pour charger les API*/
function homePageLoading() {
  
    fonctionRequeteApi("https://api.blockcypher.com/v1/btc/main", "info");
    fonctionRequeteApi("http://bitcoin.mubiz.com/peerinfo","peerinfo");
    fonctionRequeteApi("http://bitcoin.mubiz.com/mininginfo", "mininginfo");
    fonctionRequeteApi("http://bitcoin.mubiz.com/blockchaininfo", "blockchaininfo");   
}

/* fonction pour integrer l'API*/
function fonctionRequeteApi(url,elementID)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById(elementID).innerHTML = jsonPretty;
        }
    };
xmlhttp.open("GET", url, true);
xmlhttp.send();
}