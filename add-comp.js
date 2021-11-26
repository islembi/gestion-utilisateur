class AddComp extends HTMLElement {
    constructor() {
        super();
      
        let bouton = document.getElementById("btn-comp");
	
        bouton.addEventListener("click",function(){

    var tache = document.getElementById('tache').value;
    var tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    var rowCount = tbodyRef.rows.length;
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
        })
    }
}

customElements.define('add-comp', AddComp);
