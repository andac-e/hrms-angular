import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-candidate-image-upload',
  templateUrl: './candidate-image-upload.component.html',
  styleUrls: ['./candidate-image-upload.component.css'],
})
export class CandidateImageUploadComponent implements OnInit {
  imgUploadForm: FormGroup;
  loggedUser: any;
  constructor(
    private imageService: ImageService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createImageUploadForm();
  }

  createImageUploadForm() {
    this.imgUploadForm = this.formBuilder.group({
      userId: [this.getUserId()],
      multipartFile: [null, Validators.required],
    });
  }


  imageUpload() {
    if (this.imgUploadForm.valid) {
      // let formData: any = new FormData();
      // formData.append("multipartFile", this.imgUploadForm.get('multipartFile').value);
      // formData.append("userId", this.imgUploadForm.get('userId').value);

      this.imageService
        .upload(this.imgUploadForm.value, this.getUserId())
        .subscribe((response: any) => {
          console.log(response)
          this.toastrService.success('Successfully added');
        });
    }
  }

  getUserId(): any {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
