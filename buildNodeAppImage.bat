@echo off

FOR /F %%i IN ('docker ps -a -q --filter="name=yyang-node-app"') DO docker rm -f %%i

docker rmi -f yyang/node-app:latest
docker build . -t yyang/node-app

exit 0
