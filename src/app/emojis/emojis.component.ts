import { Component, OnInit } from '@angular/core';
import { Emoji } from '../emoji';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit {

  emoji: Emoji = {
    _id: 1,
    name: "laugh"
  }

  constructor (){}

  ngOnInit(): void {
    
  }

}
