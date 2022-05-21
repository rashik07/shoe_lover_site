
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Ques_ans from './components/Ques_ans';
function App() {
  const {  Content, Footer } = Layout;
  return (
    <div className="App">
      <Header></Header>
      <Content style={{ padding: '10px 50px' }}>

      <Shop></Shop>
      </Content>

      <Ques_ans></Ques_ans>
    </div>
  );
}

export default App;
