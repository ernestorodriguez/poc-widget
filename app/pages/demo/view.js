import React from 'react';

class View extends React.Component {
    render() {
        const { weatherWidget, model } = this.props;

        return (
            <div className={'demo-page'}>
                {weatherWidget.render()}
                <script dangerouslySetInnerHTML={ {__html: ` window.__PRELOADED_STATE__ = ${JSON.stringify({ model })}`}} />
            </div>
        );
    }
}

export default View;
