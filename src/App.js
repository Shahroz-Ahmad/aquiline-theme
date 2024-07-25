import './App.css';
import Branding from './Components/Branding';
import CarPoints from './Components/CarPoints';
import ChoosePlan from './Components/ChoosePlan';
import Discount from './Components/Discount';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PopularProducts from './Components/PopularProducts';
import PremiumWashing from './Components/PremiumWashing';
import ProfessinalWashing from './Components/ProfessinalWashing';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <ProfessinalWashing />
      <PremiumWashing />
      <ChoosePlan />
      <Discount />
      <CarPoints />
      <Testimonials />
      <Branding />
      <PopularProducts />
      <Footer />
    </>
  );
}

export default App;