# NGINX reverse proxy 

creates a reverse proxy where 
requests to / are directed to server1 
requests to /secure are directed to server2

server1 is visible on port 8081
server2 is visible on port 8082

# Usage should be:

    docker-compose up

# Test

Visit

localhost:8080/
localhost:8080/secure

