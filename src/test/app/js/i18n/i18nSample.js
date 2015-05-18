import React from 'react';
import {IntlMixin, FormattedNumber, FormattedMessage} from 'react-intl';

export var I18nSample = React.createClass({
    mixins: [IntlMixin],
    render: function () {
        return (
            <div>
                <p>Sample -> Langage Id : -{this.props.language.id}- Langue: -{this.props.language.displayName}-</p>
                <ul>
                    <li><FormattedNumber value={1000} style="currency" currency="USD" /></li>
                    <li><FormattedMessage message="Hello {world}"
                                          world = "toi"/></li>
                    <li><FormattedMessage
                        message={this.getIntlMessage('photos')}
                        name="Annie"
                        numPhotos={1000}
                        takenDate={Date.now()} /></li>
                    <li>testfin</li>
                </ul>
            </div>
        );
    }
});