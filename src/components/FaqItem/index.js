// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {buttonClicked: false}

  render() {
    const {eachfaq} = this.props
    const {questionText, answerText} = eachfaq
    const {buttonClicked} = this.state

    const ImageUrl = buttonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = buttonClicked ? 'minus' : 'plus'

    const onChangeIcon = () => {
      this.setState(prevState => ({buttonClicked: !prevState.buttonClicked}))
    }

    return (
      <li className="list-item">
        <div className="adjusting">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={onChangeIcon}>
            <img src={ImageUrl} alt={altText} />
          </button>
        </div>
        <hr className="horizontal-line" />
        <div>{buttonClicked && <p className="answer">{answerText}</p>}</div>
      </li>
    )
  }
}

export default FaqItem
