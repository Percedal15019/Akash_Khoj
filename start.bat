@echo off
title Akash Khoj — Local Server
color 0B
cls

echo.
echo  ================================================
echo        AKASH KHOJ  ^|  Local Server Launcher
echo  ================================================
echo.
echo  Checking for Python...
echo.

:: Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] Python is not installed or not found in PATH.
    echo.
    echo  Please install Python from: https://www.python.org
    echo  Make sure to check "Add Python to PATH" during install.
    echo.
    pause
    exit /b
)

for /f "tokens=*" %%v in ('python --version 2^>^&1') do set PYVER=%%v
echo  [OK] %PYVER% detected.
echo  [OK] Starting server on http://127.0.0.1:5500
echo  [OK] Opening Akash Khoj in your browser...
echo.
echo  ------------------------------------------------
echo   URL  ^|  http://127.0.0.1:5500/akash-khoj/
echo  ------------------------------------------------
echo.
echo  Press Ctrl+C to stop the server.
echo.

:: Open the browser after a 2-second delay (runs in background)
:: Uses 127.0.0.1 (same origin as VS Code Live Server) to keep zoom consistent
start /b cmd /c "timeout /t 2 /nobreak >nul && start http://127.0.0.1:5500/akash-khoj/"

:: Start Python HTTP server from this directory
:: IMPORTANT: Must run from root so ../lunar/ ../nai/ ../hermes/ paths work
python -m http.server 5500

pause
