import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingMessagesComponent } from './sending-messages.component';

describe('SendingMessagesComponent', () => {
  let component: SendingMessagesComponent;
  let fixture: ComponentFixture<SendingMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
