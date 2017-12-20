import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ssrStore from '../../stores/ssr';
import store from './store';

@observer
class Home extends Component {
  static async getInitialStoreState({ req, res }) {
    await store.getUser();
    return {
      home: {
        user: store.user
      }
    };
  }

  componentDidMount() {
    console.log('home with match', this.props.match);
    if (!ssrStore.stateLoaded) {
      store.getUser();
    }
  }

  render() {
    const { stringUser } = store;
    return (
      <div>
        <p>user: {stringUser}</p>
        <Link to="/404">
          404
        </Link>
      </div>
    );
  }
}

export default Home;
