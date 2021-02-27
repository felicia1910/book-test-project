<template>
  <div :class="['book-list-box', (props.errorLog || !props.isLoad) && 'book-list-box-black']">
    <!-- 錯誤或是api還沒回傳 -->
    <div class="error" v-if="props.errorLog">
      <h1>ERROR: {{ props.errorLog }}</h1>
    </div>
    <div class="waiting" v-if="!props.isLoad">
      <h1>Waiting....</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "errors",
  props: {
    isLoad: {},
    errorLog: {}
  },
  setup(props) {
    return { props };
  }
};
</script>
