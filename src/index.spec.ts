import mergeSx from './index';

describe("mergeSx()", () => {
  it("combines two SxProps", () => {
    expect(mergeSx({mt: 1}, {mb: 1})).toEqual([{mt: 1}, {mb: 1}]);
  });
})
