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
                            <form method="POST" data-netlify="true" name='pageContext.id'>
                                <input type='hidden' value={_.get(this.props, 'pageContext.name')} />
                                <input type='text' name='Naam' /><br/>
                                <input type='email' name='Email' /><br/>
                                <input type='submit' value='Verzenden'/>
                            </form>
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
