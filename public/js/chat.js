var socket = io();

function clearTextInput()
{
    // Clear the user entered text message upon transmission to the server.
    $("#inputMessageTextBox").val("");
}

function sendMessage() {

  socket.emit('chat message', $('#inputMessageTextBox').val());
  
  // And also add this message to the TextArea in the UI.
  // TODO: $("#conversationHistoryTextArea").val( $("#conversationHistoryTextArea").val() + "\n" + "YOU: " + $("#inputMessageTextBox").val() );
}

socket.on('chat message', function(msg){
  $("#conversationHistoryTextArea").val( $("#conversationHistoryTextArea").val() + "\n" + "YOU: " + msg );
});
