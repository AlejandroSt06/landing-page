import Atropos from 'atropos/react';
import 'atropos/css'
const myAtropos = Atropos({
  el: '.my-atropos',
  // rest of parameters
  rotateLock: true,

  // rotateXMax: 75,
  // rotateYMax: 75,

  shadow: true,
  shadowOffset: 50,
  // shadowScale: 5,
  // highlight: false,
  // durationEnter: 1000,
  // activeOffset: 560
});
export default function App () {
    return (
      <div id="app">
        {/* Atropos */}
        <Atropos className="my-atropos">
        <img src='https://picsum.photos/200'></img>
        </Atropos>
      </div>
    )
  }