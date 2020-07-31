import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { PeopleListComponent } from './peole/people-list/people-list.component';
import { PersonEditComponent } from './peole/person-edit/person-edit.component';
import { DynamicTabsDirective } from './dynamic-tabs.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    PeopleListComponent,
    PersonEditComponent,
    DynamicTabsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
