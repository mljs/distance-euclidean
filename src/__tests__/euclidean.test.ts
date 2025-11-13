import { describe, expect, it } from 'vitest';

import { euclidean, squaredEuclidean } from '../index.js';

const v1 = [0, 1, 4, 6, 2];
const v2 = [3, 6, 9, 4, 3];
const v3 = [5, 4, 1, 6, 9];

describe('euclidean distance', () => {
  it('should return 0 with itself', () => {
    expect(euclidean(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(euclidean(v1, v2)).toBe(8);
    expect(euclidean(v1, v3)).toBe(Math.sqrt(squaredEuclidean(v1, v3)));
  });
});

describe('squared euclidean distance', () => {
  it('should return 0 with itself', () => {
    expect(squaredEuclidean(v1, v1)).toBe(0);
  });

  it('should be correct', () => {
    expect(squaredEuclidean(v1, v2)).toBe(64);
  });
});
