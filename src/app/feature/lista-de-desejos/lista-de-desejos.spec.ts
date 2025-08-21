import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeDesejos } from './lista-de-desejos';

describe('ListaDeDesejos', () => {
  let component: ListaDeDesejos;
  let fixture: ComponentFixture<ListaDeDesejos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeDesejos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeDesejos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
