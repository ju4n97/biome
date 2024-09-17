// Workaround for https://github.com/jsr-io/jsr/issues/544

import { $ } from "bun";

const PACKAGE_JSON_PATH = "./package.json";
const JSR_JSON_PATH = "./jsr.json";

try {
  await $`jq '{ name, version, description, exports }' ${PACKAGE_JSON_PATH} > ${JSR_JSON_PATH}`;
  console.info(`✅ Synced ${JSR_JSON_PATH}`);
} catch (error) {
  console.error(`❌ Failed to sync ${JSR_JSON_PATH}`, error);
}
