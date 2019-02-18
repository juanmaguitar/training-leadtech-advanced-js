const LogMessage = ({message, date}) => (
  <div>
    <p>
      {message}
      { date && <small>{date}</small> }
    </p>
  </div>
)

const withNowDate = BaseComponent => props => <BaseComponent {...props} date={ new Date() }/>


const LogMessageWithNow = withNowDate(LogMessage)
HOC → Higher Order Component
