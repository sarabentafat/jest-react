const say=require('../say');
test("say jest message",()=>{
    expect(say()).toBe("hello")
})