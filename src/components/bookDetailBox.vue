<template>
  <div class="book-detail-box">
    <bookDetail :id="props.id"></bookDetail>
    <countBox v-if="fetchData && isLoad" :num="fetchData.data.price" :name="'價格'" :get-num="getPrice"></countBox>
    <countBox v-if="fetchData && isLoad" :num="fetchData.data.count" :name="'數量'" :get-num="getNum"></countBox>
    <div class="modify-btn-box">
        <div class="modify-btn" @click="modify">確認修改</div>
    </div>
    
  </div>
</template>

<script>
import { onMounted, watch, reactive } from "vue";
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
    const { fetchData, isLoad, errorLog, callApi } = callBookApis("callProfileId",props.id);
    const reqVal=reactive({price:0,num:0})

    //告訴前後端換一個id了
    watch(() => props.id, (val) => { 
       callApi("callProfileId",val)
    })

    const getPrice=(val)=>{
        reqVal.price=val
    }
    const getNum=(val)=>{
        reqVal.num=val
    }
    //更新api
    const modify=()=>{
        callApi("callProfileId",props.id,reqVal)
    }
    
    
    return { props, fetchData, isLoad, errorLog, callApi, getPrice, getNum ,modify};
  }
};
</script>
