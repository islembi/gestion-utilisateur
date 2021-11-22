//affichage modal
     $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })   

//ajout utilisateur
var list = document.getElementById('users');


function addUser(){
    var username = document.getElementById('username').value;
    var leprenom = document.getElementById('leprenom').value;
    var email = document.getElementById('email').value;
    var laposte = document.getElementById('laposte').value;
    var tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    var rowCount = $("#table tr").length;
// insertion ligne a la fin de table
var newRow = tbodyRef.insertRow();

// donner id a la ligne
newRow.id = "tr-"+rowCount;

// creation boutton
let btn = document.createElement("button");

// creation fonction delete avec le id  
btn.innerHTML = "Delete";

btn.onclick = function () {
  var row = document.getElementById("tr-"+rowCount);
    row.parentNode.removeChild(row);
};

// Append a nom
  var newNom = document.createTextNode(username);
  var newCell = newRow.insertCell();
  newCell.appendChild(newNom);
// Append a nom
  var newPrenom = document.createTextNode(leprenom);
  var newCell = newRow.insertCell();
  newCell.appendChild(newPrenom);
// Append a nom
  var newEmail = document.createTextNode(email);
  var newCell = newRow.insertCell();
  newCell.appendChild(newEmail);
 // Append a nom
  var newlaposte = document.createTextNode(laposte);
  var newCell = newRow.insertCell();
  newCell.appendChild(newlaposte);
 // Append  buton
  var newCell = newRow.insertCell();
  newCell.appendChild(btn);
  return false;
}

// Reset form après la fermeture 
function reset(){
    document.getElementById('tache').value = "";
}




//ajout de tache
var malist = document.getElementById('todo');


function addTache(){
    var tache = document.getElementById('tache').value;
    var tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    var rowCount = $("#table tr").length;
// insertion ligne a la fin de table
var newRow = tbodyRef.insertRow();

// donner id a la ligne
newRow.id = "tr-"+rowCount;

// creation boutton
let btn = document.createElement("button");

// creation fonction delete avec le id  
btn.innerHTML = "Delete";

btn.onclick = function () {
  var row = document.getElementById("tr-"+rowCount);
    row.parentNode.removeChild(row);
};

// Append a tache
  var newNom = document.createTextNode(tache);
  var newCell = newRow.insertCell();
  newCell.appendChild(newNom);


 // Append  buton
  var newCell = newRow.insertCell();
  newCell.appendChild(btn);
  return false;
}

// Reset form après la fermeture 
function reset(){
    document.getElementById('tache').value = "";
}




