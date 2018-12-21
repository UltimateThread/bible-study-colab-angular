import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { appRoutes } from '../routes';
import { BlogComponent } from './blog/blog.component';
import { BibleStudiesComponent } from './bible-studies/bible-studies.component';
import { BibleVersesComponent } from './bible-verses/bible-verses.component';
import { HelpComponent } from './help/help.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

import { CustomMaterialModule } from './material.module';

import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BlogComponent,
    BibleStudiesComponent,
    BibleVersesComponent,
    HelpComponent,
    RecentActivityComponent,
    SignUpComponent,
    LoginComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CustomMaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
