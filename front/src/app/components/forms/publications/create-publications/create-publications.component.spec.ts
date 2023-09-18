import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePublicationsComponent } from './create-publications.component';

describe('CreatePublicationsComponent', () => {
  let component: CreatePublicationsComponent;
  let fixture: ComponentFixture<CreatePublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
