
# deploy.sh
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd dist

# 部署到自定義網域
echo 'resume.markmiao.com' > CNAME

# 提交到本地仓库
git init
git add -A
git commit -m 'deploy'

# 提交到 https://github.com:mxdios/app-works.git 项目的 gh-pages 分支
git push -f git@github.com:mxdios/app-works.git master:gh-pages

cd -

