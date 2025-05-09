document.getElementById('ticket-order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    // Пример уведомления (в реальном приложении здесь будет отправка почты)
    const message = `Спасибо, ${fullName}! Ваш билет из ${departure} в ${destination} на ${date} заказан. Мы отправили вам уведомление на ${email}.`;
    
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = message;
    confirmationMessage.classList.remove('hidden');

    // Здесь можно добавить логику отправки данных на сервер
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            console.log("Успешно отправлено:", response.status, response.text);
            document.getElementById('confirmation-message').innerText = "Сообщение успешно отправлено!";
        }, function(error) {
            console.log("Ошибка отправки:", error);
            document.getElementById('confirmation-message').innerText = "Ошибка, попробуйте еще раз.";
        });
});
