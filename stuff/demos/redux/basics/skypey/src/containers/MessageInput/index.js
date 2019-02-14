import React from 'react'
import store from '.././../store'
import { setTypingValue, sendMessage } from '../../actions'
import './index.css'

const MessageInput = ({ value }) => {
  const state = store.getState()

  const handleChange = e => {
    const { value: typedText } = e.target
    const action = setTypingValue(typedText)
    store.dispatch(action)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { typing, activeUserId } = state
    const action = sendMessage(typing, activeUserId)
    store.dispatch(action)
  }
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  )
}

export default MessageInput
