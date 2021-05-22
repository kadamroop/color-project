import Palette from './Components/Palette/Palette';
import SeedColours from './SeedColors';

function App() {
  return (
    <div >
      <Palette {...SeedColours[4]}/>
    </div>
  );
}

export default App;
