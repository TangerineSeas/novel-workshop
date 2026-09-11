// ========== 角色性格问卷数据 ==========
// 格式：{ id, name, description, options: [{ label, value }] }
// 用户点击选项直接生成标签，不需要答题

const QUESTIONNAIRES = [
  // ========== DND 九宫格阵营 ==========
  {
    id: 'dnd',
    name: 'DND 九宫格阵营',
    description: '基于道德与秩序的双轴，将角色分为九种阵营。',
    options: [
      { label: '守序善良', value: '守序善良', desc: '尊重法律与秩序，心怀善意，是理想的骑士或守护者。' },
      { label: '中立善良', value: '中立善良', desc: '以善意行事，但不被规则束缚，是自由的好人。' },
      { label: '混乱善良', value: '混乱善良', desc: '心怀善意但反抗权威，是理想主义的叛逆者。' },
      { label: '守序中立', value: '守序中立', desc: '重视秩序与法律，但不以善恶为判断标准，是冷酷的法官。' },
      { label: '绝对中立', value: '绝对中立', desc: '不偏不倚，追求平衡，是旁观者或德鲁伊。' },
      { label: '混乱中立', value: '混乱中立', desc: '追求绝对自由，不受规则约束，是随心所欲的冒险者。' },
      { label: '守序邪恶', value: '守序邪恶', desc: '利用规则与秩序来达成自私目的，是精于算计的暴君。' },
      { label: '中立邪恶', value: '中立邪恶', desc: '只追求自身利益，不介意伤害他人，是自私的恶人。' },
      { label: '混乱邪恶', value: '混乱邪恶', desc: '为毁灭而毁灭，是纯粹的混乱与破坏的化身。' }
    ]
  },
  // ========== MBTI ==========
  {
    id: 'mbti',
    name: 'MBTI 十六型人格',
    description: '基于荣格心理类型理论，用四个维度描述人格倾向。',
    options: [
      { label: 'INTJ（建筑师）', value: 'INTJ', desc: '富有想象力和战略性的思想家，一切皆在计划之中。' },
      { label: 'INTP（逻辑学家）', value: 'INTP', desc: '具有创造力的发明家，对知识有着止不住的渴望。' },
      { label: 'ENTJ（指挥官）', value: 'ENTJ', desc: '大胆，富有想象力且意志强大的领导者，总能找到或创造解决方法。' },
      { label: 'ENTP（辩论家）', value: 'ENTP', desc: '聪明好奇的思想者，不会放弃任何智力上的挑战。' },
      { label: 'INFJ（提倡者）', value: 'INFJ', desc: '安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。' },
      { label: 'INFP（调停者）', value: 'INFP', desc: '诗意，善良的利他主义者，总是热情地为正当理由提供帮助。' },
      { label: 'ENFJ（主人公）', value: 'ENFJ', desc: '富有魅力鼓舞人心的领导者，有使听众着迷的能力。' },
      { label: 'ENFP（竞选者）', value: 'ENFP', desc: '热情，有创造力爱社交的自由自在的人，总能找到理由微笑。' },
      { label: 'ISTJ（物流师）', value: 'ISTJ', desc: '实际且注重事实的个人，可靠性不容怀疑。' },
      { label: 'ISFJ（守卫者）', value: 'ISFJ', desc: '非常专注而温暖的守护者，时刻准备着保护爱着的人们。' },
      { label: 'ESTJ（总经理）', value: 'ESTJ', desc: '出色的管理者，在管理事情或人的方面无与伦比。' },
      { label: 'ESFJ（执政官）', value: 'ESFJ', desc: '极有同情心，爱交往受欢迎的人们，总是热心提供帮助。' },
      { label: 'ISTP（鉴赏家）', value: 'ISTP', desc: '大胆而实际的实验家，擅长使用任何形式的工具。' },
      { label: 'ISFP（探险家）', value: 'ISFP', desc: '灵活有魅力的艺术家，时刻准备着探索和体验新鲜事物。' },
      { label: 'ESTP（企业家）', value: 'ESTP', desc: '聪明，精力充沛善于感知的人，真心享受生活在边缘。' },
      { label: 'ESFP（表演者）', value: 'ESFP', desc: '自发的，精力充沛而热情的表演者，生活在他们周围永不无聊。' }
    ]
  },
  // ========== 九型人格 ==========
  {
    id: 'enneagram',
    name: '九型人格',
    description: '基于九种核心动机与恐惧的人格分类。',
    options: [
      { label: '1号·完美主义者', value: '1号完美主义者', desc: '原则性强，追求完美，希望世界符合自己的理想标准。' },
      { label: '2号·助人者', value: '2号助人者', desc: '慷慨大方，乐于助人，渴望被需要和被爱。' },
      { label: '3号·成就者', value: '3号成就者', desc: '目标导向，追求成功与认可，擅长自我推销。' },
      { label: '4号·个人主义者', value: '4号个人主义者', desc: '浪漫敏感，追求独特性与自我表达，常感孤独。' },
      { label: '5号·探索者', value: '5号探索者', desc: '求知欲强，喜欢独处与研究，情感上保持距离。' },
      { label: '6号·忠诚者', value: '6号忠诚者', desc: '忠诚可靠，寻求安全感与权威指导，常怀忧虑。' },
      { label: '7号·热情者', value: '7号热情者', desc: '乐观开朗，追求新鲜体验，逃避痛苦与限制。' },
      { label: '8号·挑战者', value: '8号挑战者', desc: '强势自信，追求掌控与独立，保护弱者。' },
      { label: '9号·和平者', value: '9号和平者', desc: '温和包容，追求和谐与平静，避免冲突。' }
    ]
  },
  // ========== 大五人格 ==========
  {
    id: 'bigfive',
    name: '大五人格（OCEAN）',
    description: '基于开放性、尽责性、外向性、宜人性、情绪稳定性五个维度。',
    options: [
      { label: '高开放性', value: '高开放性', desc: '富有想象力，喜欢新事物与抽象概念。' },
      { label: '低开放性', value: '低开放性', desc: '务实，偏好熟悉与具体的事物。' },
      { label: '高尽责性', value: '高尽责性', desc: '有条理，可靠，做事有计划。' },
      { label: '低尽责性', value: '低尽责性', desc: '灵活随性，不喜欢被计划束缚。' },
      { label: '高外向性', value: '高外向性', desc: '从社交中获取能量，健谈活跃。' },
      { label: '低外向性', value: '低外向性', desc: '独处充电，安静内敛。' },
      { label: '高宜人性', value: '高宜人性', desc: '温暖合作，体贴他人。' },
      { label: '低宜人性', value: '低宜人性', desc: '直接理性，不惧冲突。' },
      { label: '高情绪稳定性', value: '高情绪稳定性', desc: '抗压能力强，情绪平稳。' },
      { label: '低情绪稳定性', value: '低情绪稳定性', desc: '敏感，情绪反应强烈。' }
    ]
  },
  // ========== 自定义问卷（预留） ==========
  {
    id: 'custom',
    name: '自定义问卷',
    description: '预留位置，后续可添加更多问卷。',
    options: []
  }
];

// 导出（不要修改）
if (typeof window !== 'undefined') {
  window.QUESTIONNAIRES = QUESTIONNAIRES;
}
