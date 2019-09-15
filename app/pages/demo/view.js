import React from 'react';

class View extends React.Component {
    render() {
        const { weatherWidget } = this.props;

        return (
            <div className={'demo-page'}>
                {weatherWidget.render()}
            </div>
        );
    }
}

export default View;
