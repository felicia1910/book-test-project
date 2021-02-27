<template>
  <div class="block">
    <h1>number: {{ idx }}</h1>
    <button @click="addState">+</button>
    <button @click="miState">-</button>
  </div>
</template>

<script>
import { onMounted, watch, computed } from "vue";
import { counts } from "@/componentsJs";
import router from "@/router";
import bookCatchError from "./bookCatchError";

export default {
  name: "bookDetail",
  props:{
    id:{}
  },
  components: { bookCatchError },
  setup(props) {
    const { idx, addState, miState } = counts(4);

    
    // onMounted(()=>{
    //   getData()
    // })

    return { idx, addState, miState };
  }
};
</script>
