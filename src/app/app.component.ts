import { Component } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p: number = 1;
  treeList: Array<string> = [];

  constructor(private treeService: TreeService) {

  }

  ngOnInit() {
    return this.treeService.list()
      .then(data => {
        this.treeList = data;
      })
      .catch(console.error);
  }
}
