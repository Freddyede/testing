import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMessagesComponent } from './container-messages.component';

describe('ContainerMessagesComponent', () => {
  let component: ContainerMessagesComponent;
  let fixture: ComponentFixture<ContainerMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
