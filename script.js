function sendMessage(e){
    alert("Hi");

    return false;
}

function appendChat(message,alignLeft){
    var messageBox;
    
    if(alignLeft){
        messageBox = `<li class="chatroom_history_list_item chatroom_history_list_left chatroom_history_list_item--grey">${message}</li>`;
    }else{
        messageBox = `<li class="chatroom_history_list_item chatroom_history_list_right chatroom_history_list_item--blue">${message}</li>`;
    }
    var chatHistory = document.getElementsByClassName("chatroom_history_list")[0];
    chatHistory.insertAdjacentHTML('beforeend',messageBox);
    chatHistory.scrollTop = chatHistory.scrollHeight;

}