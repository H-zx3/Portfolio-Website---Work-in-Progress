function sayHello() {
    console.log("SVEIKI, SKAITOTE CONSOLE.LOG?");
  }
window.onload = sayHello; 



let spalvospakeitimas = document.getElementById('Link');
spalvospakeitimas.addEventListener('click', () => {
  if (spalvospakeitimas.style.color === 'red') {
    spalvospakeitimas.style.color = 'black';
  } else {
    spalvospakeitimas.style.color = 'red';
  }
});


