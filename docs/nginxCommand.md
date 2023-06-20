### nginx是什么？
nginx是一个高性能的HTTP和反向代理服务器，同时也提供了IMAP/POP3/SMTP服务。nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。其将源代码以类BSD许可证的形式发布，因它的稳定性、丰富的功能集、示例配置文件和低系统资源的消耗而闻名。
1. nginx的负载均衡
  - 轮询
    - 加权轮询
    - ip_hash
    - fair
    - ip_hash
    - url_hash
    - random
    - least_conn
    - least_time
    - hash
    - upstream
    - upstream_hash
    - upstream_ip_hash
    - upstream_least_conn
    - upstream_least_time
    - upstream_random
    - upstream_fair
    - upstream_zone
    - upstream_keepalive
    - upstream_check
    - upstream_check_keepalive
    - upstream_check_status
    - upstream_check_status
    - upstream_check_http_send
    - upstream_check_http_send
    - upstream_check_http_expect_alive
    - upstream_check_http_expect_alive
    - upstream_check_http_expect_alive
    - upstream_check_http_expect_alive
    - upstream_check_http_expect_alive
    - upstream_check_http_expect_alive
    - upstream_check_http_expect_alive
2. nginx的反向代理
3. nginx的高可用
4. nginx的动静分离
5. nginx的热部署
6. nginx的高并发
7. nginx的高可用
8. nginx的高可靠性
9. nginx的高可扩展性
10. nginx的高可维护性
11. nginx的高可移植性
12. nginx的高适应性
13. nginx的高可定制性
14. nginx的高安全性
15. nginx的高可靠性
16. nginx的高可用性
17. nginx的高性能
18. nginx的高并发
19. nginx的高可扩展性


nginx的常用指令
```bash
# 开启service firewalld start
# 重启service firewalld restart
# 关闭service firewalld stop
# 查看防火墙规则firewall-cmd --list-all
# 查询端口是否开放firewall-cmd --query-port=8080/tcp
# 开放80端口firewall-cmd --permanent --add-port=80/tcp
# 移除端口firewall-cmd --permanent --remove-port=8080/tcp#重启防火墙(修改配置后要重启防火墙)firewall-cmd --reload
# 参数解释1、firwall-cmd：是Linux提供的操作firewall的一个工具；2、--permanent：表示设置为持久；3、--add-port：标识添加的端口；
cd /usr/local/nginx/sbin/
./nginx  启动
./nginx -s stop  停止
./nginx -s quit  安全退出
./nginx -s reload  重新加载配置文件  如果我们修改了配置文件，就需要重新加载。
ps aux|grep nginx  查看nginx进程
```