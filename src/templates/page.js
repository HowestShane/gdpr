import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <article id="main">
                    <header>
                        <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section className={'wrapper ' + _.get(this.props, 'pageContext.frontmatter.background_style')}>
                        <div className="inner">
                            {htmlToReact(_.get(this.props, 'pageContext.html'))}
                        </div>
                    </section>
                    <section className={'wrapper '}>
                        <div className="inner">
                            <h2>Inschrijven</h2>
                            <form method="POST" data-netlify="true" name={_.get(this.props, 'pageContext.name')}>
                                <label>Naam<br />
                                    <input type='text' name='Naam' />
                                </label>
                                <label>E-mailadres<br />
                                    <input type='text' name='Naam' />
                                </label>
                                <input type='submit' value='Verzenden'/>
                            </form>
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
