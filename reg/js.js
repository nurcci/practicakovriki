 // Обработчик клика по кнопке "заказать"
 document.getElementById('orderBtn').addEventListener('click', function() {
    // Прокручиваем к форме
    document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' });
    // Показываем форму
    document.getElementById('orderForm').classList.add('active');
});

// Обработчик отправки формы
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь можно добавить код для отправки данных формы
    alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});