// Write your code here
import './index.css'
const AppItem = props => {
  const {each} = props
  const {appId, appName, imageUrl} = each
  return (
    <li>
      <img alt={appName}src={imageUrl} className="image" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
