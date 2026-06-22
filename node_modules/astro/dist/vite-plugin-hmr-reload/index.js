import { isRunnableDevEnvironment } from "vite";
import { VIRTUAL_PAGE_RESOLVED_MODULE_ID } from "../vite-plugin-pages/const.js";
import { RESOLVED_MODULE_DEV_CSS_PREFIX } from "../vite-plugin-css/const.js";
import { getDevCssModuleNameFromPageVirtualModuleName } from "../vite-plugin-css/util.js";
import { isAstroServerEnvironment } from "../environments.js";
const STYLE_EXT_REGEX = /\.(?:css|scss|sass|less|styl|pcss)$/i;
const RAW_QUERY_REGEX = /(?:\?|&)raw(?:&|$)/;
function hasStyleExtension(id) {
  return STYLE_EXT_REGEX.test(id.split("?")[0]);
}
function isStyleModule(mod) {
  if (mod.id && RAW_QUERY_REGEX.test(mod.id) && hasStyleExtension(mod.id)) return false;
  if (mod.file && hasStyleExtension(mod.file)) return true;
  return mod.id ? hasStyleExtension(mod.id) : false;
}
function hmrReload() {
  return {
    name: "astro:hmr-reload",
    enforce: "post",
    hotUpdate: {
      order: "post",
      handler({ modules, server, timestamp, file }) {
        if (!isAstroServerEnvironment(this.environment)) return;
        let hasSsrOnlyModules = false;
        let hasSkippedStyleModules = false;
        const invalidatedModules = /* @__PURE__ */ new Set();
        for (const mod of modules) {
          if (mod.id == null) continue;
          if (isStyleModule(mod)) {
            hasSkippedStyleModules = true;
            continue;
          }
          const clientModule = server.environments.client.moduleGraph.getModuleById(mod.id);
          if (clientModule != null) continue;
          this.environment.moduleGraph.invalidateModule(mod, invalidatedModules, timestamp, true);
          hasSsrOnlyModules = true;
        }
        for (const invalidatedModule of invalidatedModules) {
          if (invalidatedModule.id?.startsWith(VIRTUAL_PAGE_RESOLVED_MODULE_ID)) {
            const cssMod = this.environment.moduleGraph.getModuleById(
              getDevCssModuleNameFromPageVirtualModuleName(invalidatedModule.id)
            );
            if (!cssMod || cssMod.id == null) continue;
            this.environment.moduleGraph.invalidateModule(cssMod, void 0, timestamp, true);
          }
        }
        if (hasSsrOnlyModules) {
          if (isRunnableDevEnvironment(this.environment)) {
            for (const invalidated of invalidatedModules) {
              if (invalidated.id == null) continue;
              const runnerModule = this.environment.runner.evaluatedModules.getModuleById(
                invalidated.id
              );
              if (runnerModule) {
                this.environment.runner.evaluatedModules.invalidateModule(runnerModule);
              }
            }
          }
          server.ws.send({ type: "full-reload" });
          if (!isRunnableDevEnvironment(this.environment)) {
            this.environment.hot.send({
              type: "full-reload",
              triggeredBy: file,
              path: "*"
            });
          }
          return [];
        }
        if (hasSkippedStyleModules) {
          for (const [id, mod] of this.environment.moduleGraph.idToModuleMap) {
            if (id.startsWith(RESOLVED_MODULE_DEV_CSS_PREFIX)) {
              this.environment.moduleGraph.invalidateModule(mod, void 0, timestamp, true);
              if (isRunnableDevEnvironment(this.environment)) {
                const runnerMod = this.environment.runner.evaluatedModules.getModuleById(id);
                if (runnerMod) {
                  this.environment.runner.evaluatedModules.invalidateModule(runnerMod);
                }
              }
            }
          }
          return [];
        }
        if (modules.length > 0) {
          return [];
        }
      }
    }
  };
}
export {
  hmrReload as default
};
