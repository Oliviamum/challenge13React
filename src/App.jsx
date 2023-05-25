import Navbar from './sections/Navbar/Navbar';
import Header from './sections/Header/header';
import About from './sections/About/About';
import Designprojects from './sections/Designprojects/Designprojects';
import Academic_teaching_projects from'./sections/Academic_teaching/Academic_teaching';
import Testimonials from './sections/Testimonials/Testimonials';
import FAQs from './sections/FAQs/FAQs';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
import Floatingnav from './sections/Floatingnav/floatingnav';


const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Designprojects/>
      <Academic_teaching_projects/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
       <Footer/>
      <Floatingnav/>
      
      

    </main>
  )
}






export default App
