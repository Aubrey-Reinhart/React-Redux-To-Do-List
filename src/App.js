import React from 'react'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'
import Main from './MainComponent'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
