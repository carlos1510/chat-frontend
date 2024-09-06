import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userImg: File | null = null;
  constructor() {}

  /*onUpload({ files }: { files: FileList}) {
    this.userImg = files[0];
  }*/

  onUpload(event: { files: File[] }) {
    const dataTransfer = new DataTransfer();

    event.files.forEach(file => {
      dataTransfer.items.add(file);
    });

    const fileList: FileList = dataTransfer.files;
    this.userImg = fileList.item(0);
  }

  getFile() {
    this.userImg = null;
  }
}
