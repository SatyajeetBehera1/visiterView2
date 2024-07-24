import { useEffect } from "react";
import { Font } from "@react-pdf/renderer";
import { getAllFontFamiliesToLoad } from "components/fonts/lib";

export const useRegisterReactPDFFont = () => {
  useEffect(() => {
    const allFontFamilies = getAllFontFamiliesToLoad();
    allFontFamilies.forEach((fontFamily) => {
      Font.register({
        family: fontFamily,
        fonts: [
          {
            src: `fonts/${fontFamily}-Regular.ttf`,
          },
          {
            src: `fonts/${fontFamily}-Bold.ttf`,
            fontWeight: "bold",
          },
        ],
      });
    });
  }, []);
};
