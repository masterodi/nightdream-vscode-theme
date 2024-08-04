import { writeFileSync } from "fs";
import { colors } from "./theme";
import { Theme } from "./utils";

const saveTheme = (theme: Theme) => {
  const themeJson = JSON.stringify(theme.build(), undefined, 4);

  writeFileSync(`${process.cwd()}/themes/${theme.getName()}`, themeJson, {
    encoding: "utf8",
  });
};

saveTheme(new Theme("Nightdream", colors.workbench, colors.tokens));
