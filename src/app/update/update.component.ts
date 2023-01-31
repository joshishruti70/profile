import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private is:PlayerServiceService) { }
  updateData(update:any){
    this.is.updateService(update.value).subscribe();

  }

  ngOnInit(): void {
  }

}
