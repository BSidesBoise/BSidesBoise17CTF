#!/bin/bash

docker-compose build
docker-compose up -d
docker exec -it $(docker ps -f name=xxe_xxe_ssrf -q) /bin/bash -c "echo '#check /root for more hosts' >> /etc/hosts"