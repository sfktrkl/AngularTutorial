// https://jasmine.github.io/tutorials/your_first_suite
// In Jasmine, use describe function to group tests together
describe("Dummy component", () => {

  // Each individual test is defined within a call to the it function.
  it("let's check amount", () => expect(100).toBe(100))

  it("let's check string", () => expect("hello").toBe("hello"));
})
