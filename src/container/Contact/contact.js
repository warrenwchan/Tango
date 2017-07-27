import React, { Component } from 'react';
import styles from './styles.css';

import Section from './../../layouts/Section';

class ContactContainer extends Component {
  render() {
    return (
      <div className="contactContainer">
        <Section
          title="Contact"
          icon={this.props.scent}
          subText="Contact Us for more info"
        >

        </Section>
      </div>
    );
  }
}

export default ContactContainer;
