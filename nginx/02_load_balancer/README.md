# NGINX Load-balancer

creates an nginx Loadbalancer and 2 node express server instances.
Loadbalancer is visible on port 8080
server1 is visible on port 8081
server3 is visible on port 8082

# Usage should be:

    docker-compose up

# Test

Visit

localhost:8080

refresh your browser a few times and see the message switch between the two node instances.  
