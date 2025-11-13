/**
 *  Computes the squared Euclidean distance between two vectors.
 * @param p - first vector
 * @param q - second vector
 * @returns the squared Euclidean distance
 */

export function squaredEuclidean(p: number[], q: number[]) {
  let d = 0;
  for (let i = 0; i < p.length; i++) {
    d += (p[i] - q[i]) * (p[i] - q[i]);
  }
  return d;
}

/**
 * Computes the Euclidean distance between two vectors.
 * @param p - first vector
 * @param q - second vector
 * @returns the Euclidean distance
 */
export function euclidean(p: number[], q: number[]) {
  return Math.sqrt(squaredEuclidean(p, q));
}
