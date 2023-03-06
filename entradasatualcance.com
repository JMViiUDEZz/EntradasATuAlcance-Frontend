server {
        listen 80;
        listen [::]:80;

        root /var/www/entradasatualcance;
        index index.html index.htm index.nginx-debian.html;

        server_name entradasatualcance.com www.entradasatualcance.com;

		location /favicon.ico {
			return 204;
			access_log     off;
			log_not_found  off;
		}
		
        location / {
			try_files $uri $uri/ =404;
			proxy_pass	http://localhost:3000;
			proxy_http_version 1.1;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection 'upgrade';
			proxy_set_header Host $host;
			proxy_cache_bypass $http_upgrade;
		}
}