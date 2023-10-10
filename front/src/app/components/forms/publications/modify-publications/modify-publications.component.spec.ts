import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPublicationsComponent } from './modify-publications.component';

describe('ModifyPublicationsComponent', () => {
  let component: ModifyPublicationsComponent;
  let fixture: ComponentFixture<ModifyPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
