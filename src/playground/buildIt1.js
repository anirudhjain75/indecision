
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this)
        this.state = {
            text: '',
            buttonText: 'Show Detail'
        } 
    }
    handleButton() {
        this.setState((prevState) => {
            if (!!!prevState.text) {
                return {
                    text:'Here is some text for Visibility toggle',
                    buttonText: 'Hide Detail'
                }
            }
            else {
                return {
                    text: '',
                    buttonText: 'Show Detail'
                }
            }
        })
    }
    render()
    {
        return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleButton}>{this.state.buttonText}</button>
        <p>{this.state.text}</p>
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let showDetail = false;
// let textToBeOnScreen = 'Here are the details'; 
// const display = {
//     text: '',
//     buttonText:'Show Detail',
// };
// const details = () => {
//     if (showDetail) {
//         showDetail = false;
//         display.text = '';
//         display.buttonText = 'Show Detail';
//         render();
//     }
//     else {
//         showDetail = true;
//         display.text = textToBeOnScreen;
//         display.buttonText = 'Hide Detail';
//         render();
//     }
// };

// const render = () => {
//     const template = (
//         <div>
//         <h1> Visibility Toggle </h1>
//         <button onClick={details}>{display.buttonText}</button>
//         <p>{display.text}</p>
//         </div>
//     )
//     ReactDOM.render(template, app);
// }

// render();