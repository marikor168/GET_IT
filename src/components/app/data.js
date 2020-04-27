// options for select (status of error)
export const statusItems = [
  {value: "new", descr: "Новая", id: 1},
  {value: "opened", descr: "Открытая", id: 2},
  {value: "resolved", descr: "Решенная", id: 3},
  {value: "closed", descr: "Закрытая", id: 4},
];

// options for select (priority of error)
export const priorityItems = [
  {value: "highest", descr: "Очень высокий", id: 1},
  {value: "high", descr: "Высокий", id: 2},
  {value: "medium", descr: "Средний", id: 3},
  {value: "low", descr: "Низкий", id: 4},
];

// options for select (seriousness of error)
export const seriousnessItems = [
  {value: "critical", descr: "Критичная", id: 1},
  {value: "significant", descr: "Значительная", id: 2},
  {value: "insignificant", descr: "Незначительная", id: 3},
  {value: "change", descr: "Запрос на изменение", id: 4},
];

// DATA of fields in the ErrorForm (input, textarea, select)
export const errorData = [
  {id: 1, kind: "input", htmlFor:"id", labelName:"Номер", type:"text", name: "id", placeholder: "Номер", required: false},
  {id: 2, kind: "input", htmlFor:"date", labelName:"Дата", type:"text", name: "date", placeholder: "Дата", required: false},
  {id: 3, kind: "input", htmlFor:"error_name", labelName:"Краткое описание ошибки", type:"text", name: "error_name", placeholder: "Краткое описание ошибки", required: true},
  {id: 4, kind: "textarea", htmlFor:"error_description", labelName:"Подробное описание ошибки", type:"text", name: "error_description", placeholder: "Опишите ошибку подробно", required: false},
  {id: 5, kind: "textarea", htmlFor:"error_comment", labelName:"Комментарий", type:"text", name: "error_comment", placeholder: "Комментарий", required: true},
  {id: 6, kind: "input", htmlFor:"user", labelName:"Пользователь", type: "text", name: "user", placeholder: "Пользователь", required: false},
  {id: 7, kind: "select", htmlFor:"status", labelName:"Статус ошибки", name: "status", options: statusItems },
  {id: 8, kind: "select", htmlFor:"priority", labelName:"Приоритет", name: "priority", options: priorityItems },
  {id: 9, kind: "select", htmlFor:"seriousness", labelName:"Серьёзность", name: "seriousness", options: seriousnessItems },
];

// Тестовый набор ошибок
export const errors = [
  {id: 1, date: "05.02.2020", error_name: "Исправить канбан-доску", error_description: "Создать массив ошибок для проверки", error_comment: "Здесь мог быть Ваш комментарий", user: "Мария Короткова", status: "new", priority: "medium", seriousness: "insignificant", current: true},
  {id: 2, date: "05.02.2020", error_name: "Проверить функциональность формы", error_description: "Форма не отправляется", error_comment: "Здесь мог быть Ваш комментарий", user: "Александр Иксанов", status: "opened", priority: "medium", seriousness: "insignificant", current: true},
  {id: 3, date: "06.02.2020", error_name: "Сверстать кнопку", error_description: "Сверстать кнопку", error_comment: "Здесь мог быть Ваш комментарий", user: "Мария Короткова", status: "new", priority: "medium", seriousness: "change", current: false},
  {id: 4, date: "06.02.2020", error_name: "Добавить тени в форме", error_description: "Без теней совсем плохо", error_comment: "Здесь мог быть Ваш комментарий", user: "Вася Пупкин", status: "new", priority: "medium", seriousness: "insignificant", current: true},
  {id: 5, date: "07.02.2020", error_name: "Сверстать форму для входа в систему", error_description: "Сверстать форму для входда в систему", error_comment: "Здесь мог быть Ваш комментарий", user: "Олег Иванов", status: "resolved", priority: "high", seriousness: "significant", current: true},
  {id: 6, date: "07.02.2020", error_name: "Доработать таблицу истории ошибки", error_description: "Поле комментария должно быть обязательным", error_comment: "Здесь мог быть Ваш комментарий", user: "Дмитрий Петров", status: "resolved", priority: "low", seriousness: "insignificant", current: true},
  {id: 7, date: "08.02.2020", error_name: "Поработать над цветовой схемой", error_description: "Выбрать цвет", error_comment: "Здесь мог быть Ваш комментарий", user: "Виктор Сидоров", status: "opened", priority: "low", seriousness: "critical", current: false},
  {id: 8, date: "09.02.2020", error_name: "Сверстать шапку приложения", error_description: "Сверсать менюшку", error_comment: "Здесь мог быть Ваш комментарий", user: "Мария Короткова", status: "new", priority: "medium", seriousness: "insignificant", current: true},
  {id: 9, date: "10.02.2020", error_name: "Попить кофейку", error_description: "Кофеёчек это важно", error_comment: "Здесь мог быть Ваш комментарий", user: "Мария Короткова", status: "new", priority: "highest", seriousness: "critical", current: true},
  {id: 10, date: "11.02.2020", error_name: "Выделить компоненты", error_description: "Выделить компоненты", error_comment: "Здесь мог быть Ваш комментарий", user: "Виктор Сидоров", status: "opened", priority: "medium", seriousness: "insignificant", current: true},
  {id: 7, date: "18.02.2020", error_name: "Спеть песенку", error_description: "Любую", error_comment: "Здесь мог быть Ваш комментарий", user: "Алёна Николаева", status: "closed", priority: "low", seriousness: "insignificant", current: true},
  {id: 3, date: "07.02.2020", error_name: "Сверстать кнопку", error_description: "Сверстать форму", error_comment: "Здесь мог быть Ваш комментарий", user: "Мария Короткова", status: "new", priority: "low", seriousness: "insignificant", current: false},
  {id: 3, date: "16.03.2020", error_name: "Сверстать кнопку", error_description: "Добавить тени и эффекты при наведении", error_comment: "Здесь мог быть Ваш комментарий", user: "Александр Иксанов", status: "opened", priority: "medium", seriousness: "critical", current: false},
  {id: 3, date: "16.04.2020", error_name: "Сверстать кнопку", error_description: "Добавить стили", error_comment: "Здесь есть уже Ваш комментарий", user: "Валерия Александрова", status: "closed", priority: "highest", seriousness: "change", current: true},
];