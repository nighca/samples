import * as React from 'react'
import Svg from './Svg'
import logo from './logo.svg'

class App extends React.Component<{}, void> {
  render() {
    return (
      <div className="App">
        <Svg src={logo} />
        Hello!!
      </div>
    );
  }
}

export default App
