$(document).ready(function(){  
  $('#sizePicker').submit(function (event){ 
     gridHeight =$('#inputHeight').val();
     gridWidth =$('#inputWeight').val();
    event.preventDefault(); 
    makeGrid(gridHeight, gridWidth); 
  }); 

  function makeGrid(height,width){
    $('tr').remove();
    var i=1;
    while (i<=height) { 
      i++; 
      $('#pixelCanvas').append('<tr id=table></tr>');
      
      for (let j=1; j<=width; j++){ 
        $('tr:last').append('<td></td>'); 
        $('td').attr("class",'cells');  
      } 
    } 
    $('.cells').click(function (event){ 
      const cellColor = $('#colorPicker').val(); 
      $(event.target).css('background-color', cellColor); 
    }) 
  } 
});
