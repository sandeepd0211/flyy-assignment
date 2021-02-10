window.onload = () => {
  let submitBtn = document.querySelector('.submit-btn');
  let options = document.querySelectorAll('.option');
  let correctIcon = document.createElement('i');
  correctIcon.classList.add("fa", "fa-check-circle", "correct", "hidden");
  let wrongIcon = document.createElement('i');
  wrongIcon.classList.add("fa", "fa-times-circle", "wrong", "hidden");
  options.forEach(option => {
    option.onclick = () => {
      option.classList.add('selected');
    }
  })
  submitBtn.onclick = (e) => {
    console.log('clicked');
    options.forEach(option => {

      if (option.querySelector('.option-title').innerHTML === 'C') {
        option.appendChild(correctIcon);
        option.querySelector('.correct').classList.remove('hidden');
      } else {
        if (option.classList.contains('selected')) {
          option.appendChild(wrongIcon);
          option.querySelector('.wrong').classList.remove('hidden');
          option.style.backgroundColor = 'white';
          option.style.borderColor = 'red';
        }
      }
    })
  }
}