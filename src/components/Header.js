import React from 'react';
import Router from 'next/router';
import _ from 'lodash';

import { Link, withPrefix, classNames, getPageUrl } from '../utils';
import Action from './Action';

export default class Header extends React.Component {
    render() {
        const page = _.get(this.props, 'page');
        const pageUrl = _.trim(getPageUrl(page), '/');
        const config = _.get(this.props, 'config');
        const title = _.get(config, 'title');
        const header = _.get(config, 'header');
        const logo = _.get(header, 'logo');
        const logoAlt = _.get(header, 'logo_alt', '');
        const navLinks = _.get(header, 'nav_links');

        return (
            <header className="masthead">
                <div className="container">
                    <nav className="navbar" aria-label="Main Navigation">
                        <Link className="sr-only" href="#content">Skip to main content</Link>
                        {logo ? (
                            <Link className="navbar__logo" href={withPrefix('/')}><img src={withPrefix(logo)} alt={logoAlt} /></Link>
                        ) : (
                            <Link className="navbar__title" href={withPrefix('/')}>{title}</Link>
                        )}
                        {!_.isEmpty(navLinks) && (
                            <ul className="navbar__menu">
                                {_.map(navLinks, (action, index) => {
                                    const actionUrl = _.trim(_.get(action, 'url'), '/');
                                    return (
                                        <li
                                            key={index}
                                            className={classNames('navbar__menu-item', {
                                                'is-active': pageUrl === actionUrl
                                            })}
                                        >
                                            <Action action={action} />
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </nav>
                </div>
            </header>
        );
    }
}
