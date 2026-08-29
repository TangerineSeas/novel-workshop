// ========== 魔法工具模块 v2 ==========
(function() {
        // ===== 泛灵魔法原型数据 =====
    const vennPrototypes = [
        {
            id: 20,
            title: "超凡入圣的技艺/工艺",
            natural: ["生铁", "熟铁", "炭与钢的复杂转化关系", "绘画用颜料", "动物和人类共享的工具思维", "人类的歌唱能力"],
            social: ["第一工匠——几乎必然是造物主或其神谱中的亲属", "技艺秘密的传承严格保守在血亲或师徒之间", "几乎仅出现于冶金革命后的复杂文明，如北欧的侏儒铁匠、西非的熔炉神、中国的李老君", "普遍使用口传歌诀/诗篇来对抗信息流失"],
            desc: "在古代世界，人类的心理活动/注意力，即是构建魔法与巫术故事的原动力。本原型代表了将技艺本身视为超凡入圣的范畴。"
        },
        {
            id: 19,
            title: "区域神/土地公/地缚灵/世间护法/Genius Loci",
            natural: ["一棵千年橡树", "一座不融的雪山", "一口长时间使用的井"],
            social: ["土地庙、城隍庙的祭祀圈", "村落划界时的“神之领地”共识", "从古代城市奠基宰牲祭神，到今天装修开工时斩鸡头烧黄纸的习俗"],
            desc: "地域文化特异性削减，全人类普遍性逐渐增加。本原型关注特定地点所蕴含的灵性。"
        },
        {
            id: 18,
            title: "誓言/契约/Geas",
            natural: ["泥板与纸面文字", "金属镌刻/蚀刻", "盐", "人类的听觉与发声能力"],
            social: ["公开立誓的仪式场景，违约可能导致社会性死亡", "可视为两河地带最早的成文法雏形", "在爱尔兰盖尔传说中的“Geas”既是祝福又是诅咒"],
            desc: "契约与誓言作为魔法的约束力量。"
        },
        {
            id: 17,
            title: "迷醉/情欲/欢宴之力",
            natural: ["葡萄发酵产生的乙醇", "大麦与蛇麻草煮沸后的麦角碱", "曼陀罗、毒蝇伞的生物碱", "集体活动引发的呼吸加速、心率飙升和群体性臆症"],
            social: ["对生理极限状态的崇拜，主要存在于高纬度地区萨满文化之中"],
            desc: "通过改变意识状态来触及超自然。"
        },
        {
            id: 16,
            title: "丰饶仪式/聚宝仪式/埋藏财物祈福/聚宝盆/许愿币/贵重品崇拜",
            natural: ["春耕秋收", "动物和人的成长周期", "贵金属的不锈特性"],
            social: ["在几乎一切社会都有分布，将“播种-收获”的经济逻辑投射到一切事物上，希望埋下什么就能收获什么，魔法即投资"],
            desc: "丰饶与财富的魔法。"
        },
        {
            id: 15,
            title: "杀戮之舞/神打/出马",
            natural: ["肌肉无氧代谢", "战逃反射引起的肾上腺素分泌", "人为制造伤口导致痛阈提升"],
            social: ["群体臆症的古典军事化运用——萨满文化圈战前的集体附身仪式", "东亚宗族地区的“神打”与“游神”传统", "北欧狂战士的熊皮斗篷传说", "毛利人的“哈卡”战舞"],
            desc: "战斗狂热与附体。"
        },
        {
            id: 14,
            title: "占卜/预兆/先知/未来视/随机数",
            natural: ["空中飞过的鸟群形状", "牛肠的纹路", "燃烧后的龟甲裂缝", "抛掷骨片的朝向等自然界随机性结果"],
            social: ["东商周，西罗马，古代卜甲，今天占星，共性即为将随机数视为天意/超自然所操纵的命运之揭示"],
            desc: "从随机中解读命运。"
        },
        {
            id: 13,
            title: "逢魔之刻/意外律/世界边缘/zaunreiter",
            natural: ["光照不佳的日出与日落时分", "山洞、海岸、门廊、桥梁的“分割空间”结构"],
            social: ["将社会空间和时间的交界线定义为穿透现实结构的特定魔法条件——黄昏即日本的“逢魔之刻”", "成人礼常在夜晚与白昼的交界举行", "病患被置于门槛上接受治疗", "传统天主教的洗礼"],
            desc: "边界与阈限的魔法。"
        },
        {
            id: 12,
            title: "女巫魔药/天材地宝/经验药理学",
            natural: ["柳树皮中的水杨酸苷", "罂粟汁液中的生物碱", "蒿草中的苦艾素"],
            social: ["在有效成分被化学式定义命名之前，所有经验药理学的处理对象都是“具有灵性的植物”"],
            desc: "植物中的灵性力量。"
        },
        {
            id: 11,
            title: "驱使兽群/动物交谈/共享动物感知/化兽/德鲁伊",
            natural: ["狼群、鸟群的血缘等级结构", "动物对气味、声音的更高敏感度"],
            social: ["以人类之身运用兽类的本能优势，即是人类自身个体的自然性持续削减、集体的社会性持续增加的嬗变过程——例如全世界古典畜牧业对头牛/头羊的依赖", "西伯利亚萨满的“动物母语”观念", "印第安猎人的猎物道歉仪式", "北欧的“换皮者”传说", "古埃及的人身兽头神祇"],
            desc: "与动物共享力量。"
        },
        {
            id: 10,
            title: "月相与潮汐轮回",
            natural: ["月球公转", "潮汐涨落", "哺乳动物月经周期同步现象"],
            social: ["全人类普适的对“周期性重复”的自然节律的崇拜和运用"],
            desc: "周期性节律的魔法。"
        },
        {
            id: 9,
            title: "火之毁灭与扬升/祭祀用烟",
            natural: ["燃烧，或氧化还原反应", "可燃物成分影响火焰颜色", "火焰可将食物加热，也可将人烧死", "燃烧烟尘因热空气上升", "恐怖的森林火灾"],
            social: ["火焚烧物体制造的烟是唯一一种将物质摧毁同时副产物向上飘至天空的物理现象，结合“神的居所在天上”则构成了最初的祭祀仪式，从苏美尔到商朝均有记载"],
            desc: "火焰的净化和升华。"
        },
        {
            id: 8,
            title: "水之涤净/水之孕育/水体连通冥界",
            natural: ["水的溶解性与流动性", "静水面的反射成像原理", "深水区的无光缺氧环境", "水流作为清理伤口与体内致病源的的物理手段"],
            social: ["广泛存在，水通过浸泡来删除或覆盖既往状态——洗礼作为“旧人死、新人活”的仪式", "将骨灰撒入河流的“归乡”逻辑", "井泉作为“通冥之眼”的民俗设定", "对溺水者的特殊葬仪"],
            desc: "水的净化与重生。"
        },
        {
            id: 7,
            title: "血缘之纽带/祖先之灵",
            natural: ["人类生活中的可见线条", "遗传的血缘相似性", "原始氏族/家族结构"],
            social: ["广泛存在的血脉认同——宗族体系对祭祀共同祖先的建构", "血缘关系被视为不可见的线", "对“不孝有三”背后的巫术恐惧，如祖先可能会降灾", "贵族谱系作为合法性来源"],
            desc: "血脉与传承的力量。"
        },
        {
            id: 6,
            title: "梦境启示/出神",
            natural: ["快速眼动睡眠期的脑电波特征", "记忆在睡眠中重放与整合", "感官剥夺后的幻觉产生机制"],
            social: ["原始的“灵魂”观念与“彼岸世界”观念，做梦即是灵魂外出办事，可借此获得神明或命运的启示"],
            desc: "梦与出神状态。"
        },
        {
            id: 5,
            title: "跨越生死界限/通灵/彼岸世界观",
            natural: ["尸体腐烂易产生磷火", "人类视觉思维擅长将无关事物误认成脸孔", "在特定情境下联想易产生特定的心理效应"],
            social: ["死者比生者多知道一件事——死后是什么样，生者相信死者不受肉体限制，可以吐露生者急需的秘密，例如季节的变化、灾祸的起源、与神沟通的办法"],
            desc: "生死之间的沟通。"
        },
        {
            id: 4,
            title: "天象即神威/灾难与统治者道德的联系",
            natural: ["雷暴", "日食", "月食", "彗星", "暴雨", "洪水", "泥石流"],
            social: ["天象即神祇在表达意志、发泄愤怒——全世界，尤其草原和平原上的古典文明，都乐于通过解读这些巨响与强光来威吓敌人、彰显王权"],
            desc: "天空的力量与神意。"
        },
        {
            id: 3,
            title: "大地与母性生殖力/食物与繁衍",
            natural: ["植物生长、人类和动物的进食/成长", "土壤的肥力差别", "尸体、废弃物转化为土壤养分的循环"],
            social: ["跨文化的“地母神”原型，用于解释流产/顺产和欠收/丰收", "“养分来自大地”的原始迷思"],
            desc: "大地母亲的滋养。"
        },
        {
            id: 2,
            title: "“灵魂”/另一个自我/镜像自我",
            natural: ["人类的名字", "水面/镜面/瞳孔中的倒影", "影子在太阳下的形状变化", "梦境中的行动"],
            social: ["踩影子、烧名字纸作为民俗禁忌", "对肖像画和照片可能“夺取灵魂”的恐惧", "替身偶人作为“第二身体”的寄宿物", "称呼真名即可号令本人", "关于复生的死物没有影子/镜中不存在的传说"],
            desc: "灵魂与镜像。"
        },
        {
            id: 1,
            title: "“存在”/言灵/世界被创造/第一推动力/古代朴素唯物主义",
            natural: ["人类的发声能力", "语言符号系统", "各类狼孩事件", "影响语言能力的衰老、疾病、器质性精神障碍"],
            social: ["我们从何处来——人类对“自身为何存在”的终极目的论解释", "将逻辑和语言所描述的某种单一对象视为现实本质", "一切形式的古典神创论"],
            desc: "存在的本质与言灵。"
        }
    ];
    function initMagicTools() {
        const toolsTabs = document.querySelector('.tools-tabs');
        if(!toolsTabs) return;
        
        const magicTab = document.createElement('button');
        magicTab.className = 'tools-tab';
        magicTab.textContent = '🔮 魔法工具';
        magicTab.onclick = function() { switchMagicToolsTab(this); };
        toolsTabs.appendChild(magicTab);

        const toolsContainer = document.getElementById('page-tools').querySelector('.page-container');
        const magicContent = document.createElement('div');
        magicContent.id = 'tools-magic';
        magicContent.className = 'tools-content';
        magicContent.innerHTML = `
            <div class="magic-tools-container">
                
                <!-- ===== 工具一：意象Venn图 ===== -->
                                <!-- ===== 工具一：意象Venn图 ===== -->
                <div class="magic-tool-section">
                    <h3>🔮 意象Venn图（泛灵论魔法）</h3>
                    <p class="magic-tool-desc">基于自然万物推导魔法属性。左侧填入自然性特征，右侧填入社会性含义，两者交叉生成魔法灵感。</p>
                    <div class="venn-prototype-selector">
                        <label style="font-size:.8em;color:var(--text2)">选择泛灵魔法原型：</label>
                        <select id="venn-prototype-select" class="form-select" style="width:auto;min-width:200px;display:inline-block" onchange="loadVennPrototype(this.value)">
                            <option value="">-- 选择原型 --</option>
                        </select>
                    </div>
                    <div class="venn-prototype-info" id="venn-prototype-info" style="display:none;margin-bottom:12px;padding:10px;background:var(--bg);border:1px dashed var(--accent);border-radius:6px;font-size:.85em;line-height:1.6"></div>
                    <div class="venn-wrapper">
                        <div class="venn-circle left">
                            <h4>🌿 自然性</h4>
                            <ul id="venn-natural-list"></ul>
                        </div>
                        <div class="venn-overlap">✨</div>
                        <div class="venn-circle right">
                            <h4>🏛️ 社会性</h4>
                            <ul id="venn-social-list"></ul>
                        </div>
                    </div>
                    <div class="venn-input-row">
                        <input id="venn-natural-input" placeholder="自然性词汇">
                        <button class="btn btn-sm btn-primary" onclick="addVennWord('natural')">+ 添加</button>
                        <input id="venn-social-input" placeholder="社会性词汇">
                        <button class="btn btn-sm btn-primary" onclick="addVennWord('social')">+ 添加</button>
                    </div>
                    <div class="btn-row" style="justify-content:center">
                        <button class="btn btn-sm btn-primary" onclick="generateVennInspiration()">🎲 随机组合推导</button>
                    </div>
                    <div class="venn-result" id="venn-result">点击左右两侧词汇进行组合，或点击随机组合</div>
                </div>

                <!-- ===== 工具二：不可能三角 ===== -->
                <div class="magic-tool-section">
                    <h3>📐 不可能三角（唯能论魔法）</h3>
                    <p class="magic-tool-desc">维系叙事张力，约束能量型魔法体系的强度边界。三个顶点只能保留两个，必须放弃一个。</p>
                    <div class="triangle-visual">
    <div class="triangle-svg" id="triangle-svg"></div>
</div>
                    <div class="triangle-options">
                        <button class="triangle-btn" onclick="toggleTriangleOption('表现力')">放弃表现力</button>
                        <button class="triangle-btn" onclick="toggleTriangleOption('便捷性')">放弃便捷性</button>
                        <button class="triangle-btn" onclick="toggleTriangleOption('性价比')">放弃性价比</button>
                    </div>
                    <div class="triangle-result" id="triangle-result">点击三角形顶点或按钮，查看放弃该角的效果</div>
                </div>

                <!-- ===== 工具三：金字塔 ===== -->
                <div class="magic-tool-section">
                    <h3>🏛️ 金字塔（世界观力量层次）</h3>
                    <p class="magic-tool-desc">构建具有内部张力与戏剧冲突的叙事力量体系。三层自上而下，从抽象到具体。</p>
                    <div class="pyramid-visual">
                        <div class="pyramid-level-box top" onclick="togglePyramidLevel(this, 'narrative')">
                            <h4>叙事层</h4>
                            <p>世界存在的第一因</p>
                        </div>
                        <div class="pyramid-level-box mid" onclick="togglePyramidLevel(this, 'rules')">
                            <h4>规则层</h4>
                            <p>宏观超自然体系的运转者</p>
                        </div>
                        <div class="pyramid-level-box bottom" onclick="togglePyramidLevel(this, 'action')">
                            <h4>行动层</h4>
                            <p>风土人情与民俗传说的基础</p>
                        </div>
                    </div>
                    <div class="pyramid-detail" id="pyramid-detail">点击金字塔各层查看详细说明</div>
                </div>

                           <!-- 水印与导出 -->
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;padding:10px;border-top:1px solid var(--border);flex-wrap:wrap;gap:10px">
                    <div style="font-size:.7em;color:var(--text2)">
                        <span>水印：小红书5508697487@地月双尸</span>
                        <span style="margin:0 10px">|</span>
                        <span>小红书26183246310@连城</span>
                    </div>
                   <button class="btn btn-sm btn-primary" onclick="exportMagicToolImage()">📷 一键导出图片</button>
                </div>
            </div>
        `;
        toolsContainer.appendChild(magicContent);
    }

    window.switchMagicToolsTab = function(btn) {
        document.querySelectorAll('.tools-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tools-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tools-magic').classList.add('active');
    };
        // 填充原型下拉框
    function populateVennPrototypeSelect() {
        const select = document.getElementById('venn-prototype-select');
        if(!select) return;
        vennPrototypes.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = p.id + '. ' + p.title;
            select.appendChild(opt);
        });
    }

    // 加载原型词汇
    window.loadVennPrototype = function(prototypeId) {
        const proto = vennPrototypes.find(p => p.id == prototypeId);
        if(!proto) return;
        
        const naturalList = document.getElementById('venn-natural-list');
        const socialList = document.getElementById('venn-social-list');
        
        // 清空现有列表
        naturalList.innerHTML = '';
        socialList.innerHTML = '';
        
        // 添加自然性词汇
        proto.natural.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            li.onclick = function() { this.classList.toggle('selected'); };
            naturalList.appendChild(li);
        });
        
        // 添加社会性词汇
        proto.social.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            li.onclick = function() { this.classList.toggle('selected'); };
            socialList.appendChild(li);
        });
        
        // 显示解释
        const infoDiv = document.getElementById('venn-prototype-info');
        infoDiv.style.display = 'block';
        infoDiv.innerHTML = `<strong>${proto.id}. ${proto.title}</strong><br>${proto.desc}`;
    };

    window.addVennWord = function(type) {
        const input = document.getElementById('venn-' + type + '-input');
        const list = document.getElementById('venn-' + type + '-list');
        const word = input.value.trim();
        if(!word) return;
        const li = document.createElement('li');
        li.textContent = word;
        li.onclick = function() { this.classList.toggle('selected'); };
        list.appendChild(li);
        input.value = '';
    };

    window.generateVennInspiration = function() {
        const naturalSelected = [...document.querySelectorAll('#venn-natural-list li.selected')].map(li => li.textContent);
        const socialSelected = [...document.querySelectorAll('#venn-social-list li.selected')].map(li => li.textContent);
        const naturalAll = [...document.querySelectorAll('#venn-natural-list li')].map(li => li.textContent);
        const socialAll = [...document.querySelectorAll('#venn-social-list li')].map(li => li.textContent);
        
        let n, s;
        if(naturalSelected.length > 0 && socialSelected.length > 0) {
            n = naturalSelected[0];
            s = socialSelected[0];
        } else {
            if(naturalAll.length === 0 || socialAll.length === 0) {
                alert('请先在两侧添加词汇');
                return;
            }
            n = naturalAll[Math.floor(Math.random() * naturalAll.length)];
            s = socialAll[Math.floor(Math.random() * socialAll.length)];
        }
        
        document.getElementById('venn-result').innerHTML = 
            `<strong>${n}</strong> + <strong>${s}</strong> = 魔法灵感：<br>` +
            `基于「${n}」的自然属性，呼应「${s}」的文化含义，产生...（待对方提供推导示例后完善）`;
    };

    // ===== 可拖动三角形 =====
    let triangleVertices = {
        '表现力': { x: 150, y: 30 },
        '便捷性': { x: 25, y: 235 },
        '性价比': { x: 275, y: 235 }
    };
    let draggingVertex = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

        window.drawTriangle = function() {
        const container = document.getElementById('triangle-svg');
        if(!container) return;
        let svg = container.querySelector('svg');
        if(!svg) {
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 300 260');
            svg.setAttribute('width', '300');
            svg.setAttribute('height', '260');
            container.appendChild(svg);
        }
        const v1 = triangleVertices['表现力'];
        const v2 = triangleVertices['便捷性'];
        const v3 = triangleVertices['性价比'];
        
        svg.innerHTML = `
            <polygon points="${v1.x},${v1.y} ${v2.x},${v2.y} ${v3.x},${v3.y}" fill="rgba(74,144,226,0.1)" stroke="var(--accent)" stroke-width="2"/>
            <text x="${v1.x}" y="${v1.y - 15}" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="bold">表现力</text>
            <text x="${v2.x - 15}" y="${v2.y + 20}" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="bold">便捷性</text>
            <text x="${v3.x + 15}" y="${v3.y + 20}" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="bold">性价比</text>
            <circle cx="${v1.x}" cy="${v1.y}" r="10" fill="var(--accent)" class="triangle-vertex" data-vertex="表现力" style="cursor:grab"/>
            <circle cx="${v2.x}" cy="${v2.y}" r="10" fill="var(--gold)" class="triangle-vertex" data-vertex="便捷性" style="cursor:grab"/>
            <circle cx="${v3.x}" cy="${v3.y}" r="10" fill="var(--text2)" class="triangle-vertex" data-vertex="性价比" style="cursor:grab"/>
        `;
        
        // 绑定拖动事件
        svg.querySelectorAll('.triangle-vertex').forEach(circle => {
            circle.addEventListener('mousedown', startDragVertex);
            circle.addEventListener('touchstart', startDragVertexTouch);
            circle.addEventListener('click', function() {
                if(!draggingVertex) toggleTriangleOption(this.dataset.vertex);
            });
        });
        
        document.addEventListener('mousemove', dragVertex);
        document.addEventListener('mouseup', endDragVertex);
        document.addEventListener('touchmove', dragVertexTouch);
        document.addEventListener('touchend', endDragVertex);
    }

    function startDragVertex(e) {
        draggingVertex = e.target.dataset.vertex;
        const rect = e.target.closest('svg').getBoundingClientRect();
        dragOffsetX = e.clientX - triangleVertices[draggingVertex].x;
        dragOffsetY = e.clientY - triangleVertices[draggingVertex].y;
        e.preventDefault();
    }
    
    function startDragVertexTouch(e) {
        draggingVertex = e.target.dataset.vertex;
        const touch = e.touches[0];
        dragOffsetX = touch.clientX - triangleVertices[draggingVertex].x;
        dragOffsetY = touch.clientY - triangleVertices[draggingVertex].y;
        e.preventDefault();
    }

    function dragVertex(e) {
        if(!draggingVertex) return;
        const svg = document.querySelector('#triangle-svg svg');
        const rect = svg.getBoundingClientRect();
        const scale = 300 / rect.width;
        triangleVertices[draggingVertex].x = Math.max(5, Math.min(295, (e.clientX - rect.left) * scale));
        triangleVertices[draggingVertex].y = Math.max(20, Math.min(250, (e.clientY - rect.top) * scale));
        drawTriangle();
    }
    
    function dragVertexTouch(e) {
        if(!draggingVertex) return;
        const touch = e.touches[0];
        const svg = document.querySelector('#triangle-svg svg');
        const rect = svg.getBoundingClientRect();
        const scale = 300 / rect.width;
        triangleVertices[draggingVertex].x = Math.max(5, Math.min(295, (touch.clientX - rect.left) * scale));
        triangleVertices[draggingVertex].y = Math.max(20, Math.min(250, (touch.clientY - rect.top) * scale));
        drawTriangle();
        e.preventDefault();
    }

       function endDragVertex() {
        setTimeout(() => { 
            draggingVertex = null;
            detectAbandonedVertex();
        }, 50);
    }

    function detectAbandonedVertex() {
        const v1 = triangleVertices['表现力'];
        const v2 = triangleVertices['便捷性'];
        const v3 = triangleVertices['性价比'];
        
        // 计算各顶点到对边的距离
        // 距离最小的顶点 = 被放弃的顶点（最不突出）
        const dist1 = distanceToLine(v1, v2, v3);
        const dist2 = distanceToLine(v2, v1, v3);
        const dist3 = distanceToLine(v3, v1, v2);
        
        const minDist = Math.min(dist1, dist2, dist3);
        let abandoned;
        if(minDist === dist1) abandoned = '表现力';
        else if(minDist === dist2) abandoned = '便捷性';
        else abandoned = '性价比';
        
        toggleTriangleOption(abandoned);
    }
    
    function distanceToLine(point, lineA, lineB) {
        const dx = lineB.x - lineA.x;
        const dy = lineB.y - lineA.y;
        const numerator = Math.abs(dy * point.x - dx * point.y + lineB.x * lineA.y - lineB.y * lineA.x);
        const denominator = Math.sqrt(dx * dx + dy * dy);
        return numerator / denominator;
    }
       window.toggleTriangleOption = function(option) {
        const btns = document.querySelectorAll('.triangle-btn');
        btns.forEach(btn => {
            const text = btn.textContent.replace('放弃','');
            if(text === option) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        const resultMap = {
            '表现力': '🔥 放弃表现力：保留便捷性与性价比。<br>施法效果量级较低，适用于常规战斗或日常用途，不可达到改变战场格局的程度。',
            '便捷性': '⏳ 放弃便捷性：保留表现力与性价比。<br>施法需要较长的准备时间、特定的环境条件或复杂的仪式流程。',
            '性价比': '💀 放弃性价比：保留表现力与便捷性。<br>施法代价极高昂，通常超出施法者自身能够承受的范围。账单可以后置，但必须最终偿付且不可逃避。'
        };
        document.getElementById('triangle-result').innerHTML = resultMap[option] || '';
        
        // 根据放弃的顶点调整三角形形状
        adjustTriangleShape(option);
    };

    function adjustTriangleShape(abandoned) {
        if(abandoned === '表现力') {
            // 表现力顶点拉低，三角形变扁
            triangleVertices['表现力'].x = 150;
            triangleVertices['表现力'].y = 120;
            triangleVertices['便捷性'].x = 30;
            triangleVertices['便捷性'].y = 235;
            triangleVertices['性价比'].x = 270;
            triangleVertices['性价比'].y = 235;
        } else if(abandoned === '便捷性') {
            // 便捷性顶点拉高，三角形变高
            triangleVertices['表现力'].x = 150;
            triangleVertices['表现力'].y = 25;
            triangleVertices['便捷性'].x = 80;
            triangleVertices['便捷性'].y = 160;
            triangleVertices['性价比'].x = 220;
            triangleVertices['性价比'].y = 160;
        } else if(abandoned === '性价比') {
            // 性价比顶点拉偏，三角形变斜
            triangleVertices['表现力'].x = 150;
            triangleVertices['表现力'].y = 30;
            triangleVertices['便捷性'].x = 80;
            triangleVertices['便捷性'].y = 220;
            triangleVertices['性价比'].x = 250;
            triangleVertices['性价比'].y = 180;
        }
        window.drawTriangle();
    }
    window.togglePyramidLevel = function(el, level) {
        document.querySelectorAll('.pyramid-level-box').forEach(b => b.classList.remove('active'));
        el.classList.add('active');
        const detailMap = {
            'narrative': `
                <strong>📜 叙事层</strong><br>
                <strong>职能：</strong>负责解释世界存在的第一因。涵盖宇宙起源、物理法则的确立、生命与死亡的初始定义。<br>
                <strong>权限：</strong>不受任何规则约束，但不可在创世后续干预世界运行。<br>
                <strong>叙事限制：</strong>不可作为角色出现，不可机械降神。其存在仅作为世界观逻辑的最终锚点。`,
            'rules': `
                <strong>⚖️ 规则层</strong><br>
                <strong>职能：</strong>维护宏观超自然体系的日常运转，分管特定领域，领域之间不得重叠，决策需在体系内互相制衡。<br>
                <strong>权限：</strong>力量极大，但并非无限。干预世界时受限于自身所管辖领域，不可越界。<br>
                <strong>行为特征：</strong>具备可被人类理解的人格、情感与欲望。可犯错、可受伤、可被欺骗。其干预必须留有可被凡人利用的漏洞。`,
            'action': `
                <strong>🌍 行动层</strong><br>
                <strong>职能：</strong>构成世界风土人情与民俗传说的基础单元。管辖范围限定于特定地理区域或特定社群。<br>
                <strong>权限：</strong>力量远弱于规则层，权能不超出所在物理区域的边界。<br>
                <strong>行为特征：</strong>个性鲜明，会与特定区域内的人类建立双向关系。其行为模式不需要遵守叙事层的体系化规则。`
        };
        document.getElementById('pyramid-detail').innerHTML = detailMap[level] || '';
    };

                 if(document.readyState === 'complete') {
        initMagicTools();
        populateVennPrototypeSelect();
        setTimeout(function() { window.drawTriangle(); }, 800);
    } else {
        window.addEventListener('load', () => {
            initMagicTools();
            populateVennPrototypeSelect();
            setTimeout(function() { window.drawTriangle(); }, 800);
        });
    }
        // ===== 导出图片功能 =====
       window.exportMagicToolImage = function() {
        const container = document.querySelector('.magic-tools-container');
        if(!container) { alert('未找到工具内容'); return; }
        
        html2canvas(container, {
            backgroundColor: null,
            scale: 2,
            useCORS: true
        }).then(canvas => {
            // 添加水印
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;
            
            ctx.save();
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.font = 'bold 28px Georgia, serif';
            ctx.textAlign = 'center';
            ctx.translate(width/2, height/2);
            ctx.rotate(-0.25);
            ctx.fillText('小红书5508697487@地月双尸', 0, -20);
            ctx.fillText('小红书26183246310@连城', 0, 20);
            ctx.restore();
            
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.font = '20px Georgia, serif';
            ctx.textAlign = 'left';
            ctx.fillText('小红书5508697487@地月双尸', 20, height - 30);
            ctx.textAlign = 'right';
            ctx.fillText('小红书26183246310@连城', width - 20, height - 30);
            
            const link = document.createElement('a');
            link.download = '魔法工具合集_' + Date.now() + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            alert('导出失败：' + err.message);
        });
    };
})();
