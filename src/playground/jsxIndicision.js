console.log("App.js is running");

// JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One','Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.options.value;

    if (option) {
        app.options.push(option);
        e.target.elements.options.value = '';
        renderTemplate();
    }
};

const removeAll = () => {
    app.options = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [1, 2, 3];

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : 'There are no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>remove all</button>
            <ol>
                {
                    app.options.map((str) => <li key={str}> {str} </li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type='text' name='options'/>
            <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();