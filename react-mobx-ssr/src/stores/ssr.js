import { computed, action } from 'mobx';
import { decode } from '../utils';

class Ssr {
  @computed
  get state() {
    /* eslint-disable */
    return decode(global.__state__);
    /* eslint-enable */
  }

  @computed
  get stateLoaded() {
    return !!this.state;
  }

  @action
  clear() {
    /* eslint-disable */
    global.__state__ = null;
    /* eslint-enable */
  }
}

export default new Ssr();
