import Navbar from '../../components/navebar/navbar.jsx'
import CardsCarousel from "../../components/carousel/carousel.jsx";
import Boxcontainer from '../../components/box/Boxcontainer.jsx';
import Footer from '../../components/footer/footer.jsx';
import './home.css'
export default function home(){
  return (
    
    <div className='container'>
        <Navbar/>
        <CardsCarousel/>
        <Boxcontainer/>
        <Footer/>
    </div>
  )
}