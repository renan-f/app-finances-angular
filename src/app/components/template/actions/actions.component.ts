import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actionsActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mudarDisplay() {
    this.actionsActive = !this.actionsActive;
  }

}
