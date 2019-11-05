import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, UploadXHRArgs, NzNotificationService } from 'ng-zorro-antd';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { VerificationService } from 'src/app/service/verification/verification.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.less']
})
export class VerificationComponent implements OnInit {
  validateForm: FormGroup;
  faceimg: string;
  backimg: string;
  constructor(
    private _nzNotificationService: NzNotificationService,
    private _verificationService: VerificationService,
    private fb: FormBuilder,
    private msg: NzMessageService,
    private http: HttpClient) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      trueName: [null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5]{1,5}$/)]],
      id: [null, [Validators.required, Validators.pattern(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)]],
      userid: [1, [Validators.nullValidator]],
      backimg: [null, [Validators.required]],
      faceimg: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    let check: boolean = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (this.validateForm.controls[i].hasError('required') || this.validateForm.controls[i].hasError('pattern')) {
        check = false;
      }
    }
    if (check) {
      this._verificationService.setUserApproval(this.validateForm.value).subscribe(result => {
        this._nzNotificationService.create('success', '提交成功!', ``);
      }, err => {
        this._nzNotificationService.create('error', '提交失败!', ``);
      })
    }
  }


  backimgReq = (item: UploadXHRArgs) => {
    const formData = new FormData();
    formData.append('file', item.file as any);
    return this.http.post(item.action, formData).subscribe(
      (event: any) => {
        if (event.message === 'SUCCESS') {
          item.onSuccess!(event.body, item.file!, event);
          this.validateForm.patchValue({ backimg: event.data });
          this.backimg = event.data
          console.log(this.backimg);
          this.msg.success('上传成功!')
        } else if (event instanceof HttpResponse) {
        }
      },
      err => {
        item.onError!(err, item.file!);
        this.msg.error('上传失败!')
      }
    );
  };

  faceimgReq = (item: UploadXHRArgs) => {
    const formData = new FormData();
    formData.append('file', item.file as any);
    return this.http.post(item.action, formData).subscribe(
      (event: any) => {
        if (event.message === 'SUCCESS') {
          item.onSuccess!(event.body, item.file!, event);
          this.faceimg = event.data
          console.log(this.faceimg);
          this.validateForm.patchValue({ faceimg: event.data});
          this.msg.success('上传成功!')
        } else if (event instanceof HttpResponse) {
        }
      },
      err => {
        item.onError!(err, item.file!);
        this.msg.error('上传失败!')
      }
    );
  };

}
