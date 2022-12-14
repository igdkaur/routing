import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

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
    this.server = this.serversService.getServer(1);
  }
  onReload(){
    // this.router.navigate(['servers'],{relativeTo: this.route})
  }

}

// currently active route