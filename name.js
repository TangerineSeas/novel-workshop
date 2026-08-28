// ========== 姓氏与名字库 ==========
// 格式：{ cn: "中文名", en: "英文名", meaning: "寓意" }
// 添加新姓氏：在 SURNAME_DATA 的 [ ] 里复制一行 {...}, 粘贴到末尾
// 添加新名字：在 GIVEN_NAME_DATA 的 [ ] 里复制一行 {...}, 粘贴到末尾

const SURNAME_DATA = [
  { cn: "罗森", en: "Rosen", meaning: "玫瑰" },
  { cn: "冯·霍亨", en: "von Hohen", meaning: "高贵的" },
  { cn: "铁锤", en: "Ironhammer", meaning: "坚韧的工匠" },
  { cn: "温莎", en: "Windsor", meaning: "河边草地" },
  { cn: "兰开斯特", en: "Lancaster", meaning: "堡垒旁的河流" }
];

const GIVEN_NAME_DATA = [
  { cn: "艾莉丝", en: "Alice", meaning: "高贵的" },
  { cn: "卡尔", en: "Karl", meaning: "自由人" },
  { cn: "威廉", en: "William", meaning: "坚定的保护者" },
  { cn: "伊莎贝拉", en: "Isabella", meaning: "上帝的誓言" },
  { cn: "亨利", en: "Henry", meaning: "家族统治者" }
];

// 导出（不要修改这行）
if (typeof window !== 'undefined') {
  window.SURNAME_DATA = SURNAME_DATA;
  window.GIVEN_NAME_DATA = GIVEN_NAME_DATA;
}
