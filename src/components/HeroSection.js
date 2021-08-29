import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import Action from './Action';

export default class HeroSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="section section--hero">
                <div className="container container--small">
                    {title && <h1 className="section__title">{title}</h1>}
                    {content && <div className="section__copy">{markdownify(content)}</div>}
                    {!_.isEmpty(actions) && (
                        <div className="section__actions button-group">
                            {_.map(actions, (action, index) => <Action key={index} action={action} />)}
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
