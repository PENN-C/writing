# 拾字

用 GitHub Pages 和 Jekyll 搭建的中文写作网站。包含首页、文章归档、分类和标签筛选、关键词搜索，以及独立文章页。

## 发布一篇文章

1. 打开 GitHub 仓库，在 `_posts` 目录用 **Add file → Create new file** 新建文件。
2. 文件名用 `年-月-日-英文短名.md`，例如 `2026-11-06-my-first-post.md`。日期和短名会出现在文章链接里。
3. 粘贴下面的模板，改好标题、摘要、分类、标签和正文。
4. 点击 **Commit changes**。提交进入 Pages 的发布分支后，GitHub 会重新生成网站。新增分类和标签会自动出现在归档里。

```markdown
---
title: "我的第一篇文章"
summary: "用一两句话介绍这篇文章。"
categories: [随笔]
tags: [日常, 城市]
---

在这里写正文。可以使用 Markdown 的小标题、引用、链接和图片。
```

文章图片可放在 `assets/images/`。正文里用 `![图片说明]({{ '/assets/images/photo.jpg' | relative_url }})`，以适配仓库子路径。未公开的稿件请留在本地。三个初始示例都标有「示例文章」，可以在 `_posts` 删除或替换。

## 首次部署与修改站点

- 在自己的 GitHub 账号下创建新仓库，将本目录的站点文件提交到 `main`。
- 打开仓库的 **Settings → Pages**，选择 **Deploy from a branch**，再选择 **main** 和 **/(root)**，保存。
- 构建完成后，Pages 设置会显示网址。名为 `writing` 的仓库默认使用 `https://用户名.github.io/writing/`。
- 站名和简介在 `_config.yml`，首页文案在 `index.html`，关于页在 `about.md`。

## 本地预览

安装 Jekyll（与 GitHub Pages 兼容的 3.10 版）和 `kramdown-parser-gfm` 后，在项目目录执行 `jekyll serve`，再打开 `http://localhost:4000`。
