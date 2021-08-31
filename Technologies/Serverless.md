根据 CNCF 的定义，Serverless 是指构建和运行不需要服务器管理的应用程序的概念。

其实 Serverless 早已和前端产生了联系，只是我们可能没有感知。比如 CDN，我们把静态资源发布到 CDN 之后，就不需要关心 CDN 有多少个节点、节点如何分布，也不需要关心它如何做负载均衡、如何实现网络加速，所以 CDN 对前端来说是 Serverless。再比如对象存储，和 CDN 一样，我们只需要将文件上传到对象存储，就可以直接使用了，不需要关心它如何存取文件、如何进行权限控制，所以对象存储对前端工程师来说是 Serverless。甚至一些第三方的 API 服务，也是 Serverless，因为我们使用的时候，不需要去关心服务器。当然，有了体感还不够，我们还是需要一个更精确的定义。从技术角度来说，Serverless 就是 FaaS 和 BaaS 的结合。

- Serverless = FaaS + BaaS。
- FaaS（Function as a Service） 就是一些运行函数的平台，比如阿里云的函数计算、AWS 的 Lambda 等。
- BaaS（Backend as a Service）则是一些后端云服务，比如云数据库、对象存储、消息队列等。利用 BaaS，可以极大简化我们的应用开发难度。Serverless 则可以理解为运行在 FaaS 中的，使用了 BaaS 的函数。
