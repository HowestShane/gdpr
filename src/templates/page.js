import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { markdownify, htmlToReact } from "../utils";

export default class Page extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <article id="main">
          <header>
            <h2>{_.get(this.props, "pageContext.frontmatter.title")}</h2>
            {markdownify(_.get(this.props, "pageContext.frontmatter.subtitle"))}
          </header>
          <section
            className={
              "wrapper " +
              _.get(this.props, "pageContext.frontmatter.background_style")
            }
          >
            <div className="inner">
              {htmlToReact(_.get(this.props, "pageContext.html"))}
            </div>
          </section>
          {_.get(this.props, "pageContext.name") !==
            "privacy-policy" && (
            <section className={"wrapper "}>
              <div className="inner">
                <h2>Inschrijven</h2>
                <p>
                  Langs deze weg kan u uw interesse doorgeven.
                  <br />
                  We nemen zo snel mogelijk contact op met meer praktische
                  informatie en een betalingsuitnodiging.
                </p>

                <form
                  method="POST"
                  data-netlify="true"
                  name={_.get(this.props, "pageContext.name") + "-form"}
                  netlify-honeypot="bot-field"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value={_.get(this.props, "pageContext.name") + "-form"}
                  />
                  <label>
                    Naam
                    <br />
                    <input type="text" name="naam" />
                  </label>

                  {_.get(this.props, "pageContext.name") ===
                    "gdpr-actuele-stand-van-zaken" && (
                    <div>
                      Data
                      <br />
                      <input type="checkbox" id="8juni" name="8juni" />
                      <label htmlFor="8juni">8 juni</label>
                      <input type="checkbox" id="9juni" name="9juni" />
                      <label htmlFor="9juni">9 juni</label>
                    </div>
                  )}

                  <label>
                    E-mailadres
                    <br />
                    <input type="email" name="email" />
                  </label>

                  <label>
                    Opmerkingen
                    <br />
                    <textarea name="opmerkingen"></textarea>
                  </label>

                  <button type="submit">Verzenden</button>
                </form>
              </div>
            </section>
          )}
        </article>
      </Layout>
    );
  }
}
