$(function(){
})

function deleteReserve(idR){
    $.ajax({
        url:"http://localhost:7778/reserves/"+idR,
        type: 'DELETE',
        success: function(response) {
          // Handle the successful response
          window.location.href ="http://localhost:7777/profile"
        },
        error: function(xhr, status, error) {
          // Handle the error
          console.log(error);
        }
      });
    
  }