import { Component } from "@angular/core";
import { NavController, NavParams, App } from "ionic-angular";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { UserModel } from "../../model/user-model";
import { HomePage } from "../home/home";
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
  providers: [Camera]
})
export class SignupPage {
  image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthenticationProvider,
    private app: App,
    private camera: Camera
  ) {}

  signup(name, nickname, username, password) {
    let userModel: UserModel = new UserModel();
    userModel.name = name;
    userModel.nickname = nickname;
    userModel.username = username;
    userModel.password = password;
    userModel.image = this.image;

    this.authProvider
      .sigup(userModel)
      .then(user => {
        this.app.getRootNav().setRoot(HomePage);
      })
      .catch(error => {
        console.log(error);
      });
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.image = "data:image/jpeg;base64," + imageData;
      },
      err => {}
    );
  }
}
