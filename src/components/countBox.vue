<template>
  <div class="block">
      <p>{{props.name}}:</p>
    <div class="count-btn" @click="addState"><i class="fas fa-plus"></i></div>
    <input type="text" v-model="idx" readonly>
    <div class="count-btn" @click="miState"><i class="fas fa-minus"></i></div>
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
    id:{},
    num:{},
    name:{},
    getNum:{type:Function},
  },
  components: { bookCatchError },
  setup(props) {
    const { idx, addState, miState,changeIdx } = counts(props.num);
    
    watch(idx,(val)=>{
      console.log('yes')
        props.getNum(val)//數字有變要傳出去
    })


    return {props, idx, addState, miState,changeIdx };
  }
};
</script>
