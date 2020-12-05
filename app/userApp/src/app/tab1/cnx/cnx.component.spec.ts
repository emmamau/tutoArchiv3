import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CnxComponent } from './cnx.component';

describe('CnxComponent', () => {
  let component: CnxComponent;
  let fixture: ComponentFixture<CnxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
