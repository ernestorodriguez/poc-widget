import '../pages/demo/styles.scss';
import render from  '../pages/demo/controller';
import ReactDOM from 'react-dom'

const { model } = window.__PRELOADED_STATE__;

ReactDOM.hydrate(
    render(model),
    document.getElementById('root-app'),
);
