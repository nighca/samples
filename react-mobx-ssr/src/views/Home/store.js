import { observable, computed, action, runInAction } from 'mobx';
import ssrStore from '../../stores/ssr';

class Home {
  constructor() {
    this.init();
  }

  @observable user = null;

  @computed
  get stringUser() {
    return JSON.stringify(this.user);
  }

  @action.bound
  async getUser() {
    this.user = null;
    console.warn('get user by client if this show in chrome console');
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          username: 'ddd',
          lastLogin: Date.now()
        });
      }, 1000);
    });
    return runInAction('@action: getUser', () => {
      this.user = data;
    });
  }

  // for ssr
  @action
  init() {
    if (ssrStore.state) {
      const { home } = ssrStore.state;
      if (home) {
        this.user = home.user;
      }
    }
  }
}

export default new Home();
