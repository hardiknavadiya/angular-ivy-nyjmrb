import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SalesPersonListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
