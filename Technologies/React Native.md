#

### 工作成果及成绩

### 内容管理系统

#### 核心需求

1. 通用标注后台
   收益评估：https://maimai.feishu.cn/wiki/wikcnB8rZ5JY2Noo2CxGIuq7tNc
   地址：http://billionaire.in.taou.com/#/review/mark/template_list
   需求：https://maimai.feishu.cn/wiki/wikcnE1w6bpZtLwsqfRrMKdWRkq
2. 内容运营后台（目前已完成三期）
   地址：http://billionaire.in.taou.com/#/content/common_search
   需求：https://maimai.feishu.cn/wiki/wikcnbfCfq0DnvjoyOdIJenovPc
3. KOL 管理后台
   地址：http://billionaire.in.taou.com/#/user/kol
   需求：https://maimai.feishu.cn/wiki/wikcnCTRKQx3HjoeE0gLiuaxSXg
4. 内容发布功能
   地址：http://billionaire.in.taou.com/#/content/push_content/release_content
   需求：https://maimai.feishu.cn/wiki/wikcnzzFSmH7WRX8X6kWwftUKdc

#### 后台其他需求

1. 后台整体目录结构调整
2. 管理后台职言分栏功能、同事圈分栏话题绑定功能
3. 行业圈 push 功能优化
4. 后台内容标注后台功能优化
5. 开发热榜过滤已删职言功能
6. 历史曝光模块优化
7. 后台匿名评论优化

### 审核后台

1. 审核后台高危内容检测功能
   需求：https://maimai.feishu.cn/wiki/wikcnJw2iCHHmX0Qk3uKAV8BvAc
2. 投诉线上化一期，审核后台增加客服、法务处理页面
   后台页面：http://cs.in.taou.com/complain-customer
   需求：https://maimai.feishu.cn/wiki/wikcnBgVs7knpQEHvpAJryZNZuc?from=from_parent_docs
3. 职言花名和头像审核优化
   需求：https://docs.taou.com/pages/viewpage.action?pageId=90497884

### RN

#### 核心需求

1. 内容身份唯一化三期
   需求：https://maimai.feishu.cn/wiki/wikcnT0ISUI3nJwQcX1fb2jwHDb?from=from_parent_docs
2. IM 邀请参与页面
   需求：https://maimai.feishu.cn/wiki/wikcn3hEQBKMDuCRSr6ZLyVweGK
3. 同事圈圈外内容
   需求：https://maimai.feishu.cn/wiki/wikcnHWBv4lMCvBxUzP959YksNn
4. 同事圈未认证用户在首页分发功能
5. 个人中心 tab 页面

#### RN 其他需求

2. 提问发布实验功能（实验完成已下线）
3. RN 实名帖浏览后变灰需求，已提测
4. 增大职言、实名评论触发区域
5. 发布器新增排序字段功能
6. 修复职言通知高亮底色问题

### Node 项目

1. 投诉线上化一期
   地址：https://maimai.cn/tousu
   需求：https://maimai.feishu.cn/wiki/wikcnBgVs7knpQEHvpAJryZNZuc?from=from_parent_docs）
2. 实名声明展现样式调整
3. kol 热榜需求

### 技术方面

1. RN 性能优化，负反馈、actionbar 调整。（负反馈进度 60%，因后台项目排期紧张预计这个 S 完成）
2. 使用 Low Code 平台接入，9 月初将上线第一个可用页面。
3. 新页面使用 React hooks、TS 进行开发，逐步对老项目进行技术改造。
4. 将在内容运营后台进行技术改造，如接入 vite，对老代码进行替换
5. 已阅读完新书《Javascript 悟道》，并将在组内进行分享。

### 总结

目前已入职 4 个多月的时间，参与的项目需求从前台到后台，从老项目到新项目。相比我之前经验，现在的业务和技术跨度都比较大。

1. RN 相关：对内容的 RN 开发已经比较熟悉，进行过 feed 卡片的开发（圈外内容），进行过匿名和实名整体样式的修改（内容身份唯一化三期）。也开发过平台工具类的功能（邀请参与），与平台、招聘、内容的后端进行对接，最终的工具给整个公司进行使用，并在产品使用下得到了较大的收益。（push 全局话题：第一学历真的重要，2 个小时就产生 800 条 ugc，占了平时一天的 40%）。积极参与技术建设，新页面尽量使用 Reack Hooks 和 Ts 进行开发，并正对 RN 做一些性能优化的工作。

2. 后台相关：参与审核后台、实名内容管理系统、Node 上后台项目的开发，最近的一个 S 需求多，排期紧，在自测时间短、没有测试资源的情况下，前后端基本都按时完成并立即投入使用，出现 bug 也尽快进行了修复。并在最近的三个月进行了一些从零到一的项目，如：通用标注后台、投诉线上化、内容管理后台。
   其中投诉线上化的特点是技术存在一定跨度，如运营后台使用的是 Vue 和 Element,投诉线上化前台使用的是 React 和 antd4,而投诉后台使用的是较老的 antd3，其中 antd3 和 antd4 的使用方法也完全不同，存在一定的心智负担。
   内容管理后台是把各个页面的内容管理功能做到一起，其中涉及的接口有十多个，由于是新老接口混合，传参的方式、返回的值、判断的条件都可能存在不同，导致页面的复杂度也较高，并将在下一期引入富文本和树形评论等功能。
   通用标注后台的开发解放了前端人力，并得到业务方的认可。

### 改进

1. 技术参与度不够高，这个 S 将投入更多经历投入技术项目。
2. 后台项目代码质量不够高，组件服用性不够好，将在后台做一些代码优化。
3. Low Code 平台进展较慢，将在这个 S 进行推广。
4. 对 React 的原理理解不够深入，将在日后的工作和学习中加强。
