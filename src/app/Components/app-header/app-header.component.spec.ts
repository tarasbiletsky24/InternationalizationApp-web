import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainPageComponent } from '../main-page/main-page.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { TranslatePageComponent } from '../translate-page/translate-page.component';
import { LanguageDropdownComponent } from '../Common/dropdown/dropdown.component';
import { AppComponent } from '../app.component/app.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { UserService } from 'src/app/Services/user.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip/public_api';
import { ButtonsModule } from 'ngx-bootstrap/buttons/public_api';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/public_api';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead/public_api';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar/public_api';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SignInComponent,
        AppHeaderComponent,
        MainPageComponent,
        SignUpComponent,
        TranslatePageComponent,
        LanguageDropdownComponent,
        AppFooterComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        TooltipModule,
        ButtonsModule,
        BsDropdownModule,
        TypeaheadModule,
        ProgressbarModule,
        FileUploadModule,
      ],
      providers: [
        BrowserModule,
        HttpClientModule,
        UserService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBe(component);
  });
});
