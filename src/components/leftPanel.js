import React, {Component} from 'react';
import Navigation         from './navigation/navigation.js'
import styles             from '../styles/common.css'

export default class LeftPanel extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return <div className={styles.leftPanel}>
      <Navigation  label='Create Store' onClickHandler={this.props.onClickHandler}/>
      <Navigation  label='Search Store' onClickHandler={this.props.onClickHandler}/>
    </div>
  }
}
