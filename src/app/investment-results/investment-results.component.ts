// import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  // 1. using constructor() to do the Dependency Injection.
  // constructor(private investmentService: InvestmentService){}
  // 2. Using inject().
  private investmentService = inject(InvestmentService);

  // 1. Using 'get'.
  // 'get' returns a 'signal'.
  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // 2. using computed()
  results = computed( () => this.investmentService.resultsData() );
  // or another alternative:
  // results = this.investmentService.resultsData.asReadonly();

  // Removed by Service version.
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>();

  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // } [];
}
