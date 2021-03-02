import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuContentComponent } from './aside-menu-content.component';

describe('AsideMenuContentComponent', () => {
  let component: AsideMenuContentComponent;
  let fixture: ComponentFixture<AsideMenuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideMenuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
