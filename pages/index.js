import React from 'react';
import s from 'styled-components';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import JsonInput from '../components/JsonInput';
import JsonBrowse from '../components/JsonBrowse';

export default class extends React.Component {
  state = {
    mode: 'input',
    json: null,
  }

  onInputChange = (json) => {
    this.setState({
      mode: 'browse',
      json,
    });
  }

  render() {
    return (
      <Layout>
        { this.state.mode === 'input' && <JsonInput onChange={ this.onInputChange } /> }
        { this.state.mode === 'browse' && <JsonBrowse json={ this.state.json } />}
      </Layout>
    );
  }
};
