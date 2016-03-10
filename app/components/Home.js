import React from 'react';

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="text-center">Search by Github Username Above</h2>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Home;