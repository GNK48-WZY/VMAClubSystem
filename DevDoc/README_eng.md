# Develop Document Folder [-中文版](./README.md)

[1 Markdown README Document Normal Form](./README_eng.md#1-markdown-readme-document-normal-form)

----[1.1 Normal Form](./README_eng.md#11-normal-form)

----[1.2 ImageHostingBackup Folder](./README_eng.md#12-imagehostingbackup-folder)

--------[1.2.1 How to Inset Images in Documents](./README_eng.md#121-how-to-inset-images-in-documents)

[2 Design](./README_eng.md#2-gui-design)

----[2.1 Design Reference](./README_eng.md#21-design-reference)

--------[2.1.1 ClubSystemVisualReference Design Effect Rendering](./README_eng.md#211-clubsystemvisualreference-design-effect-rendering)

--------[2.1.2 CustomerRequiresDiagram Functional Structure](./README_eng.md#212-customerrequiresdiagram-functional-structure)

[3 Git Work Flow](./README_eng.md#3-git-work-flow)

----[3.1 Branchs](./README_eng.md#31-branchs)

--------[3.1.1 Branch -main](./README_eng.md#311-branch--main)

--------[3.1.2 Branch -dev](./README_eng.md#312-branch--dev)

--------[3.1.3 Branch -(features)](./README_eng.md#313-branch--features)

------

## 1 Markdown README Document Normal Form

### 1.1 Normal Form

1. All documents should be readable on GitHub web and should not include special formats from markdown editors such as Typora.
2. All documentation should include a table of contents in the [TOC] style just like in this doc.
3. Use markdown's # sign (for example ## is a secondary heading and ### is a tertiary heading), and start serial number from the secondary heading for easy directory access.
4. To use an image in a document, you need to upload it in both a third-party image folder and in the project's [ImageHostingBackup](./ImageHostingBackup) folder. Create a folder with the same name as the document in ImageHostingBackup for save the backup.
5. Read: [1.2 ImageHostingBackup Folder](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#12-imagehostingbackup-%E6%96%87%E4%BB%B6%E5%A4%B9).
6. If it is necessary to write an English documentation, you can translate the Chinese documentation after completion, save it as a file < original filename _eng.md> in the same place, and add a jump link at the header header.

------

### 1.2 ImageHostingBackup Folder

This folder serves as a unified archive and backup of the images involved in each MD document. It is highly recommended to use a third-party image host for the images embedded in the document.

------

#### 1.2.1 How to Inset Images in Documents

The images involved in the document, in MarkDown or embedded HTML, are like the following format:  

```
[![A](B)](C)
```

```html
<a href="C" target="_blank"><img src="B" alt="A"/></a>
```

A is the identifier in the document, which can be arbitrary.

B is the image host's URL, the choose of image host is free by the document's author.

C is the URL which is the click-jump link, here should all be the path of the backup folder in [ImageHostingBackup](./ImageHostingBackup) folder. Because git branch will change the abs path, here should use relative path.

------

## 2 Design

### 2.1 Design Reference

#### 2.1.1 ClubSystemVisualReference Design Effect Rendering

<a href="./ImageHostingBackup/DevDoc.README/ClubSystem_LoginPage.png" target="_blank"><img src="https://i.postimg.cc/FdmJXDTq/Club-System-Login-Page.png" alt="Club-System-Login-Page"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_AddClub_MiddleView.png" target="_blank"><img src="https://i.postimg.cc/Y4BvQdB9/Club-System-Student-Add-Club-Middle-View.png" alt="Club-System-Student-Add-Club-Middle-View"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_Events.png" target="_blank"><img src="https://i.postimg.cc/CBNnhktK/Club-System-Student-Events.png" alt="Club-System-Student-Events"/></a><a href="./ImageHostingBackup/DevDoc.README/SlubSystem_Student_AddClub_Top.png" target="_blank"><img src="https://i.postimg.cc/VS9dgXzF/Slub-System-Student-Add-Club-Top.png" alt="Slub-System-Student-Add-Club-Top"/></a>

------

#### 2.1.2 CustomerRequiresDiagram Functional Structure

[![v1-0-0.jpg](https://i.postimg.cc/prPCKZZy/v1-0-0.jpg)](./ImageHostingBackup/DevDoc.README/v1.0.0.jpg)

------

## 3 Git Work Flow

### 3.1 Branchs

<a href='./ImageHostingBackup/DevDoc.README/3.1.png' target='_blank'><img width="100%" src='https://i.postimg.cc/VvrZhmQH/3-1.png' border='0' alt='3-1'/></a>

------

#### 3.1.1 Branch -main

main是项目的主分支, 用于将已调试稳定的项目定期快照保存。进入开发阶段后main的每一次更新都将分配一个版本号。

------

#### 3.1.2 Branch -dev

dev是和main并行推进的长期分支。是将新开发的功能合并后用于测试稳定并排查错误的。dev每推进一段时间都应排查故障并将main同步。

------

#### 3.1.3 Branch -(features)

此处指一类临时分支。每当项目开始着手增加新的功能, 都将从dev中独立出一个临时分支。直到这个功能开发完成或到一阶段再与dev同步。所开发的功能模块在于dev同步后装配。
