import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import styles from './toolbar.less'
export default class toolbar extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={styles.contain}>
                <div>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            标题
                    </a>
                    </Dropdown>
                    |
                <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            正文
                    </a>
                    </Dropdown>
                    |
                <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            引导
                    </a>
                    </Dropdown>
                    |
                <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            图文
                    </a>
                    </Dropdown>
                    |
                <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            布局
                    </a>
                    </Dropdown>
                    |
                <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            节日行业
                    </a>
                    </Dropdown>
                </div>
                <div className={{}}>
                    <a>收藏</a>
                </div>
            </div>
        )

    }
}