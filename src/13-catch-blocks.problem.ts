import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  }
  // OPTION 1
  // catch (e: any) {
  //   return e.message ;
  // }

  // OPTION 2
  // catch (e) {
  //   return (e as Error).message ;
  // }

  // OPTION 3
  catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }


};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
