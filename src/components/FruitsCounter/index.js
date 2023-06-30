// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mangoes-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.mangoCount} className="fruits-button">
                Eat Mango
              </button>
            </div>
            <div className="bananas-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.bananaCount} className="fruits-button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
