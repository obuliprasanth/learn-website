import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthloginComponent } from './authlogin.component';

describe('AuthloginComponent', () => {
  let component: AuthloginComponent;
  let fixture: ComponentFixture<AuthloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
