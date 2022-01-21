# XSS

## 概念

> 跨站脚本（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及用户端脚本语言。

> XSS 攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是 JavaScript，但实际上也可以包括 Java，VBScript，ActiveX，Flash 或者甚至是普通的 HTML。攻击成功后，攻击者可能得到更高的权限（如执行一些操作）、私密网页内容、会话和 cookie 等各种内容。

## 如何防止 XSS 攻击？

### 转义

在存储型 XSS 和反射型 XSS 攻击中，这个是一个关键的防范方式，通过对不同类型的文本和数据做对应的转义和很好的防止大部分的 XSS 攻击。

`<script>哈尔滨</script> ` -> `&lt;script&gt;哈尔滨&lt;/script&gt`

### CSP

CSP 是 Content Security Policy，在实际应用中，我们是通过在 HTTP 头部添加 Content-Security-Policy 的字段来实现的。

常见的 CSP 头字段如下：

`Content-Security-Policy: default-src 'self' *.trusted.com`

在较为严格的 CSP 条件下，对 XSS 攻击的防范有以下的作用：

- 禁止加载外域代码，防止复杂的攻击逻辑；
- 禁止外域提交，网站被攻击后，用户数据不会泄漏；
- 禁止内联脚本执行；
- 禁止未授权的脚本执行；
- 通过 CSP 的上报功能，便于修复问题。

### HttpOnly

HttpOnly 是 Cookie 的一个属性，在设置 Cookie 的时候可以对 Cookie 设置该属性，该属性主要是防止 Cookie 被 JS 脚本获取，只能通过 Http 传输和访问。

我们需要明确的是 HttpOnly 本质上并不是防止 XSS 攻击的，主要是起到缓解的作用，在恶意脚本执行之后，是无法获取到对应的 Cookie，防止来下一步攻击的进行和用户数据的进一步泄漏。
