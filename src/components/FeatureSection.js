import React from 'react';
import _ from 'lodash';

import { classNames, withPrefix, markdownify } from '../utils';
import Action from './Action';

export default class FeaturesSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');
        const image = _.get(section, 'image');
        const imageAlt = _.get(section, 'image_alt', '');
        const imagePosition = _.get(section, 'image_position', 'left');

        return (
            <section id={sectionId} className="section section--features">
                <div className="container">
                    <div className="section__content">
                        {image && (
                            <div
                                className={classNames('section__media', {
                                    'section__media--right': imagePosition === 'right'
                                })}
                            >
                                <img src={withPrefix(image)} alt={imageAlt} />
                            </div>
                        )}
                        <div className="section__body">
                            {title && <h2 className="section__title">{title}</h2>}
                            {content && <div className="section__copy">{markdownify(content)}</div>}
                            {!_.isEmpty(actions) && (
                                <div className="section__actions button-group">
                                    {_.map(actions, (action, index) => <Action key={index} action={action} />)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
