Прототип системы учета ошибок, обнаруженных в процессе тестирования ПО
-------------------------------------------------------------------------
GET IT

Разрабатываемая система предназначена для отслеживания ошибок, выявленных в процессе разработки и тестирования ПО.

Данная система позволяет:
- поддерживать механизм аутентификации с помощью ввода имени и пароля пользователя (анонимный вход запрещен);
- вводить информацию об ошибках;
- просматривать список ошибок, введёных ранее;
- поддерживать жизненный цикл ошибки:
    НОВАЯ -> ОТКРЫТАЯ <=> РЕШЁННАЯ -> ЗАКРЫТАЯ

Система состоит из следующих разделов:
- Страница ввода имени и пароля (вход в систему) -> LoginForm;
- Страница ввода ошибки: редактирование/отображение -> ErrorForm;
- Страница с канбан-доской ошибок, откуда можно перейти к редактированию каждой ошибки по ссылке -> Kanban.

Данное приложение разработано в виде Single Page Application с помощью ReactJS.
В качестве клиента поддерживаются следующие браузеры:
- Google Chrome;
- Internet Explorer (последняя версия);
- Microsoft Edge;
- Mozilla Firefox Browser;
- Opera.

Данные сохраняются в localStorage.
Использованы готовые элементы управления (material-ui).

Запуск приложения 
-----------------------------
Для запуска приложения необходимо скачать код из репозитория и запустить с помощью команды npm start. 
Или вы можете познакомиться с данным приложением здесь https://codesandbox.io/s/github/marikor168/GET_IT?file=/src/index.js.
Для удобства откройте приложение в новом окне (Open In New Window).

При запуске приложения появляется страница ввода имени и пароля пользователя. 
Ввод данных обязателен. Пока пользователь не пройдёт аутентификацию, он не будет иметь доступ к другим страницам приложения.
- ВАЖНО! Система  не подразумевает обеспечение безопасности приложения.

После ввода данных пользователь автоматически перенаправлется на страницу с канбан-доской.  
Теперь пользователь может вводить новые ошибки, редактировать существующие и просматривать их историю.
Когда пользователь нажимает "Выход из системы", он попадает на страницу ввода имени и пароля пользователя и больше не имеет доступ к данным приложения. 
Для возврата и дальнейшей работы пользователю необходимо вновь пройти аутентификацию.

Ввод новой ошибки
-----------------------------
Для создания новой ошибки необходимо перейти на соответствующую страницу (ввод новой ошибки).
Атрибуты ошибки:
- Номер или id (уникальный во всей системе, присваивается автоматически при сохранении);
- Дата ввода ошибки (устанавливается автоматически при сохранении);
- Короткое описание ошибки (поле обязательно для заполнения);
- Подробное описание (если необходимо более подробно описать все детали возникшей ошибки);
- Комментарий (поле обязательно для заполнения);
- Имя пользователя (устанавливается автоматически при сохранении);
- Статус ошибки (Новая, Открытая, Решённая, Закрытая. Здесь реализован жизненный цикл ошибки);
- Приоритет ошибки (Очень Высокий, Высокий, Средний, Низкий);
- Серьёзность ошибки (Критичная, Значительная, Незначительная, Запрос на изменение).

После сохранения данные об ошибке помещаются в localStorage. 
Пользователь перенаправлется на страницу с канбан-доской.

Редактирование ошибки
-----------------------------
Открыть ошибку для редактирования можно, кликнув на её карточку в канбан-доске. 
Далее открывается страница с формой для редактировния данной ошибки. Форма заполнена последними данными для простоты редактирования.
Поле с кратким описанием ошибки (её названием) становится недоступным к редактированию, так как при изменении названия ошибки её будет трудно найти другим пользователям. 
Ниже формы отображается таблица с историей изменений данной ошибки. 
Здесь указаны дата изменения, действие, совершенное с данной ошибкой (ввод, открытие, решение, закрытие), 
обязательный комментарий, который оставляет пользователь при совершении действия, и имя пользователя.
Вся информация (в том числе и история ошибки) хранится в localStorage, но в канбан-доске отображается только актуальное состояние ошибки.

The prototype of the system for accounting for errors
-----------------------------------------------------
GET IT 

The system is designed to track errors detected during the development and testing of software.

This system allows you to:
- support the authentication mechanism by entering the user name and password;
- enter information about errors;
- allow you to view a history of errors entered earlier;
- maintain the error life cycle:
    NEW -> OPENED <=> RESOLVED -> CLOSED

The system consists of the sections:
- Page for entering the name and password -> LoginForm;
- Error's page: edit / display -> ErrorForm;
- A page with a kanban, from where you can go to editing error -> Kanban.

This application is developed as a Single Page Application using ReactJS.
The folowing browsers are supported:
- Google Chrome;
- Internet Explorer (latest version);
- Microsoft Edge;
- Mozilla Firefox Browser;
- Opera.

Data is stored in localStorage.
Material-UI components are used.

Usage
-------------------

To run the application, you need to download the code from the repository and run it using the npm start command.
Or you can watch this app here https://codesandbox.io/s/github/marikor168/GET_IT?file=/src/index.js.
Open in new window.

When the application starts, you can see the page for entering the user name and password appears.
Until the user passes authentication, he will not have access to pages of the application.
- WARNING! The system does not imply security for the application.

After entering the data, the user is automatically redirected to the kanban board.
The user can enter new errors, edit them and record their history.
When the user clicks "Logout", he goes to the login page.
To return you must authenticate again.


Entering a new error
-----------------------------
To create a new error you should click to the "Enter a new error".
Error Attributes:
- Id (unique in the system, set automatically when saved);
- Date the error was entered (set automatically when saved);
- A short description or error's name (required field);
- A detailed description;
- Username (set automatically when saved);
- Error status (New, Opened, Resolved, Closed. The error life cycle is implemented here);
- Error priority (The highest, High, Medium, Low);
- Seriousness of the error (Critical, Significant, Insignificant, Request for change).

After saving data is placed in localStorage and  the user is redirected to the kanban board.

Edit the error
------------------------
The error form is filled with the latest data.
A field with a error's name becomes unavailable for editing.
Below you can see a table with the history of changes to this error.
The table consists of the date of the change, the action, comment and the username.
All information (including the error history) is stored in localStorage. 
The current error status is displayed in the kanban board.