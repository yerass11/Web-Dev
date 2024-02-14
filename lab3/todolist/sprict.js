let addToDoButton = document.getElementById('button_add');
let toDoContainer = document.getElementById('to_place_container');
let inputField = document.getElementById('input_text');

addToDoButton.addEventListener('click', function (){
    var divElement = document.createElement('div');
    divElement.classList.add('div_element_style');

    var isChecked = document.createElement('input');
    isChecked.type = 'checkbox';
    isChecked.classList.add('checkbox_style');

    var span = document.createElement('span');
    span.classList.add('span_style');
    span.innerText = inputField.value;
    if(span.innerText === ''){
        alert('Type Something');
        return;
    }

    var hr = document.createElement('hr');

    var deleteButton = document.createElement('img');
    deleteButton.src = 'images/370086_bin_delete_empty_out_recycle_icon.png';
    deleteButton.alt = 'garbage basket';
    deleteButton.classList.add('delete_button_style');

    divElement.appendChild(isChecked);
    divElement.appendChild(span);
    divElement.appendChild(deleteButton);
    toDoContainer.appendChild(divElement);
    toDoContainer.appendChild(hr);

    inputField.value = '';
    isChecked.addEventListener('click', function (){
        if(isChecked.checked){
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        } else {
            span.style.textDecoration = '';
            span.style.color = 'black';
        }
    });
    deleteButton.addEventListener('click',function (){
        toDoContainer.removeChild(divElement);
        toDoContainer.removeChild(hr);
    })
})