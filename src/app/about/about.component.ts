import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  expandedCard: string | null = null;

  toggleCard(cardName: string): void {
    this.expandedCard = this.expandedCard === cardName ? null : cardName;
  }

}
