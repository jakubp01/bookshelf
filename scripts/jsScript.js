function openBox(box) {
  let messageScreen = document.getElementById(box);
  messageScreen.classList.add("messageScreenOpen");
  
}

function closeBox(box) {
  let messageScreen = document.getElementById(box);
  messageScreen.classList.remove("messageScreenOpen");
  let textAreaMessage = document.getElementById("messageTextArea");
  textAreaMessage.value = "";
  
}







