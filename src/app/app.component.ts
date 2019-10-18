import { Component } from '@angular/core';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Natures-Palette';
  uploadedFile: any;
  fileEvent(fileInput: any) {

    const AWSService = AWS;
    const region = 'Canada(Central)';
    const bucketName = 'naturespalette';
    const IdentityPoolId = 'npidentitypool';
    const file = fileInput.target.files[0]; // Configures the AWS service and initial authorization
    console.log(file);
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
    // adds the S3 service, make sure the api version and bucket are correct
    const s3 = new AWSService.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: bucketName}
    });
    // I store this in a variable for retrieval later
    this.uploadedFile = file.name;
    s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function(err, data) {
     if (err) {
       console.log(err, 'there was an error uploading your file');
     }
   });
  }
}
