import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coinFace: true,
    heads: 0,
    tails: 0,
    total: 0,
  }

  getVal = () => {
    const val = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))
    if (val === 0) {
      this.setState({coinFace: true})
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({coinFace: false})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {images} = this.props
    const {imgHeads, imgTails} = images
    // const res = this.getVal()
    const {coinFace, heads, tails, total} = this.state
    return (
      <div className="bg-cont">
        <div className="main-cont">
          <div className="head-cont">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="headtail">Heads (or) Tails</p>
            {coinFace ? (
              <img src={imgHeads} alt="toss result" className="coin-image" />
            ) : (
              <img src={imgTails} alt="toss result" className="coin-image" />
            )}
            <button className="btn" type="button" onClick={this.getVal}>
              Toss Coin
            </button>
            <div className="result-cont">
              <p className="res-item">Total:{total}</p>
              <p className="res-item">Heads:{heads}</p>
              <p className="res-item">Tails:{tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
