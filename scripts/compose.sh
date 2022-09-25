#!/bin/bash
arg=$1
case $arg in
    up)
        docker-compose -f mongo_docker_compose.yaml up -d

        ;;
    down)
        docker-compose -f mongo_docker_compose.yaml down 
        ;;
    *)
        echo "Wrong arg $arg"
        ;;
esac