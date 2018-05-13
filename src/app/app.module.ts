import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { SurveyDetailsPage } from '../pages/survey-details/survey-details';
import { SurveyProvider } from '../providers/survey/survey';
import { TimingInterceptor } from '../interceptors/timing-interceptor';
import { SurveyComponent } from '../components/survey/survey';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    SurveyComponent,
    LoginPage,
    SurveyDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SurveyComponent,
    LoginPage,
    SurveyDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},,
    SurveyProvider
  ]
})
export class AppModule {}
