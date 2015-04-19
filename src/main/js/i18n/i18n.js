import React from 'react';

import {LanguageSelector} from './languageSelector.js';
import {I18nSample} from './i18nSample.js';

import {languages} from '../../lang/lang.js';

export var I18n = React.createClass({
    getInitialState : function() {
        return { languageIndex : 0 }
    },
    updateLanguage: function( languageIndex ) {
        this.setState( { languageIndex : languageIndex } );
    },
    render: function () {
        var languageIndex = this.state.languageIndex;
        var language = languages[languageIndex];
        var translation = language.translation;
        return (
            <div>
                <div>
                    <LanguageSelector languageIndex={languageIndex} languages={languages} changeHandler={this.updateLanguage}/>
                </div>
                <div>
                    <I18nSample language={language} {...translation} />
                </div>
            </div>
        );
    }
});