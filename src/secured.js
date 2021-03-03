import Keycloak from 'keycloak-js';
import { inject } from 'aurelia-framework';

export class Secured {
  secretMessage = `This is a Keycloak-secured component of your application. You shouldn't be able to see this unless you've authenticated with Keycloak`;

  constructor(state) {
    this.state = { keycloak: null, authenticated: false };
  }

  attached() {
    this.initKeycloak();
  }

  initKeycloak() {
    const keycloak = Keycloak({
      "realm": "AureliaClient",
      "auth-server-url": "http://localhost:9000/auth/",
      "ssl-required": "external",
      "resource": "aurealia-client",
      "public-client": true,
      "confidential-port": 0
    });
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })

  }

  /*initKeycloak = () => {
    let keycloak = new Keycloak({
      "realm": "AureliaClient",
      "auth-server-url": "http://localhost:9000/auth/",
      "ssl-required": "external",
      "resource": "aurealia-client",
      "public-client": true,
      "confidential-port": 0
    });
    keycloak.init({onLoad: 'login-required'}).then((authenticated) => {
        alert(authenticated ? 'authenticated' : 'not authenticated');
    }).catch(() => {
        alert('failed to initialize');
    });
  }*/

  /**constructor() {
      this.state = { keycloak: null, authenticated: false };
    }

    initKeycloak() {
      const keycloak = Keycloak({
        "realm": "AureliaClient",
        "auth-server-url": "http://localhost:9000/auth/",
        "ssl-required": "external",
        "resource": "aurealia-client",
        "public-client": true,
        "confidential-port": 0
      });
      keycloak.init({onLoad: 'login-required'}).then(authenticated => {
        this.state({ keycloak: keycloak, authenticated: authenticated })
      })

    } */
}
