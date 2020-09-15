import { CustomStyleDirective } from './custom-style.directive';

// Import ElementRef to give to its constructor.
import { ElementRef } from '@angular/core';

describe('CustomStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomStyleDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
