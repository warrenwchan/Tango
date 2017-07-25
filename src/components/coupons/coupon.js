import React, { Component } from 'react';
import styles from './styles.css'

const Coupon = ({title, desc, size}) => (
  <div className={size}>
    <h3 className="couponTitle">{title}</h3>
    <p className="couponDescription">{desc}</p>
  </div>
)

export default Coupon;
