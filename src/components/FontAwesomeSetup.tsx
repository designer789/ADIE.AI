"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Tell Font Awesome to skip adding CSS automatically since it's imported above
config.autoAddCss = false;

// No UI component - this is just for initialization
export default function FontAwesomeSetup() {
  return null;
} 