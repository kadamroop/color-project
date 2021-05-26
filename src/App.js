import Palette from './Components/Palette/Palette';
import SeedColours from './SeedColors';
import { generatePalette } from './colorHelpers'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div >
        <Palette palette={generatePalette(SeedColours[4])} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div >
//       <Palette {...SeedColours[4]}/>
//     </div>
//   );
// }

export default App;
