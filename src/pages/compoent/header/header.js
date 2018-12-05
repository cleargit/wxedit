import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import Link from 'umi/link';
import styles from './header.less'


export default class header extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        return (
            <div className={styles.navbar}>
                <div className={styles.header}>
                    <div className={styles.navbar_logo}>
                        <h3>shamer</h3>
                    </div>

                    <ul className={styles.navbar_info}>
                        <li><Link to="/login">登录</Link></li>
                        <li><a>使用文档</a></li>
                        <li>     <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#">
                                关于 <Icon type="down" />
                            </a>
                        </Dropdown></li>
                    </ul>
                </div>
            </div>
        )
    }
}