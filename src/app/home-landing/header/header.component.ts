import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  profileCondition = 'My Account'
  @Output() menuClicked = new EventEmitter();
  navClicked() {
    this.menuClicked.emit(true);
  }
}
