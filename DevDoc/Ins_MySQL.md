# 说明: 配置MySQL开发环境

[前言: 简述MySQL数据库在项目中的结构](./DevDoc/Ins_MySQL.md#前言-简述mysql数据库在项目中的结构)

[1 安装MySQL服务器](./DevDoc/Ins_MySQL.md#1-安装mysql服务器)

[2 项目中同步数据库文件](./DevDoc/Ins_MySQL.md#2-项目中同步数据库文件)

## 前言: 简述MySQL数据库在项目中的结构

[![1.jpg](https://i.postimg.cc/HkzxwJcS/1.jpg)](./\ImageHostingBackup/Ins_MySQL/1.jpg)

要在网站开发中使用MySQL数据库, 则需要每个开发环境下都安装并运行MySQL服务器。所以我在此简介一下数据库在项目中的结构。以及简单的安装方法。

如上图的项目结构模型, 虽然实际我们会相对简化, 但也不影响理解。图上的三层模型均是在如Node.js之类的环境下搭建, 而数据库则是在此之外的。简而言之，整个网站 (服务器端的搭建) 是由代码和数据库两部分组成的。

"数据库"本身是一个软件程序的概念, 就是说不同的数据库方案其实用到了完全不同的软件, 这些软件用特别优化的数据结构保存数据, 使这些数据可以以极快的速度被查阅。而其中有一些数据库软件选择使用一种统一的交互语言, 也就是SQL; 就是说这些数据库软件的内在可能完全不一样, 有些是用C实现的, 有些是用Java实现的, 但他们搭建了通用的接口。还有一些不使用SQL语句的数据库, 这些数据库用自己特化的接口。

所以每一种数据库软件搭建的数据库, 文件格式都不尽相同, 性能也大同小异, 因此用代码开发环境访问的方法也不同。这里我们用到的MySQL是常见的c/s结构数据库。也就是说数据库本身是一个服务器 (s), 而真人或我们写的程序都是以用户 (c) 的身份访问。而MySQL数据库使用TCP/IP协议, 因此连接时不论用户还是程序, 都需要提供【用户名】和【密码】, 如下给出几个不同"用户"进行连接的简化实例 (假设用户名【root】密码【12345678】)。

1. 用户在cmd中访问MySQL数据库:

   ```dos
   C:\Users\Admin> mysql -u root -p
   Enter password:12345678
   ```

2. python程序访问MySQL数据库:

   ```python
   import MySQLdb
   db = MySQLdb.connect(user = 'root', password = '12345678')
   ```

3. java程序访问MySQL数据库:

   ```java
   import java.sql.*;
   conn = DriverManager.getConnection('root', '12345678');
   ```

4. Node.js程序访问MySQL数据库:

   ```javascript
   var mysql = require('mysql');
   var connection = mysql.createConnection({user:'root', password:'12345678'});
   connection.connect();
   ```

当然如上实例多少进行了简化, 不过应该已经足以理解MySQL的接口与项目代码的连接方式了。不过如上代码能正常运行的前提是, 运行的环境中能访问到MySQL服务器, 这就是为什么各电脑上都要进行安装。

## 1 安装MySQL服务器

项目发布页处可以下载到msi安装包, 也可自行在官网下载, 统一版本号8.0.26.0。

<a href="./ImageHostingBackup/Ins_MySQL/1.png" target="_blank"><img  align="left" width="48%" src="https://i.postimg.cc/PxrJS9Rn/1.png" alt="1"/></a><a href="./ImageHostingBackup/Ins_MySQL/2.png" target="_blank"><img  align="right" width="48%" src="https://i.postimg.cc/xdPqyngP/2.png" alt="2"/></a> 

安装包中有组件选择, 此处只需添加8.0.26.0的Server即可。

<a href="./ImageHostingBackup/Ins_MySQL/11.png" target="_blank"><img align="left" width="48%" src="https://i.postimg.cc/kGPbffKQ/11.png" alt="11"/></a><a href="./ImageHostingBackup/Ins_MySQL/12.png" target="_blank"><img align="right" width="48%" src="https://i.postimg.cc/GtPsNGxZ/12.png" alt="12"/></a> 

其他步骤按默认即可, 唯一注意在填写密码处, 统一设定密码为【6lXVNlfK_ZX&】。

[![4.png](https://i.postimg.cc/rm3vbtwC/4.png)](./ImageHostingBackup/Ins_MySQL/4.png)

安装包按理说会直接添加path环境变量, 因此安装完成后可在cmd处尝试连接。

输入【mysql -u root -p】回车, 然后输入密码【6lXVNlfK_ZX&】, 应该能看到如下画面。

[![5.png](https://i.postimg.cc/Y9h5bxMC/5.png)](./ImageHostingBackup/Ins_MySQL/5.png)

如果提示"mysql不是关键词"则说明安装失败了。

## 2 项目中同步数据库文件

