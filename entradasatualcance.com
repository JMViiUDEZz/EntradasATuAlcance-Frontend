server {
        listen 80;
        listen [::]:80;

        root /var/www/entradasatualcance;
        index index.html index.htm index.nginx-debian.html;

        server_name entradasatualcance.com www.entradasatualcance.com;

        location / {
                try_files $uri $uri/ =404;
		}
}