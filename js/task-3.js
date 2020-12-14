const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Введите пороль');
if (message === null) {
  alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
} else if (message !== ADMIN_PASSWORD) {
  alert('Доступ запрещен, неверный пароль!');
}
