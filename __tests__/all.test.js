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
test("check if array contains only numbers",()=>{
  for(let i=0;i< data.length;i++){
    expect(isNaN(data[i])).toBe(false)
  }
})
//toBe(false)==> toBeFalsy()
//not.toBeTruthy()
//toBeGreaterThen ,toBelessthen ,toBeEqual
//toBeUndefined()
//toMatch() -- string
//toHaveProperty() -- key and valye optional toHaveProperty("age",38)
//creation of a matcher
expect.extend(
  {
    toBeLargerthan(recieved,target){
      const pass=recieved>target;
      if(pass){
        return{
          message:()=>`Expected ${recieved} > ${target}`,
          pass:true,   
        }
      }
      else{
        return {
          message:()=> `Error expected ${recieved} >  target ${target}`,
          pass:false
        }
      }
    }
  }
)
test("check if number is larger than other",()=>{
  expect(10).toBeLargerthan(9)
})
test("expect anth",()=>{
  expect(5).toEqual(expect.anything()) 
})