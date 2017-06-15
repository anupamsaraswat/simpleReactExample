import React, {Component}   from 'react';
import styles               from '../../styles/common.css'

export default class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.onLabelClick = this.onLabelClick.bind(this);
  }

  onLabelClick(e){
    this.props.onClickHandler(e.currentTarget.textContent);
  }

 // onClick should change background-color and update center panel content
  render(){
    return <div className={styles.navigation} onClick={this.onLabelClick}>
      {this.props.label}
    </div>
  }

}
