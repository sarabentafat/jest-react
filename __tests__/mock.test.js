const mockersayhi =require("../mock")
test("mock function",()=>{
    const mocker=jest.fn((name)=> `hello ${name}`)
    expect(mockersayhi("sara")).toBe("hello sara");
   expect(mocker("sat")).toBe("hello sat")
    expect(mocker).toHaveBeenCalled()
    expect(mocker).toHaveBeenCalledTimes(1);
    expect(mocker).toHaveBeenCalledWith('sat');
    expect(mocker).toHaveBeenLastCalledWith("sat");

})