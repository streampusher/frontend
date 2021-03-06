import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class NewRoute extends Route {
  model() {
    return this.store.createRecord('blog-post');
  }
}
