<template>
  <div class="book-detail-box">
    <bookCatchError :error-log="errorLog" :is-load="isLoad"></bookCatchError>
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
import bookDetail from "./bookDetail";
import countBox from "./countBox";
import bookCatchError from "./bookCatchError";

export default {
  name: "bookList",
  components: { bookDetail ,countBox,bookCatchError},
  props:{
      id:{}
  },
  setup(props) {
    const { fetchData, isLoad, errorLog, callApi } = callBookApis("callProfileId",props.id);
    const reqVal=reactive({price:fetchData.data.price,count:fetchData.data.count})

    //告訴前後端換一個id了
    watch(() => props.id, (val) => { 
       callApi("callProfileId",val)
       //這邊要記得更新不然會抓到上一個商品的數量,這邊非同步讓資料回傳
        setTimeout(() => {
          if(isLoad){
            console.log('更新')
            reqVal.price=fetchData.data.price
            reqVal.count=fetchData.data.count
          }
        }, 500)
    })

    const getPrice=(val)=>{
        reqVal.price=val
        reqVal.count=reqVal.count==undefined?fetchData.data.count:reqVal.count
    }
    const getNum=(val)=>{
        reqVal.count=val
        reqVal.price=reqVal.price==undefined?fetchData.data.price:reqVal.price
    }
    
    //更新api
    const modify=()=>{
        callApi("callProfileId",props.id,reqVal)
    }    
    
    return { props, fetchData, isLoad, errorLog, callApi, getPrice, getNum ,modify};
  }
};
</script>
