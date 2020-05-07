let mainDiv = document.getElementById('main');

function toggle(event) {
  let buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle('blue');
}

for (let i = 1; i <= 20; i = i + 1) {
  let button = document.createElement('button');
  button.innerText = i;
  button.id = `btn-${i}`;
  mainDiv.appendChild(button);

  button.addEventListener('click', toggle);
}
