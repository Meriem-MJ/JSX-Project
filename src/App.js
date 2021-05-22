import './App.css';
import './styles.css';
import image1 from './image1.png';
import image2 from '/image2.png';


function App() {
  return (
    <>
      <div style={{border: "solid 1 black", maxWidth:"100vw"}}>

          <h1 className="title red">Your name here</h1>
          
          <br/>

          <img src={image1.png} alt="image1" />

          <br/>

          <img src={image2.png} alt="image2" />
   
      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </>
  );
}

export default App;
