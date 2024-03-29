### 1\*\* 信息，服务器收到请求，需要请求者继续执行操作

1. 100 Continue 继续。客户端应继续其请求
2. 101 Switching Protocols 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议

### 2\*\* 成功，操作被成功接收并处理

1. 200 OK 请求成功。一般用于 GET 与 POST 请求
2. 201 Created 已创建。成功请求并创建了新的资源
3. 202 Accepted 已接受。已经接受请求，但未处理完成
4. 203 Non-Authoritative Information 非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本
5. 204 No Content 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
6. 205 Reset Content 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
7. 206 Partial Content 部分内容。服务器成功处理了部分 GET 请求

### 3\*\* 重定向，需要进一步的操作以完成请求

1. 300 Multiple Choices 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
2. 301 Moved Permanently 永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替
3. 302 Found 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI
4. 303 See Other 查看其它地址。与 301 类似。使用 GET 和 POST 请求查看
5. 304 Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
6. 305 Use Proxy 使用代理。所请求的资源必须通过代理访问
7. 306 Unused 已经被废弃的 HTTP 状态码
8. 307 Temporary Redirect 临时重定向。与 302 类似。使用 GET 请求重定向

### 4\*\* 客户端错误，请求包含语法错误或无法完成请求

1. 401 Bad Request 客户端请求的语法错误，服务器无法理解
2. 402 Unauthorized 请求要求用户的身份认证
3. 403 Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
4. 404 Not Found 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
5. 405 Method Not Allowed 客户端请求中的方法被禁止
6. 406 Not Acceptable 服务器无法根据客户端请求的内容特性完成请求
7. 407 Proxy Authentication Required 请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权
8. 408 Request Time-out 服务器等待客户端发送的请求时间过长，超时
9. 409 Conflict 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突
10. 410 Gone 客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置
11. 411 Length Required 服务器无法处理客户端发送的不带 Content-Length 的请求信息
12. 412 Precondition Failed 客户端请求信息的先决条件错误
13. 413 Request Entity Too Large 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息
14. 414 Request-URI Too Large 请求的 URI 过长（URI 通常为网址），服务器无法处理
15. 415 Unsupported Media Type 服务器无法处理请求附带的媒体格式
16. 416 Requested range not satisfiable 客户端请求的范围无效
17. 417 Expectation Failed 服务器无法满足 Expect 的请求头信息

### 5\*\* 服务器错误，服务器在处理请求的过程中发生了错误

1. 500 Internal Server Error 服务器内部错误，无法完成请求
2. 501 Not Implemented 服务器不支持请求的功能，无法完成请求
3. 502 Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
4. 503 Service Unavailable 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的 Retry-After 头信息中
5. 504 Gateway Time-out 充当网关或代理的服务器，未及时从远端服务器获取请求
6. 505 HTTP Version not supported 服务器不支持请求的 HTTP 协议的版本，无法完成处理

Queueing: 在请求队列中的时间。
Stalled: 从 TCP 连接建立完成，到真正可以传输数据之间的时间差，此时间包括代理协商时间。
Proxy negotiation: 与代理服务器连接进行协商所花费的时间。
DNS Lookup: 执行 DNS 查找所花费的时间，页面上的每个不同的域都需要进行 DNS 查找。
Initial Connection / Connecting: 建立连接所花费的时间，包括 TCP 握手/重试和协商 SSL。
SSL: 完成 SSL 握手所花费的时间。
Request sent: 发出网络请求所花费的时间，通常为一毫秒的时间。
Waiting(TFFB): TFFB 是发出页面请求到接收到应答数据第一个字节的时间。
Content Download: 接收响应数据所花费的时间。
