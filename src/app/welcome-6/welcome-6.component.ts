import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome-6',
  templateUrl: 'welcome-6.component.html'
})
export class Welcome6Component implements OnInit {
  init3: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.init3 = this.route.snapshot.queryParamMap.get("init2");
  }
}
