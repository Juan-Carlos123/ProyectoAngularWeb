import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'


import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilesService } from 'src/app/_services/files.service';

@Component({
  selector: 'app-rc',
  templateUrl: './rc.component.html',
  styleUrls: ['./rc.component.css']
})

export class RcComponent implements OnInit {

  button1?: FileList;
  button2?: FileList;
  button3?: FileList;
  button4?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos?: Observable<any>;

  constructor(private uploadService: FilesService, private router: Router) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();

  }

  selectFiles1(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.button1 = event.target.files;
  }

  selectFiles2(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.button2 = event.target.files;
  }

  selectFiles3(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.button3 = event.target.files;
  }

  selectFiles4(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.button4 = event.target.files;
  }


  upload1(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Se subió el archivo con éxito: ' + file.name;
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        });
    }
  }

  uploadFiles(): void {

    this.message = [];

    if (this.button1 && this.button2 && this.button3 && this.button4) {
      for (let i = 0; i < this.button1.length; i++) {
        this.upload1(i, this.button1[i]);
      };

      for (let i = 0; i < this.button2.length; i++) {
        this.upload1(i, this.button2[i]);
      };

      for (let i = 0; i < this.button3.length; i++) {
        this.upload1(i, this.button3[i]);
      };

      for (let i = 0; i < this.button4.length; i++) {
        this.upload1(i, this.button4[i]);
      }
    }

    this.router.navigate(['/listado de documentos'])
  }
}