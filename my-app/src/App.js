import './App.css';
import { miniRender } from './mini-card/mini-card';
import { mediumRender } from './medium-card/medium-card';
import { cardRender } from './card/card';


function App() {
  return (
    <div className='container'>
    <section className='cards'>
      {cardRender()}
        <section className='mediumCards'>
        {mediumRender()}
        </section>
    </section>
    <section className='minicards'>
        {miniRender()}
    </section>
    </div>
  );
}

export default App;
