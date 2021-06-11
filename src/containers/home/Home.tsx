import ContactForm from "../../components/contactForm/ContactForm";
import Header from "../../components/header/Header";

import SectionPrincipal from "../../components/sectionPrincipal/SectionPrincipal";
import SectionSecondary from "../../components/sectionSecondary/SectionSecondary";
import Footer from "../../components/footer/Footer";
const Home = () => {

    return(
        <div>
            <Header/>
            
         
            <SectionPrincipal/>
            <SectionSecondary/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default Home;
/*
version sin fecha.
export default function Instructions() {
  return(
    <div className="instructions">
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
    </div>
  )
}
*/