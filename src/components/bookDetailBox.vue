<template>
  <div>
    <bookDetail :id="props.id"></bookDetail>
    <countBox></countBox>
    <countBox></countBox>
  </div>
</template>

<script>
import { onMounted, watch } from "vue";
import { callBookApis } from "@/componentsJs";
import router from "@/router";
import bookDetail from "./bookDetail";
import countBox from "./countBox";

export default {
  name: "bookList",
  components: { bookDetail ,countBox},
  props:{
      id:{}
  },
  setup(props) {
    return { props };
  }
};
</script>
