import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Subtitle from './components/subtitle';
import Block from './components/block';
import Counter from './components/counter';


function App() {
  return (
    <div className="App">
      <Header />
      <Subtitle />

      <Block
        title="Basic"
        price="$149/moth"
        list={{
          1: "3 videos per month",
          2: " Text content ",
          3: "Graphics content",
          4: "Basic support"
        }}
        className="basic-block"
        button="Get Started"
        btnClassname="basic-btn"
      />
      <Block
        title="Pro"
        price="$299/moth"
        list={{
          1: "6 videos per month",
          2: " Text content ",
          3: "Graphics content",
          4: "Pro support"
        }}
        className="pro-block"
        button="Get Started"
        btnClassname="pro-btn"
      />
      <Block
        title="Enterprise"
        price="Contact us"
        list={{
          1: "contact us",
          2: " Text content ",
          3: "Graphics content",
          4: "Dedicated support"
        }}
        className="enterprise-block"
        button="Contact us"
        btnClassname="enterprise-btn"
      />
      <Counter />
    </div>
  );
}



export default App;
