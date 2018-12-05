import React from 'react';
import styles from './index.less';
import Editor from '../compoent/edit';
import Header from '../compoent/header/header';
import { connect } from 'dva';
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
    render() {
        const {listData=[]}=this.props.listData;
        console.log(listData);
        return (
            <div className={styles.container}>
            <Header/>
                <div className={styles.content}>
                    <div className={styles.main}>
                        <h1 className={styles.introduce}>hello</h1>
                        <h3 className={styles.word}>i will back</h3>
                        <div className={styles.box}>
                            <a href='http://www.baiduc.com'>开始使用</a>
                            <a href=''>使用介绍</a>
                        </div>
                        <div className={styles.edit_contain}>
                            <div className={styles.edit_left} dangerouslySetInnerHTML ={{__html:listData}}></div>
                            <div className={styles.edit_right}>  <Editor /></div>
                        </div>
                        <div>123</div>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('mapstateToProps');
    console.log(state);
    return{
        listData:state.home.listData
    }
}
export default connect(mapStateToProps)(home); 