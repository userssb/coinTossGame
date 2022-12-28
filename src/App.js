import CoinToss from './components/CoinToss'

import './App.css'

const images = {
  imgHeads: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  imgTails: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}

const App = () => <CoinToss images={images} />

export default App
