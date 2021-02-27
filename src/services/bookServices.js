
import apiHelper from '@/utils/apiHelper'

const callBooks=(id)=>{
  return apiHelper.get(apiHelper.apiServers.url,'books/'+ id)
}

const callProfileId=(id,req)=>{
  return apiHelper.get(apiHelper.apiServers.url,'profile/'+ id , req)
}


export default {
  callBooks,
  callProfileId
}
