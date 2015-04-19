import React from 'react';

export var LanguageSelector = React.createClass({
    handleChange: function (e) {
        var languageIndex = e.target.value;
        this.props.changeHandler(languageIndex);
    },
    render: function () {
        var options = [];
        for (var i = 0; i < this.props.languages.length; i++) {
            options.push(<option value={i}>{this.props.languages[i].displayName}</option>);
        }
        return (
            <div>
                <select value={this.props.languageIndex} onChange={this.handleChange}>
                    {options}
                </select>
            </div>
        );
    }
});