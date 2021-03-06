import PropTypes from 'prop-types';
import React from 'react';

const MessageCountRotationStrategySummary = React.createClass({
  propTypes: {
    config: PropTypes.object.isRequired,
  },

  render() {
    return (
      <div>
        <dl>
          <dt>Index rotation strategy:</dt>
          <dd>Message Count</dd>
          <dt>Max docs per index:</dt>
          <dd>{this.props.config.max_docs_per_index}</dd>
        </dl>
      </div>
    );
  },
});

export default MessageCountRotationStrategySummary;
