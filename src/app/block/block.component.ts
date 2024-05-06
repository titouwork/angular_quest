import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  positions: string[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

}
