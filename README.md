GET IT

Иерархия
--------
App
  Header
  (Меню доступно на каждой странице. 
  Содержит пункты:  - ввод новой ошибки
                    - доска ошибок
                    - выход из системы )
  При первом запуске появляется страница ввода имени и пароля

  ErrorForm
    BasicForm
      FormItem
        FormLabel
        Input / Textarea / Select
      Button
  Table
    Пока ещё данные, введённые вручную (История ошибки)

  LoginForm
    BasicForm
      FormItem
        Input
      Button

  Kanban
    ErrorCard

Прототип системы учета ошибок, обнаруженных в процессе тестирования ПО
--------------------------------

- Ошибки должны быть зафиксированы и исправлены
- Наличие факта исправления должно быть проверено и отмечено

Система должна:
- поддерживать механизм аутентификации с помощью ввода имени и пароля пользователя.
Анонимный вход запрещен
- позволять вводить информацию об ошибках
- позволять просматривать список ошибок, введёных ранее
- поддерживать жизненный цикл ошибки:
    1) Новая
    2) Открытая
    3) Решенная
    4) Закрытая

В системе предполагаются следующие разделы:
- Страница ввода имени и пароля (вход в систему) - LoginForm
- Страница ввода ошибки: редактирование/отображение. Данная страница должна содержать историю ошибки
в виде отдельной таблицы, а также кнопки, изменяющие её статус. Для изменения статуса ошибки заполнение 
комментария - обязательно. - ErrorForm
- Страница с канбан-доской ошибок, откуда можно перейти к редактированию каждой ошибки по ссылке. - Kanban