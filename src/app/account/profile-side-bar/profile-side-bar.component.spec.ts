import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSideBarComponent } from './profile-side-bar.component';

describe('ProfileSideBarComponent', () => {
  let component: ProfileSideBarComponent;
  let fixture: ComponentFixture<ProfileSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
