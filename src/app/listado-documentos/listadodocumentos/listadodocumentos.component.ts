import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { FilesService } from 'src/app/_services/files.service';

@Component({
  selector: 'app-listadodocumentos',
  templateUrl: './listadodocumentos.component.html',
  styleUrls: ['./listadodocumentos.component.css']
})
export class ListadodocumentosComponent implements OnInit {
  
  fileInfos?: Observable<any>;

  constructor(private listAllService: FilesService, private router: Router) { }

  ngOnInit(): void {
    this.fileInfos = this.listAllService.getFiles();
  }

  Nuevo(){
    this.router.navigate(['rc'])

  }

  Pase(){
    this.router.navigate(['pase'])
  }
}
