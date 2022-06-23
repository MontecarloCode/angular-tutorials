import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown',
  templateUrl: './example-dropdown.component.html',
  styleUrls: ['./example-dropdown.component.css']
})

export class ExampleDropdownComponent implements OnInit{
  @Input() parent!: string;

  constructor() { }

  ngOnInit(): void {
    
  }
}