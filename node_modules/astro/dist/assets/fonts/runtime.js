import { AstroError, AstroErrorData } from "../../core/errors/index.js";
function createGetFontData({ consumableMap }) {
  return function getFontData(cssVariable) {
    if (!consumableMap) {
      throw new AstroError(AstroErrorData.ExperimentalFontsNotEnabled);
    }
    const data = consumableMap.get(cssVariable);
    if (!data) {
      throw new AstroError({
        ...AstroErrorData.FontFamilyNotFound,
        message: AstroErrorData.FontFamilyNotFound.message(cssVariable)
      });
    }
    return data;
  };
}
export {
  createGetFontData
};
