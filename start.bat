@echo off
title AI for Health Procurement Platform - KCDH Ashoka
echo =====================================================================
echo  AI for Health Procurement Decision-Support Platform
echo  Koita Centre for Digital Health (KCDH), Ashoka University
echo =====================================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Node.js detected. Launching local server on port 3000...
    start http://localhost:3000
    node server.js
) else (
    echo [INFO] Node.js not found in PATH.
    echo [INFO] Opening platform directly in default web browser...
    start "" "%~dp0public\index.html"
)

pause
