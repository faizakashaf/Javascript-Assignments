 //Assignment 03

  function paragraph(texcont){  
    document.addEventListener('DOMContentLoaded', function(){
    let pgh  = document.createElement('p');
     pgh.textContent = texcont;
    document.body.appendChild(pgh);
    })
  }
paragraph ("This is a way to call out the function");