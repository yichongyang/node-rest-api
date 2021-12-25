@echo off

set count=1

if not "%1" == "" (
  set count=%1
)

set /a number=10000+%count%

for /l %%x in (10001, 1, %number%) do (
  start /B docker run -p %%x:8000 --name yyang-node-app-%%x yyang/node-app > nul 2>&1
)

exit 0
