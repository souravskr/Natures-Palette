import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Natures-Palette';
  uploadedFileList: Array<File>;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }


  changedFile(e) {
    this.uploadedFileList = e.target.files;
  }
  upload() {
    const formData = new FormData();
    for (let i = 0; i < this.uploadedFileList.length; i++) {
        formData.append('uploads[]', this.uploadedFileList[i], this.uploadedFileList[i].name);
    }
    this.http.post('/api/upload', formData)
    .subscribe((response) => {
         console.log('response: ', response);
    });
}

}
