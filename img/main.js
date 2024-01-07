function showIcons(btnId) {

  console.log("hello")
  const buttons = document.querySelectorAll('.btns');
  buttons.forEach(button => {
      if (btnId && button.id === btnId.id) {
          button.style.right = '5px';
          button.style.zIndex = '3';
      } else {
        button.style.right = '50px';
        button.style.zIndex = '1';
      }
    });
  }
  
  function hideIcons() {
    const buttons = document.querySelectorAll('.btns');
    buttons.forEach(button => {
      button.style.zIndex = '1';
      button.style.right = '50px';
  });
}


const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.review-card');
let currentIndex = 0;

function showCard(index) {
    let newTransformValue = -index * 33+ '%';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
  currentIndex= currentIndex+1;
  
  if(currentIndex === 7){
       currentIndex = 0;
  }
  
  
}

 function nextCard() {
   
     showCard(currentIndex);
 }


setInterval(nextCard, 1500);