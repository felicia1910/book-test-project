# book-test-project(vue3)

## 開發工具 ##
Visual Studio Code

### Path Autocomplete ###
+ 提供路徑選擇的 intellisense 功能。
+ workspace settings
``` json
{
  "path-autocomplete.pathMappings": {
    "@/": "${workspace}/src",
    "@/assets": "${workspace}/src/assets",
    "@/components": "${workspace}/src/components",
    "@/componentsJs": "${workspace}/src/componentsJs",
    "@/services": "${workspace}/src/services",
    "@/utils": "${workspace}/src/utils",
    "@/views": "${workspace}/src/views"
  }
}

## Project setup
```
yarn install

or

npm i
```

### Compiles and hot-reloads for development
```
yarn run dev

or

npm run dev
```

### Compiles and minifies for production
```
yarn run build

or

npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 問題與解決 ##
Q. 之前只用cdn的方式做過vue3.0，所以在架vue-cli的時候照著官網create專案無法
建立vue3.0的專案?
A. 執行"npm update -g @vue/cli" 升級至少到4.0以上的版本才會出現建立vue3的選項。


Q.vue3 router的建立方式跟vue2不一樣?
A.照官網一步一步去做起。


Q.邊建構專案一邊在思索需要安裝什麼，其實一個小小專案不太需要弄得太複雜，想了很久決定先把vuex拔掉，用vue3新出來的並且我沒做過的function components(類似react 的hook )去實驗這小專案?
