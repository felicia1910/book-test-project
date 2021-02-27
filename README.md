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
```

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

##專案的架構、邏輯說明##
主要分為
assets-樣式和放圖
  (css使用採用scss開發，採用SMACSS，以不同page的方式去開發。)
  --style.scss-共用樣式和加速開發的設定
  --app.scss-所有樣式入口
components-元件放置處
componentsJs-共用function放置
router-路由設定
setup-第三方套件初始
store-vuex(此專案未使用)
utils-開發小幫手設定處
views-web顯示的每一頁放置處
  (Home為原始頁，其他不同路由則會以資料夾的形式去分ex.Books-index)


## 使用的第三方 library ##
1.在app.scss的fontawesome(icon使用非常便利)
2.axios(串接api)

## 問題與解決 ##
Q. 之前只用cdn的方式做過vue3.0，所以在架vue-cli的時候照著官網create專案無法
建立vue3.0的專案?
A. 執行"npm update -g @vue/cli" 升級至少到4.0以上的版本才會出現建立vue3的選項。


Q.vue3 router的建立方式跟vue2不一樣?
A.照官網一步一步去做起。


Q.邊建構專案一邊在思索需要安裝什麼，其實一個小小專案不太需要弄得太複雜，想了很久決定先把vuex拔掉，用vue3新出來的並且我沒做過的function components(類似react 的hook )去實驗這小專案?
A.專案有點太小，這樣用function components反而有點麻煩...不過專案大點應該可以感受到他的好處，可以省略掉非常多變數。

Q.function components的執行會在onMounted之前，那中間使用者要重call一次function該怎麼觸發?
A.在function components定義好函數，函數跟著變數一起return出來去出操作。

Q.vue2的this.$router.push在vue3不可再使用?
A.需要從已經定義好的router裡的js引出去做router.push。

Q.book跳到book/:id時要監聽到router裡的變數，用watch會看有黃字錯誤?
A.查了資料看起來是因為用watch方式會太浪費資源，看建議使用computed能夠解決浪費問題。
