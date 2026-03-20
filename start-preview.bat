@echo off
setlocal
cd /d %~dp0
echo Starte lokalen Server auf Port 8000 ...
python -m http.server 8000
echo.
echo Server beendet.
pause
