import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AccueilComponent } from '../COMPONENTS/accueil/accueil.component';

let component: AccueilComponent;
let fixture: ComponentFixture<AccueilComponent>;
let de: DebugElement;

beforeEach(async()=>{
  TestBed.configureTestingModule({
    declarations: [AccueilComponent]
  }).compileComponents().then()
});

beforeEach(()=>{
  fixture = TestBed.createComponent(AccueilComponent);
  component = fixture.componentInstance;
  de = fixture.debugElement;
  fixture.detectChanges();
});

it('should create', function() {
  expect(component).toBeTruthy();
});
