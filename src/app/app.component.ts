import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage'; // <--

  pages: Array<{title: string, component: string}>;// <--

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
   public firebaseauth : AngularFireAuth) {

    this.initializeApp();

    
    this.pages = [
      { title: 'Home', component: 'HomePage' },// <--
      { title: 'Logoff', component: 'LogoffPage' },
      { title: 'Livro', component: 'LivroPage' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.firebaseauth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = 'InicioPage'; // página inicial (logado)
          } else {
            this.rootPage = 'HomePage'; // se não houve usuário
           }
      },
      () => {
        this.rootPage = 'InicioPage'; // página inicial (logado)
      }
    );

  }

  openPage(page) {

    this.nav.setRoot(page.component);
  }
}
