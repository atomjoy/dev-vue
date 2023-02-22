# Vue 3

Laravel Vue Spa.

## Instalacja

Zainstaluj composer i node.js na serwer.

### Laravel composer

```sh
rm -rf vendor/ composer.lock
composer install --no-dev
composer update --no-dev
```

### Vue spa kompilacja

```sh
# Go to
cd vue-project
# Install
npm install
# Vue build
npm run build
# Clear Laravel view cache
php artisan view:clear
# Php Laravel server
php ../artisan serve
```

### Uruchom

```sh
php artisan serve
```

## Testy

### Ustawienia .env

```env
APP_DEBUG=false
```

### Pakiety dev

```sh
composer update
```

### Przetestuj

```sh
php artisan test --stop-on-failure --testsuite=App
```

## Dodane pakiety Laravel

```sh
composer require atomjoy/webi "^9.0"
composer require atomjoy/vueon "^1.0"
```

## Dodane pakiety Vue

```sh
cd vue-project
npm install axios
npm install vue-i18n@9
npm install @googlemaps/js-api-loader
```
