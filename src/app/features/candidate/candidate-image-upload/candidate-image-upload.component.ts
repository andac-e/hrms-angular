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
  selectedFile: File = null;
  imageUrl: string | ArrayBuffer;

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
      multipartFile: ['', Validators.required],
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    
    //image preview
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);

    reader.onload = (event) => {
      this.imageUrl = reader.result;
    };
  }

  imageUpload() {
    if (this.imgUploadForm.valid) {
      let formData: any = new FormData();
      formData.append('multipartFile', this.selectedFile);
      formData.append('userId', this.imgUploadForm.get('userId').value);

      this.imageService
        .upload(formData, this.getUserId())
        //progress bar 
        .subscribe((response: any) => {
          console.log(response);
          this.toastrService.success('Successfully added');
          this.imgUploadForm.reset(); //input reset
        });
    }
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
