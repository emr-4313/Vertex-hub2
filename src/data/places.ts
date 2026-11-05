import { GENERATED_PLACES } from "./generated-places";

export type PlaceExt = "rbxl" | "rbxm";

export type PlaceFile = {
  id: string;
  name: string;
  file: string;
  downloadName: string;
  bytes: number;
  ext: PlaceExt;
  kind: string;
  note: string;
};

export const PLACES: PlaceFile[] = GENERATED_PLACES.map((file) => {
  const isPlace = file.ext === "rbxl";
  return {
    ...file,
    kind: isPlace ? "Place" : "Model",
    note: isPlace
      ? "Open in Roblox Studio using File → Open from File."
      : "With a place open, drag this model into the Explorer panel to insert it.",
  };
});

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return Math.max(1, Math.round(bytes / 1024)) + " KB";
  }
  const mb = bytes / (1024 * 1024);
  return (mb >= 10 ? mb.toFixed(1) : mb.toFixed(2)) + " MB";
}

export const ARCHIVE_BYTES = PLACES.reduce((sum, file) => sum + file.bytes, 0);
