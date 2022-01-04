## 状态码

### 200

- 200 OK
- 201 Created
- 202 Accepted
- 204 No Content

### 300

- 301 Moved Permanently 永久重定向
- 302 Found 临时重定向
- 303 See Other
- 304 Not Modified
  Cache-Control 表示多久之后过期 Expires:代表什么时候过期 Etag:md5 值
- 307 Temporary Redirect 区别在于能够确保请求方法和消息主体不会发生改变。
- 308 Permanent Redirect 区别在于能够确保请求方法和消息主体不会发生改变。

### 400

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed
- 406 Not Acceptable
- 409 Conflict
- 410 Gone
- 413 Payload Too Large
- 412 Precondition Failed
- 414 URI Too Long
- 431 Request Header Fields Too Large

### 500

- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout
