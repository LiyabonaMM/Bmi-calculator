
function workoutBMI() {
  // Input values
  const weightInputw = document.getElementById('weight');
  const heightInputh = document.getElementById('height');
  const weight = parseFloat(weightInputw.value);
  const height = parseFloat(heightInputh.value) / 100; // Convert height to meters

  // Calculate BMI
  const bmi = weight / (height * height);

  // The results
  const theBmiResults = document.getElementById('bmi');
  theBmiResults.textContent = bmi.toFixed(2);
  theBmiResults.parentNode.style.display = 'block';

  // Checking The overweight status
  const theStatusResults = document.getElementById('status');
  if (bmi >= 25) {
    theStatusResults.textContent = 'Overweight 😔';
  } else {
    theStatusResults.textContent = 'Not Overweight 😄';
  }
  theStatusResults.parentNode.style.display = 'block';
}

