import fs from "fs"
import path from "path"
import icons from "@iconify-json/tabler/icons.json"

const iconNames = Object.keys(icons.icons)

const commonName = "tabler"

// 公共样式
const commonStyles = `[class*="i-${commonName}\\:"] {
  -webkit-mask: var(--un-icon) no-repeat;
  mask: var(--un-icon) no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  background-color: currentColor;
  color: inherit;
  width: 1em;
  height: 1em;
}
`

// 只生成图标变量
const iconVariables = iconNames
  .map((name) => {
    const svg = (icons.icons as any)[name].body
    return `.i-${commonName}\\:${name} { --un-icon: url("data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${svg}</svg>`
    )}"); }`
  })
  .join("\n")

const scssContent = commonStyles + iconVariables

const outputPath = path.join(__dirname, "../src/styles/icons.scss")
const stylesDir = path.dirname(outputPath)

if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true })
}

fs.writeFileSync(outputPath, scssContent)
console.log(`Generated ${iconNames.length} icon classes to ${outputPath}`)
