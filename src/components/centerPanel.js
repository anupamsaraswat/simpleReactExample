import React,{Component} from 'react';
import styles            from '../styles/common.css'

export default class CenterPanel extends Component{
  constructor(props){
    super(props);
    this.state = {
      action : this.props.centerPanelAction
    }
  }
  componentWillReceiveProps(newProps){
    this.setState({
      action : newProps.centerPanelAction
    });
  }
  render(){
    return <div className={styles.centerPanel}>
      center Panel content {this.state.action}
    </div>
  }
}
