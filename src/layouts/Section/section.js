import React, { Component } from 'react';
import styles from './styles.css';

class Section extends Component {
  render() {
    return (
      <div className="sectionContainer" >
        <div className="sectionTitleContain" >
          <p className="sectionTitle" >{this.props.title}</p>
          <img className="sectionIcon" src={this.props.icon} alt="{icon}"/>
          <p className="sectionSubText" >{this.props.subText}</p>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Section;
