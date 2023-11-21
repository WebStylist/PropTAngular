import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  expandedCard: string | null = null;

  toggleCard(cardName: string): void {
    this.expandedCard = this.expandedCard === cardName ? null : cardName;
  }
}
