import React from 'react';
import ReactIntl from 'react-intl';

import {langMixin} from '../../lang/langMixin.js';

import {FormattedDate, FormattedNumber, FormattedMessage} from 'react-intl';

export var I18nSample = React.createClass({
    mixins: [langMixin],
    getMessage : function(){
        return ( <FormattedDate value={Date.now()}/> );
    },
    render: function () {
        return (
            <div>
                <p>Sample -> Langage Id : -{this.props.language.id}- Langue: -{this.props.language.displayName}-</p>
                <p>Date</p>
                <p id='test'><FormattedMessage message={this.getText('test')} /></p>
                <ul>
                    <!--Default-->
                    <li>{this.getMessage()}</li>
                    <!--parameters directly specified-->
                    <li><FormattedDate
                        value={Date.now()}
                        weekday="narrow"
                        day="numeric"
                        month="long"
                        year="numeric"/></li>
                    <!--Custom format-->
                    <li><FormattedDate
                        value={Date.now()}
                        format="custom"/></li>
                </ul>
                <p>Number</p>
                <ul>
                    <!--Default-->
                    <li><FormattedDate value={Date.now()}/></li>
                    <!--parameters directly specified-->
                    <li><FormattedDate
                        value={Date.now()}
                        weekday="narrow"
                        day="numeric"
                        month="long"
                        year="numeric"/></li>
                    <!--Custom format-->
                    <li><FormattedDate
                        value={Date.now()}
                        format="custom"/></li>
                </ul>
                <ul>
                    <li><FormattedNumber value={1000} style="currency" currency="USD"/></li>
                    <li><FormattedMessage message="Hello {world}"
                                          world="toi"/></li>
                    <li>{this.getText('photo')}</li>
                    <li>{this.getText('photos')}</li>
                    <li><FormattedMessage
                        message={this.getText('photos')}
                        name="Annie"
                        numPhotos={1000}
                        takenDate={Date.now()}/></li>
                    <li>testfin</li>
                </ul>
            </div>
        );
    }
});