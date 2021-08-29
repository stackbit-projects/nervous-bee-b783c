import React from 'react';
import _ from 'lodash';

import { htmlToReact } from '../utils';

export default class Footer extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const copyright = _.get(footer, 'content');

        return (
            <footer className="footer">
                <div className="container">
                    {copyright && <div className="footer__copyright">{htmlToReact(copyright)}</div>}
                </div>
            </footer>
        );
    }
}
