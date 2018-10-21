import React, { Component } from 'react';


class ReactCloneExample extends Component {
    render() {
        return (
            <Buttons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </Buttons>
        );
    }
}

class Buttons extends Component {
    constructor() {
        super();
        this.state = { selected: 'None',
    over: 'None' }
    }
    selectItem(selected) {
        this.setState({ selected })
    }
    overItem(over) {
        this.setState({ over })
    }
    render() {
        // let items = this.props.children;
        let fn = child => React.cloneElement(child, {
            onClick: this.selectItem.bind(this, child.props.value),
            onMouseOver: this.overItem.bind(this, child.props.value)
        })
        let items = React.Children.map(this.props.children, fn);
        return (
            <div>
                <h1>Example for React.cloneElement</h1>
                <h2>You Selected: {this.state.selected}</h2>
                <h2>Mouse is on:{this.state.over}</h2>
                {items}
            </div>
        );
    }
}

export default ReactCloneExample;
