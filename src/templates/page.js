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
                            <p>
                                Langs deze weg kan u uw interesse doorgeven. We nemen dan zo snel mogelijk contact op met meer praktische informatie en een betalingsuitnodiging.
                            </p>
                            <form method="POST" data-netlify="true" name={_.get(this.props, 'pageContext.name')}>
                                <label>Naam<br />
                                    <input type='text' name='Naam' />
                                </label>
                                {_.get(this.props, 'pageContext.name') === 'gdpr-actuele-stand-van-zaken' && 
                                    <div>
                                        <label><input type="checkbox" name="8 juni" value="8 juni" /> 8 juni</label><br/>
                                        <label><input type="checkbox" name="9 juni" value="9 juni" /> 9 juni</label>
                                    </div>
                                }
                                <label>E-mailadres<br />
                                    <input type='text' name='Naam' />
                                </label>
                                <label>Opmerkingen<br />
                                    <textarea name='Opmerkingen'></textarea>
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
