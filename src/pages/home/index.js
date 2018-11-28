import React, { Component } from 'react';

import styles from './index.less';
export default class home extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className={styles.header}>
                        <div className={styles.navbar_logo}>
                            <h3>shamer</h3>
                        </div>
                        <ul className={styles.navbar_info}>
                            <li><a class="active" aria-current="page" href="/">登录</a></li>
                            <li><a href="https://www.yuque.com/margox/be/lzwpnr" target="_blank">使用文档</a></li>
                            <li><a href="/demos/basic">关于</a></li>
                        </ul>
                    </div>

                </div>
                <div className={styles.content}>
                    <div className={styles.main}>
                        <h1 className={styles.introduce}>hello</h1>
                        <h3 className={styles.word}>i will back</h3>
                        <div className={styles.box}>
                            <a href='http://www.baiduc.com'>开始使用</a>
                            <a href=''>使用介绍</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}