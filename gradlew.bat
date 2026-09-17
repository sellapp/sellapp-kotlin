@echo off
setlocal
set "APP_HOME=%~dp0"
set "VERSION=8.9"
set "SHA256=d725d707bfabd4dfdc958c624003b3c80accc03f7037b5122c4b1d0ef15cecab"
if defined GRADLE_USER_HOME (set "CACHE_ROOT=%GRADLE_USER_HOME%") else (set "CACHE_ROOT=%USERPROFILE%\.gradle")
set "CACHE=%CACHE_ROOT%\wrapper\bootstrap\gradle-%VERSION%"
set "ZIP=%CACHE%-bin.zip"
if not exist "%CACHE%\bin\gradle.bat" (
  powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; New-Item -ItemType Directory -Force -Path (Split-Path $env:CACHE) | Out-Null; Invoke-WebRequest -UseBasicParsing ('https://services.gradle.org/distributions/gradle-' + $env:VERSION + '-bin.zip') -OutFile $env:ZIP; if ((Get-FileHash -Algorithm SHA256 -LiteralPath $env:ZIP).Hash.ToLower() -ne $env:SHA256) { throw 'Gradle checksum mismatch' }; Expand-Archive -Force -LiteralPath $env:ZIP -DestinationPath (Split-Path $env:CACHE); Remove-Item -LiteralPath $env:ZIP" || exit /b 1
)
call "%CACHE%\bin\gradle.bat" -p "%APP_HOME%" %*
