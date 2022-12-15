import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
               private router: Router,
               private route:ActivatedRoute) {
}

  ngOnInit() {
    const id =  +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id'])
      }
    )
  }
  onEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'})
    //  this.router.navigate(['servers'],{relativeTo: this.route})
  }

}

// currently active route

// IMP - parse a parameter from url, always be a string

//queryParamsHandling- string ,merge,preserve