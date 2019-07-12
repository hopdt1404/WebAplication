import { TestBed } from '@angular/core/testing';
import { TestUnitService } from './test-unit.service';
// import { TestUnitService } from './test-unit.service';
import { from } from 'rxjs';

describe('TestUnitService', () => {
  let obj : TestUnitService ;
  beforeEach(() =>{
    obj = new TestUnitService;
  });

  
  it('1 + 1 = 2',()=>{
    expect(2).toBe(obj.add(1, 1));
  })
});
