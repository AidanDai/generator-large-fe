# Project Dockerfile

# 本地打包镜像

```bash
sudo docker build . -t webaidan/node:lts -f Dockerfile

sudo docker build . -t webaidan/appNameEnv:lasted -f Dockerfile.env

sudo docker build . -t webaidan/appName:lasted -f Dockerfile.app
```

# 本地启动

## test 环境

```bash
sudo docker-compose up -f docker-compose.test.yml
```

## production 环境

```bash
sudo docker-compose up -f docker-compose.production.yml
```
