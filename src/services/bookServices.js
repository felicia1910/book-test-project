
import apiHelper from '@/utils/apiHelper'

const callBooks=()=>{
  return apiHelper.get(apiHelper.apiServers.url,'books')
}


export default {
  callBooks
}
