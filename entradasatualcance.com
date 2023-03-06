server {
    listen 80;
    server_name entradasatualcance.com www.entradasatualcance.com;

    location / {
        root /var/www/entradasatualcance;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}