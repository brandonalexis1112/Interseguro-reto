exports.processMatrix = (req, res) => {
  const { q, r } = req.body;

  if (!q || !r) {
    return res.status(400).json({ message: 'Invalid matrix data' });
  }

  const allValues = [...q.flat(), ...r.flat()];
  const max = Math.max(...allValues);
  const min = Math.min(...allValues);
  const sum = allValues.reduce((acc, val) => acc + val, 0);
  const avg = sum / allValues.length;
  const isDiagonal = q.every((row, rowIndex) => row.every((val, colIndex) => (rowIndex === colIndex ? val !== 0 : val === 0)));

  res.json({ max, min, sum, avg, isDiagonal });
};
