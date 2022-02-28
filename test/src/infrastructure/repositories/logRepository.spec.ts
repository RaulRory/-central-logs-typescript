const findLogs = jest.fn(() => {
  return 'FIND';
});

describe('LogRepository', () => {
  it('Find for Logs at the bank', async () => {
    expect(findLogs).toBe('FIND');
  });
});
