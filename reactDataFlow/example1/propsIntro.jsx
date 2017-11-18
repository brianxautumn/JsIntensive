import React from 'react';
import ReactDOM from 'react-dom';

const myList = ['warlock', 'titan', 'hunter'];

class ListItem extends React.Component {
  render() {
    return <li>{this.props.value}</li>;
  }
}

class List extends React.Component {
  render() {
    return (
      <ul className='my-list'>
        {
          myList.map(item => {
            return <ListItem value={item} />;
          })
        }
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById('root'));