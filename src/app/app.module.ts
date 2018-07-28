import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { SignupPage } from "../pages/signup/signup";

import { AngularFireModule } from "angularfire2";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthenticationProvider } from "../providers/authentication/authentication";
import { LoginPage } from "../pages/login/login";
import { ChatProvider } from "../providers/chat/chat";
import { FormsModule } from "../../node_modules/@angular/forms";
import { ChatMessageComponent } from "../components/chat-message/chat-message";
import { ComponentsModule } from "../components/components.module";
import { PipesModule } from "../pipes/pipes.module";
import { UiMessageProvider } from '../providers/ui-message/ui-message';

export const firebaseConfig = {
  apiKey: "AIzaSyADWaOEXgaDNWGw4zPlf15LR5qD2YG48bM",
  authDomain: "fire-chat-25a34.firebaseapp.com",
  databaseURL: "https://fire-chat-25a34.firebaseio.com",
  projectId: "fire-chat-25a34",
  storageBucket: "fire-chat-25a34.appspot.com",
  messagingSenderId: "452732051557"
};

@NgModule({
  declarations: [MyApp, HomePage, SignupPage, LoginPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ComponentsModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, SignupPage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationProvider,
    ChatProvider,
    UiMessageProvider
  ]
})
export class AppModule {}
