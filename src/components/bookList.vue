<template>
  <div>
    <h1 class="book-list-title">Book List</h1>
    <bookCatchError :error-log="errorLog" :is-load="isLoad"></bookCatchError>
    <div :class="['book-list-box', errorLog || !isLoad && 'book-list-box-black']">
      <!-- data -->
      <div class="book-list" v-if="isLoad">
        <div
          class="book-card"
          v-for="(v,k) in fetchData.data"
          :key="k"
          @click="watchBookDetail(v.id)"
        >
          <img :src="v.image" :alt="v.name" />
          <div class="book-name">{{v.name}}</div>
          <div class="icon-box">
            <i class="far fa-heart"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, watch } from "vue";
import { callBookApis } from "@/componentsJs";
import router from "@/router";
import bookCatchError from "./bookCatchError";

export default {
  name: "bookList",
  components: { bookCatchError },
  setup() {
    const { fetchData, isLoad, errorLog } = callBookApis("callBooks",'');

    const watchBookDetail = id => {
      router.push({ name: "book", params: { id: id } });
    };

    return { fetchData, isLoad, errorLog, watchBookDetail };
  }
};
</script>
