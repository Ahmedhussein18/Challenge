# Use PHP:8.1 base image
FROM php:8.1-cli

# Install dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git \
    && docker-php-ext-install zip pdo pdo_mysql

# Set the working directory
WORKDIR /var/www

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy application code
COPY . .
RUN composer update
# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose port 8000
EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0"]

