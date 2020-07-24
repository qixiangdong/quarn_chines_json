const readTanzilText = require("./read-tanzil-text");
const writeJson = require("./write-json");

const processTranslations = async () => {
  const [en, zh] = await Promise.all([
    readTanzilText("translations/en.sahih.txt"),
    readTanzilText("translations/zh.jian.txt")
  ]);

  await Promise.all([
    writeJson(en, "translations/en.json"),
    writeJson(zh, "translations/zh.json")
  ]);

  return { en, zh };
};

module.exports = processTranslations;
