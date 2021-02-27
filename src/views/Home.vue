<template>
  <div class="home">
    <div class="going-btn" @click="goRoute">點擊到頁面</div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Home',
  setup() {
    //使用在dom的函數
    const goRoute=()=>{
      router.push({name:'books'})
    }
    //使用在dom中的需要記得回傳
    return {goRoute};
  }
}
</script>
