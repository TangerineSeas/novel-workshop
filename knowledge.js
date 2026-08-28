// ========== 知识库数据 ==========
// 格式：{ category: "大类", subcategory: "小类", title: "标题", content: "内容", references: ["参考来源"] }
// 添加新条目：复制一个 {...}, 块，粘贴到列表末尾，修改内容即可

const KNOWLEDGE_DATA = [
  {
    category: "历史",
    subcategory: "中世纪",
    title: "封建制度概述",
    content: "封建制度是中世纪欧洲的基础社会结构。国王将土地分封给贵族（封臣），贵族向国王宣誓效忠并提供军事服务。封臣再将土地分给骑士，骑士向贵族效忠。最底层是农奴，他们耕种土地，向领主缴纳租税。这种金字塔式的等级制度维持了中世纪欧洲的社会秩序。",
    references: ["来源：维基百科 CC BY-SA 4.0", "参考：《中世纪欧洲史》"]
  },
  {
    category: "军事",
    subcategory: "武器",
    title: "锁子甲",
    content: "锁子甲是由数千个铁环相互扣接而成的防具，盛行于中世纪早期至盛期。它灵活轻便，能有效防御劈砍攻击，但对穿刺攻击防护较弱。制作一套锁子甲需要铁匠数月时间，因此价格昂贵，通常只有骑士和富裕士兵才能装备。",
    references: ["来源：维基百科 CC BY-SA 4.0"]
  },
  {
    category: "建筑",
    subcategory: "城堡",
    title: "中世纪城堡结构",
    content: "典型的中世纪城堡包含：护城河（防御敌军接近）、外墙（第一道防线）、箭塔（供弓箭手射击）、主楼（领主住所和最后防线）、庭院（日常活动区域）。城堡通常建在高地或河流交汇处，以增强防御能力。",
    references: ["来源：维基百科 CC BY-SA 4.0"]
  }
];

// 导出数据（不要修改这行）
if (typeof window !== 'undefined') {
  window.KNOWLEDGE_DATA = KNOWLEDGE_DATA;
}
