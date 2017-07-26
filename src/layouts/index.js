import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import NavBar from './NavBar'
import Hero from './Hero'
import Section from './Section'
import Coupon from './../components/coupons'

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
        >
          <div className="couponContain">
            <Coupon
              size="big"
              title="Suns out Búns out"
              desc="2pm - 5pm Get a free soda with a purchase of a bún for $10.95"
              onClick={() => (prompt("Coupon 1"))}
            />
            <Coupon
              size="small"
              title="“Third Wheel Special”"
              desc="Buy 2 Pho noodle bowls, Get 1 bowl free! From #60 - #67"
              onClick={() => (prompt("Coupon 2"))}
            />
            <Coupon
              size="small"
              title="“Tea Time Special”"
              desc="Free spring roll or free coke with purchase of main dish from 2pm - 5pm"
              onClick={() => (prompt("Coupon 3"))}
            />
            <Coupon
              size="small"
              title="$3 meal size up"
              desc="Add $3 to main dish for bubble tea or vietnamese ice coffee."
              onClick={() => (prompt("Coupon 4"))}
            />
            <Coupon
              size="small"
              title="$4 meal size up"
              desc="Add $4 to main dish for 4 Dumplings or Yam fries."
              onClick={() => (prompt("Coupon 5"))}
            />
          </div>
        </Section>
        <Section
          title="Favorites"
          icon={scent}
          subText="Try our top 10 most ordered."
        />
      </div>
    )
  }
}
