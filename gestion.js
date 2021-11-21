//affichage modal
     $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })   

//ajout utilisateur
var list = document.getElementById('users');


function addUser(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(username + ' ' + email));
    list.appendChild(entry);
    
    return false;
}