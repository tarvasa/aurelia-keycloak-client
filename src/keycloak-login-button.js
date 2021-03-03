/**
 * 	auth-view-komponentin sisään "Kirjaudu sisään"-button, jolla click.trigger, 
 * joka kutsuu initKeycloak()-funktiota, 
 * joka tekee uuden Keyclock()-olion ja kutsuu sen init-funktiota.
<keycloak-login-button click.trigger="initKeycloak()"></keycloak-login-button>
initKeycloak-funktio on komponentin parentilla auth-viewllä
 */

export class keycloakLoginButton {
  
  value="Sign In";

  constructor(AuthView) {
    this.initKeycloak = AuthView.initKeycloak();
  }

}
