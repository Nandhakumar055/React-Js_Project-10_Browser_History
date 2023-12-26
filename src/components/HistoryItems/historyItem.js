import './historyItem.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, title, logoUrl, domainUrl, id} = historyDetails

  const onDeleteIcon = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-card-item-container">
      <p className="history-time">{timeAccessed}</p>
      <div className="history-web-item-main-container">
        <div className="history-web-item-container">
          <img
            src={logoUrl}
            className="social-media-icon-image"
            alt="domain logo"
          />
          <div className="domines-container">
            <p className="history-web-name">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-icon-button"
          data-testid="delete"
          type="button"
          onClick={onDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
