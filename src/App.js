
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
function App() {
  const {  Content, Footer } = Layout;
  return (
    <div className="App">
      <Header></Header>
      <Content style={{ padding: '10px 50px' }}>

      <Shop></Shop>
      </Content>
    </div>
  );
}

export default App;
