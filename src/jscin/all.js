// Copyright 2024 Google Inc. All Rights Reserved.

/**
 * @fileoverview Register all modules and addons for JsCIN
 * @author hungte@google.com (Hung-Te Lin)
 */

export { jscin } from "./jscin.js";

/* Only side effects (registration) */

/* First register gen_inp2 to make sure it'll always be the default. */
import "./gen_inp2.js";
import "./gen_inp.js";
import "./addon_punctuations.js";
import "./addon_related.js";
import "./addon_query.js";
