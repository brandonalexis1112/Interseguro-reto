package service

import "math"

func QRDecomposition(a [][]float64) ([][]float64, [][]float64) {
	m := len(a)
	n := len(a[0])
	q := make([][]float64, m)
	for i := range q {
		q[i] = make([]float64, m)
	}
	r := make([][]float64, m)
	for i := range r {
		r[i] = make([]float64, n)
	}

	for k := 0; k < n; k++ {
		var norm float64
		for i := 0; i < m; i++ {
			norm += a[i][k] * a[i][k]
		}
		r[k][k] = math.Sqrt(norm)
		for i := 0; i < m; i++ {
			q[i][k] = a[i][k] / r[k][k]
		}
		for j := k + 1; j < n; j++ {
			var sum float64
			for i := 0; i < m; i++ {
				sum += q[i][k] * a[i][j]
			}
			r[k][j] = sum
			for i := 0; i < m; i++ {
				a[i][j] = a[i][j] - q[i][k]*r[k][j]
			}
		}
	}

	return q, r
}
