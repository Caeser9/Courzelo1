import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
import { Profile } from 'src/app/shared/model/profile.module';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileUserComponent {
  Profiles: Profile[] = [];
  private ProfileId: string = 'blog1'; // Replace with the actual blogId
  selectedFile: File | null = null;

  constructor(private ProfileService: ProfileService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    // Retrieve the blogCode from the route parameters
    this.route.params.subscribe(params => {
      this.ProfileId = params['id'];
      console.log('Profile ID:', this.ProfileId);
    });
  }


  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      // Use the BlogService to upload the file
      console.log(this.ProfileId);
  
      this.ProfileService.uploadPhoto(this.ProfileId, this.selectedFile).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            // const percentDone = Math.round((100 * event.loaded) / event.total);
            // console.log(`File is ${percentDone}% uploaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely uploaded!', event);           
          }
          this.router.navigateByUrl(`/editProfile`);
        },
        (error: any) => {
          console.error('Error uploading file:', error);          
        }
      );
      
    }
  }
}
