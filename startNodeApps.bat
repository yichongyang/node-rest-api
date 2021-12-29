@echo off

start /B docker run -d -p 8443:8443 --name yyang-node-app yyang/node-app > nul 2>&1
