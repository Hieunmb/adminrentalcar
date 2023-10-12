import logo from './logo.svg';
import './App.css';
import ContentHeader from './components/layouts/content-header';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Switch from './components/layouts/switch';
import Sidebar from './components/layouts/sidebar';
import Search from './components/layouts/search';

function App() {
  return (
    <div className="App">
      <Switch/>
      <Header/>
      <Sidebar/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default App;
