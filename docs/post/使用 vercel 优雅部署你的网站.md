# 部署我的网站

之前 github. -> build -> push

后来 github actions

现在 vercel

- github
- vercel
- cloudflare

（DNS 解析为域名提供商，即阿里云）

github -> exposir.github.io
-> exposir.cn
github -> vercel -> exposir.vercel.app
-> expsir.cn
-> vercel -> 子域名 weekly -> exposir.github.cn

vercel -> cloudflare

- 用法：不使用 proxy 使用 DNS service.，因为 Vercel 已经为你的所有静态内容提供了一个 CDN

阿里云 dns -> cloudflare dns（可选）

- [How do I use a Cloudflare domain with Vercel? – Vercel Docs](<https://vercel.com/support/articles/using-cloudflare-with-vercel#without-proxy-(dns-only)>)

- [网站测速工具*超级 ping *多地点 ping 检测 - 爱站网](https://ping.aizhan.com/)
- [MongoDB Cloud | MongoDB](https://cloud.mongodb.com)
- [Client Area - Freenom](https://my.freenom.com/clientarea.php)

### github

![](https://cdn.jsdelivr.net/gh/exposir/beds@main/blog/D7117858-48F6-4821-93E4-800489ACA32F.png)

### vercel

![](https://cdn.jsdelivr.net/gh/exposir/beds@main/blog/04C8F52E-B81A-481F-BE66-757FB3F1D5AE.png)
