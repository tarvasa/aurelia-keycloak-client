import {PLATFORM} from 'aurelia-framework';

export class App {

    configureRouter(config, router) {
      config.title = 'Aurelia';
      config.options.pushState = true;
      config.options.root = '/';
      config.map([
        { route: ['', 'home'], moduleId: PLATFORM.moduleName('welcome'), nav: true, title: 'Welcome' },
        { route: 'secured', moduleId: PLATFORM.moduleName('secured'), nav: true, title: 'Secured'},
      ]);
  
      this.router = router;
    }
}
