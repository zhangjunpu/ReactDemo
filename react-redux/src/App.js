import React, { PureComponent } from 'react'

import { Provider } from 'react-redux'

import Home from './pages/Home'
import About from './pages/About'
import Recommend from './pages/Recommend'
// import StoreContext from './utils/context'
import store from './store'

export default class App extends PureComponent {
  render() {
    return (
      // <StoreContext.Provider value={store}>
      //   <Home />
      //   <About />
      // </StoreContext.Provider>
      <Provider store={store}>
        <Home />
        <About />
        <Recommend />
      </Provider>
    )
  }
}
