// ========== 魔法工具模块 v2 ==========
(function() {
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
                <div class="magic-tool-section">
                    <h3>🔮 意象Venn图（泛灵论魔法）</h3>
                    <p class="magic-tool-desc">基于自然万物推导魔法属性。左侧填入自然性特征，右侧填入社会性含义，两者交叉生成魔法灵感。</p>
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
                                    <!-- 原型快速填充 -->
                <div style="margin-top:15px;padding-top:15px;border-top:1px solid var(--border)">
                    <label style="font-size:.8em;color:var(--text2);display:block;margin-bottom:6px">📚 泛灵魔法原型速查（点击原型查看详情）：</label>
                    <select id="archetypeSelect" onchange="showArchetypeDetail(this.value)" style="width:100%;padding:8px;background:var(--bg);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:.85em">
                        <option value="">-- 选择一个原型 --</option>
                    </select>
                </div>
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
                // 填充原型下拉框
        const archetypeSelect = document.getElementById('archetypeSelect');
        if(archetypeSelect && window.MAGIC_ARCHETYPES) {
            window.MAGIC_ARCHETYPES.forEach(a => {
                const opt = document.createElement('option');
                opt.value = a.id;
                opt.textContent = `${a.id}. ${a.name}`;
                archetypeSelect.appendChild(opt);
            });
        }
        toolsContainer.appendChild(magicContent);
    }

    window.switchMagicToolsTab = function(btn) {
        document.querySelectorAll('.tools-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tools-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tools-magic').classList.add('active');
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
        setTimeout(function() { window.drawTriangle(); }, 800);
    } else {
        window.addEventListener('load', () => {
            initMagicTools();
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
        // ===== 20条普适泛灵魔法原型 =====
    window.MAGIC_ARCHETYPES = [
        {
            id: 20,
            name: "超凡入圣的技艺/工艺",
            natural: ["生铁", "熟铁", "炭与钢的转化", "绘画颜料", "工具思维", "歌唱能力"],
            social: ["第一工匠", "技艺秘密传承", "口传歌诀", "北欧侏儒铁匠", "西非熔炉神", "中国李老君"],
            detail: "几乎必然与造物主或其神谱中的亲属相关。技艺秘密严格保守在血亲或师徒之间。几乎仅出现于冶金革命后的复杂文明。普遍使用口传歌诀/诗篇来对抗信息流失。"
        },
        {
            id: 19,
            name: "区域神/土地公/地缚灵",
            natural: ["千年橡树", "不融的雪山", "长时间使用的井"],
            social: ["土地庙祭祀圈", "城隍庙", "村落划界", "奠基宰牲", "开工仪式"],
            detail: "将特定地理空间神圣化。从古代城市奠基宰牲祭神，到今天装修开工斩鸡头烧黄纸，都是对区域守护灵的敬畏。"
        },
        {
            id: 18,
            name: "誓言/契约/Geas",
            natural: ["泥板文字", "金属镌刻", "盐", "听觉与发声"],
            social: ["公开立誓", "社会性死亡", "成文法雏形", "爱尔兰Geas"],
            detail: "公开立誓的仪式场景中，违约可能导致社会性死亡。在爱尔兰盖尔传说中，Geas既是祝福又是诅咒。"
        },
        {
            id: 17,
            name: "迷醉/情欲/欢宴之力",
            natural: ["葡萄发酵乙醇", "麦角碱", "曼陀罗", "毒蝇伞", "群体臆症"],
            social: ["萨满文化", "高纬度地区", "生理极限崇拜"],
            detail: "对生理极限状态的崇拜，主要存在于高纬度地区萨满文化之中。通过迷醉状态接触超自然。"
        },
        {
            id: 16,
            name: "丰饶仪式/聚宝仪式",
            natural: ["春耕秋收", "成长周期", "贵金属不锈"],
            social: ["播种-收获逻辑", "埋藏财物祈福", "聚宝盆", "许愿币"],
            detail: "在几乎一切社会都有分布。将播种-收获的经济逻辑投射到一切事物上——埋下什么就能收获什么，魔法即投资。"
        },
        {
            id: 15,
            name: "杀戮之舞/神打/出马",
            natural: ["无氧代谢", "肾上腺素", "痛阈提升"],
            social: ["集体附身仪式", "游神传统", "熊皮斗篷", "毛利哈卡战舞"],
            detail: "群体臆症的古典军事化运用。萨满文化圈战前的集体附身仪式、东亚的游神传统、北欧狂战士传说。"
        },
        {
            id: 14,
            name: "占卜/预兆/先知",
            natural: ["鸟群形状", "牛肠纹路", "龟甲裂缝", "骨片朝向"],
            social: ["商周卜甲", "罗马占卜", "占星术", "随机数即天意"],
            detail: "东商周，西罗马。将随机数视为天意或超自然所操纵的命运之揭示。"
        },
        {
            id: 13,
            name: "逢魔之刻/意外律",
            natural: ["日出日落", "山洞", "海岸", "门廊", "桥梁"],
            social: ["黄昏即逢魔", "成人礼", "门槛治疗", "天主教洗礼"],
            detail: "将社会空间和时间的交界线定义为穿透现实结构的特定魔法条件。黄昏即日本的逢魔之刻。"
        },
        {
            id: 12,
            name: "女巫魔药/天材地宝",
            natural: ["柳树皮", "罂粟汁液", "蒿草"],
            social: ["经验药理学", "灵性植物"],
            detail: "在有效成分被化学式定义命名之前，所有经验药理学的处理对象都是具有灵性的植物。"
        },
        {
            id: 11,
            name: "驱使兽群/化兽/德鲁伊",
            natural: ["狼群等级", "鸟群结构", "动物感官"],
            social: ["头牛头羊依赖", "动物母语", "猎物道歉仪式", "换皮者", "兽头神祇"],
            detail: "以人类之身运用兽类的本能优势。西伯利亚萨满的动物母语观念、印第安猎人的猎物道歉仪式。"
        },
        {
            id: 10,
            name: "月相与潮汐轮回",
            natural: ["月球公转", "潮汐涨落", "月经周期"],
            social: ["周期性重复崇拜", "自然节律"],
            detail: "全人类普适的对周期性重复的自然节律的崇拜和运用。"
        },
        {
            id: 9,
            name: "火之毁灭与扬升",
            natural: ["燃烧", "火焰颜色", "森林火灾", "烟尘上升"],
            social: ["祭祀用烟", "神的居所在天上"],
            detail: "火焚烧物体制造的烟是唯一一种将物质摧毁同时副产物向上飘至天空的物理现象。结合神的居所在天上，构成了最初的祭祀仪式。"
        },
        {
            id: 8,
            name: "水之涤净/水之孕育",
            natural: ["溶解性", "流动性", "反射成像", "无光缺氧"],
            social: ["洗礼", "骨灰撒河", "井泉通冥", "溺水者葬仪"],
            detail: "水通过浸泡来删除或覆盖既往状态。洗礼作为旧人死、新人活的仪式。"
        },
        {
            id: 7,
            name: "血缘之纽带/祖先之灵",
            natural: ["可见线条", "遗传相似性", "氏族结构"],
            social: ["宗族祭祀", "不可见的线", "祖先降灾", "贵族谱系"],
            detail: "血缘关系被视为不可见的线。宗族体系对祭祀共同祖先的建构，贵族谱系作为合法性来源。"
        },
        {
            id: 6,
            name: "梦境启示/出神",
            natural: ["快速眼动睡眠", "记忆重放", "感官剥夺幻觉"],
            social: ["灵魂外出", "彼岸世界", "神明启示"],
            detail: "做梦即是灵魂外出办事，可借此获得神明或命运的启示。"
        },
        {
            id: 5,
            name: "跨越生死界限/通灵",
            natural: ["磷火", "误认脸孔", "心理联想"],
            social: ["死者吐露秘密", "季节变化", "灾祸起源"],
            detail: "死者比生者多知道一件事——死后是什么样。生者相信死者可以吐露生者急需的秘密。"
        },
        {
            id: 4,
            name: "天象即神威",
            natural: ["雷暴", "日食", "月食", "彗星", "洪水"],
            social: ["神祇意志", "王权彰显", "威吓敌人"],
            detail: "天象即神祇在表达意志、发泄愤怒。古典文明通过解读这些巨响与强光来威吓敌人、彰显王权。"
        },
        {
            id: 3,
            name: "大地与母性生殖力",
            natural: ["植物生长", "土壤肥力", "尸体转化养分"],
            social: ["地母神原型", "顺产与丰收", "养分来自大地"],
            detail: "跨文化的地母神原型，用于解释流产/顺产和欠收/丰收。"
        },
        {
            id: 2,
            name: "灵魂/另一个自我",
            natural: ["名字", "倒影", "影子", "梦中行动"],
            social: ["踩影子禁忌", "烧名字纸", "肖像夺魂", "替身偶人", "真名号令"],
            detail: "踩影子、烧名字纸作为民俗禁忌。替身偶人作为第二身体的寄宿物。称呼真名即可号令本人。"
        },
        {
            id: 1,
            name: "存在/言灵/创世",
            natural: ["发声能力", "语言符号", "狼孩事件"],
            social: ["终极目的论", "神创论", "语言即本质"],
            detail: "人类对自身为何存在的终极目的论解释。将逻辑和语言所描述的单一对象视为现实本质。一切形式的古典神创论。"
        }
    ];
        // ===== 原型详情悬浮窗 =====
    window.showArchetypeDetail = function(id) {
        if(!id) return;
        const archetype = window.MAGIC_ARCHETYPES.find(a => a.id == id);
        if(!archetype) return;
        
        // 关闭旧悬浮窗
        const oldPopup = document.getElementById('archetypePopup');
        if(oldPopup) oldPopup.remove();
        
        // 创建悬浮窗
        const popup = document.createElement('div');
        popup.id = 'archetypePopup';
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--bg2);
            border: 2px solid var(--accent);
            border-radius: 12px;
            padding: 20px;
            z-index: 4000;
            max-width: 400px;
            width: 90%;
            max-height: 70vh;
            overflow-y: auto;
            box-shadow: 0 0 30px rgba(0,0,0,0.5);
        `;
        
        popup.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <h3 style="color:var(--accent);margin:0">${archetype.id}. ${archetype.name}</h3>
                <button onclick="closeArchetypePopup()" style="background:none;border:none;color:var(--text);font-size:1.3em;cursor:pointer">✕</button>
            </div>
            <p style="font-size:.85em;line-height:1.7;color:var(--text2);margin-bottom:12px">${archetype.detail}</p>
            <div style="margin-bottom:10px">
                <strong style="font-size:.8em;color:var(--accent)">🌿 自然性词汇：</strong>
                <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:5px">
                    ${archetype.natural.map(w => `<span style="padding:4px 10px;background:var(--bg3);border-radius:12px;font-size:.75em;cursor:pointer" onclick="addVennWordFromArchetype('natural','${w}')">${w}</span>`).join('')}
                </div>
            </div>
            <div style="margin-bottom:12px">
                <strong style="font-size:.8em;color:var(--gold)">🏛️ 社会性词汇：</strong>
                <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:5px">
                    ${archetype.social.map(w => `<span style="padding:4px 10px;background:var(--bg3);border-radius:12px;font-size:.75em;cursor:pointer" onclick="addVennWordFromArchetype('social','${w}')">${w}</span>`).join('')}
                </div>
            </div>
            <div style="display:flex;gap:8px;justify-content:center">
                <button class="btn btn-sm btn-primary" onclick="fillAllFromArchetype(${archetype.id})">📥 全部填入</button>
                <button class="btn btn-sm btn-secondary" onclick="closeArchetypePopup()">关闭</button>
            </div>
        `;
        
        document.body.appendChild(popup);
    };
    
    window.closeArchetypePopup = function() {
        const popup = document.getElementById('archetypePopup');
        if(popup) popup.remove();
    };
    
    window.addVennWordFromArchetype = function(type, word) {
        const list = document.getElementById('venn-' + type + '-list');
        if(!list) return;
        // 检查是否已存在
        const existing = [...list.querySelectorAll('li')].some(li => li.textContent === word);
        if(existing) return;
        const li = document.createElement('li');
        li.textContent = word;
        li.onclick = function() { this.classList.toggle('selected'); };
        list.appendChild(li);
    };
    
    window.fillAllFromArchetype = function(id) {
        const archetype = window.MAGIC_ARCHETYPES.find(a => a.id == id);
        if(!archetype) return;
        archetype.natural.forEach(w => addVennWordFromArchetype('natural', w));
        archetype.social.forEach(w => addVennWordFromArchetype('social', w));
        closeArchetypePopup();
        showToast('已填入词汇');
    };
})();
