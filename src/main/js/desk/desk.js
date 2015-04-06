'use strict';

import React from 'react';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Hello page 1</h1>
                <table className="table table-stripped">
                    <tr>
                        <th>Head1</th><th>Head2</th>
                    </tr>
                    <tr>
                        <td>lala</td>
                        <td>lala</td>
                    </tr>
                    <tr>
                        <td>lala</td>
                        <td>lala</td>
                    </tr>
                </table>
            </div>
        );
    }
});
