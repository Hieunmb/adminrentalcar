import logo from './logo.svg';
import './App.css';
import ContentHeader from './components/layouts/content-header';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Switch from './components/layouts/switch';
import Sidebar from './components/layouts/sidebar';
import Search from './components/layouts/search';
import AdminAddBrand from './components/web/admin-addbrand';
import AdminAddCar from './components/web/admin-addcar';
import BackToTop from './components/layouts/backtotop';
import AdminAddCarImages from './components/web/admin-addcar-images';
import AdminAddCarType from './components/web/admin-addcartype';
import AdminBooking from './components/web/admin-booking';
import AdminBookingDetail from './components/web/admin-booking-detail';

function App() {
  var element = document.getElementById('yourElementId');
if (element) {
    // Proceed with your code
    element.classList.add('someClass');
}
  return (
    <div className="App">
      <Switch/>
      <Header/>
      <Sidebar/>
      <div class="main-content app-content">
        <div class="container-fluid">
            <AdminBookingDetail/>
        </div>
    </div>
      <Search/>
      <BackToTop/>
      <Footer/>
    </div>
  );
}

export default App;
