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

////////////////////////////

function onExcluir(){
  let confirmation= document.getElementById("excluir");
  if(!confirmation.classList.contains("modal-open")){
    confirmation.classList.add("modal-open");
  }
}

function onExit(){
  let confirmation= document.getElementById("excluir");
    confirmation.classList.remove("modal-open");
}

function onConfirmar(){
  onExit();
}
