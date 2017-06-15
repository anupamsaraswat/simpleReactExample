import React, { Component } from 'react';
import { render }           from 'react-dom';
import Header               from 'components/header'
import LeftPanel            from 'components/leftPanel'
import CenterPanel          from 'components/centerPanel'


export default class App extends Component{
  constructor(){
    super();
    this.state={
      action : 'homepage'
    }
    this.updateCenterPanel = this.updateCenterPanel.bind(this);
  }

  updateCenterPanel(newAction){
    this.setState({
      action : newAction
    });
  }

  render(){
    return <div>
        <Header/>
        <LeftPanel onClickHandler={this.updateCenterPanel}/>
        <CenterPanel centerPanelAction={this.state.action}/>
      </div>
  }
}
