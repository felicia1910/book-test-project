<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import bookServices from '@/services/bookServices'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    bookServices.callBooks().then(res=>{
      console.log(res)
    })
  }
}
</script>
