import React, { Component } from 'react'
import './index.css'

const Chat = ({ message }) => {
  const { text, is_user_msg } = message
  return (
    <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''}`}>{text}</span>
  )
}

class Chats extends Component {
  refChats = React.createRef()

  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const { refChats } = this
    refChats.current.scrollTop = refChats.current.scrollHeight
  }

  render () {
    const { refChats } = this
    return (
      <div className="Chats" ref={refChats}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    )
  }
}

export default Chats
