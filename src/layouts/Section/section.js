import React, { Component } from 'react';
import styles from './styles.css';

import Coupon from './../../components/coupons';

const Section = ({title, icon, subText}) => (
  <div className="sectionContainer" >
    <div className="sectionTitleContain" >
      <p className="sectionTitle" >{title}</p>
      <img className="sectionIcon" src={icon} alt="{icon}"/>
      <p className="sectionSubText" >{subText}</p>
    </div>
    <Coupon
      size="big"
      title="Suns out Búns out"
      desc="2pm - 5pm Get a free soda with a purchase of a bún for $10.95"
    />
  </div>
)
export default Section;
