import {
  Component,
  OnInit, Input,
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() value;
  @Output() deleteItem = new EventEmitter();
  @Output() verifyData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteItem(value) {
    console.log(value);
    this.deleteItem.emit(value);
  }

  onChange(value) {
    console.log('ON CHANGE:', value);
    this.verifyData.emit(value);
  }

}
