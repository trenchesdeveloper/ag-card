import {Component, Input, OnInit} from '@angular/core';

function Iput() {

}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string = ''
  @Input() imageUrl: string = ''
  @Input() content: string = ''
  @Input() username: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}
