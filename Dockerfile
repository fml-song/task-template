# 第一阶段：构建应用程序
FROM node:14-alpine as build

WORKDIR /app
COPY package.json ./
RUN npm install --registry=https://registry.npmmirror.com/

# 第二阶段：创建最终镜像
FROM node:14-alpine

# 创建一个名为auto-juejin的目录
RUN mkdir /auto-juejin

# 从第一阶段的构建中复制文件到auto-juejin目录
COPY --from=build /app /auto-juejin
COPY /src /auto-juejin/src

# 设置工作目录为/auto-juejin
WORKDIR /auto-juejin

# 定义应用程序启动命令
CMD ["npm", "start"]
