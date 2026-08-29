const KNOWLEDGE_DATA = [
  // ========== 一、封建制度与社会结构 ==========
  {
    category: "封建制度与社会结构",
    subcategory: "社会/政治",
    title: "封建制度",
    content: "封建制度是中世纪欧洲以契约精神为核心的社会等级制度，混合了继承法、军事单位和行政区划的功能，将国土分割成一个个小型区域。国王将土地分封给贵族（封臣），贵族向国王宣誓效忠并提供军事服务；封臣再将土地分给骑士，骑士向封臣效忠；最底层是农奴，耕种土地并缴纳租税。该制度最先由中欧的法兰克王国开创，后扩散至欧洲全体基督教国家，14世纪开始逐渐瓦解。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "社会/阶级",
    title: "三等级社会",
    content: "大多数中世纪的西方思想家将社会划分为三个基本阶级：圣职者（教士）、贵族和平民。平民主要是乡村农民和工匠，约占总人口的98%；城镇居民数量虽在增长，但从未超过总人口的10%。这三个等级各司其职：教士负责祈祷与精神指引，贵族负责战斗与统治，平民负责劳作与供养。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "经济/农业",
    title: "庄园制度",
    content: "庄园是中世纪土地持有的基本单位，包括农民租户持有的耕地和庄园主的领地两个组成部分。庄园通常自给自足，内部设有耕地、牧场、森林、磨坊、面包房和铁匠铺等设施。领主居住在庄园中心的宅邸或城堡中，农奴在庄园内耕作并履行徭役义务。",
    references: ["Gibbs, S. Lordship, State Formation and Local Authority in Late Medieval and Early Modern England. Cambridge University Press, 2023."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "社会/阶级",
    title: "农奴制",
    content: "随着教会禁止奴役同教教徒，奴隶制逐渐式微。到11世纪末，一种新的依附形式——农奴制取代了奴隶制。与奴隶不同，农奴具有行为能力，其世袭地位由与领主达成的协议规定。农奴的行动自由通常受到限制，需要提供徭役，但他们在法律上享有一定权利，且不能被随意买卖。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "社会/法律",
    title: "长子继承制",
    content: "中世纪贵族通过采用严格的继承习俗来稳定其地位，其中最重要的是长子继承制。该制度规定只有长子有权继承家族的全部土地和头衔，其他子嗣则需自谋出路——或进入教会成为教士，或成为骑士为其他领主效劳，或通过婚姻联姻获取土地。这一制度确保了贵族领地不被分割，维持了家族的长期稳定。",
    references: ["Davies, R.R. Lords and Lordship in the British Isles in the Late Middle Ages. Oxford University Press, 2009."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "社会/阶级",
    title: "贵族流动性",
    content: "中世纪贵族从来不是一个封闭的群体。国王可以提拔平民进入贵族阶层，富有的平民可以通过与贵族家庭联姻而跻身贵族行列；反之，贫困的贵族也可能因财务破产而失去其地位和头衔。这种流动性使得社会阶层虽相对稳定，但并非完全固化。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "军事/社会",
    title: "骑士制度",
    content: "骑士是欧洲中世纪最低阶的贵族阶层。骑士头衔来自领主的册封，骑士除了能获得自己的封地之外，也必须为所效忠的领主作战，战时须自备武器与马匹。骑士制度源于中世纪加洛林王朝的法兰克王国，后逐渐推行到欧洲各国。成为一名骑士需要经过侍童、侍从到骑士的长期训练和培养，册封仪式通常庄重而富有宗教色彩。",
    references: ["Keen, M. Chivalry. Yale University Press, 1984."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "军事/装备",
    title: "骑士的武器装备",
    content: "中世纪骑士大都以长枪作为主要武器，刀剑为辅助武器。11至13世纪的武装剑（骑士剑）长约80至90公分；14至16世纪则出现了长度约130公分左右的长剑或手半剑。此外，骑士还配备短剑作为近身格斗的备用武器。骑士的装备还包括锁子甲、板甲、盾牌和头盔等全套防护用具，全套装备价值不菲。",
    references: ["DeVries, K. & Smith, R.D. Medieval Weapons: An Illustrated History of Their Impact. ABC-CLIO, 2007."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "军事/兵种",
    title: "重骑兵",
    content: "重骑兵是中世纪军队中的精英力量。在卡洛林王朝早期，步兵和轻骑兵的重要性开始下降，精英重骑兵的地位不断增强。随着重装骑兵的发展，自由战士阶层分裂为两组：那些能够自备马匹的骑士被纳入传统的贵族阶层，其他人则被吸收到农民中。重骑兵身披重甲、手持长枪，在战场上具有强大的冲击力。",
    references: ["Keen, M. Chivalry. Yale University Press, 1984."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "军事/组织",
    title: "封建军队的构成",
    content: "封建军队通常由核心的精锐骑士及其家臣部队组成。骑士有义务在领主召唤时携带一定数量的武装人员参战，这些人包括侍从、弓箭手和步兵。针对自由民众的征兵制逐渐式微，盎格鲁-撒克逊的英格兰是例外，那里的军队仍由地区征召组成。中世纪军队的规模通常不大，一场战役的参战人数往往在数千至数万人之间。",
    references: ["Keen, M. Nobles, Knights, and Men-at-Arms in the Middle Ages. Hambledon Press, 1996."]
  },
  {
    category: "封建制度与社会结构",
    subcategory: "军事/宗教",
    title: "十字军",
    content: "十字军是中世纪由教宗号召、西欧基督教王国发动的针对“异教徒”的一系列军事远征。第一次十字军东征始于1095年，目标是收复耶路撒冷。参加十字军的骑士和士兵通常会在盔甲上佩戴十字标志以表明身份。十字军东征持续了近两百年，深刻影响了欧洲与中东的政治、经济和文化交流。",
    references: ["Keen, M. Chivalry. Yale University Press, 1984."]
  },
  // ========== 二、城堡与建筑 ==========
  {
    category: "城堡与建筑",
    subcategory: "建筑/军事",
    title: "城堡",
    content: "城堡是中世纪欧洲、中东地区、北非、印度北部和日本的一种军事和生活建筑，集合了要塞和宫殿两种功能，专指“自给自足的领主私人武装住所”。城堡最初起源于9至10世纪的欧洲，当时卡洛林王朝的倒台导致领土分属于不同的领主和亲王。城堡被贵族用来控制周围邻近的土地，作为发动袭击和防御对敌的基地。",
    references: ["Liddiard, R. (ed.) Late Medieval Castles. Boydell & Brewer, 2016."]
  },
  {
    category: "城堡与建筑",
    subcategory: "建筑/军事",
    title: "土岗-城廓式城堡",
    content: "土岗-城廓式城堡是一种中世纪早期欧洲以土木结构为主的防御性建筑。它由一个中心土岗（motte）和一个环绕的庭院或城廓（bailey）组成。土岗顶部通常建有木制的塔楼供领主居住，城廓内则有士兵的营房、马厩、铁匠铺等附属建筑。这种城堡建筑技术和花费要求较低，是早期城堡的典型形式，后来逐渐被石制城堡所取代。",
    references: ["Liddiard, R. (ed.) Late Medieval Castles. Boydell & Brewer, 2016."]
  },
  {
    category: "城堡与建筑",
    subcategory: "建筑/防御",
    title: "城堡的防御工事",
    content: "城堡一般建有城墙和垛口等防御性工事。早期的城堡多数利用自然条件（如河流、山丘、悬崖）进行防御，只有中央城楼，缺乏塔楼和垛口。12世纪晚期至13世纪早期，人们开始对城堡防御进行科学研究，强调侧面火力，开始在城堡中设置大量的塔楼。新的城堡常呈多边形，拥有一套可以同时集中火力的防御工事。",
    references: ["Viollet-le-Duc, E.E. Castles and Warfare in the Middle Ages. Dover Publications."]
  },
  {
    category: "城堡与建筑",
    subcategory: "建筑/社会",
    title: "城堡的功能",
    content: "除了军事用途外，城堡还作为行政管理的中心和权力的象征而存在。城镇中的城堡常常用于控制当地百姓及重要的通行路线；乡下的城堡则常常位于对周边群落生活十分关键的自然或建筑设施附近，例如磨坊和肥沃的土地。城堡是领主统治的核心，也是司法裁判和税收征收的中心场所。",
    references: ["Liddiard, R. (ed.) Late Medieval Castles. Boydell & Brewer, 2016."]
  },
  {
    category: "城堡与建筑",
    subcategory: "建筑/军事",
    title: "要塞",
    content: "要塞是中世纪的一种大型防御工事，与城堡不同，要塞主要是城镇的公共防御设施，而非领主的私人住所。中世纪时城堡或城市城墙的防御力最关键的因素是高度。15世纪火炮引入欧洲后，城墙的高度优势不再，要塞建筑开始演化。欧洲从14世纪上半叶开始自己制造火炮，城堡上的木结构和塔楼被逐步拆除或改造。",
    references: ["Liddiard, R. (ed.) Late Medieval Castles. Boydell & Brewer, 2016."]
  },
  {
    category: "城堡与建筑",
    subcategory: "建筑/艺术",
    title: "哥特式建筑",
    content: "哥特式建筑是一种兴盛于欧洲中世纪高峰与末期的建筑风格，由罗曼式建筑发展而来。其整体风格为高耸削瘦，以尖肋拱顶、飞扶壁、大面积的彩色玻璃窗为特征。哥特式建筑最典型的代表是大教堂，如巴黎圣母院、沙特尔大教堂等。这种建筑风格旨在营造一种向上飞升、接近上帝的神圣氛围。",
    references: ["Stalley, R. Early Medieval Architecture. Oxford University Press, 1999."]
  },
  {
    category: "城堡与建筑",
    subcategory: "城市/规划",
    title: "中世纪城镇布局",
    content: "中世纪城镇的布局通常以教堂或城堡为中心向四周辐射。街道狭窄而曲折，房屋密集排列，剩余的空间被小块菜园和牲畜圈占据。这种布局既是为了在有限的城墙范围内容纳尽可能多的居民，也具有一定的防御功能——狭窄曲折的街道能够延缓入侵者的推进。城镇周围通常建有城墙和城门，城门在夜间关闭。",
    references: ["Mundy, J.H. & Riesenberg, P. The Medieval Town. Van Nostrand, 1958."]
  },
  // ========== 三、日常生活与服饰 ==========
  {
    category: "日常生活与服饰",
    subcategory: "服饰/社会",
    title: "中世纪服饰的阶层差异",
    content: "在中世纪，不同阶层的服饰款式基本相同，重要的差异体现在装饰、材料的种类与精细程度以及裁剪工艺上。富裕阶层使用丝绸和精细亚麻等面料，下层阶级则使用羊毛。服装的等级差别主要表现在衣服质地和产地不同：贵族穿细麻布，穿意大利产的羊毛斗篷，冬天有貂皮等贵重毛皮。",
    references: ["Netherton, R. & Owen-Crocker, G.R. (eds.) Medieval Clothing and Textiles. Boydell Press, 2005."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "服饰/日常",
    title: "中世纪男性服饰",
    content: "中世纪男性通常穿着束腰外衣、衬毛外套、马裤和一顶帽子，内衣则是粗布制成的衬衣和长内裤。农民男性则穿着紧身裤和束腰外衣。在早期中世纪，男女服装的差异不大，两者都穿多层服装。14世纪末期之后，男性服装的变化比女性服装快得多。",
    references: ["Netherton, R. & Owen-Crocker, G.R. (eds.) Medieval Clothing and Textiles. Boydell Press, 2005."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "服饰/日常",
    title: "中世纪女性服饰",
    content: "中世纪女性通常穿着束腰外衣，女性农民则穿长袍和无袖束腰外衣，并用头巾遮盖头发。1300年左右，富裕女性的服装更加贴身和精致。女性服装通常包括衬裙、长袜、紧身胸衣、长裙、腰带、斗篷、兜帽和软帽等。上层女性的服装面料更加多样，装饰更加繁复。",
    references: ["Netherton, R. & Owen-Crocker, G.R. (eds.) Medieval Clothing and Textiles. Boydell Press, 2005."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "服饰/法律",
    title: "节俭法令",
    content: "中世纪欧洲通过节俭法令（Sumptuary Laws）来规范不同社会等级可以穿着的颜色和款式。在多数地区，只有贵族才能穿鲜红色布料，某些紫色布料也受到限制。这些法令旨在维持社会等级的视觉区分，防止下层民众通过穿着奢华服装来模糊阶级界限，同时也限制中产阶级和穷人在衣服上的花费。",
    references: ["Netherton, R. & Owen-Crocker, G.R. (eds.) Medieval Clothing and Textiles. Boydell Press, 2005."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "饮食/日常",
    title: "中世纪农民的饮食",
    content: "中世纪农民的主食是谷物，包括面包和粥。蛋白质来源主要是豆类和鸡蛋。农民的饮食以黑麦、燕麦和大麦为主；小麦较为昂贵，通常只有富裕阶层才吃得起。肉类在农民的餐桌上不常见，腌肉和咸鱼是偶尔的改善。农民还会饮用自酿的麦芽酒或啤酒。",
    references: ["Adamson, M.W. Food in Medieval Times. Greenwood Press, 2004."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "饮食/日常",
    title: "中世纪贵族的饮食",
    content: "中世纪贵族享用白面包、烤肉及进口香料。贵族餐桌上常见各种肉类——包括牛肉、羊肉、猪肉、禽肉，甚至天鹅、孔雀、鹌鹑等野味。香料如胡椒、肉桂、藏红花等是彰显身份的重要标志，价格昂贵。贵族宴席通常多道菜肴，讲究排场和礼仪。葡萄酒是贵族的主要饮品。",
    references: ["Adamson, M.W. Food in Medieval Times. Greenwood Press, 2004."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "饮食/宗教",
    title: "中世纪的斋戒与鱼类消费",
    content: "基督教会通过规定大量的斋戒日来推动鱼类消费——中世纪全年约有150个斋戒日。在斋戒日，信徒不得食用肉类，只能吃鱼、蔬菜和谷物。这一宗教规定促进了鱼类贸易和淡水养鱼业的发展，修道院常常建有鱼塘。斋戒制度深刻地影响了中世纪欧洲的饮食结构和经济模式。",
    references: ["Adamson, M.W. Food in Medieval Times. Greenwood Press, 2004."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "生活/日常",
    title: "中世纪的家具与居住",
    content: "大多数中世纪农民睡在稻草上。一个农民家庭中最像样的家具可能只有一张桌子和一个凳子。房屋通常为木结构，屋顶覆以茅草，地面为夯实的泥土。富裕阶层和贵族的住宅则有木制床架、衣柜、挂毯等更为舒适的家具陈设，墙壁上常挂有挂毯以抵御寒冷。",
    references: ["Mundy, J.H. & Riesenberg, P. The Medieval Town. Van Nostrand, 1958."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "生活/日常",
    title: "中世纪农民的休闲",
    content: "农民的娱乐活动包括球类游戏、摔跤，以及饮酒。啤酒是北欧地区最普遍的饮品。村庄节庆日（如守护圣人的节日）是农民难得的休息和娱乐时间，届时会有集市、舞蹈和各类比赛。贵族的娱乐则包括象棋（约11世纪从伊斯兰世界传入）、狩猎和马上比武等。",
    references: ["Cosman, M.P. Medieval Holidays and Festivals: A Calendar of Celebrations. Piatkus, 1984."]
  },
  {
    category: "日常生活与服饰",
    subcategory: "社会/性别",
    title: "中世纪妇女的角色",
    content: "按照当时的官方要求，妇女必须服从男性，无论是父亲、丈夫还是其他亲属。妇女的工作通常包括家务或其他家庭任务，如照顾儿童。农民妇女可以通过在家纺纱或酿酒来增加家庭收入，在收获季节也需在田间劳作。城镇妇女可以从事贸易，但通常是通过丈夫的权利，且不总是被允许培训学徒。贵族妇女可以在缺乏男性继承人时继承土地。",
    references: ["Power, E. Medieval Women. Cambridge University Press, 1975."]
  },
    // ========== 四、农业与乡村 ==========
  {
    category: "农业与乡村",
    subcategory: "农业/耕作",
    title: "三圃制",
    content: "三圃制是中世纪欧洲庄园实行的轮耕制度，又称“三田制”或“三区轮作制”。农民把土地分成三部分进行轮作：第一块地种植冬小麦或黑麦（秋播），第二块地种植大麦（春播），第三块地休耕。隔年三块土地上的作物轮换，三年为一个周期。三圃制将土地的利用率从二分之一提高到三分之二。",
    references: ["Rowley, T. The Origins of Open Field Agriculture. Croom Helm, 1981."]
  },
  {
    category: "农业与乡村",
    subcategory: "农业/经济",
    title: "三圃制的历史影响",
    content: "中世纪前期（约11世纪），欧洲利用三圃制提高了土地效率，使用重犁进一步深耕细作，再加上马轭和多匹马合拉工具的发明，使粮食产量巨大增长。三圃制的推广使农业产出大大增加，农民有更多农作物可出售。其进一步作用是，在中世纪盛期三四百年内，欧洲人口增长了三到四倍。",
    references: ["Rowley, T. The Origins of Open Field Agriculture. Croom Helm, 1981."]
  },
  {
    category: "农业与乡村",
    subcategory: "农业/土地",
    title: "敞地制",
    content: "敞地制是封建庄园经济的基础性土地制度。在这种制度下，领主自营地、教堂保有地与农民份地均以条田形式交错分布。耕地被划分为宽10至20码、长220码的条田，每个农民在庄园的不同区域拥有若干分散的条田，而非集中连片的土地。这种分散的条田分配方式旨在确保每个农户都能分到不同质量的土地。",
    references: ["Gray, H.L. English Field Systems. Harvard University Press, 1915."]
  },
  {
    category: "农业与乡村",
    subcategory: "农业/工具",
    title: "重犁",
    content: "重犁是中世纪农业革命的关键技术之一。与古代轻犁不同，重犁带有轮子和犁铧，能够翻耕北欧和西欧厚重的黏土土壤。重犁的使用需要多匹马合力牵引，马轭的发明使得马匹能够更有效地拉犁。重犁的推广使得以前难以耕种的肥沃谷地得以开垦，极大地扩展了可耕地面积。",
    references: ["White, L. Medieval Technology and Social Change. Oxford University Press, 1962."]
  },
  {
    category: "农业与乡村",
    subcategory: "聚落/乡村",
    title: "中世纪村庄的选址与布局",
    content: "中世纪村庄是有组织的农业社区，通常位于教区或乡镇的中心位置。村庄共享耕地、草甸和林地等资源。村庄的布局形式多种多样——有的是沿主街两侧排列的规划型村庄，房屋（tofts）面向街道，后院（crofts）延伸至后方，通常还有一条后巷连接各户的后院。",
    references: ["Rowley, T. The Origins of Open Field Agriculture. Croom Helm, 1981."]
  },
  {
    category: "农业与乡村",
    subcategory: "农业/土地",
    title: "条田分配",
    content: "庄园的大片耕地被细分为条状地块（称为“lands”），分配给各个佃户耕种。每个农户拥有的条田分散在庄园的不同区域，而不是集中在一起。这种分配方式既是公平原则的体现——确保每户都能分到好地和差地——也便于集体耕作制度的实施。条田之间通常以田埂或沟渠为界。",
    references: ["Gray, H.L. English Field Systems. Harvard University Press, 1915."]
  },
  {
    category: "农业与乡村",
    subcategory: "农业/社区",
    title: "乡村共同资源管理",
    content: "中世纪农民在乡村日常生活中保持自治状态。他们挑选合适的人来管理田里的牛、规范挽畜的使用、决定收获过程的组织管理、组织搜集木柴和干草等。村庄的公共牧场、林地和水源由全体村民共同使用和管理，形成了复杂的习惯法和共同决策机制。这种自治传统是中世纪乡村社会的重要特征。",
    references: ["Gibbs, S. Lordship, State Formation and Local Authority in Late Medieval and Early Modern England. Cambridge University Press, 2023."]
  },
  {
    category: "农业与乡村",
    subcategory: "农业/设施",
    title: "磨坊",
    content: "磨坊是中世纪庄园不可或缺的设施，通常位于河边或溪流旁以利用水力。领主拥有磨坊的专营权，农奴必须将谷物送到领主的磨坊碾磨并缴纳磨坊税。磨坊不仅是粮食加工的中心，也是村民聚集交流的场所。除了水磨坊，风力磨坊在风能丰富的地区也很常见。",
    references: ["Holt, R. The Mills of Medieval England. Blackwell, 1988."]
  },
  // ========== 五、商业与贸易 ==========
  {
    category: "商业与贸易",
    subcategory: "经济/商业",
    title: "行会",
    content: "行会（Guild），学术界又音译为基尔特，特指欧洲中世纪至早期现代商人团体的历史专有名词。行会分为商贾组织与手工业组织。手工业者或商人在商品经济相当发展的条件下，为限制竞争、规定生产或业务范围、解决业主困难和保护同行利益而联合组成。",
    references: ["Epstein, S.A. Wage Labor & Guilds in Medieval Europe. University of North Carolina Press, 1991."]
  },
  {
    category: "商业与贸易",
    subcategory: "经济/商业",
    title: "商人行会",
    content: "商人行会始于9世纪，12世纪与13世纪势力很大。这种组合商因经济目的而组成行会，在11世纪中叶开始出现，主要目的是维持成员之间的利益获取。商人行会通常控制着城镇的贸易，制定市场规则，只有行会成员才能进入当地市场进行交易。它们还负责维护商路安全、调解商业纠纷。",
    references: ["Epstein, S.A. Wage Labor & Guilds in Medieval Europe. University of North Carolina Press, 1991."]
  },
  {
    category: "商业与贸易",
    subcategory: "经济/商业",
    title: "手工业行会",
    content: "手工业行会是由熟练工匠组成的职业组织。行会制定产品质量标准、职业培训规范以及定价标准。手工业行会建立了从学徒、工匠到师傅的晋升体系——学徒需要经过多年的学习和考核才能成为工匠，工匠需要提交“杰作”并通过考核才能成为师傅并开设自己的工坊。这一制度确保了技艺的传承和产品质量的稳定。",
    references: ["Epstein, S.A. Wage Labor & Guilds in Medieval Europe. University of North Carolina Press, 1991."]
  },
  {
    category: "商业与贸易",
    subcategory: "经济/贸易",
    title: "中世纪的商业革命",
    content: "人口增长、更高的农业生产力和相对的政治稳定为11世纪中世纪的商业革命奠定了基础。有闲钱的人开始在遥远的市场投资盐、胡椒和丝绸等商品。不断增长的贸易带来了处理货币的新方法——欧洲再次铸造金币，最早出现在佛罗伦萨和热那亚。汇票也出现了，便于资金的简易传输。",
    references: ["Lopez, R.S. The Commercial Revolution of the Middle Ages, 950-1350. Cambridge University Press, 1976."]
  },
  {
    category: "商业与贸易",
    subcategory: "经济/商业",
    title: "委托贸易与合伙经营",
    content: "中世纪出现了新形式的商业合同。风险在被称为“委托”或“伙伴关系”的合伙企业的框架内分担。在这种安排下，一方提供资金，另一方负责航行和贸易，利润按约定比例分配，风险也由双方共同承担。这种制度促进了远程贸易的发展，降低了单个商人的风险。",
    references: ["Lopez, R.S. The Commercial Revolution of the Middle Ages, 950-1350. Cambridge University Press, 1976."]
  },
  {
    category: "商业与贸易",
    subcategory: "经济/货币",
    title: "中世纪的货币体系",
    content: "中世纪早期以君士坦丁堡金币索里达为主流通货币。7世纪后，银便士便成为核心货币，并确立了镑-先令-便士体系。1镑等于20先令，1先令等于12便士。多种类型的硬币同时流通，换钱商简化了本地和外国商人之间的交易。借贷也可以与换钱商协商，这导致了信贷机构的出现，后来发展为银行。",
    references: ["Grierson, P. & Blackburn, M. Medieval European Coinage. Cambridge University Press, 1986."]
  },
  {
    category: "商业与贸易",
    subcategory: "经济/货币",
    title: "达克特",
    content: "达克特（Ducat）是欧洲从中世纪后期至20世纪期间作为流通货币使用的金币或银币。其地位等同于中世纪的拜占庭超纯金币，或是现代的英镑和美元。达克特最早于13世纪在威尼斯铸造，因其成色稳定而成为国际贸易中广泛接受的硬通货，流通范围遍及整个欧洲。",
    references: ["Grierson, P. & Blackburn, M. Medieval European Coinage. Cambridge University Press, 1986."]
  },
  {
    category: "商业与贸易",
    subcategory: "城市/社会",
    title: "中世纪的城市化",
    content: "随着新城镇从地方商业中心发展起来，经济增长带来了新一波的城市化。国王和贵族大多支持这一进程，希望增加税收收入。中世纪城镇通常享有特许状（Charter），赋予城镇居民一定的自治权利——包括成立自己的市议会、设立市场、征收本地税收等。城镇成为商业、手工业和文化的中心。",
    references: ["Mundy, J.H. & Riesenberg, P. The Medieval Town. Van Nostrand, 1958."]
  },
  {
    category: "商业与贸易",
    subcategory: "经济/贸易",
    title: "羊毛贸易",
    content: "羊毛是中世纪欧洲最重要的贸易商品之一。英格兰尤其以优质羊毛闻名，羊毛出口成为英格兰经济的重要支柱。新出现的西多会和奥古斯丁修会成为了北方羊毛贸易的重要参与者。羊毛从英格兰等地运往佛兰德斯和意大利的纺织中心，加工成呢绒后再销往全欧洲。这一贸易链条催生了大量的财富和城市繁荣。",
    references: ["Lopez, R.S. The Commercial Revolution of the Middle Ages, 950-1350. Cambridge University Press, 1976."]
  },
  // ========== 六、宗教与教会 ==========
  {
    category: "宗教与教会",
    subcategory: "宗教/教会",
    title: "修道院",
    content: "修道院是一类基督教修道场所，由男修道院长或女修道院长管理的隐修院教堂或以大教堂为中心的建筑群。大修道院一般包括一整套建筑和土地，以适应自给自足的教会组织的需要，用于宗教活动、工作以及修士和修女的居住。修道院是中世纪文化、教育和知识的保存中心。",
    references: ["Melville, G. The World of Medieval Monasticism. Cistercian Publications, 2016."]
  },
  {
    category: "宗教与教会",
    subcategory: "宗教/修会",
    title: "本笃会",
    content: "本笃会（又译为本尼狄克派），亦被称为“黑修士”（得名于修会僧袍的颜色），是天主教的一个隐修会。由意大利人圣本笃于529年在意大利中部卡西诺山所创。其规章（《本笃会规》）成为西欧和北欧隐修的主要规章。本笃会强调“祈祷与劳动”（Ora et Labora），修士们既进行宗教祈祷，也从事农业生产和抄写经书等体力与智力劳动。",
    references: ["Melville, G. The World of Medieval Monasticism. Cistercian Publications, 2016."]
  },
  {
    category: "宗教与教会",
    subcategory: "宗教/生活",
    title: "修道院的日常生活",
    content: "修道士的日常生活以祈祷和劳动为核心。黎明之前修道士伴着钟声起床，前往教堂做夜祷，整个夜祷持续到早上，以晨祷结束。祷告时间结束之后，修道士开始不间断的工作直到修道院弥撒的开始，弥撒是整个宗教仪式的核心和修道院生活的高潮部分。正如圣本笃所说：“一切劳动都是通向祈祷的”。修道院从农业到印刷、从医疗到木工，所有工作都由修士分工完成。",
    references: ["Melville, G. The World of Medieval Monasticism. Cistercian Publications, 2016."]
  },
  {
    category: "宗教与教会",
    subcategory: "宗教/经济",
    title: "修道院的经济功能",
    content: "修道院通常拥有大量土地，实行自给自足的经济模式。修士们不仅从事农业生产，还经营磨坊、酿酒坊、面包房等设施。修道院还承担着早期福利国家的功能——开办公立医院、孤儿院、收容所和旅店。修道院是中世纪农村经济的重要组织者和慈善事业的主要提供者。",
    references: ["Melville, G. The World of Medieval Monasticism. Cistercian Publications, 2016."]
  },
  {
    category: "宗教与教会",
    subcategory: "文化/知识",
    title: "修道院抄经室",
    content: "修道院的图书馆和抄经室通常朝南建造，以便获得更多光线——这也使它们成为最温暖的房间。抄经室是修士抄写和装饰手稿的地方，是中世纪知识保存和传播的核心场所。修士们在此抄写圣经、教父著作、古典文献以及各类科学和医学文本。许多古代文献正是通过修道院抄经室修士们的辛勤工作才得以保存至今。",
    references: ["de Hamel, C. A History of Illuminated Manuscripts. Phaidon Press, 1986."]
  },
  {
    category: "宗教与教会",
    subcategory: "宗教/教会",
    title: "在俗教士与常规教士",
    content: "中世纪的圣职者分为两种类型。在俗教士负责信徒的精神需求，主要在堂区教堂服务；常规教士则遵循宗教规则生活，如法政牧师或修士。在俗教士与普通民众接触密切，负责主持弥撒、施行圣事和布道；常规教士则更多地生活在修道院中，专注于祈祷和灵修。",
    references: ["Melville, G. The World of Medieval Monasticism. Cistercian Publications, 2016."]
  },
  {
    category: "宗教与教会",
    subcategory: "宗教/法律",
    title: "教会法庭",
    content: "教会法庭对婚姻事务拥有专属管辖权。教会法庭审理的范围包括婚姻纠纷、遗嘱认证、异端案件、教士犯罪以及涉及信仰和道德的事务。教会法庭的程序与世俗法庭不同，更多地依据教会法而非习惯法。教会当局还支持和平运动，试图限制贵族之间的私战和暴力行为。",
    references: ["Brundage, J.A. Medieval Canon Law. Longman, 1995."]
  },
  {
    category: "宗教与教会",
    subcategory: "宗教/经济",
    title: "什一税",
    content: "什一税是中世纪教会向信徒征收的宗教税，要求信徒将自己收入的十分之一缴纳给教会。什一税以农产品为主，包括谷物、牲畜、羊毛等，是教会的主要经济来源之一。什一税制度从8世纪开始在欧洲逐步推行，到中世纪盛期已成为普遍实行的制度。什一税支撑了教会的运作、教堂的修建和慈善事业的开展。",
    references: ["Eldevik, J. Episcopal Power and Ecclesiastical Reform in the German Empire. Cambridge University Press, 2012."]
  },
  // ========== 七、法律与司法 ==========
  {
    category: "法律与司法",
    subcategory: "法律/司法",
    title: "比武审判",
    content: "比武审判是日耳曼法中一种在缺少证人或供词的情况下解决指控的方法。争议双方必须进行单挑，战斗的胜利者被宣布胜诉。比武审判在整个欧洲中世纪一直被采用，从16世纪开始逐步被人们弃用。这种审判方式基于“神判”的理念——相信上帝会保佑正义的一方获得胜利。",
    references: ["Brundage, J.A. Medieval Canon Law. Longman, 1995."]
  },
  {
    category: "法律与司法",
    subcategory: "法律/司法",
    title: "高低司法权",
    content: "中世纪西欧封建司法权分为高、中、低三个等级，用以描述司法权力的递减程度。中级司法权涉及全面的民事和刑事管辖权，但排除了死刑判决权，不包括实施酷刑和严厉体罚的权利。高级司法权则包括死刑判决权。不同等级的领主拥有不同层级的司法权力，庄园法庭通常只拥有低级和中级司法权。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
  {
    category: "法律与司法",
    subcategory: "法律/司法",
    title: "庄园法庭",
    content: "庄园法庭是领主在其领地内设立的司法机构，审理涉及佃户之间纠纷、违反庄园习惯法、拖欠租金等案件。庄园法庭通常由领主或其管家主持，全体佃户有义务出席法庭会议。庄园法庭不仅是一个司法机构，也是庄园事务的决策场所——它制定和宣布庄园规章、选举村官、管理公共资源。庄园法庭的记录是研究中世纪乡村社会的重要史料。",
    references: ["Gibbs, S. Lordship, State Formation and Local Authority in Late Medieval and Early Modern England. Cambridge University Press, 2023."]
  },
  {
    category: "法律与司法",
    subcategory: "法律/司法",
    title: "习惯法",
    content: "中世纪欧洲的大部分地区实行的是习惯法——基于长期沿袭的地方习俗和惯例而非成文法典。每个地区、每个庄园都有自己的习惯法，规定着土地继承、婚姻财产、债务偿还、公共资源使用等方方面面。习惯法通常以口头形式代代相传，后来也开始被记录下来。领主和庄园法庭的职责之一就是确认和执行这些习惯法。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
  // ========== 八、教育与文化 ==========
  {
    category: "教育与文化",
    subcategory: "教育/学术",
    title: "中世纪大学",
    content: "中世纪大学指的是欧洲中世纪形成的一系列高等教育组织，主要提供神学、法学、医学和博雅教育。这些教育组织的原型是更古老的基督教座堂学校和修道院学校。被广泛承认的第一所大学是约11世纪建立的意大利博洛尼亚大学。大学最初是一个学术行会——无论是教师行会还是学生行会，其建立往往不需要国王、教宗或王公的明确授权。",
    references: ["Rashdall, H. The Universities of Europe in the Middle Ages. Oxford University Press, 1895."]
  },
  {
    category: "教育与文化",
    subcategory: "教育/学术",
    title: "中世纪大学的兴起",
    content: "西欧的思想复兴始于12世纪中世纪大学的诞生。博洛尼亚大学建立于1088年，随后是巴黎大学（1150年）、牛津大学（1167年）和剑桥大学（1231年）。在1500年之前，西欧和中欧建立了超过80所大学。这些大学颁授学位，是中世纪基督教欧洲的产物，具有相对自主的地位。",
    references: ["Rashdall, H. The Universities of Europe in the Middle Ages. Oxford University Press, 1895."]
  },
  {
    category: "教育与文化",
    subcategory: "教育/课程",
    title: "博雅七艺",
    content: "中世纪大学的基础教育是博雅七艺，包括三艺（文法、修辞、逻辑）和四艺（算术、几何、天文、音乐）。学生在完成七艺的学习后，可以进一步专攻神学、法学或医学等高等学科。博雅七艺的课程体系源自古典时代，经中世纪传承并发展，奠定了西方高等教育的基础框架。",
    references: ["Rashdall, H. The Universities of Europe in the Middle Ages. Oxford University Press, 1895."]
  },
  {
    category: "教育与文化",
    subcategory: "教育/学校",
    title: "座堂学校",
    content: "座堂学校是中世纪早期设在主教座堂的教育机构，是大学的前身之一。座堂学校主要培养教士，教授读、写、算和拉丁语，以及基本的宗教知识。一些著名的座堂学校（如沙特尔的座堂学校）在11至12世纪曾是重要的学术中心，吸引了来自欧洲各地的学者和学生。",
    references: ["Rashdall, H. The Universities of Europe in the Middle Ages. Oxford University Press, 1895."]
  },
  {
    category: "教育与文化",
    subcategory: "艺术/风格",
    title: "哥特式艺术",
    content: "哥特式艺术是一种源自法国、盛行于13世纪的艺术风格。其风格同时具有神圣性和暗黑性，最常见于宗教建筑中，在音乐、绘画和雕塑上也有很多体现。至14世纪末期，其风格逐渐大众化和自然化，形成国际哥特风格。15世纪因欧洲文艺复兴的来临而迅速没落。该风格在18世纪重新被肯定，“哥特式复兴”运动推崇中世纪的阴暗情调。",
    references: ["Stalley, R. Early Medieval Architecture. Oxford University Press, 1999."]
  },
  {
    category: "教育与文化",
    subcategory: "艺术/音乐",
    title: "中世纪音乐",
    content: "中世纪音乐以宗教音乐为主，格里高利圣咏是罗马天主教会的官方礼仪音乐。这种单声部、无伴奏的拉丁文圣歌以教皇格里高利一世命名，但实际上是在几百年间逐步发展形成的。12世纪以后，复调音乐开始出现，巴黎圣母院学派是早期复调音乐的重要代表。世俗音乐在中世纪后期也开始繁荣，游吟诗人和行吟艺人在宫廷和城镇中传唱着爱情与英雄的诗歌。",
    references: ["Caldwell, J. Medieval Music. Indiana University Press, 1978."]
  },
  {
    category: "教育与文化",
    subcategory: "艺术/书籍",
    title: "彩绘手稿",
    content: "彩绘手稿是中世纪书籍艺术的最高成就。抄写员用鹅毛笔在羊皮纸上抄写文字，画家则用金箔和矿物颜料绘制精美的首字母装饰和插图。彩绘手稿的制作极其耗时耗力，一本大型圣经可能需要数年才能完成。因此，彩绘手稿极其昂贵，只有教堂、修道院和极富裕的贵族才能拥有。彩绘手稿是研究中世纪绘画、信仰和日常生活的重要资料。",
    references: ["McKendrick, S. & Doyle, K. The Art of the Bible: Illuminated Manuscripts from the Medieval World. Thames & Hudson, 2016."]
  },
  // ========== 九、医学与科学 ==========
  {
    category: "医学与科学",
    subcategory: "医学/科学",
    title: "中世纪医学",
    content: "中世纪西欧的医学融合了古典传统（希波克拉底和盖伦的著作）、阿拉伯医学和民间疗法。伊斯兰世界的医生将希波克拉底、盖伦和苏什鲁塔的著作翻译成阿拉伯语，并进行重要的医学研究。中世纪欧洲的大学（如博洛尼亚、巴黎、帕多瓦）设有医学院，医学教育以研习古典医学文本为主。",
    references: ["Wallis, F. (ed.) Medieval Medicine: A Reader. University of Toronto Press, 2010."]
  },
  {
    category: "医学与科学",
    subcategory: "医学/实践",
    title: "修道院医学",
    content: "本笃会的圣本笃被视为“修道院医学”的奠基人。修道院在医疗保健方面发挥着重要作用——修士们在修道院内种植药草园，收集和配制药物，为当地居民提供医疗服务。修道院还开办医院和收容所，收治病人和穷人。修道院医学结合了祈祷、草药治疗和基础护理，是中世纪医疗体系的重要组成部分。",
    references: ["Wallis, F. (ed.) Medieval Medicine: A Reader. University of Toronto Press, 2010."]
  },
  {
    category: "医学与科学",
    subcategory: "医学/理论",
    title: "四体液学说",
    content: "中世纪医学的核心理论是四体液学说，源自古希腊医生希波克拉底和盖伦。该学说认为人体由四种体液构成——血液、黄胆汁、黑胆汁和黏液。四种体液的平衡决定了一个人的健康状况和气质类型（多血质、胆汁质、抑郁质和黏液质）。疾病被视为体液失衡的结果，治疗手段包括放血、催吐、导泻等以恢复体液平衡。",
    references: ["Siraisi, N.G. Medieval and Early Renaissance Medicine. University of Chicago Press, 1990."]
  },
  {
    category: "医学与科学",
    subcategory: "医学/机构",
    title: "中世纪医院",
    content: "拉丁基督教世界的第一所医院由法比奥拉在罗马建立。中世纪医院与现代医院不同，它们更多是收容所和救济院，为穷人、病人、朝圣者和孤儿提供食宿和基本护理。医院通常由修道院或宗教团体运营，修女和修士是主要的护理人员。医院也是朝圣路线上重要的设施，为长途跋涉的朝圣者提供休息和照护。",
    references: ["Wallis, F. (ed.) Medieval Medicine: A Reader. University of Toronto Press, 2010."]
  },
  // ========== 十、军事与战争 ==========
  {
    category: "军事与战争",
    subcategory: "军事/武器",
    title: "弩",
    content: "中世纪军事技术的主要变化之一是弩重新作为军事武器出现。弩是一种以机械力量发射箭矢的远程武器，比传统长弓具有更强的穿透力，但射速较慢。弩的使用不需要长期训练，这使得领主能够快速武装平民士兵。教会曾试图禁止弩在基督徒之间的战争中使用，但效果有限。弩在12至14世纪的战争中扮演了重要角色。",
    references: ["DeVries, K. & Smith, R.D. Medieval Military Technology. University of Toronto Press, 1992."]
  },
  {
    category: "军事与战争",
    subcategory: "军事/技术",
    title: "马蹄铁",
    content: "马蹄铁对中世纪军事以外的领域也产生了重要影响——它使得马匹能够在岩石地形上使用。马蹄铁的出现大大提高了骑兵的机动性，使马匹能够在各种地形上作战和行进。这一技术革新对中世纪骑兵战术和长途行军都具有重要意义。马蹄铁也是中世纪铁匠行业的重要产品之一。",
    references: ["White, L. Medieval Technology and Social Change. Oxford University Press, 1962."]
  },
  {
    category: "军事与战争",
    subcategory: "军事/装备",
    title: "攻城武器",
    content: "中世纪战争中，攻城武器是攻破城堡和城墙的关键装备。投石机利用配重或扭力抛射巨石，能够摧毁城墙；攻城槌用于撞击城门和墙体；攻城塔则让士兵能够登上城墙进行肉搏。守城方则使用热油、滚石和弩箭进行防御。随着城堡防御工事的不断升级，攻城武器也在持续改进，双方在攻防技术上展开了长期的军备竞赛。",
    references: ["Viollet-le-Duc, E.E. Castles and Warfare in the Middle Ages. Dover Publications."]
  },
  {
    category: "军事与战争",
    subcategory: "军事/文化",
    title: "马上比武",
    content: "马上比武是中世纪骑士的重要军事训练和竞技活动。两名骑士骑着战马、手持长枪，在指定的赛道上相向冲刺，试图将对方击落马下。马上比武不仅是军事技能的检验，也是骑士展示勇气和荣誉的舞台。大型比武大会常常持续数天，吸引大量贵族和民众观看。比武大会也是社交和政治活动的重要场合。",
    references: ["Keen, M. Chivalry. Yale University Press, 1984."]
  },
  {
    category: "军事与战争",
    subcategory: "军事/海战",
    title: "中世纪的海战",
    content: "中世纪的海战以桨帆船和柯克船为主要战舰。海战方式包括接舷战（跳上敌船进行肉搏）、投射武器攻击和冲撞战术。维京人的长船以其灵活性和速度著称，能够深入内河进行突袭。13世纪以后，火炮开始被安装在船上，海战逐渐向远程炮击方向发展。热那亚、威尼斯等意大利城邦拥有强大的海军力量，控制着地中海的贸易航线。",
    references: ["DeVries, K. & Smith, R.D. Medieval Weapons: An Illustrated History of Their Impact. ABC-CLIO, 2007."]
  },
  // ========== 十一、自然与地理 ==========
  {
    category: "自然与地理",
    subcategory: "地理/环境",
    title: "中世纪的气候",
    content: "中世纪的气候经历了显著变化。约950至1060年间，欧亚大草原异常寒冷。而中世纪暖期（约10至14世纪）则使欧洲大部分地区的气温比现代略高，这促进了农业生产的扩展和人口的增长。温暖的气候使得北欧的耕地北界向北推移，格陵兰岛也在这一时期有了北欧人的定居点。14世纪开始的小冰期则带来了农作物歉收和饥荒。",
    references: ["Fagan, B. The Little Ice Age. Basic Books, 2000."]
  },
  {
    category: "自然与地理",
    subcategory: "地理/资源",
    title: "中世纪的森林资源",
    content: "森林在中世纪欧洲具有重要的经济和社会价值。森林为农民提供了木柴、建筑材料、野生浆果和蘑菇等资源，也是狩猎的场所。领主拥有对森林的专有权——普通民众未经许可不得在森林中狩猎或砍伐树木。森林还是修道院隐修的理想场所，许多修道院建在森林中以便修士远离尘世、专注祈祷。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
  {
    category: "自然与地理",
    subcategory: "地理/交通",
    title: "中世纪的道路与交通",
    content: "中世纪的道路大多继承自罗马时代，但年久失修，路况普遍较差。陆路交通主要依靠骑马或步行，货物运输则使用牛车或马车。河流和水路是更为高效和便捷的交通方式，许多城镇都沿河而建。中世纪的道路上设有驿站和客栈，为旅行者提供食宿和马匹更换的服务。长途贸易依赖水路和商路网络，如连接北欧与地中海的南北商路。",
    references: ["Mundy, J.H. & Riesenberg, P. The Medieval Town. Van Nostrand, 1958."]
  },
  {
    category: "自然与地理",
    subcategory: "地理/宗教",
    title: "朝圣之路",
    content: "朝圣是中世纪重要的宗教活动和文化现象。最著名的朝圣路线是通往西班牙圣地亚哥-德孔波斯特拉的“圣雅各之路”。朝圣者沿着固定的路线徒步数百甚至上千公里，沿途经过众多教堂、修道院和客栈。朝圣之路促进了欧洲各地的文化交流和经济往来，沿线的城镇因接待朝圣者而繁荣。",
    references: ["Ure, J. Pilgrimages: The Great Adventure of the Middle Ages. Constable & Robinson, 2006."]
  },
  // ========== 十二、手工艺与技术 ==========
  {
    category: "手工艺与技术",
    subcategory: "手工艺/职业",
    title: "中世纪铁匠",
    content: "铁匠是中世纪乡村和城镇中最重要的手工艺人之一。铁匠制作和修理农具（犁铧、镰刀、斧头）、马蹄铁、武器（刀剑、矛头）以及各类生活用具。铁匠铺通常位于村庄的中心或城堡附近，是村民聚集和交流的场所。铁匠的工作需要高温熔炉、铁砧、锤子和钳子等工具。优秀的铁匠备受尊重，他们的技艺代代相传。",
    references: ["Gies, F. & Gies, J. Cathedral, Forge, and Waterwheel: Technology and Invention in the Middle Ages. HarperCollins, 1994."]
  },
  {
    category: "手工艺与技术",
    subcategory: "手工艺/工业",
    title: "中世纪纺织",
    content: "纺织是中世纪最重要的家庭手工业之一。羊毛是主要的纺织原料——从剪羊毛、清洗、梳理、纺纱到织布、染色、裁剪，整个流程通常由女性在家中完成。城镇中的纺织行会则组织更为专业化和规模化的生产。佛兰德斯的呢绒、意大利的丝绸和英格兰的羊毛都是中世纪欧洲的著名纺织品。",
    references: ["Netherton, R. & Owen-Crocker, G.R. (eds.) Medieval Clothing and Textiles. Boydell Press, 2005."]
  },
  {
    category: "手工艺与技术",
    subcategory: "手工艺/技术",
    title: "中世纪染色技术",
    content: "中世纪染色是一项复杂的技术活。染匠使用天然染料——从植物（靛蓝、茜草、菘蓝）、昆虫（胭脂虫）和矿物中提取颜色。不同颜色的染料价格差异巨大：红色和紫色最为昂贵，蓝色次之，黄色和绿色相对便宜。染色技术的掌握需要丰富的经验和秘方，染匠行会对染色技术的保密极为严格。",
    references: ["Netherton, R. & Owen-Crocker, G.R. (eds.) Medieval Clothing and Textiles. Boydell Press, 2005."]
  },
  {
    category: "手工艺与技术",
    subcategory: "手工艺/建筑",
    title: "中世纪建筑技术",
    content: "中世纪的建筑技术以石砌和木构为主。石匠是备受尊敬的职业，他们负责教堂、城堡和城墙的建造。石匠行会保守着建筑技术的秘密，包括拱券的砌筑、飞扶壁的搭建和脚手架的架设等。中世纪的建筑工地组织严密——石匠、木匠、铁匠、瓦匠各司其职，大教堂的建造往往需要数十年甚至上百年才能完成。",
    references: ["Stalley, R. Early Medieval Architecture. Oxford University Press, 1999."]
  },
  // ========== 十三、神话与信仰 ==========
  {
    category: "神话与信仰",
    subcategory: "信仰/文化",
    title: "中世纪民间信仰",
    content: "中世纪欧洲的民间信仰是基督教与异教传统的混合体。农民仍然相信精灵、水妖、巨人和龙等超自然生物的存在，这些信仰源自前基督教时代的日耳曼和凯尔特传统。教会试图将这些民间信仰基督教化——将异教的神灵转化为恶魔或圣徒，将异教的节日转化为基督教的节日。然而，民间信仰在欧洲各地持续存在，并与正统基督教形成了复杂的共生关系。",
    references: ["Le Goff, J. The Birth of Purgatory. University of Chicago Press, 1984."]
  },
  {
    category: "神话与信仰",
    subcategory: "信仰/宗教",
    title: "圣徒崇拜",
    content: "圣徒崇拜是中世纪基督教的重要特征。信徒相信圣徒在天堂具有特殊的代祷能力，能够帮助在世的人。每个职业、每个疾病、每种困境都有对应的守护圣徒。圣徒的遗物（如骨头、衣物碎片）被视为具有神奇力量的圣物，被珍藏在教堂的圣物匣中。朝圣者长途跋涉前往圣徒的圣地祈求治愈或赦罪。圣徒崇拜在民间信仰中占有核心地位。",
    references: ["Brown, P. The Cult of the Saints. University of Chicago Press, 1981."]
  },
  {
    category: "神话与信仰",
    subcategory: "信仰/神学",
    title: "炼狱",
    content: "炼狱的概念在中世纪神学中逐渐发展成熟。炼狱被视为灵魂在死后、升入天堂之前接受净化和赎罪的地方。这一概念在12世纪以后被教会正式采纳。炼狱信仰深刻影响了中世纪人的宗教生活——人们为死去的亲人举行弥撒、捐献善款以缩短他们在炼狱中的时间。炼狱的概念也成为教会出售赎罪券的神学基础之一。",
    references: ["Le Goff, J. The Birth of Purgatory. University of Chicago Press, 1984."]
  },
  {
    category: "神话与信仰",
    subcategory: "信仰/文化",
    title: "女巫与巫术",
    content: "中世纪对女巫和巫术的看法经历了复杂的演变。早期教会认为巫术是异教迷信，但对其并不特别关注。13世纪以后，随着神学的发展和对异端的打压，巫术逐渐被与魔鬼崇拜联系在一起。15世纪以后，猎巫运动在欧洲愈演愈烈，数万人被指控为女巫而遭受审判和处决。对巫术的恐惧深刻影响了中世纪晚期欧洲的社会心理和司法实践。",
    references: ["Kramer, H. & Sprenger, J. Malleus Maleficarum (1486)."]
  },
  {
    category: "神话与信仰",
    subcategory: "神话/传说",
    title: "龙与巨兽",
    content: "龙是中世纪欧洲传说中最具代表性的奇幻生物。在基督教传统中，龙常被视为邪恶和魔鬼的象征——圣乔治屠龙的故事是中世纪最流行的传说之一。然而，在北欧传统中，龙也代表着守护宝藏的强大力量。中世纪的地图和百科全书常常描绘龙和其他巨兽，人们相信这些生物生活在世界的边缘地带。龙的传说融合了古罗马、日耳曼和基督教的多重传统。",
    references: ["Le Goff, J. Heroes and Marvels of the Middle Ages. Reaktion Books, 2020."]
  },
  {
    category: "神话与信仰",
    subcategory: "神话/传说",
    title: "精灵与仙子",
    content: "精灵和仙子（Fae）是凯尔特和日耳曼民间传说中的重要元素。精灵被视为生活在森林、山丘和泉水中的超自然存在，它们既可能帮助人类，也可能给人类带来麻烦。教会将精灵信仰视为异教迷信加以打压，但在民间，精灵传说始终存在。中世纪文学（如《亚瑟王传奇》）中常常出现精灵和仙子的角色，它们在中世纪的想象世界中占有独特的位置。",
    references: ["Le Goff, J. Heroes and Marvels of the Middle Ages. Reaktion Books, 2020."]
  },
  {
    category: "神话与信仰",
    subcategory: "神话/传说",
    title: "独角兽",
    content: "独角兽是中世纪欧洲最受欢迎的奇幻生物之一。它被描述为一种形似白马、前额长有螺旋状独角的神兽。在中世纪基督教传统中，独角兽被视为纯洁和基督的象征——传说只有纯洁的处女才能接近和驯服独角兽。独角兽的角（实际上是Narwhal的长牙）被视为具有解毒和治疗功效的珍贵材料，在中世纪的市场上价格极高。",
    references: ["Le Goff, J. Heroes and Marvels of the Middle Ages. Reaktion Books, 2020."]
  },
  // ========== 十四、节日与仪式 ==========
  {
    category: "节日与仪式",
    subcategory: "节日/文化",
    title: "中世纪节日",
    content: "中世纪的节日日历由宗教节日和民间节日共同构成。最重要的宗教节日包括圣诞节、复活节、五旬节和诸圣节。每个村庄和城镇还有自己的守护圣徒节，这是当地最盛大的庆祝活动。民间节日则与农业周期相关——如收获节、仲夏节等。节日期间，人们停止工作，参加弥撒、游行、集市、舞蹈和各类比赛。节日是中世纪社会生活中不可或缺的组成部分。",
    references: ["Cosman, M.P. Medieval Holidays and Festivals: A Calendar of Celebrations. Piatkus, 1984."]
  },
  {
    category: "节日与仪式",
    subcategory: "仪式/军事",
    title: "骑士册封仪式",
    content: "骑士册封仪式是中世纪骑士制度中最重要的仪式。候选骑士通常需要经过整夜的祈祷和守夜，在教堂中沐浴净身、穿上白色长袍象征纯洁。次日，领主或国王用剑轻击候选人的肩膀或颈部，正式授予其骑士头衔。册封仪式后通常会举行盛大的宴会和比武活动。这一仪式融合了基督教信仰和军事传统，标志着候选人正式进入贵族阶层。",
    references: ["Keen, M. Chivalry. Yale University Press, 1984."]
  },
  {
    category: "节日与仪式",
    subcategory: "仪式/社会",
    title: "婚礼与婚姻",
    content: "中世纪的婚礼既是宗教圣事也是社会契约。教会将婚姻确立为七圣事之一，要求婚礼必须在教堂举行并由神父主持。贵族婚姻往往是政治联盟的工具——通过婚姻联合领地、缔结同盟或结束战争。平民的婚姻则更多是经济安排——两个家庭通过联姻整合土地和劳动力资源。教会法规定婚姻需要双方同意，但在实践中，贵族子女的婚姻选择往往受到家庭和领主的严格控制。",
    references: ["Brundage, J.A. Medieval Canon Law. Longman, 1995."]
  },
  {
    category: "节日与仪式",
    subcategory: "仪式/宗教",
    title: "葬礼与纪念",
    content: "中世纪的葬礼是重要的宗教仪式，旨在为死者的灵魂祈祷，帮助其尽快脱离炼狱、进入天堂。葬礼包括临终敷油、教堂守夜、弥撒和墓地安葬等环节。富裕阶层会在遗嘱中捐赠财产给教会，以换取死后永久的弥撒纪念。墓碑和教堂中的纪念雕塑记录了死者的身份和生平。为死者祈祷是中世纪基督徒的重要宗教义务。",
    references: ["Le Goff, J. The Birth of Purgatory. University of Chicago Press, 1984."]
  },
  // ========== 十五、社会与经济制度 ==========
  {
    category: "社会与经济制度",
    subcategory: "经济/税收",
    title: "丹麦金",
    content: "丹麦金是中世纪英格兰的一种特殊税收，最初是为了筹集资金向维京人缴纳赎金以避免其入侵。这种税收后来被诺曼征服者继承，成为一种常规的土地税。丹麦金的征收以土地为单位，每块土地按照其评估价值缴纳税款。丹麦金是英格兰早期中央集权税收制度的重要例证。",
    references: ["McDonald, J. & Snooks, G.D. Domesday Economy: A New Approach to Anglo-Norman History. Oxford University Press, 1986."]
  },
  {
    category: "社会与经济制度",
    subcategory: "经济/金融",
    title: "锡耶纳牧山银行",
    content: "锡耶纳牧山银行是现存最古老的银行之一，其历史可追溯至中世纪。这家银行成立于1472年的意大利锡耶纳，最初是一家慈善贷款机构，为穷人提供低息贷款。锡耶纳牧山银行的成立标志着中世纪金融业从简单的钱币兑换向现代银行业务的转变。中世纪意大利的银行家们发展出了汇票、复式记账法等重要的金融创新。",
    references: ["de Roover, R. The Rise and Decline of the Medici Bank, 1397-1494. Harvard University Press, 1963."]
  },
  {
    category: "社会与经济制度",
    subcategory: "经济/商业",
    title: "市场与集市",
    content: "市场是中世纪城镇的经济核心。每周固定日期的集市是当地农产品和手工艺品交易的主要场所。领主通常拥有在其领地内设立市场和征收市场税的特权。除了定期集市，还有年度大集市（如香槟集市），吸引来自欧洲各地的商人。集市上交易的商品包括谷物、牲畜、布匹、盐、铁器、香料和奢侈品。市场也是信息交流和社交的重要场所。",
    references: ["Mundy, J.H. & Riesenberg, P. The Medieval Town. Van Nostrand, 1958."]
  },
  {
    category: "社会与经济制度",
    subcategory: "经济/教育",
    title: "学徒制度",
    content: "学徒制度是中世纪手工业行会的重要组成部分。一个想要成为工匠的年轻人需要先做学徒，与师傅签订为期数年（通常为七年）的合同，住在师傅家中学习技艺。学徒期间，师傅提供食宿和技艺培训，学徒则承担家务和辅助工作。学徒期满后需通过考核成为工匠，再经过数年实践和提交“杰作”后才能成为师傅。这一制度确保了手工艺技艺的代代传承。",
    references: ["Epstein, S.A. Wage Labor & Guilds in Medieval Europe. University of North Carolina Press, 1991."]
  },
  {
    category: "社会与经济制度",
    subcategory: "社会/法律",
    title: "领主特权",
    content: "中世纪领主在其领地内拥有广泛的特权。这些特权包括：征收地租和劳役、设立庄园法庭行使司法权、垄断磨坊和面包炉的使用、收取市场税和过路费、以及狩猎权等。领主特权的大小因地区和历史时期而异，但总体上，领主对其领地内的农民拥有广泛的经济、司法和行政控制权。农民的反抗和领主特权的博弈是中世纪社会冲突的重要根源。",
    references: ["Davies, R.R. Lords and Lordship in the British Isles in the Late Middle Ages. Oxford University Press, 2009."]
  },
  {
    category: "社会与经济制度",
    subcategory: "经济/宗教",
    title: "什一税与教会土地",
    content: "教会是中世纪欧洲最大的土地所有者之一。教会通过捐赠、遗产和购买获得了大量土地。教会土地享有免税特权，这成为教会与世俗领主之间矛盾的根源之一。除了土地收入，教会还通过什一税获取稳定的收入来源。教会的经济实力使其成为中世纪政治格局中的重要力量，教宗与世俗君主之间的权力斗争贯穿了整个中世纪。",
    references: ["Eldevik, J. Episcopal Power and Ecclesiastical Reform in the German Empire. Cambridge University Press, 2012."]
  },
  {
    category: "社会与经济制度",
    subcategory: "社会/人口",
    title: "中世纪的人口",
    content: "中世纪欧洲的人口经历了显著的波动。中世纪盛期（11至13世纪），人口因农业技术的进步和相对和平而大幅增长——欧洲人口增长了三到四倍。14世纪的黑死病（1347-1351年）导致欧洲人口减少了约三分之一至一半。人口的变化深刻影响了中世纪的经济、社会和政治结构——劳动力短缺导致了农奴制的松动和工资的上涨。",
    references: ["Russell, J.C. British Medieval Population. University of New Mexico Press, 1948."]
  },
  {
    category: "社会与经济制度",
    subcategory: "历史/过渡",
    title: "中世纪的结束与文艺复兴的开端",
    content: "中世纪的结束通常被定在15世纪，以君士坦丁堡的陷落（1453年）或哥伦布发现美洲（1492年）为标志。文艺复兴的兴起标志着中世纪向近代的过渡——古典文化的复兴、人文主义思想的传播、印刷术的发明和地理大发现共同改变了欧洲的面貌。然而，中世纪的文化遗产——包括其法律制度、大学体系、哥特式建筑和基督教传统——持续影响着后世。",
    references: ["Bloch, M. Feudal Society. Routledge, 1961."]
  },
    // ========== 怪物与奇异生物 ==========
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/文化",
    title: "中世纪的怪物文化",
    content: "中世纪欧洲人深信怪物真实存在于世界的边缘地带。在当时人们的认知中，幻想与现实的界限并不清晰，人与动物的混合体、扭曲变形的人体、自然界万物在外形上的交流转换都被视为可能发生的事。这种怪物信仰源于古典时代的博物学传统和基督教对"上帝造物多样性"的理解__既然上帝是全能的，他创造出半人半兽的生物也是完全合理的。怪物成为中世纪想象力的最大宝藏，至今仍是奇幻文学和影视创作取之不尽的素材库。",
    references: ["王慧萍《怪物考：中世纪的幻想文化志》，2015年，如果出版社"]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "人鱼",
    content: "人鱼（Siren）是中世纪怪物图志中最具诱惑力的生物之一。中世纪的人鱼形象与今天迪士尼童话中可爱的美人鱼截然不同——原始图像中的人鱼拥有两条鱼尾，代表着欲望与诱惑。传说她们常以优美歌声诱杀水手船员，是海洋中的致命威胁。人鱼形象在近一两百年间被逐渐美化，星巴克的商标使用的正是双尾人鱼图案，但其原始的中世纪含义已被大大淡化。",
    references: ["王慧萍《怪物考：中世纪的幻想文化志》，2015年，如果出版社"]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "狮鹫",
    content: "狮鹫（Griffin）是中世纪最受欢迎的混合型怪物之一，拥有鹰的头部和翅膀、狮子的身体，象征着力量与警觉的结合。在中世纪的纹章学中，狮鹫是常见图案，代表勇猛与守护。狮鹫被认为生活在遥远的斯基提亚（今中亚地区），守护着那里的黄金宝藏。其形象融合了"万兽之王"狮子与"鸟类之王"鹰的双重权威，成为中世纪贵族和骑士喜爱的象征符号。",
    references: ["王慧萍《怪物考：中世纪的幻想文化志》，2015年，如果出版社"]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "独角兽",
    content: "独角兽是中世纪欧洲最受欢迎的奇幻生物之一，被描述为形似白马、前额长有螺旋状独角的神兽。在中世纪基督教传统中，独角兽被视为纯洁与基督的象征——传说只有纯洁的处女才能接近和驯服独角兽。独角兽的角（实际源于一角鲸的长牙）被认为具有解毒和治疗功效，在中世纪市场上价格极高，常被制成"独角兽角杯"用于检验食物是否有毒。",
    references: ["王慧萍《怪物考：中世纪的幻想文化志》，2015年，如果出版社"]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/民俗",
    title: "绿人",
    content: "绿人（Green Man）是中世纪欧洲教堂和建筑雕刻中反复出现的装饰主题——一个从口鼻或面部周围长出藤蔓和树叶的人脸形象。绿人源于前基督教时代的自然崇拜传统，象征着森林的野性生命力与自然的再生力量。尽管基督教试图将其视为异教符号，但绿人形象广泛出现在哥特式教堂的雕刻中，说明民间对自然力量的崇拜以隐蔽的方式延续至今。",
    references: ["王慧萍《怪物考：中世纪的幻想文化志》，2015年，如果出版社"]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/民俗",
    title: "畸形种族",
    content: "中世纪欧洲人相信，在遥远的非洲、印度和东方地区生活着各种身体畸形的种族——如只有一只脚、躺下时用大脚遮阳的民族；五官长在胸前、没有头部的民族；狗头人身的民族等。这些"畸形种族"的传说源于古典地理学对未知世界的想象，后来被基督教纳入"上帝造物多样性"的神学框架。中世纪地图的边角常绘有这些怪人的形象，既是地理知识也是宗教寓言的呈现。",
    references: ["王慧萍《怪物考：中世纪的幻想文化志》，2015年，如果出版社"]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "曼提柯尔",
    content: "曼提柯尔（Manticore）是动物寓言集中一种穷凶极恶的怪物，据说出没于亚洲的丛林中。它的外形极具迷惑性：拥有血红色的狮子身体、人类的面孔、三排锐利的牙齿，以及一条蝎子般的尾巴。它行动极为迅捷，能进行远距离跳跃，且以人肉为食，是中世纪想象中"最残忍、外形最奇特的野兽"。",
    references: ["王慧萍《怪物考：中世纪幻想艺术图文志》，2015年", "Biggs, S.J. Weird and Wonderful Creatures of the Bestiary. The British Library, 2014."]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "双头蛇",
    content: "双头蛇（Amphivena/Amphisbaena）是一种外形古怪的蛇类生物，其名字来源于它独特的身体构造。据记载，它身体的两端各有一个头部，因此可以呈环形移动，并能向任一方向行进。古罗马学者老普林尼将其描述为一种剧毒而凶猛的野兽。在中世纪，它常被描绘成一种自我攻击的奇特生物。",
    references: ["王慧萍《怪物考：中世纪幻想艺术图文志》，2015年", "Biggs, S.J. Weird and Wonderful Creatures of the Bestiary. The British Library, 2014."]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "博纳肯",
    content: "博纳肯（Bonnacon）是一种外表看起来像公牛，但实则拥有奇特防御机制的生物。据说它出没于亚洲某地，其角向内弯曲，似乎毫无攻击性。然而，当它受到威胁时，会喷射出带有剧毒的粪便。这种排泄物会在方圆两英亩的范围内散发恶臭，且热力足以灼伤一切，从而有效地阻止追捕者。",
    references: ["Biggs, S.J. Weird and Wonderful Creatures of the Bestiary. The British Library, 2014."]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "卢克罗塔",
    content: "卢克罗塔（Leucrota）是另一种混合型怪物，结合了多种动物的特征。它的描述较为混乱，据说长着雄鹿的后半身、狮子的前半身和胸部，但蹄子是分叉的。它最显著的特征是横贯整个头部的大嘴和永久的咧嘴笑，其牙齿是连续的骨板，并且能够模仿人类的声音。",
    references: ["Biggs, S.J. Weird and Wonderful Creatures of the Bestiary. The British Library, 2014."]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "蛇蜥",
    content: "蛇蜥（Basilisk）在动物寓言集中被视为"爬行动物之王"，也称"Regulus"。它的危险程度极高，据说其气息就能污染并毁灭周围的一切，而它的凝视更为可怕，任何与之对视的人都会立即死亡。不过，它也并非无敌，寓言称黄鼠狼是它的天敌，可以潜入其洞穴将其杀死。在中世纪的道德阐释中，蛇蜥常被视为"邪恶"的化身。",
    references: ["Biggs, S.J. Weird and Wonderful Creatures of the Bestiary. The British Library, 2014."]
  },
  {
    category: "怪物与奇异生物",
    subcategory: "奇幻/生物",
    title: "巨龙",
    content: "巨龙（Dragon）是中世纪最广为人知、也最具代表性的传说生物。在动物寓言集中，它通常被描绘为体型最大的蛇类，常常是"魔鬼"的化身。到了后世，龙的形象不断演变，被赋予了更复杂的形态与习性，成为奇幻作品中力量、智慧乃至贪婪的象征，从喷火的毁灭者到守护秘密的古老存在皆有出现。",
    references: ["T.H. White, The Book of Beasts: Being a Translation from a Latin Bestiary of the Twelfth Century（动物之书）", "王慧萍《怪物考：中世纪幻想艺术图文志》，2015年"]
  }
  // ========== 世界构建与叙事类型 ==========
  {
    category: "世界构建与叙事类型",
    subcategory: "叙事/类型",
    title: "高魔奇幻",
    content: "高魔奇幻（High Fantasy）又称"史诗奇幻"，指架空程度较大的奇幻作品。这类小说设定在完全独立于现实世界的虚构世界中，通常以英雄或弱势者的视角展开叙事，围绕对抗超自然邪恶力量的大规模斗争展开。典型特征包括虚构种族（精灵、矮人）、魔法体系、巫师和法师角色、自创语言，以及多卷本的长篇架构。J.R.R.托尔金的《魔戒》是高魔奇幻的奠基之作。",
    references: ["维基百科"高魔奇幻"词条"]
  },
  {
    category: "世界构建与叙事类型",
    subcategory: "叙事/类型",
    title: "低魔奇幻",
    content: "低魔奇幻是与高魔奇幻相对应的奇幻文学子类别。这类作品建立于现实世界或与现实世界高度相似的理性世界中，其中的超自然元素相对稀少或被严格控制。低魔奇幻的魔法通常是隐晦的、稀有的，而非日常生活的一部分。乔治·R·R·马丁的《冰与火之歌》常被视为低魔奇幻的典型代表——魔法在该世界中存在但罕见且难以掌控，魔法生物（如龙）几乎灭绝。",
    references: ["维基百科"高魔奇幻"词条"]
  },
  {
    category: "世界构建与叙事类型",
    subcategory: "文化/研究",
    title: "中世纪主义",
    content: "中世纪主义（Medievalism）指当代社会对中世纪的各种再现和想象——涵盖中世纪意象在政治、经济、社会层面的运用，以及流行文化（电影、游戏、电视剧、文学、艺术）中的相关表达。中世纪主义研究试图回答一个核心问题：为什么中世纪深深扎根于我们的幻想之中？骑士、城堡、女巫与巨龙如今无处不在，充斥荧幕、文学、音乐、漫画乃至整个流行文化。《权力的游戏》《指环王》《龙与地下城》均为中世纪主义文化现象的典型体现。",
    references: ["Besson, A.; Blanc, W.; Ferré, V. (eds.) Dictionnaire de la fantasy，2018年，Vendémiaire出版社"]
  },
  // ========== 魔法与超凡体系 ==========
  {
    category: "魔法与超凡体系",
    subcategory: "魔法/理论",
    title: "四元素说",
    content: "四元素说是西方奇幻世界观中最常见的魔法理论基石，源自古希腊哲学。该理论认为宇宙万物由火、水、风、土四种基本元素构成，各自具有不同的性质——火为热与干，水为冷与湿，风为热与湿，土为冷与干。四元素的平衡与失衡被用于解释自然现象、人类气质乃至魔法的运作方式。在奇幻作品中，元素魔法师通常专精于操控某一种元素，而高阶法师则能调和多种元素。",
    references: ["《ファンタジー世界読本》（奇幻世界读本），幻想世界史研究会编，2016年，枫树林出版"]
  },
  {
    category: "魔法与超凡体系",
    subcategory: "魔法/理论",
    title: "以太",
    content: "以太（Aether）是古希腊哲学中提出的"第五种元素"，被认为填充在天地之间的所有空间中，是星辰和天体的构成物质。在中世纪和文艺复兴时期的魔法哲学中，以太被视为万物之源、能衍生世间一切生死万象的原初物质。在奇幻设定中，以太常被描绘为弥漫整个世界的魔法能量场，法师通过精神力引导和操控以太来施展法术。",
    references: ["《ファンタジー世界読本》（奇幻世界读本），幻想世界史研究会编，2016年，枫树林出版"]
  },
  {
    category: "魔法与超凡体系",
    subcategory: "魔法/技术",
    title: "炼金术",
    content: "炼金术是中世纪欧洲最具代表性的神秘学实践之一。公众普遍认为炼金术士的目标是将贱金属转化为黄金，但炼金术的实际追求远不止于此——包括制造"贤者之石"以实现长生不老、配制万能药、揭示宇宙万物的本质规律等。炼金术融合了化学实验、神秘主义哲学和占星术，其符号系统和操作流程（蒸馏、煅烧、溶解等）成为后来奇幻文学中魔法药剂制作和魔法物品锻造的重要灵感来源。",
    references: ["《ファンタジー世界読本》（奇幻世界读本），幻想世界史研究会编，2016年，枫树林出版"]
  },
  {
    category: "魔法与超凡体系",
    subcategory: "魔法/理论",
    title: "真名魔法",
    content: "真名是奇幻设定中一种广泛存在的魔法概念——万事万物都有其"真名"，这是其存在本质的语言表达。掌握一个存在的真名，即意味着获得对其的控制权。在神话传统中，这一概念源自古埃及的命名仪式，以及北欧神话中奥丁通过符文掌握事物本质的传说。真名的长度和复杂程度通常被认为与其对应的"灵格高度"成正比——凡物的真名可能只有一两个音节，而神祇的真名则是凡人无法完整念出的。",
    references: ["《幻想异世界术语百科全书》，幻想世界史研究会社编"]
  },
  // ========== 奇幻设定中的建筑与聚落 ==========
  {
    category: "奇幻设定中的建筑与聚落",
    subcategory: "世界/设定",
    title: "幻想世界的城市布局",
    content: "奇幻世界中的城市通常以中世纪欧洲城镇为蓝本，但往往会加入奇幻元素。典型的奇幻城市由以下要素构成：城市中心是城堡（领主的权力核心）或大教堂（教会的权力核心）；城墙环绕城市，设有塔楼和城门；街道从中心呈放射状延伸至各城门；城市内部按功能分区——贵族区靠近城堡，商业区位于市中心广场，工匠区沿城墙分布，贫民区则在城墙外或低洼地带。奇幻城市常增加魔法学院、冒险者公会、炼金术士工坊等特定功能建筑。",
    references: ["幻想世界史研究会《奇幻世界大百科》，2016年，枫树林出版"]
  },
  // ========== 社会构成与职业 ==========
  {
    category: "社会构成与职业",
    subcategory: "社会/职业",
    title: "幻想世界的职业体系",
    content: "奇幻设定中的职业体系深受中世纪欧洲社会分工的影响，同时加入了超凡职业。常见的基础职业包括：农民（占人口大多数，负责粮食生产）、铁匠（制作武器和工具）、裁缝（制作衣物）、工匠（木工、石匠等）、商人（从事贸易）、医师（治疗疾病）。超凡职业则包括：骑士（战斗与守护）、法师（研究魔法）、牧师（侍奉神明）、游侠（森林与荒野的守护者）、盗贼（隐秘行动和情报搜集）。职业选择通常受出身、财富和天赋的限制，但奇幻故事中常有突破阶层限制的英雄叙事。",
    references: ["幻想世界史研究会《奇幻世界大百科》，2016年，枫树林出版"]
  },
  {
    category: "社会构成与职业",
    subcategory: "社会/职业",
    title: "奇幻世界的炼金术士",
    content: "炼金术士在奇幻世界观中占据特殊地位——他们既是学者又是实践者，居于科学与神秘学的交界处。炼金术士的社会地位因作品而异：在有的设定中，他们是受贵族资助的宫廷学者；在另一些设定中，他们是游离于主流社会之外的孤独研究者。炼金术士通常拥有自己的实验室，配备蒸馏器、坩埚、研钵和各类药剂原料。他们不仅要掌握化学知识，还需要理解魔法符号和天体运行规律。",
    references: ["幻想世界史研究会《奇幻世界大百科》，2016年，枫树林出版"]
  },
  // ========== 信仰与宇宙架构 ==========
  {
    category: "信仰与宇宙架构",
    subcategory: "信仰/宇宙",
    title: "幻想世界中的天使阶级",
    content: "奇幻设定中的天使阶级通常沿用基督教神学的九级天使体系。这一体系将天使分为三个等级（三级九等）：第一级为最高阶，包括炽天使、智天使和座天使，直接侍奉于神座之前；第二级包括主天使、力天使和能天使，负责管理宇宙秩序；第三级包括权天使、天使长和天使，负责守护人类和执行具体使命。奇幻作品中，天使常被描绘为具有超凡力量的灵体存在，其介入人间事务往往意味着重大变故。",
    references: ["幻想世界史研究会《奇幻世界大百科》，2016年，枫树林出版"]
  },
  {
    category: "信仰与宇宙架构",
    subcategory: "信仰/宇宙",
    title: "幻想世界中的恶魔与地狱",
    content: "奇幻设定中的恶魔体系深受中世纪基督教恶魔学影响。地狱被描绘为恶魔的居所，其结构在传统观念中分为七层（对应七宗罪）或九层（在但丁的《神曲》中）。著名的恶魔包括：路西法（骄傲）、别西卜（暴食）、阿斯莫德（色欲）等。在奇幻故事中，恶魔是秩序与光明的对立面，但它们也常被描绘为具有复杂动机和个性的存在，而非单纯的邪恶符号。",
    references: ["幻想世界史研究会《奇幻世界大百科》，2016年，枫树林出版"]
  },
  {
    category: "信仰与宇宙架构",
    subcategory: "信仰/民俗",
    title: "圣人与圣物崇拜",
    content: "在奇幻世界观中，圣人与圣物崇拜通常被保留作为宗教体系的重要组成部分。圣徒被视为具有特殊神恩的人物，能够施行奇迹或代祷。不同职业和困境对应不同的守护圣徒。圣物（圣人的遗骨、衣物碎片或生前使用的物品）被认为具有神圣力量，常被珍藏在教堂或修道院的圣物匣中。在奇幻叙事中，圣物往往是剧情推进的关键道具——英雄需要寻找某件失落圣物以击败黑暗势力。",
    references: ["幻想世界史研究会《奇幻世界大百科》，2016年，枫树林出版"]
  },
  // ========== 经典武器与装备 ==========
  {
    category: "经典武器与装备",
    subcategory: "装备/武器",
    title: "奇幻世界中的经典武器",
    content: "奇幻设定中的武器体系通常以中世纪欧洲的真实武器为蓝本，并赋予其魔法属性或传说背景。常见的幻想武器包括：长剑（骑士的标准武器，常被赋予"神圣""火焰"等属性）、双手巨剑（重装战士使用，需要极大力量）、战斧（矮人偏好武器）、长弓（精灵或游侠的远程武器）、匕首（盗贼或刺客的潜行武器）、战锤（对重甲敌人有效）。传奇武器则通常具有独特名称和来历——如斩杀恶龙的剑、由神祇锻造的矛，或封印了古代法师力量的魔杖。",
    references: ["幻想世界史研究会《奇幻世界大百科》，2016年，枫树林出版"]
  }
];
