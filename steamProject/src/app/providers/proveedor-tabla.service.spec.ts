import { TestBed } from '@angular/core/testing';

import { ProveedorTablaService } from './proveedor-tabla.service';

describe('ProveedorTablaService', () => {
  let service: ProveedorTablaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorTablaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
