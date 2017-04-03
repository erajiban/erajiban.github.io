//API Page Bitcoin
function requeteApiWS(monapiURL, elementiD){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            if (elementiD=='info')
            {
                document.getElementById(elementiD).innerHTML=" Blocks : " + myObj.blocks +"\n Timeoffset : "+ myObj.timeoffset+ "\n Connections : " + myObj.connections + "\n Difficulty : "+myObj.difficulty+ "\n Paytxfee : "+myObj.paxtxfee+"\n Relayfee : "+myObj.relayfee;
            }
            if(elementiD=='blockchaininfo')
            {
                document.getElementById(elementiD).innerHTML=" Chain :+" +myObj.chain+ "\n Blocks : " + myObj.blocks +"\n Headers : " + myObj.headers + "\n Best block hash : "+myObj.bestblockhash+"\n Difficulty : "+myObj.difficulty;
            }
            if(elementiD=='mininginfo')
            {
                document.getElementById(elementiD).innerHTML=" Blocks : " + myObj.blocks +"\n Difficulty : "+myObj.difficulty+ "\n Networkhashps : "+myObj.networkhashps;
            }
            if(elementiD=='peerinfo')
            {
                var myObj1 = this.responseText;
                var jsonPretty = JSON.stringify(JSON.parse(myObj1),null,2);
                document.getElementById(elementiD).innerHTML = jsonPretty;
            }
            /*var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById(elementiD).innerHTML = jsonPretty;*/
        }
    };
    xmlhttp.open('GET', monapiURL, true);
    xmlhttp.send();
}

/*function Valider(elementiD, resultat) {
    var url;
    alert(document.getElementById("adresse").value);
    alert(elementiD);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            alert(elementiD); //Fonctionne pas
            if(elementiD=='adresse') {
                alert(elementiD);
                url = 'http://bitcoin.mubiz.com/address/' + document.getElementById("adresse").value + '/';
                alert(url);
                var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
                document.getElementById(resultat).innerHTML = jsonPretty;
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    alert(url);
}*/

//API Page Explorer
function VerificationAdd(adresse) {
    var isAddress = /^[0-9a-zA-Z]{34}$/;
    return isAddress.test(adresse);
}

function ValiderAdd() {

    if(!VerificationAdd(document.getElementById("adresse").value))
    {
        alert("Adresse entrée incorrecte");
    }
    var a = 'https://bitcoin.mubiz.com/address/' + document.getElementById("adresse").value +'/';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
            document.getElementById("resultatAdd").innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET", a, true);
    xmlhttp.send();
    ///alert(a);
}

function ValiderHT() {
    var a = 'https://bitcoin.mubiz.com/transaction/' + document.getElementById("hashTransaction").value +'/';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
            document.getElementById("resultatHT").innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET", a, true);
    xmlhttp.send();
}

function ValiderHB() {
    var a = 'https://bitcoin.mubiz.com/block_hash/' + document.getElementById("hashBloc").value +'/';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
            document.getElementById("resultatHB").innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET", a, true);
    xmlhttp.send();
}

function ValiderIB() {
    var a = 'https://bitcoin.mubiz.com/block_index/' + document.getElementById("indexBloc").value +'/';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
            document.getElementById("resultatIB").innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET", a, true);
    xmlhttp.send();
}

//Affichage joli JSON
/*function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
var obj = {a:1, 'b':'foo', c:[false,'false',null, 'null', {d:{e:1.3e5,f:'1.3e5'}}]};
var str = JSON.stringify(obj, undefined, 4);
output(str);
output(syntaxHighlight(str));*/

function homePageLoading() {

    url = 'https://bitcoin.mubiz.com/info';
    element = 'info';
    requeteApiWS(url, element);

    url = 'https://bitcoin.mubiz.com/blockchaininfo';
    element = 'blockchaininfo';
    requeteApiWS(url, element);

    url = 'https://bitcoin.mubiz.com/mininginfo';
    element = 'mininginfo';
    requeteApiWS(url, element);

    url = 'https://bitcoin.mubiz.com/peerinfo';
    element = 'peerinfo';
    requeteApiWS(url, element);
}