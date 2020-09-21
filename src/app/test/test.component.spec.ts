import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test the property', () => {
    expect(component.testProperty).toBe("test");
  });

  it('test first function', () => {
    expect(component.testFunction()).toBe(100);
  });

  it('test second function', () => {
    expect(component.testFunction2(40, 60)).toBe(100);
  });

  it('test html element', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".testClass").textContent).toContain("test string");
  });
});
