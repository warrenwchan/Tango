import React, { Component } from 'react';
import styles from './styles.css'

import image1 from './../../assets/tangotable-min.png';

const couponBG = {
  backgroundImage: 'url('+ image1 + ')'
}

const Coupon = ({title, desc, size, onClick}) => (
  <a className={size} style={couponBG} onClick={onClick}>
    <h3 className="couponTitle">{title}</h3>
    <p className="couponDescription">{desc}</p>
    <div className="cornerBox"></div>
  </a>
)

export default Coupon;
