const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const xml = fs.readFileSync(path.join(process.cwd(), "sitemap.xml"), "utf8");
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(xml);
  } catch (err) {
    res.status(500).send("Sitemap unavailable");
  }
};
