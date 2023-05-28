import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
         <Plans />
         <Testimonials />
    </div>
  );
}

export default App;
