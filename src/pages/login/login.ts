import { Component } from "@angular/core";
import { NavController, NavParams, App } from "ionic-angular";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";
import { ErrorMessagePipe } from "../../pipes/error-message/error-message";
import { UiMessageProvider } from "../../providers/ui-message/ui-message";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  errorPipe = new ErrorMessagePipe();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthenticationProvider,
    private app: App,
    public uiMessageProvider: UiMessageProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login(username: string, password: string) {
    this.uiMessageProvider.showLoading("Carregando...");
    this.authProvider
      .login(username, password)
      .then(user => {
        this.uiMessageProvider.hideLoading();
        this.app.getRootNav().setRoot(HomePage);
      })
      .catch(error => {
        this.uiMessageProvider.hideLoading();
        console.log(error);
        this.uiMessageProvider.showToast(
          this.errorPipe.transform(error.code),
          3000
        );
      });
  }

  goToSigup() {
    this.navCtrl.push(SignupPage);
  }
}
