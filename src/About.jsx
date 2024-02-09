import HeroSection from './components/HeroSection'
import { AppContext, useProductContext } from './context/ProductContext';

const About = () => {

  const {myName} = useProductContext();

  const data = {
    name: "Apana Ecommerce",
  }

  return (
    <>
      {myName}
    <HeroSection myData={data}  />
    </>
  )
}

export default About