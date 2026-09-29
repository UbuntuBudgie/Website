import path from "node:path";
import { getMajor } from "verkit";
import { ensureProcessNodeEnv } from "../../core/util.js";
import { createLoggerFromFlags, flagsToAstroInlineConfig } from "../flags.js";
import { getPackage, getPackageVersion } from "../install-package.js";
async function check(flags) {
  ensureProcessNodeEnv("production");
  const logger = createLoggerFromFlags(flags);
  const getPackageOpts = {
    skipAsk: !!flags.yes || !!flags.y,
    cwd: flags.root
  };
  const typescriptVersion = await getPackageVersion("typescript", flags.root);
  if (typescriptVersion && getMajor(typescriptVersion) >= 7) {
    logger.error(
      "check",
      "astro check does not currently support TypeScript 7.0. To continue using astro check, install TypeScript 6 instead.\n\nastro check will be deprecated in a future Astro release. Experimental support for type-checking Astro files with TypeScript 7.1+ is available through @astrojs/ts-content-mapper. See its README for setup instructions:\nhttps://github.com/withastro/astro/tree/main/packages/language-tools/ts-content-mapper#usage"
    );
    return true;
  }
  const checkPackage = await getPackage(
    "@astrojs/check",
    logger,
    getPackageOpts,
    ["typescript"]
  );
  const typescript = await getPackage("typescript", logger, getPackageOpts);
  if (!checkPackage || !typescript) {
    logger.error(
      "check",
      "The `@astrojs/check` and `typescript` packages are required for this command to work. Please manually install them into your project and try again."
    );
    return;
  }
  if (!flags.noSync && !flags.help) {
    const { default: sync } = await import("../../core/sync/index.js");
    await sync(flagsToAstroInlineConfig(flags));
  }
  const { check: checker, parseArgsAsCheckConfig } = checkPackage;
  const config = parseArgsAsCheckConfig(process.argv);
  logger.info("check", `Getting diagnostics for Astro files in ${path.resolve(config.root)}...`);
  return await checker(config);
}
export {
  check
};
