import fs from "fs"
import path from "path"

export function generateSidebar(locale: "en-US" | "zh-CN", category: string) {
  const dir = path.resolve(__dirname, `../../${locale}/${category}`)

  if (!fs.existsSync(dir)) {
    return []
  }

  const files = fs.readdirSync(dir)

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const name = file.replace(".md", "")
      return {
        text: name,
        link: `/${locale}/${category}/${name}`
      }
    })
    .sort((a, b) => a.text.localeCompare(b.text))
}
