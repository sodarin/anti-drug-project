import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import { FavoritesComponent } from '../favorites/favorites.component';
import { FromSharingComponent } from '../from-sharing/from-sharing.component';
import { MyInformationComponent } from '../my-information/my-information.component';
import { PublicInformationComponent } from '../public-information/public-information.component';

@Component({
  selector: 'app-teaching-database-tab',
  templateUrl: './teaching-database-tab.component.html',
  styleUrls: ['./teaching-database-tab.component.less']
})
export class TeachingDatabaseTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('FavoriteschildComponent', {static: false})
  public FavoriteschildComponent: FavoritesComponent;
  @ViewChild('SharingchildComponent', {static: false})
  public SharingchildComponent: FromSharingComponent;
  @ViewChild('MyInformationchildComponent', {static: false})
  public MyInformationchildComponent: MyInformationComponent;
  @ViewChild('PublicInformationchildComponent', {static: false})
  public PublicInformationchildComponent: PublicInformationComponent;


  updateDataFavorites(){
    this.FavoriteschildComponent.getMaterials();
  }
  updateDataSharing(){
    this.SharingchildComponent.getMaterials();
  }
  updateDataMyInfor(){
    this.MyInformationchildComponent.getMaterials();
  }
  updateDataPublicInf(){
    this.PublicInformationchildComponent.getMaterials();
  }

}
