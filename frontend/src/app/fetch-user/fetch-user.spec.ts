import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUser } from './fetch-user';

describe('FetchUser', () => {
  let component: FetchUser;
  let fixture: ComponentFixture<FetchUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
