import styles from './index.css';
import { Layout, Menu } from 'antd';
const {
  Header, Footer, Content,
} = Layout;
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      
      {props.children}

    </div>
  );
}

export default BasicLayout;
