import { path } from "@vuepress/utils"
import type { DefaultThemeOptions } from "vuepress"
import { defineUserConfig } from "vuepress"

export default defineUserConfig<DefaultThemeOptions>({
    title: "猫雷NyaRu",
    description: "猫雷最强！",
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components')
            }
        ]
    ],
    themeConfig: {
        repo: "kzw200015/nyaru",
        editLink: false,
        contributors: false,
        lastUpdated: false,
        sidebar: false,
        themePlugins: {
            mediumZoom: false
        },
        navbar: [
            { text: "猫雷简介", link: "/introduction" },
            { text: "猫雷切片", link: "/slice" },
            { text: "猫雷念经", link: "/song" },
            { text: "猫雷按钮", link: "/button" },
            { text: "关于", link: "/about" }
        ]
    }
})