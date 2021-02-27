
import apiHelper from '@/utils/apiHelper'

const callBooks=(id)=>{
  return apiHelper.get(apiHelper.apiServers.url,'books/'+ id)
}

//這邊要注意req有沒有值
const callProfileId=(id,req)=>{
  return req ? apiHelper.patch(apiHelper.apiServers.url,'profile/'+ id , req) : apiHelper.get(apiHelper.apiServers.url,'profile/'+ id)
}


export default {
  callBooks,
  callProfileId
}
