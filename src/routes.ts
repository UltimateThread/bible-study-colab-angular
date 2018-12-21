import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { BlogComponent } from './app/blog/blog.component';
import { BibleStudiesComponent } from './app/bible-studies/bible-studies.component';
import { BibleVersesComponent } from './app/bible-verses/bible-verses.component';
import { HelpComponent } from './app/help/help.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { LoginComponent } from './app/login/login.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'blog', component: BlogComponent },
    { path: 'bible-studies', component: BibleStudiesComponent },
    { path: 'bible-verses', component: BibleVersesComponent },
    { path: 'help', component: HelpComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
];
