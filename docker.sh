# Comandos Docker
# docker compose -f /var/lib/jenkins/workspace/Job-EntradasATuAlcance-Frontend/docker-compose.yml build 
# --no-cache
# docker compose -f /var/lib/jenkins/workspace/Job-EntradasATuAlcance-Frontend/docker-compose.yml down 
# --remove-orphans
docker compose -f /var/lib/jenkins/workspace/Job-EntradasATuAlcance-Frontend/docker-compose.yml up -d

# docker build -t app-image .
# docker run -p 81:80 --name app-container app-image
