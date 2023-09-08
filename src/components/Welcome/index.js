// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTxt = this.getButtonText()
    return (
      <div className="bg-con">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <button type="button" className="butt" onClick={this.isSubscribe}>
          {buttonTxt}
        </button>
      </div>
    )
  }
}

export default Welcome
