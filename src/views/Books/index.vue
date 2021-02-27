<template>
  <div class="about">
    <book-list></book-list>
    <bookDetailBox v-if="bookId" :id="bookId"></bookDetailBox>
  </div>
</template>

<script>
import { ref,reactive,readonly,computed,watch,onMounted,nextTick,onBeforeUpdate,created } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import bookList from '@/components/bookList'
import bookDetailBox from '@/components/bookDetailBox'

export default {
  name: 'books',
  components: { bookList,bookDetailBox },
  setup() {
    //未使用在dom上
    const route = useRoute()
    //會用在dom上
    const bookId = computed(() => {
      return Array.isArray(route.params.id) ? '' : route.params.id
    })

    return {bookId};
  }
}
</script>
