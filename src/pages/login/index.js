import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import normal from '../../assets/normal.png';
import greetin from '../../assets/greetin.png';
import blindfold from '../../assets/blindfold.png';
import styles from './login.less';
import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            normal: 'block',
            greetin: 'none',
            blindfold: 'none',
            register: false
        }
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        const that=this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/demo/user/login', values)
                    .then(function (response) {
                        console.log(response);
                        message.success(response.data.msg)
                        that.history.push(({ pathname: "/home", isLogin: true})) 
                    })
                    .catch(function (error) {
                        message.error(error.response.statusText);
                        that.history.push(({ pathname: "/home"})) 
                    });
                console.log('Received values of form: ', values);
            }
        });
    }
    changeRegister = () => {
        this.setState({
            register: !this.state.register
        })
    }

    cutechanges = (e) => {
        const targetId = e.target.id;
        if (targetId == 'userName') {
            this.changeImg('greetin')
        } else if (targetId == 'password' || targetId == 'confrimPassword') {
            this.changeImg('blindfold')
        } else {
            this.changeImg('normal')
        }
    }
    changeImg(target) {
        const a = {}
        a[target] = 'block';
        this.setState({
            normal: 'none',
            greetin: 'none',
            blindfold: 'none'
        })
        this.setState(a);
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className={styles.contain} onClick={this.cutechanges}>
                <div className={styles.cute}>
                    <img src={normal} style={{ display: this.state.normal }}></img>
                    <img src={greetin} style={{ display: this.state.greetin }}></img>
                    <img src={blindfold} style={{ display: this.state.blindfold }}></img>
                </div>
                <h4 style={{ display: (this.state.register) ? 'none' : 'block' }} >登录</h4>
                <h4 style={{ display: !(this.state.register) ? 'none' : 'block' }}>注册</h4>
                <Form onSubmit={this.handleSubmit} className={styles.login_form}>
                    <FormItem >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem style={{ display: (this.state.register) ? 'block' : 'none' }}>
                        {getFieldDecorator('confrimPassword', {
                            rules: [{ required: this.state.register, message: 'Confirm your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confrim Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div style={{ display: (this.state.register) ? 'none' : 'block',textAlign:'right'  }} >
                            <Button  type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Log in
                        </Button>
                            <a href="">Forgot password</a>
                            <a style={{ marginLeft: '20px' }} onClick={this.changeRegister}>register now!</a>
                        </div>
                        <div style={{ display: !(this.state.register) ? 'none' : 'block',textAlign:'right' }}>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                register
                        </Button>

                            <a style={{textAlign:'right',marginRight: '30px' }} onClick={this.changeRegister} >login in</a>
                        </div>

                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default (Form.create()(Login))