import './App.css';
import Stars from './components/stars'
import Card from './components/card'

const myData = {
  fullName : 'Kaspars Liepins',
  description: 'Student Web Developer',
  image : 'https://i.ibb.co/JFPyDkN/20201101-131024.jpg'
}

function App() {
  return (
    <div className="App">
      <div className='carddiv'>
      <Card {...myData} />
      </div>
      <div className='rateup'>
      <p className='p1'>Rate me:</p>
      <Stars />
      </div>
    </div>
  );
}

export default App;
