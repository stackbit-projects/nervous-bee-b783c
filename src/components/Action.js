import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';

export default class Action extends React.Component {
    render() {
        const action = _.get(this.props, 'action');
        const url = _.get(action, 'url');
        const label = _.get(action, 'label');
        const style = _.get(action, 'style', 'link');

        return (
            <Link
                href={withPrefix(url)}
                className={classNames({
                    'button': style !== 'link'
                })}
            >
                {label}
            </Link>
        );
    }
}
