'use strict';

import ReactIntl from 'react-intl';
var IntlMixin = ReactIntl.IntlMixin;

/**
 * Wrapper of ReactIntl.IntlMixin to handle unknown messages.
 */
export var langMixin = {
    getText: function( message ){
        try {
            return this.getIntlMessage( message );
        }
        catch( err ) {
            return 'unknown message';
        }
    }
};

function extend(destination, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            destination[k] = source[k];
        }
    }
    return destination;
}

extend( langMixin, IntlMixin );