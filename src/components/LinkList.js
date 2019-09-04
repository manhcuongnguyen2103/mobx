import React from 'react'
class LinkList extends React.Component {
  render() {
    let listItems = this.props.links;
    listItems = listItems.map(item => {
            return (
              <li key={item.displayText} ><a href='{item.url}'>{item.displayText}</a></li> 
            );
        });
    return (
      <div className="column"><ul>{listItems}</ul></div>
    )
  }
}

export default LinkList
