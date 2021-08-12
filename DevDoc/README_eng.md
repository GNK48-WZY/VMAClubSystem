# Develop Document [-中文版](./README.md)

[1 Markdown README Document Normal Form](./README_eng.md#1-markdown-readme-document-normal-form)

----[1.1 Normal Form](./README_eng.md#11-normal-form)

----[1.2 ImageHostingBackup Folder](./README_eng.md#12-imagehostingbackup-folder)

--------[1.2.1 How to Inset Images in Documents](./README_eng.md#121-how-to-inset-images-in-documents)

[2 GUI Design](./README_eng.md#2-gui-design)

----[2.1 Design Reference](./README_eng.md#21-design-reference)

--------[2.1.1 ClubSystemVisualReference Design Effect Rendering](./README_eng.md#211-clubsystemvisualreference-design-effect-rendering)

--------[2.1.2 CustomerRequiresDiagram Functional Structure](./README_eng.md#212-customerrequiresdiagram-functional-structure)

[3 Development Environment](./README_eng.md#3-required-development-environment)

## 1 Markdown README Document Normal Form

### 1.1 Normal Form

1. All documents should be readable on GitHub web and should not include special formats from markdown editors such as Typora.
2. All documentation should include a table of contents in the [TOC] style just like in this doc.
3. Use markdown's # sign (for example ## is a secondary heading and ### is a tertiary heading), and start serial number from the secondary heading for easy directory access.
4. To use an image in a document, you need to upload it in both a third-party image folder and in the project's [ImageHostingBackup](./ImageHostingBackup) folder. Create a folder with the same name as the document in ImageHostingBackup for save the backup.
5. Read: [1.2 ImageHostingBackup Folder](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#12-imagehostingbackup-%E6%96%87%E4%BB%B6%E5%A4%B9).
6. If it is necessary to write an English documentation, you can translate the Chinese documentation after completion, save it as a file < original filename _eng.md> in the same place, and add a jump link at the header header.

### 1.2 ImageHostingBackup Folder

This folder serves as a unified archive and backup of the images involved in each MD document. It is highly recommended to use a third-party image host for the images embedded in the document.

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

## 2 GUI Design

### 2.1 Design Reference

#### 2.1.1 ClubSystemVisualReference Design Effect Rendering

<a href="./ImageHostingBackup/DevDoc.README/ClubSystem_LoginPage.png" target="_blank"><img src="https://i.postimg.cc/FdmJXDTq/Club-System-Login-Page.png" alt="Club-System-Login-Page"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_AddClub_MiddleView.png" target="_blank"><img src="https://i.postimg.cc/Y4BvQdB9/Club-System-Student-Add-Club-Middle-View.png" alt="Club-System-Student-Add-Club-Middle-View"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_Events.png" target="_blank"><img src="https://i.postimg.cc/CBNnhktK/Club-System-Student-Events.png" alt="Club-System-Student-Events"/></a><a href="./ImageHostingBackup/DevDoc.README/SlubSystem_Student_AddClub_Top.png" target="_blank"><img src="https://i.postimg.cc/VS9dgXzF/Slub-System-Student-Add-Club-Top.png" alt="Slub-System-Student-Add-Club-Top"/></a>

#### 2.1.2 CustomerRequiresDiagram Functional Structure

[![v1-0-0.jpg](https://i.postimg.cc/prPCKZZy/v1-0-0.jpg)](./ImageHostingBackup/DevDoc.README/v1.0.0.jpg)

## 3 Development Environment
