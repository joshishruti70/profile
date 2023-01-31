import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private is:PlayerServiceService) { }

  insertData(insert:any){
    this.is.insertService(insert.value).subscribe();

  }

  ngOnInit(): void {
  }

}
