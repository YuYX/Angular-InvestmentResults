import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputModule } from './user-input/user-input.module';
import { InvestmentResultsModule } from './investment-results/investment-results.module';
// import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // UserInputComponent,
    // InvestmentResultsComponent,
  ],
  //imports: [BrowserModule, FormsModule],
  imports: [BrowserModule, UserInputModule, InvestmentResultsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
