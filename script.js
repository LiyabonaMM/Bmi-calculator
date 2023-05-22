function calculateBMI() {
    // Get input values
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height to meters
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Display the result
    const bmiResult = document.getElementById('bmi');
    bmiResult.textContent = bmi.toFixed(2);
    bmiResult.parentNode.style.display = 'block';
  }
  