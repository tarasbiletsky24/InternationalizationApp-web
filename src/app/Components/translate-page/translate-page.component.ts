import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.scss']
})
export class TranslatePageComponent implements OnInit {

  public translateTo: string;
  public translateFrom: string;
  public gitHubRepositoryOwnerName: string;
  public gitHubRepositoryName: string;
  public gitHubLink: string;
  public loading = false;
  public result = false;
  public message: string;

  public uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });

  private gitHubRepositoryNameRegExp = new RegExp(/\/([\w -]*)$/);
  private gitHubRepositoryOwnerNameRegExp = new RegExp(/\/(.[\w -]*)\//);

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  public setTranslateTo(value: string) {
    this.translateTo = value;
  }

  public setTranslateFrom(value: string) {
    this.translateFrom = value;
  }

  public gitHubLinkChanged(gitHubLink: string) {
      this.gitHubRepositoryOwnerName = gitHubLink.match(this.gitHubRepositoryOwnerNameRegExp)[1];
      this.gitHubRepositoryName = gitHubLink.match(this.gitHubRepositoryNameRegExp)[1];
  }

  public translate() {
    this.loading = true;
    this.apiService.startTranslate(this.gitHubLink, this.translateFrom, this.translateTo).subscribe(
      responce => {
        this.message = responce;
        this.result = true;
        this.loading = false;
      }
    )
  }

}
