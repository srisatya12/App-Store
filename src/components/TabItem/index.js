// Write your code here
import './index.css'
const TabItem = props => {
  const {each,changeTab} = props
  const {tabId, displayText} = each
  const onClickTabChange = ()=>{
    changeTab(tabId)
  }
  return (
    <>
      <li className="list">
        <button onClick={onClickTabChange}>{displayText}</button>
      </li>
    </>
  )
}

export default TabItem
