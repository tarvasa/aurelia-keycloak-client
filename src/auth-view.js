 import Keycloak from 'keycloak-js';
 import { inject, bindable } from 'aurelia-framework';
 import {keycloakViewModel} from "./keycloak-view-model";
 
 @inject(keycloakViewModel)
 export class AuthView {

 /**
  * Auth-view-komponentti ottaa authenticated-muuttujan kiinni 
  * ja siirtää sen view-modeliin(auth-view.js vai keycloakViewModel? ). 
  * View-modellissa voi olla muuttuja authenticated
  * 
  */

  @bindable
  authenticated;

  constructor(keycloakViewModel) {
    this.keycloakViewModel = keycloakViewModel;
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
     keycloak.init({onLoad: 'login-required'}).then((authenticated) => {
          alert(authenticated ? 'authenticated' : 'not authenticated');
      }).catch(() => {
          alert('failed to initialize');
      });
   }

 }
 