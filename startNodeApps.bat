@echo off

start /B docker run -p 8080:8080 -p 8443:8443 --name yyang-node-app yyang/node-app > nul 2>&1

exit 0
