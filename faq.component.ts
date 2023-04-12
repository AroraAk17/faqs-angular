import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'What is Angular?',
      answer: 'Angular is a TypeScript-based open-source web application framework.',
      open: false
    },
    {
      question: 'What are the advantages of using Angular?',
      answer: 'Angular offers features like two-way data binding, dependency injection, and reusable components.',
      open: false
    },
    {
      question: 'How do I install Angular?',
      answer: 'You can install Angular using the Angular CLI or by manually configuring the project.',
      open: false
    }
  ];

  toggleItem(index: number) {
    this.faqItems[index].open = !this.faqItems[index].open;
  }
}
