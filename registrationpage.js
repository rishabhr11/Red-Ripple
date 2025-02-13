// Get the checkbox, date input, and donation date display elements
const checkbox = document.getElementById('donationCheckbox');
const datePicker = document.getElementById('donationDatePicker');
const donationDate = document.getElementById('donationDate');

// Add event listener to checkbox
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    // Show the date input field when checkbox is checked
    datePicker.style.display = 'block';
  } else {
    // Hide the date input field when checkbox is unchecked
    datePicker.style.display = 'none';
    donationDate.style.display = 'none'; // Hide donation date text as well
  }
});

// Add event listener to date picker
datePicker.addEventListener('change', function() {
  const selectedDate = new Date(datePicker.value).toLocaleDateString();
  donationDate.textContent = `Selected Donation Date: ${selectedDate}`;
  donationDate.style.display = 'block'; // Show the donation date text
});
