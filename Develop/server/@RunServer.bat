@rem author: SynthesisDu (https://github.com/SynthesisDu)
@rem proj repo: https://github.com/VMAxCoding/VMAClubSystem

@echo off
reg query HKEY_LOCAL_MACHINE\SOFTWARE\|find /i "Node.js">nul 2>nul
if %errorlevel%==0 (
call nodemon app.js
) else echo install node first
pause