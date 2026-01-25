> **<font style="color:#2F8EF4;">B站 UP 主</font>**[**@yysuni**](https://space.bilibili.com/72489212)**<font style="color:#2F8EF4;"> 开源的一款个人博客，UI 简洁漂亮，让人第一眼就喜欢上了,于是乎就冒出了我也要的想法，想法是好的，但是奈何技术太渣了，前三天基本上围绕着我不想依托于 github 和Vercel 搭建博客，我想在我自己的服务器搞，结果无数的报错搞得我头疼，最终为放弃了，妥协了。当选择把项目托管到 github 上时，我艹，好吉尔爽...于是我有了大把的时间魔改了...</font>**
>

**<font style="color:#2F8EF4;"></font>**

#### <font style="color:#2F8EF4;">Fork 项目</font>
<font style="color:rgb(78, 63, 66);background-color:rgba(255, 255, 255, 0.8);">请先 fork </font>[**yysuni**](https://space.bilibili.com/72489212)<font style="color:rgb(78, 63, 66);background-color:rgba(255, 255, 255, 0.8);">的项目到你自己的仓库中。 后续</font>[**yysuni**](https://space.bilibili.com/72489212)<font style="color:rgb(78, 63, 66);background-color:rgba(255, 255, 255, 0.8);">更新，可以直接同步最新功能。</font>

[GitHub - YYsuni](https://github.com/YYsuni/2025-blog-public)

<font style="color:rgb(78, 63, 66);background-color:rgba(255, 255, 255, 0.8);">或者可以选择我魔改后二开的项目</font>

[GitHub - RT622](https://github.com/RT622/2gou)

#### <font style="color:#2F8EF4;">创建应用</font>
![](/blogs/yysuni/b48dc5991141a949.webp)
#####  点击自己的【<font style="color:#DF2A3F;">头像</font>】找到【<font style="color:#DF2A3F;">设置</font>】，进入【<font style="color:#DF2A3F;">设置</font>】页面，然后选择左侧栏最下面的【<font style="color:#DF2A3F;">开发者选项</font>】
![](/blogs/yysuni/c5b0952ecf9c9e49.webp)
#####   点击创建【<font style="color:#DF2A3F;">Github 应用</font>】
![](/blogs/yysuni/370cf489eacf6c3e.webp)
##### 验证密码
![](/blogs/yysuni/741b83207f05774a.webp)
##### 带<font style="color:#DF2A3F;">*</font>号的输入框必须填，没什么可填的可以瞎填
![](/blogs/yysuni/efe6516cdfdf86f0.webp)
##### 取消打钩，展开仓库权限，选择 <font style="color:#DF2A3F;">Contents</font>权限设置选择读取和写入权限 <font style="color:#DF2A3F;">Read and write </font>
![](/blogs/yysuni/dc985ee16c7581bb.webp)
##### 选择 <font style="color:#DF2A3F;">Only on this account</font> 点击 <font style="color:#DF2A3F;">CreateHub APP</font> 创建 Github 应用
![](/blogs/yysuni/c5a8475eb7d0576e.webp)
##### 创建一个记事本，记录一下变量，等下用
<font style="color:#DF2A3F;">NEXT_PUBLIC_GITHUB_OWNER</font>=<font style="color:#DF2A3F;">RT622</font>（此处填写图中 Owned by 中的 ID，不要@）

<font style="color:#DF2A3F;">NEXT_PUBLIC_GITHUB_REPO</font>=<font style="color:#DF2A3F;">blog</font>( 项目名称,你克隆的谁的仓库，名称就写项目名称）

<font style="color:#DF2A3F;">NEXT_PUBLIC_GITHUB_BRANCH</font>=main（默认）

<font style="color:#DF2A3F;">NEXT_PUBLIC_GITHUB_APP_ID</font>=2724454（APP ID）
##### 下拉浏览器，找到密钥，点击生成密钥
![](/blogs/yysuni/241e0471ed5ded5c.webp)
##### 上拉游览器，找到<font style="color:#DF2A3F;">Install app</font>点击<font style="color:#DF2A3F;">Install</font>安装app
![](/blogs/yysuni/099a1d56eb96f204.webp)
##### 选择存有你克隆项目的仓库，点击安装
![](/blogs/yysuni/5f7ba9eae16dd610.webp)
至此，Github 中设置已经完毕。

---

#### <font style="color:#2F8EF4;">Vercel 平台托管项目</font>
##### 打开[https://vercel.com/](https://vercel.com/)没有账号，注册一个账号，然后绑定你的 Github， 或者用你 Github 直接登录。


##### 新建项目
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54515742/1769324559579-4d92b203-5dd3-4c07-b319-603002554bc0.png)

##### 导入 Github 仓库中克隆的项目
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54515742/1769324597518-4d2458cb-d3dc-4935-ab50-7178419b6717.png)

##### 按照上图和记事本中记录的填写变量，填写完成后点击<font style="color:#DF2A3F;"> Deploy </font>部署等待大概一分钟，部署完毕
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54515742/1769324830007-d77ae283-4091-40e8-9a09-bd8e78ecf756.png)

##### 出现这个画面，证明你已经部署完毕了。点击 <font style="color:#DF2A3F;">Continue to Dashboard</font> 打开仪表盘
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/54515742/1769324969078-1fd8d371-72c2-4138-9cfc-bcb4d58caefc.png)



