@rem author: SynthesisDu (https://github.com/SynthesisDu)
@rem proj repo: https://github.com/VMAxCoding/VMAClubSystem

@echo off
reg query HKEY_LOCAL_MACHINE\SOFTWARE\|find /i "Node.js">nul 2>nul
if %errorlevel%==0 (
call npm i -g nodemon
call npm init -y
call npm i -g cnpm -registry=https://registry.npm.taobao.org
call cnpm i express mysql --save dev
call cnpm install body-parser --save
call cnpm install cookie-parser --save
call cnpm install multer --save
) else echo Go [http://nodejs.cn/download/current/] to download and install node.js first you silly b!
pause