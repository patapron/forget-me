import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTooltipModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Routing dependency
    AppRoutingModule,
    // Material dependecies
    BrowserAnimationsModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    // Http dependecy
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
