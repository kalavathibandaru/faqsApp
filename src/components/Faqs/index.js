// Write your code here.

import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main-container">
      <div className="sub-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-items">
          {faqsList.map(eachfaq => (
            <FaqItem eachfaq={eachfaq} key={eachfaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
