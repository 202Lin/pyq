# pyq

方便发朋友圈，正对图片进行九宫格裁剪等一系列功能的项目

# 一些配置文件介绍

package.json "build": "vue-tsc --noEmit && vite build",
vite 本身只会编译 ts 而不会校验， vscode 本身会有校验提示，vue-tsc 是编译 vue 文件里面的 ts

# 下载配置 eslint

npm install eslint-config-standard eslint-plugin-import
eslint-plugin-promise eslint-plugin-node -D

# 配置 prettier 插件

在插件 prettier-code fromatter 里面搜 format on save 勾选上搜 fomatter 勾选上我们的插件 prettier
然后可以新建一个.prettier 文件，自己配置规范

# 在 package.json 里面新加了一个命令，可以校验出整个项目不符合规范的地方

"lint": "eslint --ext js /src"

# 保证git提交规范
npm install husky@4.0.0 -D  指定一下版本，不然后面会出错，不指定也行，按照网上教程改一下
npx husky install
npx husky add .husky/pre-commit "npm run lint"
