import Navbar from './sections/Navbar/Navbar';
import Header from './sections/Header/header';
import About from './sections/About';
import portfolio from './sections/portfolio/portfolio';
import Designprojects from './sections/Designprojects/Designprojects';
import Academic_teaching_projects from'./sections/Academic_teaching_projects/Academic_teaching_projects';
import Testimonials from './sections/Testimonials/Testimonials';
import FAQs from './sections/FAQs/FAQs';
import contact from './sections/contact/contact';
import footer from './sections/footer/footer';
import floatingnav from './sections/floatingnav/floatingnav';






const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <portfolio/>
      <Designprojects/>
      <Academic-teaching-projects/>
      <Testimonials/>
      <FAQs/>
      <contact/>
       <Footer/>
      <Floatingnav/>
     
 


    </main>
  )
}

export default App
