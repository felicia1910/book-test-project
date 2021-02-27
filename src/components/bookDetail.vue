<template>
  <div>
    <bookCatchError :error-log="errorLog" :is-load="isLoad"></bookCatchError>
    <!-- data -->
    <div class="book-detail" v-if="isLoad">
      {{fetchData.data.name}}
    </div>
  </div>
</template>

<script>
import { onMounted, watch, computed } from "vue";
import { callBookApis } from "@/componentsJs";
import router from "@/router";
import bookCatchError from "./bookCatchError";

export default {
  name: "bookDetail",
  props:{
    id:{}
  },
  components: { bookCatchError },
  setup(props) {
    const { fetchData, isLoad, errorLog, callApi } = callBookApis("callBooks",props.id);

    watch(() => props.id, (val) => { 
       callApi("callBooks",val)
    })
    
    // onMounted(()=>{
    //   getData()
    // })

    return { fetchData, isLoad, errorLog };
  }
};
</script>
