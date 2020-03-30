export const statusItems = [
  {value: "new", descr: "Новая", id: 1},
  {value: "opened", descr: "Открытая", id: 2},
  {value: "resolved", descr: "Решенная", id: 3},
  {value: "closed", descr: "Закрытая", id: 4},
];

export const priorityItems = [
  {value: "highest", descr: "Очень высокий", id: 1},
  {value: "high", descr: "Высокий", id: 2},
  {value: "medium", descr: "Средний", id: 3},
  {value: "low", descr: "Низкий", id: 4},
];

export const seriousnessItems = [
  {value: "critical", descr: "Критичная", id: 1},
  {value: "significant", descr: "Значительная", id: 2},
  {value: "insignificant", descr: "Незначительная", id: 3},
  {value: "change request", descr: "Запрос на изменение", id: 4},
];

export const errorData = [
  {id: 1, kind: "input", htmlFor:"id", value:"Номер", type:"text", name: "id", placeholder: "Номер", disabled: true, required: false},
  {id: 2, kind: "input", htmlFor:"date", value:"Дата", type:"text", name: "date", placeholder: "Дата", disabled: true, required: false},
  {id: 3, kind: "input", htmlFor:"error_name", value:"Краткое описание ошибки", type:"text", name: "error_name", placeholder: "Краткое описание ошибки", disabled: false, required: true},
  {id: 4, kind: "textarea", htmlFor:"error_description", value:"Подробное описание ошибки", type:"text", name: "error_description", placeholder: "Опишите ошибку подробно"},
  {id: 5, kind: "input", htmlFor:"user", value:"Пользователь", type: "text", name: "user", placeholder: "Пользователь", disabled: true, required: false},
  {id: 6, kind: "select", htmlFor:"status", value:"Статус ошибки", name: "status", options: statusItems },
  {id: 7, kind: "select", htmlFor:"priority", value:"Приоритет", name: "priority", options: priorityItems },
  {id: 8, kind: "select", htmlFor:"seriousness", value:"Серьёзность", name: "seriousness", options: seriousnessItems },
];

export const errors = [
  {id: 1, date: "05.02.2020", error_name: "Исправить канбан-доску", error_description: "Создать массив ошибок для проверки", user: "Мария Короткова", status: "Новая", priority: "Средний", seriousness: "Незначительная"},
  {id: 2, date: "05.02.2020", error_name: "Проверить функциональность формы", error_description: "Форма не отправляется", user: "Александр Иксанов", status: "Открытая", priority: "Средний", seriousness: "Незначительная"},
  {id: 3, date: "06.02.2020", error_name: "Сверстать кнопку", error_description: "Сверстать кнопку", user: "Мария Короткова", status: "Новая", priority: "Открытая", seriousness: "Запрос на изменение"},
  {id: 4, date: "06.02.2020", error_name: "Добавить тени в форме", error_description: "Без теней совсем плохо", user: "Вася Пупкин", status: "Новая", priority: "Средний", seriousness: "Незначительная"},
  {id: 5, date: "07.02.2020", error_name: "Сверстать форму для входа в систему", error_description: "Сверстать форму для входда в систему", user: "Олег Иванов", status: "Решённая", priority: "Высокий", seriousness: "Значительная"},
  {id: 6, date: "07.02.2020", error_name: "Доработать таблицу истории ошибки", error_description: "Поле комментария должно быть обязательным", user: "Дмитрий Петров", status: "Решённая", priority: "Низкий", seriousness: "Незначительная"},
  {id: 7, date: "08.02.2020", error_name: "Поработать над цветовой схемой", error_description: "Выбрать цвет", user: "Виктор Сидоров", status: "Закрытая", priority: "Низкий", seriousness: "Критичная"},
  {id: 8, date: "09.02.2020", error_name: "Сверстать шапку приложения", error_description: "Сверсать менюшку", user: "Мария Короткова", status: "Новая", priority: "Средний", seriousness: "Незначительная"},
  {id: 9, date: "10.02.2020", error_name: "Попить кофейку", error_description: "Кофеёчек это важно", user: "Мария Короткова", status: "Новая", priority: "Очень высокий", seriousness: "Критичная"},
  {id: 10, date: "11.02.2020", error_name: "Выделить компоненты", error_description: "Выделить компоненты", user: "Виктор Сидоров", status: "Открытая", priority: "Средний", seriousness: "Незначительная"},
];