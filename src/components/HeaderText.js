import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HeaderText extends Component {
  render() {
    const { page } = this.props.match.params;

    return <>{page.toUpperCase()}</>;
  }
}

export default withRouter(HeaderText);
