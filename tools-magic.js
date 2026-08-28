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
        const svg = document.querySelector('#triangle-svg svg');
        if(!svg) return;
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
        setTimeout(() => { draggingVertex = null; }, 50);
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
    };

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
})();
