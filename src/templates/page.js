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
                            <form method="POST" action="#" data-netlify="true" name={_.get(this.props, 'pageContext.name')} netlify-honeypot="bot-field" >
                                <label for='naam'>Naam</label>
                                <input type='text' name='Naam' id='naam' /><br/>
                                <label for='email'>E-mail</label>
                                <input type='email' name='Email' id='email' /><br/>
                                <input type='submit' value='Verzenden'/>
                            </form>
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
