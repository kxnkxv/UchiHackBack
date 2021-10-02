# Uchi Backend

## Реализованная функциональность

* Модуль Пользователь
** Авторизация
** Intercept пользователя в запрос
** Паспорт
** Загрузка файлов в aws cloud

* Модуль Аутентификация
** JWT стратегия

* Модуль Здоровья
** Здоровье БД
** Здоровье NUTS

* Модуль Темы
** Пагинация
** Создание темы

* Модуль Вопрос
** Пагинация
** Темы по id Вопроса
** Создание вопроса
** Поиск похожих вопросов по простому поиску
** Поиск похожих вопросов с применением алгоритма Левенштейна (реализация PG)

* Модуль Ответа на вопрос
** Пагинация
** Ответы по id Вопроса
** Создание ответа с привязкой пользователя

* Модуль Коментария к вопросу
** Пагинация
** Коментарии по id Вопроса
** Создание коментария с привязкой пользователя

## Особенность проекта в следующем
----
* Расширяемость, CLI для создания доп. абстракций,
* DX, hot-reload при изменениях в коде,
* Готовый Docker-compose
* Автороутинг
* Автодокументация | Авто-Swagger 
* Автосоздание миграций
* Локализация через переменные
* Конфигурация через переменные окружения
* Возможность покрыть тестами, принудительный статический анализ и проверка форматирования
----

## Основной стек технологий
* Nest Framework
* typeorm
* PostgreSQL
* JWT для авторизации
* TS, es7

## Демо

`https://uchi.pointb.su/documentation`

`https://uchi.pointb.su`

## НЕОБХОДИМЫЕ УСЛОВИЯ ДЛЯ РАБОТЫ ПРИЛОЖЕНИЯ
* Наличие [docker-ce](https://docs.docker.com/engine/install/) и [docker-compose](https://docs.docker.com/compose/install/), 


## УСТАНОВКА, НАСТРОЙКА

### Приложение
* Установите docker и docker-compose по ссылкам выше, в соотвествии с вашей ОС
* Запуск осуществляется через команду `docker-compose up -d` в директории проекта, 
  Проект сразу доступен на localhost:3000,
* При необходимости добавления SSL - потребуется Nginx с certbot/zerobot-ssl

## БД 
Преконфигурирована, миграция накатываются автоматически при первом старте приложения

## Ручной запуск приложения
* Установите [Nodejs](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) в соотвествии с вашей ОС
* Установите [PostgreSQL](https://www.postgresql.org/download/)
* Заполните .env файл в соответсвии с вашими настройками, где
  ```
  # порт приложения
  PORT=3000
  # порт транспорта (для докера)
  TRANSPORT_PORT=8080
  # jwt ключ
  JWT_SECRET_KEY=rxPhglGJWPlOW596
  # jwt время протухание
  JWT_EXPIRATION_TIME=3600
  # фоллбек язык
  FALLBACK_LANGUAGE=en
  # NATS 
  NATS_ENABLED=false
  # логи 
  ENABLE_ORMLOGS=true
  # роут документации
  ENABLE_DOCUMENTATION=true

  # креды БД 
  DB_HOST=127.0.0.1
  DB_PORT=5432
  DB_USERNAME=postgres
  DB_PASSWORD=postgres
  DB_DATABASE=postgres

  # настройка AWS
  ## AWS S3
  AWS_S3_ACCESS_KEY_ID=
  AWS_S3_SECRET_ACCESS_KEY=
  AWS_S3_BUCKET_REGION=eu-central-1
  AWS_S3_API_VERSION=2010-12-01
  AWS_S3_BUCKET_NAME=boilerplate-bucket

  # Настройка NATS
  NATS_HOST=localhost
  NATS_PORT=4222
  ```
* для установки, зависимостией `npm install`
* для запуска дев-а `npm run watch:dev`
* для запуска прод-а `npm run start:prod`

## Разработчики

Кукарин Максим fullstack [почта](mailto:m.kukarin01@gmail.com)
