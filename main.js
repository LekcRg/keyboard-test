const quantityBlock = document.querySelector('.js-key-quantity'),
  resultBlock = document.querySelector('.js-key-result');
let quantity = parseInt(quantityBlock.innerHTML),
  result = resultBlock.innerText;

document.addEventListener(('keydown'), e => {
  e.preventDefault();
  let key;

  (e.key === ' ') ? key = 'Space' : key = e.key;

  const resultText = `${result}\n<span>${key}</span>`;

  const audio = new Audio('./click.mp3');
  audio.play();

  resultBlock.innerHTML = resultText;
  result = resultText;
  if (resultBlock.scrollTop !== 0) resultBlock.scrollTop = 0;

  quantityBlock.innerHTML = quantity++;
});
