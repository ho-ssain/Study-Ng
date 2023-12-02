import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  title: string = 'Demo component';
  @Input() message: string = 'hello';

  constructor() {
    console.log('Demo constructor.');
    console.log(this.title);
    console.log(this.message);
  }
}
