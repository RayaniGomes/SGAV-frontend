function onAdd(){
  let confirmation= document.getElementById("confirmation");
  if(!confirmation.classList.contains("modal-open")){
    confirmation.classList.add("modal-open");
  }
}

function onCancel(){
  let confirmation= document.getElementById("confirmation");
    confirmation.classList.remove("modal-open");
}

function onConfirm(){
  onCancel();
}


function onAdd(){
  let confirmation= document.getElementById("confirmation2");
  if(!confirmation.classList.contains("modal-open")){
    confirmation.classList.add("modal-open");
  }
}

function onCancel(){
  let confirmation= document.getElementById("confirmation2");
    confirmation.classList.remove("modal-open");
}

function onConfirm(){
  onCancel();
}