import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivadoPage } from './privado.page';

describe('PrivadoPage', () => {
  let component: PrivadoPage;
  let fixture: ComponentFixture<PrivadoPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(PrivadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
