import * as service from '../service/home';
// 引用全部
export default{

    namespace:'home',

    state:{
        listData:'shamer',
    },

    effects:{
        *queryList({_},{call,put}){
            console.log('query');
            const rsp=yield call(service.getData);
            console.log(rsp);
            yield put({type:'saveList',payload:{listData:rsp}})
    }},
    reducers:{
        saveList(state,{payload:{listData}}){
            console.log(listData);
            return{
                ...state,
                listData:{listData}
            }
        }
    }
}
