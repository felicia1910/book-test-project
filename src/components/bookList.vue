<template>
  <div>
    <h1 class="book-list-title">Book List</h1>
    <bookCatchError :error-log="errorLog" :is-load="isLoad"></bookCatchError>
    <div :class="['book-list-box', errorLog || !isLoad && 'book-list-box-black']">
      <!-- data -->
      <div class="book-list" v-if="isLoad">
        <div
          class="book-card"
          v-for="(v,k) in dataList.arr"
          :key="k"
        >
          <div :class="['img-box',nowId==v.id && 'book-card-border']">
            <img :src="v.image" :alt="v.name" @click="watchBookDetail(v.id)"/>
          </div>
          <div class="book-name" @click="watchBookDetail(v.id)">{{v.name}}</div>      
          <div class="icon-box">
            <i :class="['far fa-heart',v.like && 'fas']" @click="like(k)"></i>
            <i :class="['far fa-star',v.start && 'fas']" @click="start(k)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, watch, reactive, ref } from "vue";
import { callBookApis } from "@/componentsJs";
import router from "@/router";
import bookCatchError from "./bookCatchError";

export default {
  name: "bookList",
  components: { bookCatchError },
  setup() {
    const { fetchData, isLoad, errorLog } = callBookApis("callBooks",''); 
    const dataList=reactive({arr:[]})
    const nowId=ref('')

    watch(fetchData,(val)=>{
      dataListFun()
    })

    const dataListFun=() => {
      dataList.arr=fetchData.data.map(e=>{
        return{
          ...e,
          like:false,
          start:false    
        }
      })
    };

    const like=(key)=>{
      dataList.arr[key].like=dataList.arr[key].like?false:true
    }

    const start=(key)=>{
      dataList.arr[key].start=dataList.arr[key].start?false:true
    }

    const watchBookDetail = id => {
      nowId.value=id
      router.push({ name: "book", params: { id: id } });
    };

    return { fetchData, isLoad, errorLog, watchBookDetail , dataList, like , start,nowId };
  }
};
</script>
