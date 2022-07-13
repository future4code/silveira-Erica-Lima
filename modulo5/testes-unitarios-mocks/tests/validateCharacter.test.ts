import { validateCharacter } from "../src/validateCharacter";

describe("Testing validateCharacter", () =>{
    test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Blue",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Blue",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Blue",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });
  test("Should return true for character", () => {
    const result = validateCharacter({
      name: "Blue",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
})
