import React, { Component } from 'react';

class RenderPropsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  toggleIsOn = () => {
    this.setState({
      isOn: !this.state.isOn
    })
  }

  render() {
    const { render } = this.props;
    return render(`${this.state.isOn}`, this.toggleIsOn);
  }
}

export default RenderPropsComponent;
