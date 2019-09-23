import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-personal-settings',
  templateUrl: './personal-settings.component.html',
  styleUrls: ['./personal-settings.component.less']
})
export class PersonalSettingsComponent implements OnInit {

  private avatarUrl: string = '../../assets/img/userface.jpg';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
