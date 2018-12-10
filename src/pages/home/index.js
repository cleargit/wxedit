import React from 'react';
import styles from './index.less';
import Editor from '../compoent/edit';
import Header from '../compoent/header/header';
import { connect } from 'dva';
import Toolbar from '../compoent/toolbar/index';
class home extends React.Component {
    componentDidMount(){
        this.queryList();
        console.log('加载组件完成');
    
    }
    queryList=()=>{
        this.props.dispatch({
            type:'home/queryList'
        })
    }
    componentWillReceiveProps(){
        const {isLogin}=this.props.location
        this.props.dispatch({
            type:'home/login',payload:{isLogin}
        })
    }
    render() {
        const {data=[],isLogin}=this.props;
        console.log(isLogin)
        return (
            <div className={styles.container}>
            <Header isLogin={isLogin}/>
                <div className={styles.content}>
                    <div className={styles.main}>
                        <h1 className={styles.introduce}>hello</h1>
                        <h3 className={styles.word}>i will back</h3>
                        <div className={styles.box}>
                            <a href='http://www.baiduc.com'>开始使用</a>
                            <a href=''>使用介绍</a>
                        </div>
                        <div className={styles.edit_contain}>
                            <div className={styles.edit_left}>
                            <Toolbar/>
                                <div  dangerouslySetInnerHTML ={{__html:data}}>
                              
                                </div>
                            </div>
                            <div className={styles.edit_right}>  <Editor /></div>
                        </div>
                        <div></div>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        data:state.home.data,
        isLogin:state.home.isLogin
    }
}
export default connect(mapStateToProps)(home); 