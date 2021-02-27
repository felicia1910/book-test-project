import { ref, reactive } from "vue";
import bookServices from '@/services/bookServices'

export function callBookApi(whichApi, id, req) {
    const fetchData = reactive({ data: [] });
    const isLoad = ref(false);
    const errorLog = ref("");

    const success = (res) => {
        isLoad.value = true;
        fetchData.data= res;
    }
    const errors = (err) => {
        errorLog.value = err;
    }

    const callApi = (whichApi, id, req) => {
        isLoad.value =false
        if (whichApi == 'callBooks') {
            bookServices.callBooks(id).then(res => {
                success(res)
            }).catch(err => {
                errors(err)
            })
        }
        else if (whichApi == 'callProfileId') {
            bookServices.callProfileId(id, req).then(res => {
                success(res)
            }).catch(err => {
                errors(err)
            })
        }
    };
    callApi(whichApi, id, req)
    //決定call 哪隻api


    return { fetchData, isLoad, errorLog, callApi };
}