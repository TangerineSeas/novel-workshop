// ========== 角色性格问卷数据 ==========
// 每题选项带分值，权重计算后生成标签

const QUESTIONNAIRES = [
  // ========== DND 九宫格阵营 ==========
  {
    id: 'dnd',
    name: 'DND 九宫格阵营',
    description: '基于道德与秩序的双轴，共9题情境判断。',
    results: ['守序善良','中立善良','混乱善良','守序中立','绝对中立','混乱中立','守序邪恶','中立邪恶','混乱邪恶'],
    type: 'quiz',
    questions: [
      { q: '当你在路上看到有人被欺凌，你会：', options: [
        { label: '立即上前阻止，保护弱者', scores: { good: 2, order: 1 } },
        { label: '报警或找守卫来处理', scores: { good: 1, order: 2 } },
        { label: '看情况，不想惹麻烦', scores: { good: 0, order: 0 } },
        { label: '趁乱拿走被欺凌者的财物', scores: { evil: 2, order: 0 } }
      ]},
      { q: '你如何看待法律与规则？', options: [
        { label: '法律是维护社会的基础，必须遵守', scores: { order: 2 } },
        { label: '法律通常合理，但特殊情况可以变通', scores: { order: 1 } },
        { label: '法律只是强者制定的工具', scores: { chaos: 2 } },
        { label: '法律毫无意义，我只跟随自己的心', scores: { chaos: 2, evil: 1 } }
      ]},
      { q: '如果你的朋友犯了法，你会：', options: [
        { label: '劝他自首，并陪他一起去', scores: { good: 1, order: 2 } },
        { label: '帮他逃跑，朋友比法律重要', scores: { chaos: 1, good: 1 } },
        { label: '举报他，法律面前无朋友', scores: { order: 2, evil: 1 } },
        { label: '当作不知道，不关我的事', scores: { order: 0, good: 0 } }
      ]},
      { q: '你获得了一笔意外之财，你会：', options: [
        { label: '捐给教会或穷人', scores: { good: 2 } },
        { label: '存起来以备不时之需', scores: { order: 1 } },
        { label: '立刻花掉，享受当下', scores: { chaos: 1 } },
        { label: '用这笔钱去投资或放贷获利', scores: { evil: 1, order: 1 } }
      ]},
      { q: '你如何看待承诺？', options: [
        { label: '承诺就是誓言，必须遵守', scores: { order: 2, good: 1 } },
        { label: '承诺很重要，但要看情况', scores: { order: 1 } },
        { label: '承诺只是说说而已', scores: { chaos: 2 } },
        { label: '承诺是用来利用别人的工具', scores: { chaos: 1, evil: 2 } }
      ]},
      { q: '当你的队伍面临危险时，你会：', options: [
        { label: '挺身而出，保护所有人', scores: { good: 2, order: 1 } },
        { label: '制定策略，有序撤退', scores: { order: 2 } },
        { label: '自己先跑，活命要紧', scores: { evil: 1, chaos: 1 } },
        { label: '趁乱出卖队友换取利益', scores: { evil: 2 } }
      ]},
      { q: '你如何看待权威？', options: [
        { label: '权威值得尊重，他们承担着责任', scores: { order: 2 } },
        { label: '权威有用，但不应盲从', scores: { order: 1 } },
        { label: '权威只是压迫的工具', scores: { chaos: 2 } },
        { label: '我想成为那个制定规则的人', scores: { evil: 1, order: 1 } }
      ]},
      { q: '你更认同哪种生活方式？', options: [
        { label: '为他人服务，让世界更美好', scores: { good: 2 } },
        { label: '按部就班，过安稳的日子', scores: { order: 2 } },
        { label: '自由自在，不受任何约束', scores: { chaos: 2 } },
        { label: '不择手段，追求个人利益最大化', scores: { evil: 2 } }
      ]},
      { q: '如果有人侮辱了你的信仰或荣誉，你会：', options: [
        { label: '用荣誉决斗捍卫尊严', scores: { order: 1, good: 1 } },
        { label: '一笑置之，不值得计较', scores: { order: 1 } },
        { label: '当场反击，用拳头说话', scores: { chaos: 2 } },
        { label: '记在心里，找机会报复', scores: { evil: 2, order: 1 } }
      ]}
    ],
    // 根据得分计算阵营
    calculate: function(scores) {
      const orderScore = (scores.order || 0) - (scores.chaos || 0);
      const goodScore = (scores.good || 0) - (scores.evil || 0);
      
      let orderAxis = '中立';
      if(orderScore >= 3) orderAxis = '守序';
      else if(orderScore <= -3) orderAxis = '混乱';
      
      let goodAxis = '中立';
      if(goodScore >= 3) goodAxis = '善良';
      else if(goodScore <= -3) goodAxis = '邪恶';
      
      if(orderAxis === '中立' && goodAxis === '中立') return '绝对中立';
      return orderAxis + goodAxis;
    }
  },
  // ========== MBTI ==========
  {
    id: 'mbti',
    name: 'MBTI 十六型人格',
    description: '基于四个维度的倾向性判断。',
    results: ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'],
    type: 'quiz',
    questions: [
      { q: '在聚会中，你通常：', options: [
        { label: '主动和很多人交谈，越聊越有精神', scores: { E: 2 } },
        { label: '和几个熟悉的人聊天', scores: { E: 1, I: 1 } },
        { label: '独自待着，观察大家', scores: { I: 2 } },
        { label: '找借口早点离开', scores: { I: 2 } }
      ]},
      { q: '你更关注：', options: [
        { label: '眼前的事实和细节', scores: { S: 2 } },
        { label: '事实背后的意义和可能性', scores: { N: 2 } },
        { label: '实用和可操作的东西', scores: { S: 1 } },
        { label: '想象和未来的图景', scores: { N: 1 } }
      ]},
      { q: '做决定时，你更依赖：', options: [
        { label: '逻辑和客观分析', scores: { T: 2 } },
        { label: '感受和对他人的影响', scores: { F: 2 } },
        { label: '两者兼顾，但更偏逻辑', scores: { T: 1 } },
        { label: '两者兼顾，但更偏感受', scores: { F: 1 } }
      ]},
      { q: '你更喜欢：', options: [
        { label: '提前计划好一切', scores: { J: 2 } },
        { label: '保持灵活，随机应变', scores: { P: 2 } },
        { label: '有大致方向，细节灵活', scores: { J: 1 } },
        { label: '走一步看一步', scores: { P: 1 } }
      ]},
      { q: '独处时，你通常：', options: [
        { label: '感到无聊，想找人聊天', scores: { E: 1 } },
        { label: '享受安静，做自己喜欢的事', scores: { I: 2 } },
        { label: '思考一些抽象的问题', scores: { N: 1, I: 1 } },
        { label: '处理日常事务', scores: { S: 1 } }
      ]},
      { q: '朋友向你倾诉烦恼时，你会：', options: [
        { label: '帮他分析问题，给出建议', scores: { T: 2 } },
        { label: '先安慰他，让他感觉好受些', scores: { F: 2 } },
        { label: '认真听，但不太会安慰人', scores: { T: 1 } },
        { label: '共情他的感受，陪他一起难过', scores: { F: 1 } }
      ]},
      { q: '你更愿意：', options: [
        { label: '按照既定的流程做事', scores: { J: 2 } },
        { label: '尝试新的方法和可能性', scores: { P: 1, N: 1 } },
        { label: '在规定时间内完成任务', scores: { J: 1 } },
        { label: '拖延到最后一刻再冲刺', scores: { P: 2 } }
      ]},
      { q: '你更相信：', options: [
        { label: '亲眼所见、亲耳所闻', scores: { S: 2 } },
        { label: '直觉和灵感', scores: { N: 2 } },
        { label: '经验和传统', scores: { S: 1 } },
        { label: '理论和模型', scores: { N: 1 } }
      ]}
    ],
    calculate: function(scores) {
      const E = scores.E || 0, I = scores.I || 0;
      const S = scores.S || 0, N = scores.N || 0;
      const T = scores.T || 0, F = scores.F || 0;
      const J = scores.J || 0, P = scores.P || 0;
      
      return (E >= I ? 'E' : 'I') + (S >= N ? 'S' : 'N') + (T >= F ? 'T' : 'F') + (J >= P ? 'J' : 'P');
    }
  },
  // ========== 九型人格 ==========
  {
    id: 'enneagram',
    name: '九型人格',
    description: '基于九种核心动机与恐惧。',
    results: ['1号完美主义者','2号助人者','3号成就者','4号个人主义者','5号探索者','6号忠诚者','7号热情者','8号挑战者','9号和平者'],
    type: 'quiz',
    questions: [
      { q: '你最害怕的是：', options: [
        { label: '做错事、被批评', scores: { 1: 2 } },
        { label: '不被需要、不被爱', scores: { 2: 2 } },
        { label: '失败、没有成就', scores: { 3: 2 } },
        { label: '平庸、没有独特之处', scores: { 4: 2 } },
        { label: '无知、无能', scores: { 5: 2 } },
        { label: '没有依靠、失去支持', scores: { 6: 2 } },
        { label: '被困住、失去自由', scores: { 7: 2 } },
        { label: '被控制、显得软弱', scores: { 8: 2 } },
        { label: '冲突、失去和谐', scores: { 9: 2 } }
      ]},
      { q: '你最渴望的是：', options: [
        { label: '正确、完美', scores: { 1: 2 } },
        { label: '被爱、被需要', scores: { 2: 2 } },
        { label: '成功、被认可', scores: { 3: 2 } },
        { label: '独特、真实', scores: { 4: 2 } },
        { label: '知识、理解', scores: { 5: 2 } },
        { label: '安全、确定', scores: { 6: 2 } },
        { label: '快乐、满足', scores: { 7: 2 } },
        { label: '掌控、强大', scores: { 8: 2 } },
        { label: '平静、和谐', scores: { 9: 2 } }
      ]},
      { q: '当压力很大时，你会：', options: [
        { label: '更加严格要求自己和别人', scores: { 1: 2 } },
        { label: '拼命帮助别人，忽略自己', scores: { 2: 2 } },
        { label: '更加努力工作，证明自己', scores: { 3: 2 } },
        { label: '陷入情绪，自我怀疑', scores: { 4: 2 } },
        { label: '退缩，独自思考', scores: { 5: 2 } },
        { label: '焦虑，寻求他人意见', scores: { 6: 2 } },
        { label: '逃避，找乐子分散注意', scores: { 7: 2 } },
        { label: '强硬对抗，不示弱', scores: { 8: 2 } },
        { label: '麻木，假装没事', scores: { 9: 2 } }
      ]},
      { q: '你更容易关注：', options: [
        { label: '对错和原则', scores: { 1: 2 } },
        { label: '他人的需求和感受', scores: { 2: 2 } },
        { label: '目标和成果', scores: { 3: 2 } },
        { label: '自己的内心和情感', scores: { 4: 2 } },
        { label: '知识和信息', scores: { 5: 2 } },
        { label: '潜在的风险和问题', scores: { 6: 2 } },
        { label: '新的可能性和体验', scores: { 7: 2 } },
        { label: '权力和控制力', scores: { 8: 2 } },
        { label: '整体的平衡和氛围', scores: { 9: 2 } }
      ]}
    ],
    calculate: function(scores) {
      let maxType = '1', maxScore = 0;
      for(let i = 1; i <= 9; i++) {
        const s = scores[i] || 0;
        if(s > maxScore) { maxScore = s; maxType = String(i); }
      }
      const names = { '1': '完美主义者', '2': '助人者', '3': '成就者', '4': '个人主义者', '5': '探索者', '6': '忠诚者', '7': '热情者', '8': '挑战者', '9': '和平者' };
      return maxType + '号' + names[maxType];
    }
  },
  // ========== 大五人格 ==========
  {
    id: 'bigfive',
    name: '大五人格（OCEAN）',
    description: '基于五个维度的倾向性。',
    results: ['高开放性','低开放性','高尽责性','低尽责性','高外向性','低外向性','高宜人性','低宜人性','高情绪波动','情绪稳定'],
    type: 'quiz',
    questions: [
      { q: '我喜欢尝试新事物和探索未知。', options: [
        { label: '非常符合', scores: { O: 2 } },
        { label: '比较符合', scores: { O: 1 } },
        { label: '不太符合', scores: { O: -1 } },
        { label: '完全不符合', scores: { O: -2 } }
      ]},
      { q: '我做事有条理，喜欢提前计划。', options: [
        { label: '非常符合', scores: { C: 2 } },
        { label: '比较符合', scores: { C: 1 } },
        { label: '不太符合', scores: { C: -1 } },
        { label: '完全不符合', scores: { C: -2 } }
      ]},
      { q: '我在社交场合中感到精力充沛。', options: [
        { label: '非常符合', scores: { E: 2 } },
        { label: '比较符合', scores: { E: 1 } },
        { label: '不太符合', scores: { E: -1 } },
        { label: '完全不符合', scores: { E: -2 } }
      ]},
      { q: '我容易信任他人，乐于合作。', options: [
        { label: '非常符合', scores: { A: 2 } },
        { label: '比较符合', scores: { A: 1 } },
        { label: '不太符合', scores: { A: -1 } },
        { label: '完全不符合', scores: { A: -2 } }
      ]},
      { q: '我经常感到焦虑或情绪波动。', options: [
        { label: '非常符合', scores: { N: 2 } },
        { label: '比较符合', scores: { N: 1 } },
        { label: '不太符合', scores: { N: -1 } },
        { label: '完全不符合', scores: { N: -2 } }
      ]},
      { q: '我喜欢思考抽象的概念和理论。', options: [
        { label: '非常符合', scores: { O: 2 } },
        { label: '比较符合', scores: { O: 1 } },
        { label: '不太符合', scores: { O: -1 } },
        { label: '完全不符合', scores: { O: -2 } }
      ]},
      { q: '我做事注重细节，追求精确。', options: [
        { label: '非常符合', scores: { C: 2 } },
        { label: '比较符合', scores: { C: 1 } },
        { label: '不太符合', scores: { C: -1 } },
        { label: '完全不符合', scores: { C: -2 } }
      ]},
      { q: '我更喜欢独处而不是热闹的聚会。', options: [
        { label: '非常符合', scores: { E: -2 } },
        { label: '比较符合', scores: { E: -1 } },
        { label: '不太符合', scores: { E: 1 } },
        { label: '完全不符合', scores: { E: 2 } }
      ]},
      { q: '我倾向于直接表达不满，而非忍让。', options: [
        { label: '非常符合', scores: { A: -2 } },
        { label: '比较符合', scores: { A: -1 } },
        { label: '不太符合', scores: { A: 1 } },
        { label: '完全不符合', scores: { A: 2 } }
      ]},
      { q: '我在压力下能保持冷静。', options: [
        { label: '非常符合', scores: { N: -2 } },
        { label: '比较符合', scores: { N: -1 } },
        { label: '不太符合', scores: { N: 1 } },
        { label: '完全不符合', scores: { N: 2 } }
      ]}
    ],
    calculate: function(scores) {
      const O = scores.O || 0, C = scores.C || 0, E = scores.E || 0, A = scores.A || 0, N = scores.N || 0;
      const dims = [];
      if(O >= 1) dims.push('高开放性'); else if(O <= -1) dims.push('低开放性');
      if(C >= 1) dims.push('高尽责性'); else if(C <= -1) dims.push('低尽责性');
      if(E >= 1) dims.push('高外向性'); else if(E <= -1) dims.push('低外向性');
      if(A >= 1) dims.push('高宜人性'); else if(A <= -1) dims.push('低宜人性');
      if(N >= 1) dims.push('高情绪波动'); else if(N <= -1) dims.push('情绪稳定');
      return dims.join(' · ') || '均衡型';
    }
  }
];

// 导出（不要修改）
if (typeof window !== 'undefined') {
  window.QUESTIONNAIRES = QUESTIONNAIRES;
}
