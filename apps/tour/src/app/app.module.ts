import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot([

    { path: 'tour', loadChildren: () => import('@packt/visitor').then(m => m.VisitorModule)},
    { path: '', pathMatch: 'full', redirectTo: 'tour'}

  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
