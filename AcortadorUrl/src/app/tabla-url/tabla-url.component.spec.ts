import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUrlComponent } from './tabla-url.component';

describe('TablaUrlComponent', () => {
  let component: TablaUrlComponent;
  let fixture: ComponentFixture<TablaUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
