import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private ps:PlayerServiceService) { }

  ngOnInit(): void {
  }
  deleteData(del:any){
    this.ps.droprecord(del.value).subscribe();

  }

}
