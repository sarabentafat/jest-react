const data=require('../all')
test("check if the list contain 5 elemtns ",()=>{
    expect(data.length).toBe(5)
})
test("check if the list contains 5 elemtns ", () => {
  expect(data).toHaveLength(5);
});
test("check if the list contains number 3  ", () => {
  expect(data).toContain(3);
});
test("check ....  ", () => {
  expect(data).not.toContain(22);
});