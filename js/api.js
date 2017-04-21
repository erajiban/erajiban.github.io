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
        }
    };
    xmlhttp.open('GET', monapiURL, true);
    xmlhttp.send();
}


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
            var myObj = JSON.parse(this.responseText);
            document.getElementById("resultatAdd").innerHTML=" Hash160 : " + myObj.hash160 +"\n Adresse : "+ myObj.address+ "\n Total Reçu : " + myObj.total_received + "\n Total envoyé : "+myObj.total_send+ "\n Balance finale : "+myObj.final_balance;
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
            var myObj = JSON.parse(this.responseText);
            document.getElementById("resultatHB").innerHTML=" Hash : " + myObj.hash +"\n Confirmations : "+ myObj.confirmations+ "\n Time : " + myObj.time + "\n Median Time : "+myObj.mediantime+ "\n Bits : "+myObj.bits+ "\n Previous block hash : "+myObj.previousblockhash+ "\n Next block hash : "+myObj.nextblockhash;
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
            var myObj = JSON.parse(this.responseText);
            document.getElementById("resultatIB").innerHTML=" Bloc hash : " + myObj.block_hash;
        }
    };
    xmlhttp.open("GET", a, true);
    xmlhttp.send();
}

//Affichage joli JSON
/*function output(inp) {
    document.body.appendChild(document.createElement('test')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&').replace(//g, '>');
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