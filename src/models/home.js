import * as service from '../service/home';
// 引用全部
export default{

    namespace:'home',

    state:{
        isLogin:false,
        data:'shamer',
    },

    effects:{
        *queryList({_},{call,put}){
            console.log('query');
            const rsp=yield call(service.getData);
            yield put({type:'saveList',payload:{data:rsp}})
    }},
    reducers:{
        saveList(state,{payload:{data}}){
            return{
                ...state,
                data:data
            }
        },
        login(state,{payload:{isLogin}}){
            console.log('i access login');
            return{
                ...state,
                isLogin:isLogin
            }
        }
    }
}
