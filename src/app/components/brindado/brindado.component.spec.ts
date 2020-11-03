import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrindadoComponent } from './brindado.component';

describe('BrindadoComponent', () => {
  let component: BrindadoComponent;
  let fixture: ComponentFixture<BrindadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrindadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrindadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
