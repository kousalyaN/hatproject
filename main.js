let addtodo = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');
addtodo.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = inputfield.value;
    todocontainer.appendChild(paragraph);
})