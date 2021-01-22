import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaudoCorrigidoPage } from './laudo-corrigido.page';

describe('LaudoCorrigidoPage', () => {
  let component: LaudoCorrigidoPage;
  let fixture: ComponentFixture<LaudoCorrigidoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaudoCorrigidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaudoCorrigidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
