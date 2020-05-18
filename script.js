function sendMessage(e){
    var msg = document.getElementById("messageInput").value;

    appendChat(msg);
    return false;
}


function appendChat(message,alignLeft){
    var messageBox;
    
    //Append m,essage in UI
    if(alignLeft){
        messageBox = `<li class="chatroom_history_list_item chatroom_history_list_left chatroom_history_list_item--grey">${message}</li>`;
    }else{
        messageBox = `<li class="chatroom_history_list_item chatroom_history_list_right chatroom_history_list_item--blue">${message}</li>`;
    }
    var chatHistory = document.getElementsByClassName("chatroom_history_list")[0];
    chatHistory.insertAdjacentHTML('beforeend',messageBox);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    //Clear chat input
    document.getElementById("messageInput").value = '';
    

    //Send message
    socket.send(JSON.stringify({
      "type":"message",
      "data": message
    }));
}

//Websocket setup
var websocketApiKey = 'oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm';
var socket = new WebSocket("wss://connect.websocket.in/v3/1?apiKey="+websocketApiKey);

socket.onopen = function(e) {
    console.log("[open] Connection established");
  };
  
  socket.onmessage = function(event) {
    console.log(`[message] Data received from server: ${event.data}`);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('[close] Connection died');
    }
  };
  
  socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
  };