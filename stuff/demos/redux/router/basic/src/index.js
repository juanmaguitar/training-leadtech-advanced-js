import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"
import { history, configureStore } from "./store"

const store = configureStore()
const render = () => {
  fancyLog()
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("react-root")
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./containers/App", () => {
    render()
  })
}

// -------------

// const render = () => {
//   fancyLog()
//   return ReactDOM.render(<App />, document.getElementById('root'))
// }
// render()

store.subscribe(render)

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF")
  console.log(store.getState())
}
