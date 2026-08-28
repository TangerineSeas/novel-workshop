// ========== 魔法工具模块 ==========
(function() {
    // 等主程序加载后初始化
    function initMagicTools() {
        // 如果工具页存在，动态添加子标签
        const toolsTabs = document.querySelector('.tools-tabs');
        if(!toolsTabs) return;
        
        // 添加魔法工具标签
        const magicTab = document.createElement('button');
        magicTab.className = 'tools-tab';
        magicTab.textContent = '🔮 魔法工具';
        magicTab.onclick = function() { switchMagicToolsTab(this); };
        toolsTabs.appendChild(magicTab);

        // 创建魔法工具内容容器
        const toolsContainer = document.getElementById('page-tools').querySelector('.page-container');
        const magicContent = document.createElement('div');
        magicContent.id = 'tools-magic';
        magicContent.className = 'tools-content';
        magicContent.innerHTML = `
            <div class="magic-tools-container">
                <div class="magic-tool-section" id="magic-venn-section">
                    <h3>🔮 意象Venn图（泛灵论魔法）</h3>
                    <div class="venn-container">
                        <div class="venn-column">
                            <h4>🌿 自然性</h4>
                            <div class="venn-input-row">
                                <input class="form-input" id="venn-natural-input" placeholder="添加自然性词汇">
                                <button class="btn btn-sm btn-primary" onclick="addVennWord('natural')">+</button>
                            </div>
                            <ul class="venn-list" id="venn-natural-list"></ul>
                        </div>
                        <div class="venn-column">
                            <h4>🏛️ 社会性</h4>
                            <div class="venn-input-row">
                                <input class="form-input" id="venn-social-input" placeholder="添加社会性词汇">
                                <button class="btn btn-sm btn-primary" onclick="addVennWord('social')">+</button>
                            </div>
                            <ul class="venn-list" id="venn-social-list"></ul>
                        </div>
                    </div>
                    <div class="btn-row">
                        <button class="btn btn-sm btn-primary" onclick="generateVennInspiration()">🎲 随机组合推导</button>
                    </div>
                    <div class="venn-result" id="venn-result">点击左侧和右侧词汇后，或点击随机组合生成魔法灵感</div>
                </div>

                <div class="magic-tool-section" id="magic-triangle-section">
                    <h3>📐 不可能三角（唯能论魔法）</h3>
                    <div class="triangle-container">
                        <div class="triangle-svg" id="triangle-svg"></div>
                        <div class="triangle-options">
                            <button class="triangle-btn" onclick="toggleTriangleOption('表现力')">表现力</button>
                            <button class="triangle-btn" onclick="toggleTriangleOption('便捷性')">便捷性</button>
                            <button class="triangle-btn" onclick="toggleTriangleOption('性价比')">性价比</button>
                        </div>
                        <div id="triangle-result" style="margin-top:10px;font-size:.85em;color:var(--text2)">点击顶点查看放弃该角的效果</div>
                    </div>
                </div>

                <div class="magic-tool-section" id="magic-pyramid-section">
                    <h3>🏛️ 金字塔（世界观力量层次）</h3>
                    <div class="pyramid-container">
                        <div class="pyramid-level" onclick="togglePyramidLevel(this)">
                            <h4>第一层：叙事层</h4>
                            <p>负责解释世界存在的第一因。不可作为角色出现，不可机械降神。</p>
                        </div>
                        <div class="pyramid-level" onclick="togglePyramidLevel(this)">
                            <h4>第二层：规则层</h4>
                            <p>维护宏观超自然体系运转，分管特定领域，可被人格化。</p>
                        </div>
                        <div class="pyramid-level" onclick="togglePyramidLevel(this)">
                            <h4>第三层：行动层</h4>
                            <p>构成世界风土人情的基础单元，限定于特定区域。</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        toolsContainer.appendChild(magicContent);
    }

    // 切换魔法工具标签
    window.switchMagicToolsTab = function(btn) {
        document.querySelectorAll('.tools-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tools-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tools-magic').classList.add('active');
    };

    // Venn图：添加词汇
    window.addVennWord = function(type) {
        const input = document.getElementById('venn-' + type + '-input');
        const list = document.getElementById('venn-' + type + '-list');
        const word = input.value.trim();
        if(!word) return;
        const li = document.createElement('li');
        li.textContent = word;
        li.onclick = function() {
            this.classList.toggle('selected');
        };
        list.appendChild(li);
        input.value = '';
    };

    // Venn图：随机组合推导
    window.generateVennInspiration = function() {
        const naturalWords = [...document.querySelectorAll('#venn-natural-list li')].map(li => li.textContent);
        const socialWords = [...document.querySelectorAll('#venn-social-list li')].map(li => li.textContent);
        if(naturalWords.length === 0 || socialWords.length === 0) {
            alert('请先在两侧添加词汇');
            return;
        }
        const n = naturalWords[Math.floor(Math.random() * naturalWords.length)];
        const s = socialWords[Math.floor(Math.random() * socialWords.length)];
        document.getElementById('venn-result').textContent = `${n} + ${s} = 灵感：...（待完善）`;
    };

    // 不可能三角：点击顶点
    window.toggleTriangleOption = function(option) {
        const btns = document.querySelectorAll('.triangle-btn');
        btns.forEach(btn => {
            if(btn.textContent === option) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        const resultMap = {
            '表现力': '放弃表现力：保留便捷性与性价比，施法效果量级较低，适用于常规战斗或日常用途。',
            '便捷性': '放弃便捷性：保留表现力与性价比，施法需要较长准备时间、特定环境或复杂仪式。',
            '性价比': '放弃性价比：保留表现力与便捷性，施法代价极高，但账单最终必须偿付。'
        };
        document.getElementById('triangle-result').textContent = resultMap[option] || '';
    };

    // 金字塔：展开/收起
    window.togglePyramidLevel = function(el) {
        el.classList.toggle('active');
    };

    // 页面加载后初始化
    if(document.readyState === 'complete') {
        initMagicTools();
    } else {
        window.addEventListener('load', initMagicTools);
    }
})();
