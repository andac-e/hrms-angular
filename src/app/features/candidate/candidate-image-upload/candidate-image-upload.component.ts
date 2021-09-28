import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { User } from 'src/app/models/user/user';
import { CandidateService } from 'src/app/services/candidate.service';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-candidate-image-upload',
  templateUrl: './candidate-image-upload.component.html',
  styleUrls: ['./candidate-image-upload.component.css'],
})
export class CandidateImageUploadComponent implements OnInit {
  imgUploadForm: FormGroup;
  loggedUser: any;
  loggedCandidate: User;
  selectedFile: File = null;
  imageUrl: string | ArrayBuffer;
  progress: number;
  uploadedImgId: number;

  constructor(
    private candidateService:CandidateService, //
    private userService:UserService,
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

      this.progress = 0;
      
      this.imageService
        .upload(formData, this.getUserId())
        .subscribe((response: any) => {
          this.uploadedImgId = response.data.id;
          this.updateProfileImg();
          this.toastrService.success('Successfully added');
          this.progress = 100;
          this.imgUploadForm.reset(); //input reset
        });
    }
  }

  updateProfileImg() {
      this.userService.updateProfileImg(this.loggedCandidate, this.getUserId(), this.uploadedImgId).subscribe((response:any)=>{
        response.data;
      })
  }

  getCandidateById() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedCandidate = response.data;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
