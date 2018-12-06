import React from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import Link from 'umi/link';
import styles from './header.less'


export default class header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:false
        }
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">收藏</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">退出</a>
                </Menu.Item>
                <Menu.Divider />
            </Menu>
        );
        return (
            <div className={styles.navbar}>
                <div className={styles.header}>
                    <div className={styles.navbar_logo}>
                        <h3>shamer</h3>
                    </div>

                    <ul className={styles.navbar_info}>
                        <li style={{display:(this.state.isLogin)?'none':'inline'}}><Link to="/login">登录</Link></li>
                        <li><a>使用文档</a></li>
                        <li  style={{display:!(this.state.isLogin)?'none':'inline'}}>     <Dropdown overlay={menu} trigger={['click']}>
                            <Avatar style={{ backgroundColor: '#ffbf00', verticalAlign: 'middle' }} size="large">
                                U
                                </Avatar>
                        </Dropdown></li>
                    </ul>
                </div>
            </div>
        )
    }
}