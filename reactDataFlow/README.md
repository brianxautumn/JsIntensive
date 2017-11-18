# React Data Flow

- [Props](#props)
- [State](#state)
- [Controlling Components](#controlling-components)
- [Refs](#refs)
- [Data Flow](#data-flow)

#### Props
`props` is a special property that is available to a child component, set by the parent component. `props` are read only, they cannot be changed by the child component. Props are used to pass data from parent down to child. 

Let's start with a list of some data to display:
```javascript
const myList = ['warlock' , 'titan', 'hunter'];
```

Next we would like to make a react component that will hold our list.
```javascript
class List extends React.Component {
  render() {
    return (
      <ul className='my-list'>
      </ul>
    );
  }
}
```
Inside our `ul` element, we would like to fill it with a list item that holds the value of each item in the array. Create a new react component that returns a `li` element. The difference here is that we would like its contents to be determined by the value variable. Access to a `props` value in a react class is done via `this.props`, then accessed by keyname. This component can then be reused by passing it in the value we would like displayed in each list item.
```javascript
class ListItem extends React.Component {
	render(){
		return <li>{this.props.value}</li>;
	}
}
```

In order to set the prop value in the child, from the parent component, pass it in the named value.

```javascript
      <ul className='my-list'>
        {
          myList.map(item => {
            return <ListItem value={item} />;
          })
        }
      </ul>
```
See the full example in [example1](./example1)
#### State
`State` differs from `props`, in that state can change. The initial state is declared in the constructor. Set the state object via `this.state`.
```javascript
  constructor(props) {
    super(props);
    this.state = {
      toggleState: false
    };
  }
```
In the render function, let's use the data from `this.state.toggleState` to make some ui changes. In this case, it will be used to change the background color of a div. Notice that style properties are in camel case.

In order tomake some changes to the state, there needs to be some way to accept input. Use the `onClick` prop to pass a reference to a function to be triggered when the element is clicked.
```javascript
  render() {
    return (
      <div
      style={{ 
        backgroundColor: this.state.toggleState ? 'red' : 'green', 
        width: 300,
        height: 300,
        lineHeight: '300px',
        textAlign: 'center'
        }}
        onClick={this.pressHandler.bind(this)}
      >
        click me!
      </div>
    );
  }
```
Finally, use the `setState` function in order to change the state. Do not change the property directly or it will not trigger a new render.
```javascript
  pressHandler() {
    this.setState({
      toggleState: !this.state.toggleState
    });
  }
```

Full example for [stateIntro](./stateIntro.jsx)
#### Refs

#### Data Flow
