import ImageSlider from "./ImageSlider";
import Dropdown from "./Dropdown";
const App = () => {
  const slides = [
    { url: `${process.env.PUBLIC_URL}/4.jpg`, title: "beach" },
    { url: `${process.env.PUBLIC_URL}/6.jpg`, title: "boat" },

  ];
  const Mobileslides = [
    { url: `${process.env.PUBLIC_URL}/kutta.jpg`, title: "forest" },
    { url: `${process.env.PUBLIC_URL}/chic.jpg`, title: "city" },
   
  ];
  const containerStyles = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} mobileSlides={Mobileslides}/>
        <Dropdown/>
      </div>
    </div>
  );
};

export default App;
