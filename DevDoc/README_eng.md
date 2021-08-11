# Develop Document [-中文版](./README.md)

[(1) Markdown README Document Normal Form](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#1-markdown%E6%96%87%E6%A1%A3%E7%BC%96%E5%86%99%E8%8C%83%E5%BC%8F)

[    1.1 Normal Form](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#11-%E8%8C%83%E5%BC%8F)

[		1.2 ImageHostingBackup Folder](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#12-imagehostingbackup-%E6%96%87%E4%BB%B6%E5%A4%B9)

[				1.2.1 How to Inset Images in Documents](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#121-%E5%86%99%E6%96%87%E6%A1%A3%E6%97%B6%E5%A6%82%E4%BD%95%E5%B5%8C%E5%85%A5%E5%9B%BE%E7%89%87)

[(2) GUI Design](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#2-%E5%89%8D%E7%AB%AF%E7%95%8C%E9%9D%A2%E8%AE%BE%E8%AE%A1)

----[2.1 Design Reference](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#21-%E8%AE%BE%E8%AE%A1%E5%8F%82%E8%80%83)

--------[2.1.1 ClubSystemVisualReference Design Effect Rendering](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#211-clubsystemvisualreference-%E8%AE%BE%E8%AE%A1%E6%95%88%E6%9E%9C%E5%9B%BE)

--------[2.1.2 CustomerRequiresDiagram Functional Structure](https://github.com/VMAxCoding/VMAClubSystem/tree/main/DevDoc#212-customerrequiresdiagram-%E5%8A%9F%E8%83%BD%E7%BB%93%E6%9E%84)

## (1) Markdown README Document Normal Form

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

```
<a href="C" target="_blank"><img src="B" alt="A"/></a>
```

A is the identifier in the document, which can be arbitrary.

B is the image host's URL, the choose of image host is free by the document's author.

C is the URL which is the click-jump link, here should all be the path of the backup folder in [ImageHostingBackup](./ImageHostingBackup) folder. Because git branch will change the abs path, here should use relative path.

## (2) GUI Design

### 2.1 Design Reference

#### 2.1.1 ClubSystemVisualReference Design Effect Rendering

<a href="./ImageHostingBackup/DevDoc.README/ClubSystem_LoginPage.png" target="_blank"><img src="https://i.postimg.cc/FdmJXDTq/Club-System-Login-Page.png" alt="Club-System-Login-Page"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_AddClub_MiddleView.png" target="_blank"><img src="https://i.postimg.cc/Y4BvQdB9/Club-System-Student-Add-Club-Middle-View.png" alt="Club-System-Student-Add-Club-Middle-View"/></a><a href="./ImageHostingBackup/DevDoc.README/ClubSystem_Student_Events.png" target="_blank"><img src="https://i.postimg.cc/CBNnhktK/Club-System-Student-Events.png" alt="Club-System-Student-Events"/></a><a href="./ImageHostingBackup/DevDoc.README/SlubSystem_Student_AddClub_Top.png" target="_blank"><img src="https://i.postimg.cc/VS9dgXzF/Slub-System-Student-Add-Club-Top.png" alt="Slub-System-Student-Add-Club-Top"/></a>

#### 2.1.2 CustomerRequiresDiagram Functional Structure

[![v1-0-0.jpg](https://i.postimg.cc/prPCKZZy/v1-0-0.jpg)](./\ImageHostingBackup/DevDoc.README/v1.0.0.jpg)

