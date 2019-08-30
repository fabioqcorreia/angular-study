FROM angular-base:latest as builder

WORKDIR /app

COPY . .

RUN npm install && \
    ng build --prod

FROM httpd:2.4-alpine as final

COPY --from=builder /app/dist/angular-study /usr/local/apache2/htdocs/
# COPY .htaccess /usr/local/apache2/htdocs/.htaccess

