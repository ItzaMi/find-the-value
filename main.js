const imageContainer = document.getElementById('clue');
const wrongAnswer = document.getElementById('wrongAnswer');

const submitResponse = () => {
  const value = document.querySelector('input').value;
  if (value === '207') {
    imageContainer.style.display = 'flex';
  } else {
    wrongAnswer.style.display = 'block';

    setTimeout(() => {
      wrongAnswer.style.display = 'none';
    }, 1000);
  }
};

imageContainer.addEventListener('click', () => {
  imageContainer.style.display = 'none';
});
