import assert from "node:assert/strict";
import test from "node:test";
import { createPlaceRecord } from "./generate-place-catalog.mjs";

test("creates a readable catalog entry for a Roblox place", () => {
  assert.deepEqual(createPlaceRecord("Shattered_Aether_Map.rbxl", 954581), {
    id: "Shattered_Aether_Map.rbxl",
    name: "Shattered Aether Map",
    file: "Shattered_Aether_Map.rbxl",
    downloadName: "Shattered_Aether_Map.rbxl",
    bytes: 954581,
    ext: "rbxl",
  });
});

test("normalizes model extensions and ignores unsupported or nested names", () => {
  assert.equal(createPlaceRecord("Sample.RBXM", 12)?.ext, "rbxm");
  assert.equal(createPlaceRecord("notes.txt", 12), null);
  assert.equal(createPlaceRecord("../hidden.rbxl", 12), null);
});
