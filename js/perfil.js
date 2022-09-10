function onHabilidades(){
    let confirmation= document.getElementById("skills");
    if(!confirmation.classList.contains("modal-open")){
      confirmation.classList.add("modal-open");
    }
  }
  
  function onFechar(){
    let confirmation= document.getElementById("skills");
      confirmation.classList.remove("modal-open");
  }
  
  function onInserir(){
    onFechar();
  }