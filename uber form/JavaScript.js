document.getElementById('reportForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Validate form inputs
    const issueType = document.getElementById('issueType').value;
    const details = document.getElementById('details').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!issueType || !details || !email) {
        alert("Please fill out all required fields.");
        return;
    }

    // Show success message and hide form
    document.getElementById('reportForm').reset();
    document.getElementById('successMessage').classList.remove('hidden');

    setTimeout(function () {
        document.getElementById('successMessage').classList.add('hidden');
    }, 5000);
});
