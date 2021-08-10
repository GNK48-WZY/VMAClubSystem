# Develop Document 开发文档 [-English version](.\README_eng.md)



## (1) Markdown文档编写范式:

1. 所有文档需保证能用GitHub网页无障碍阅读, 不应包含如Typora等编辑器的特殊格式

2. 所有文档应添加目录, 目录格式参考本文所用的[TOC]风格

3. 各级段落使用markdown自带的#符 (如##是二级标题, ###是三级标题), 并从二级标题开始标序, 便于目录查阅

4. 文档内使用图片, 需在两处上传, 一处任意第三方图床, 另一处在项目[ImageHostingBackup](./ImageHostingBackup)文件夹内, 创建与文档同名的文件夹, 保存备份 (因为直接使用GitHub做为图床时常遇到加载异常, 不便阅读)

5. 文档中涉及的图片, 在markdown中是如下格式:

   ```
   [![A](B)](C)
   ```

   其中A是文档内标识名, 可随意

   B处是图床URL, 图床随作者随意使用任意图床不限, 可在GitHub上正常查阅即可

   C处是点击图片跳转的URL, 此处一律填写在[ImageHostingBackup](.\ImageHostingBackup)文件夹下的备份的路径

6. 如有必要编写英文说明文档, 可在中文文档完成后翻译, 另存为<原文件名_eng.md>文件, 放在同一处, 并在文件头标题处增加跳转链接

## (2) 前端界面设计

### 2.1 设计参考

#### 2.1.1 ClubSystemVisualReference 设计效果图:

#### 2.1.2 CustomerRequiresDiagram 功能结构:

