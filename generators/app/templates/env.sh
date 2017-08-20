#!/bin/bash

# usage
# source env.sh 13 v3

## ！！！重要
# 有需要改config.js，如果只是改环境变量就可以解决，建议在此文件修改环境变量
# config.js修改的默认值，不允许上线
# 打包服务和 node 服务都需要环境变量(切换 11 和　13 环境要先配置 hosts 再创建环境变量)
## ！！！重要

# env.sh 默认配置
server_name='test01'            # 和后端联调的服务器
api_version='v2'                # 和后端联调需要改成后端提供的版本

if [[ $1 ]]
then
    server_name=$1
fi

if [[ $2 ]]
then
    api_version=$2
fi

export API_VERSION=$api_version

### 11 或者 13 环境

# 配置　11 hosts
# 10.0.80.11 account.ft.guokr.com
# 10.0.80.11 apis.ft.guokr.com
# 10.0.80.11 panel.ft.guokr.com

# 配置　13 hosts
# 10.0.80.13 account.ft.guokr.com
# 10.0.80.13 apis.ft.guokr.com
# 10.0.80.13 panel.ft.guokr.com

# 创建环境变量
s_11or13 () {
    # 应用启动后访问的地址
    export APP_HOST='ft.guokr.com'
    export COOKIE_DOMAIN='ft.guokr.com'

    export API_HOST='apis.ft.guokr.com'
    # 登录服务地址
    export WX_SIGNIN_URL='http://account.ft.guokr.com/weixin/sign_in/'
    export WX_MP_SIGNIN_URL='http://account.ft.guokr.com/weixin_mp/sign_in/'
}

### test 环境, 包括 test, test01, test02, test03

# 创建环境变量
s_test () {
    # 应用启动后访问的地址
    export APP_HOST='ft.guokr.net'
    export COOKIE_DOMAIN='ft.guokr.net'

    export API_HOST="apis-ft-test$1.guokr.net"
    # 登录服务地址
    export WX_SIGNIN_URL="http://account-fantuan-test$1.guokr.net/weixin/sign_in"
    export WX_MP_SIGNIN_URL="http://account-fantuan-test$1.guokr.net/weixin_mp/sign_in/"
}

case $server_name in
    ## 连接11环境
    '11')
        s_11or13
        ;;
    '13')
        s_11or13
        ;;
    'test')
        s_test
        ;;
    'test01')
        s_test '01'
        ;;
    'test02')
        s_test '02'
        ;;
    'test03')
        s_test '03'
        ;;
    *)
        ;;
esac

echo 'SERVER            = '$server_name
echo 'API_VERSION       = '$API_VERSION

echo 'APP_HOST          = '$APP_HOST
echo 'COOKIE_DOMAIN     = '$COOKIE_DOMAIN

echo 'API_HOST          = '$API_HOST

echo 'WX_SIGNIN_URL     = '$WX_SIGNIN_URL
echo 'WX_MP_SIGNIN_URL  = '$WX_MP_SIGNIN_URL
