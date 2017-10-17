#!/usr/bin/bash

docker run -u $(id -u) -v $(pwd):/tmp -w /tmp mhart/alpine-node:8.7 /bin/sh -c "yarn install --production && yarn build"
docker build . -t kubor:latest