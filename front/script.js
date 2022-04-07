const rota = "http://127.0.0.1:50/api/api/";

function openUpdate(id) {
    console.log(id);
    if(id != undefined){
        $('#pnlUpdate').removeClass("d-none"); 
    }
    else
       $('#pnlUpdate').addClass("d-none");

}


function listPipou() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=UTF-8");


    var myInit = { 
        method: 'GET',
        headers: myHeaders
    };

    fetch(rota+'read.php', myInit)
    .then(function(response) {
      //console.log(response.json());
      return response.json();
    })
    .then(function(listObj) {
      console.log(listObj);
    });
}

function insertPipou() {
    
}

function updatePipou() {
    
}

function insertCancel(){

}

function insertCancel(){
    
}

listPipou();