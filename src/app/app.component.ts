import { Component } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeList: Array<string> = [];
  p: number = 1;
  total: number;

  constructor(private treeService: TreeService) {

  }

  getPage(page: number) {
    return this.treeService.list(page)
      .then(res => {
        this.treeList = res.data;
        this.total = res.total;
        this.p = page;
      })
      .catch(console.error);
  }

  ngOnInit() {
    return this.getPage(1);
  }
}
