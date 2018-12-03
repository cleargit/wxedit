import React from 'react'
import { connect } from 'dva';
class Demo extends React.Component{
    
    render(){
        return(
            <div>
                {this.props.listData}
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
export default connect(mapStateToProps)(Demo); 