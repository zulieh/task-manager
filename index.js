const inputBox = document.getElementById('input-box');
const listItem = document.getElementById('list-items');
function addTask(){
    if(inputBox.value === ''){
        alert('You must add a task!');
    }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listItem.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = '';
    }