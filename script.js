function workoutBMI() {
  // Get input values
  const theWeightInputw = document.getElementById('weight');
  const heightInputh = document.getElementById('height');
  const weight = parseFloat(theWeightInputw.value);
  const height = parseFloat(heightInputh.value) / 100; // Convert height to meters

  // Calculate BMI
  const bmi = weight / (height * height);

  // Display the result
  const myBmiResults = document.getElementById('bmi');
  myBmiResults.textContent = bmi.toFixed(2);
  myBmiResults.parentNode.style.display = 'block';

  // Check overweight status
  const theStatusResult = document.getElementById('status');
  if (bmi >= 25) {
    theStatusResult.textContent = 'Overweight';
  } else {
    theStatusResult.textContent = 'Not overweight';
  }
  theStatusResult.parentNode.style.display = 'block';
}
