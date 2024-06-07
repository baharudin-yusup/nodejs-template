import { describe, expect, it } from '@jest/globals';
import { helloWorld } from '.';

describe('helloWorld', () => {
  it('should return "Hello, World!"', () => {
    const result = helloWorld();
    expect(result).toBe('Hello, World!');
  });
});
