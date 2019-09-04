import React from 'react'

class Link extends React.Component {
  render() {
    let listLinks = this.props.listLinks;
    let strSplit = '';
    let ListLen = listLinks.length;
    listLinks = listLinks.map((link,i) => {
      if (ListLen === i + 1) {
        strSplit = '';
      } else {
        strSplit = ', ';
      }
        return (
          <div style={{display: 'inline-block'}}>
            <a href={link.url}  key = {link.displayText}>{link.displayText}</a>
            <div style={{display: 'inline-block'}}>{strSplit}</div>
          </div>
        )
      });
    return listLinks;
  }
}

class ReactDemo extends React.Component {
  render() {
    let listItems = this.props.links;
    listItems = listItems.map(item => {
            return (
              <div key = {item.title}>
                <div >{item.title}<br/>
                  <Link listLinks = {item.link}/>
                </div>
              </div>
            )
        });
    return (
      <div className="column">{listItems}</div>
    )
  }
}

export default ReactDemo
