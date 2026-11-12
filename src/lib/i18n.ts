import { en, Dictionary } from "@/locales/en";

export type Locale = "en" | "si" | "ta";

export function getDictionary(locale: Locale = "en"): Dictionary {
  // Can be easily extended to load si.ts or ta.ts
  return en;
}

