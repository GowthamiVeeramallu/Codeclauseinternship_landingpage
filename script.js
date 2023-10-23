document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // You can add code here to handle the email subscription, e.g., sending it to a server.
    alert(`Subscribed with email: ${email}`);
});
