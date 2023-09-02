const filtername=require('../input')
describe("validate the input field",()=>{
    test("check  if name is empty",()=>{
        expect(filtername()).toBe('unknow');
    })
    test("check for spaces (start+end)",()=>{
        expect(filtername(' asma   ')).toBe('asma')
    }
    )
    
    // test("check for long text (length>10caracteres)", () => {
    //   expect(filtername("gambul_waterson_20")).toBe("gambul_wat");
    // });
})