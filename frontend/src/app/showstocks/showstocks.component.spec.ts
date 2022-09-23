import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstocksComponent } from './showstocks.component';

describe('ShowstocksComponent', () => {
  let component: ShowstocksComponent;
  let fixture: ComponentFixture<ShowstocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowstocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
