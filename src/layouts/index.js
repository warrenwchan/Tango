import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import NavBar from './NavBar'
import Hero from './Hero'
import Section from './Section'

import "../css/typography.css"
import styles from "../css/styles.css"

import hero from './../assets/tangotable-min.png'
import scent from './../assets/scent.svg';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <NavBar />
        <Hero />
        <Section
          title="Specials"
          icon={scent}
          subText="We know you’re into deals, so try these out."
        />
      </div>
    )
  }
}
