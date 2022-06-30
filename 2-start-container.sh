#!/bin/bash

image_name='marsan/honeyboss'
container_name='honeyboss'
port_mapping='4000:4000'

docker rm -f $container_name
docker run -d \
    --name=$container_name \
    --shm-size=512m \
    -v $HOME/workspace:/home/workspace \
    -p $port_mapping \
    -it $image_name

# workaround docker terminal size problem: https://github.com/moby/moby/issues/33794
alias mldm='docker exec -e COLUMNS="`tput cols`" -e LINES="`tput lines`" -ti $image_name bash'

