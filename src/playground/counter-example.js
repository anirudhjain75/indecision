
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }
    componentDidMount() {
        let count = localStorage.getItem('count')
        console.log(count)
        if (!isNan(count)) {
            this.setState(()=>({count: parseInt(count, 10)}))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count)
        {
            localStorage.setItem('count', this.state.count)
        }
    }
    
    handleAddOne() {
        this.setState((perviousState) => {
            return {
                count: perviousState.count + 1,
            }
        })
    }
    handleMinusOne() {
        this.setState((perviousState) => {
            return {
                count: perviousState.count - 1,
            }
        })
    }
    handleReset() {
        // this.setState(() => {
        //     return {
        //         count: 0,
        //     }
        // })
        this.setState({
            count:0
        })
    }
    render() {
        return (
            <div>
            <h1> Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter count={50}/>, document.getElementById('app'))


/* let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
}
const reset = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
}



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp(); */