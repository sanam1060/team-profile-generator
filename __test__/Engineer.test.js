const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
const { test } = require("@jest/globals");

test("creates an engineer object", () => {
  const engineer = new Engineer("Engineer1");

  expect(typeof engineer).toBe("object");
});

test("gets github username", () => {
  const engineer = new Engineer(
    "Manager",
    "1",
    "sanamtest@gmail.com",
    "Sanam1060"
  );

  expect(engineer.github).toBe("Sanamgithub");
});

test("getRole() returns Engineer", () => {
  const engineer = new Engineer("Manager1");

  expect(engineer.getRole()).toBe("Engineer");
});