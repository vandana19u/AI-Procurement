@echo off
title Push to GitHub (vandana19u/AI-Procurement)
echo =====================================================================
echo  Pushing AI-Procurement to GitHub
echo  Target: https://github.com/vandana19u/AI-Procurement
echo  Author/Contributor: vandana19u
echo =====================================================================
echo.

git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Project successfully pushed to https://github.com/vandana19u/AI-Procurement!
) else (
    echo [ERROR] Push failed. If prompted for password, use a GitHub Personal Access Token (PAT).
)

pause
