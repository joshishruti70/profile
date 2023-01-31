import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private ps:PlayerServiceService) {
    this.viewPlayers();
   }
  players:any;
  viewPlayers(){
    this.ps.showPlayers().subscribe((resp:any)=>(this.players=resp));
  }

  ngOnInit(): void {
  }

}
