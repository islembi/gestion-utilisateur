class FomrComp extends HTMLElement{
  
    constructor(){
        super();
var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");

var i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"username");
i.setAttribute('id',"tache");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");
s.setAttribute('id',"btn-comp");

this.appendChild(i);
this.appendChild(s);
}
}
customElements.define('form-comp', FomrComp);
