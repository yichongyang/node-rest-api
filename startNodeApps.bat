@echo off

start /B docker run -p 8000:8000 --name yyang-node-app yyang/node-app > nul 2>&1

exit 0
