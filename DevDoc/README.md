# Develop Document 开发文档 [-English version](./README_eng.md)

[(1) Markdown文档编写范式](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#1-markdown%E6%96%87%E6%A1%A3%E7%BC%96%E5%86%99%E8%8C%83%E5%BC%8F)

----[1.1 范式](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#11-%E8%8C%83%E5%BC%8F)

----[1.2 ImageHostingBackup 文件夹](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#12-imagehostingbackup-%E6%96%87%E4%BB%B6%E5%A4%B9)

--------[1.2.1 写文档时如何嵌入图片](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#121-%E5%86%99%E6%96%87%E6%A1%A3%E6%97%B6%E5%A6%82%E4%BD%95%E5%B5%8C%E5%85%A5%E5%9B%BE%E7%89%87)

[(2) 前端界面设计](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#2-%E5%89%8D%E7%AB%AF%E7%95%8C%E9%9D%A2%E8%AE%BE%E8%AE%A1)

----[2.1 设计参考](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#21-%E8%AE%BE%E8%AE%A1%E5%8F%82%E8%80%83)

--------[2.1.1 ClubSystemVisualReference 设计效果图](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#211-clubsystemvisualreference-%E8%AE%BE%E8%AE%A1%E6%95%88%E6%9E%9C%E5%9B%BE)

--------[2.1.2 CustomerRequiresDiagram 功能结构](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#212-customerrequiresdiagram-%E5%8A%9F%E8%83%BD%E7%BB%93%E6%9E%84)

## (1) Markdown说明文档编写范式

### 1.1 范式

1. 所有文档需保证能用GitHub网页无障碍阅读, 不应包含如Typora等编辑器的特殊格式
2. 所有文档应添加目录, 目录格式参考本文所用的[TOC]风格
3. 各级段落使用markdown自带的#符 (如##是二级标题, ###是三级标题), 并从二级标题开始标序, 便于目录查阅
4. 文档内使用图片, 需在两处上传, 一处任意第三方图床, 另一处在项目[ImageHostingBackup](./ImageHostingBackup)文件夹内, 创建与文档同名的文件夹, 保存备份 (因为直接使用GitHub做为图床时常遇到加载异常, 不便阅读)
5. 参阅
6. 如有必要编写英文说明文档, 可在中文文档完成后翻译, 另存为<原文件名_eng.md>文件, 放在同一处, 并在文件头标题处增加跳转链接

### 1.2 ImageHostingBackup 文件夹

此文件夹作为对各md文档涉及的图片的统一归档备份, 文档内嵌入的图片强烈推荐使用第三方图床

#### 1.2.1 写文档时如何嵌入图片

文档中涉及的图片, 在markdown或内嵌html中是如下格式:

```
[![A](B)](C)
```

```
<a href="C" target="_blank"><img src="B" alt="A"/></a>
```

其中A是文档内标识名, 可随意

B处是图床URL, 图床随作者随意使用任意图床不限, 可在GitHub上正常查阅即可

C处是点击图片跳转的URL, 此处一律填写在[ImageHostingBackup](./ImageHostingBackup)文件夹下的备份的路径, 注意使用相对路径 (因为Branch分叉会改变绝对路径)

## (2) 前端界面设计

### 2.1 设计参考

#### 2.1.1 ClubSystemVisualReference 设计效果图

<a href="./ImageHostingBackup/DevDoc.README/ClubSystem_LoginPage.png" target="_blank"><img src="https://i.postimg.cc/FdmJXDTq/Club-System-Login-Page.png" alt="Club-System-Login-Page"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_AddClub_MiddleView.png" target="_blank"><img src="https://i.postimg.cc/Y4BvQdB9/Club-System-Student-Add-Club-Middle-View.png" alt="Club-System-Student-Add-Club-Middle-View"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_Events.png" target="_blank"><img src="https://i.postimg.cc/CBNnhktK/Club-System-Student-Events.png" alt="Club-System-Student-Events"/></a><a href="./ImageHostingBackup/DevDoc.README/SlubSystem_Student_AddClub_Top.png" target="_blank"><img src="https://i.postimg.cc/VS9dgXzF/Slub-System-Student-Add-Club-Top.png" alt="Slub-System-Student-Add-Club-Top"/></a>

#### 2.1.2 CustomerRequiresDiagram 功能结构

[![v1-0-0.jpg](https://i.postimg.cc/prPCKZZy/v1-0-0.jpg)](./\ImageHostingBackup/DevDoc.README/v1.0.0.jpg)

