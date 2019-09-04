import React from 'react'

const holder = 'What needs to be done?'
class HeaderAppName extends React.Component {
  render() {
    return(
      <input style={{height: "7.5vh"}} className="input is-large  column is-half is-offset-one-quarter " type="text" placeholder={holder} onKeyDown={this.keyDown} />
    ) 
  }
}

export default HeaderAppName
