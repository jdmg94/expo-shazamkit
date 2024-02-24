import ExpoShazamKit from "./ExpoShazamKit";
import { MatchedItem } from "./ExpoShazamKit.types";

export function isAvailable(): boolean {
  return ExpoShazamKit.isAvailable();
}

export function matchBuffer(
  buffer: ArrayBuffer,
  duration: number,
): Promise<MatchedItem[]> {
  return ExpoShazamKit.matchBuffer(buffer, duration);
}

export function startListening(): Promise<MatchedItem[]> {
  return ExpoShazamKit.startListening();
}

export function stopListening() {
  ExpoShazamKit.stopListening();
}

export function addToShazamLibrary(): Promise<{ success: boolean }> {
  return ExpoShazamKit.addToShazamLibrary();
}

export { MatchedItem };
