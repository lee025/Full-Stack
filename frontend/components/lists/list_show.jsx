import React from 'react';
import { Link } from 'react-router-dom';

class ListShow extends React.Component {

  componentDidMount() {
    this.props.fetchList(this.props.match.params.listId);
  }

  render() {
    const { list } = this.props;
    return(
      <div>
        <h3>{list.title}</h3>
        {/* map tasks later */}

      </div>
    );
  }
}

export default ListShow;