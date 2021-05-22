import './App.css';
import './styles.css';

function App() {
  return (
    <>
      <div style={{border: "solid 1 black", maxWidth:"100vw"}}>

          <h1 className="title red">Your name here</h1>
          
          <br/>

          <img src="/imageInSrc.jpg" alt="image1" />

          <br/>

          <img src="/imageInPublic.jpg" alt="image2" />
   
      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </>
  );
}

export default App;
