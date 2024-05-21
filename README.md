## 普通安装
> 注意: 需要先启动后端，否则前端连不到服务器。

#### 1、安装依赖

  ```bash
  npm install
  ```

#### 2、启动服务

  ```bash
  npm run dev
  ```

#### 3、查看页面

  ```bash
  http://localhost:5173/
  ```

## docker 安装
> 因为只是演示，所以这里的步骤，只针对本地docker环境，不是正式服务器上的操作步骤.
> 
> 这个需要先安装本地的 docker 运行环境。
>
> 注意: 需要先启动后端，否则前端连不到服务器。

#### 1、修改 nginx 代理配置

> 项目根目录下，有一个 vue_todo.conf 文件，修改下面的 proxy_pass 值为后端的地址，也就是把 ip 换成你的本机局域网 IP

```nginx configuration
 proxy_pass  http://192.168.50.8:3001/;
```

#### 2、在项目的根目录下执行, 构建docker镜像

```bash
docker build -t todo_web:first .
```

#### 3、启动服务

```bash
docker run --name todo_web -p 5173:5173 -d --restart=always todo_web:first
```

#### 4、查看页面

  ```bash
  http://localhost:5173/
  ```
