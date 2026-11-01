/* The Chinese source remains editable; this layer presents one language at a time. */
(() => {
  const COPY = {
    '语言 / Language / 言語':['语言','Language','言語'],
    '首页':['首页','Home','ホーム'],
    'HOME · ホーム':['作品集','PORTFOLIO','作品集'],
    '影像创作':['影像创作','AI Filmmaking','AI映像制作'],
    'AIGC FILM · AI映像制作':['AIGC 影像','AI FILM','AI映像'],
    '学生作品':['学生作品','Student Films','学生作品'],
    'STUDENT WORK · 学生作品':['教学实践','TEACHING WORK','指導作品'],
    '视觉设计':['视觉设计','Visual Design','デザイン'],
    'VISUAL DESIGN · ビジュアルデザイン':['品牌与界面','BRAND & UI','ブランド・UI'],
    '个人介绍':['个人介绍','About','プロフィール'],
    'PROFILE · プロフィール':['经历与方法','PROFILE','経歴・活動'],
    '编辑作品':['编辑作品','Edit Works','作品を編集'],
    'EDIT · 編集':['本地编辑','LOCAL EDITOR','編集ツール'],
    '电话 / PHONE / 電話':['电话','Phone','電話'],
    '邮箱 / EMAIL / メール':['邮箱','Email','メール'],
    'CINEMA · DESIGN · ART':['影像 · 设计 · 艺术','FILM · DESIGN · ART','映像 · デザイン · アート'],
    '作品集':['作品集','Portfolio','作品集'],
    'PORTFOLIO':['影像与设计','FILM & DESIGN','映像とデザイン'],
    'ポートフォリオ':['','',''],
    '一场关于影像与视觉的漫游。':['以影像与设计，讲述值得被看见的故事。','Stories told through film and visual design.','映像とデザインで、心に残る物語を。'],
    '进入作品集':['进入作品集','Explore the work','作品を見る'],
    'EXPLORE · 作品を見る':['探索项目','EXPLORE','作品一覧へ'],
    'FILM · DESIGN · EDUCATION':['影像 · 设计 · 教学','FILM · DESIGN · TEACHING','映像 · デザイン · 教育'],
    '映画 · デザイン · 教育':['','',''],
    'ART / MOTION / STORY · 001':['艺术 / 动态 / 叙事 · 001','ART / MOTION / STORY · 001','アート / 動き / 物語 · 001'],
    '影像 · 教学 · 设计':['影像 · 教学 · 设计','Film · Teaching · Design','映像 · 教育 · デザイン'],
    'FILM × AIGC × VISUAL DESIGN':['影像 × AIGC × 视觉','FILM × AIGC × DESIGN','映像 × AIGC × デザイン'],
    'AI映像制作 · 教育 · ビジュアルデザイン':['AI 影像 · 教学 · 视觉','AI FILM · TEACHING · DESIGN','AI映像制作 · 教育 · デザイン'],
    '从品牌视觉走向 AIGC 影像，聚焦短剧、漫剧与教学；以故事为起点，统筹画面与节奏的最终呈现。':['从品牌视觉走向 AIGC 影像，聚焦短剧、漫剧与教学；以故事为起点，统筹画面与节奏的最终呈现。','I work across visual identity, AI filmmaking and education. Story comes first; image, performance and pacing follow.','ブランドデザインを起点に、AI映像制作と教育へ。物語を軸に、画づくりから演出、編集のリズムまで一貫して考えます。'],
    '代表实践':['代表实践','Projects & Practice','主な取り組み'],
    'SELECTED PRACTICE · 代表的な実践':['创作与教学','CREATIVE & TEACHING WORK','制作・教育実績'],
    'Olympus｜出海短剧系列':['Olympus｜出海短剧系列','Olympus | International Short Drama','Olympus｜海外向けショートドラマ'],
    '个人 AIGC 影像 · 8 段片段 ❧':['个人 AIGC 影像 · 8 段片段 ❧','AI film · 8 excerpts ❧','個人制作のAI映像 · 全8本 ❧'],
    '真人短剧与短片':['真人短剧与短片','Live-action Shorts & Drama','実写ドラマ・短編'],
    '学生创作 · 教学与指导 ❧':['学生创作 · 教学与指导 ❧','Student films · Teaching & mentorship ❧','学生作品 · 授業・制作指導 ❧'],
    '2D 与 3D 动画':['2D 与 3D 动画','2D & 3D Animation','2D・3Dアニメーション'],
    '完整工作经历':['完整工作经历','Experience & Roles','職務経歴'],
    '岗位、创作经历与对应作品 ❧':['岗位、创作经历与对应作品 ❧','Roles, practice and selected work ❧','担当業務と関連作品 ❧'],
    'CAREY / 蒋皓泽':['CAREY / 蒋皓泽','CAREY JIANG','CAREY／蒋皓泽'],
    '工作与创作经历':['工作与创作经历','Experience & Creative Practice','職務・制作経歴'],
    'RÉSUMÉ · 職務経歴':['个人履历','RÉSUMÉ','職務経歴'],
    '经历概览':['经历概览','At a Glance','経歴の概要'],
    'EXPERIENCE · 経歴':['工作与实践','EXPERIENCE','実務経験'],
    '2026 · AIGC 影视与视觉教学':['2026 · AIGC 影视与视觉教学','2026 · AI Film & Visual Design Educator','2026年 · AI映像・デザイン講師'],
    '湖南科技大学特聘讲师；围绕影像创作、短剧与视觉设计授课，指导学生完成多类型影像作品。':['湖南科技大学特聘讲师；围绕影像创作、短剧与视觉设计授课，指导学生完成多类型影像作品。','Appointed lecturer at Hunan University of Science and Technology, teaching film, short-form drama and visual design while mentoring student productions.','湖南科技大学の特聘講師として、映像制作、ショートドラマ、ビジュアルデザインを指導。学生の多様な映像作品の完成を支援しています。'],
    '2024—至今 · AIGC 影像实践':['2024—至今 · AIGC 影像实践','2024–Present · AI Film Practice','2024年～現在 · AI映像制作'],
    '创作方向涵盖短剧、漫剧与品牌影像，关注故事、视觉设定、分镜及影像制作的衔接。':['创作方向涵盖短剧、漫剧与品牌影像，关注故事、视觉设定、分镜及影像制作的衔接。','My work spans short-form drama, animated storytelling and branded films, connecting story development, visual direction, storyboards and production.','ショートドラマ、アニメーション、ブランド映像を制作。企画からビジュアル設計、絵コンテ、映像化までをつなぐ仕事に取り組んでいます。'],
    '约三年 · 品牌视觉与商业设计':['约三年 · 品牌视觉与商业设计','Around 3 Years · Brand & Commercial Design','約3年 · ブランド・商業デザイン'],
    '参与品牌视觉、IP 与商业设计项目，将平面视觉经验延伸至动态影像表达。':['参与品牌视觉、IP 与商业设计项目，将平面视觉经验延伸至动态影像表达。','Experience in brand identity, character IP and commercial design informs my approach to motion and screen-based storytelling.','ブランドビジュアル、キャラクターIP、商業デザインの経験を、動きのある映像表現へと発展させています。'],
    '对应作品':['对应作品','Related Work','関連作品'],
    'SELECTED EVIDENCE · 関連作品':['项目对应','SELECTED WORK','制作実績'],
    'Olympus｜个人 AIGC 影像':['Olympus｜个人 AIGC 影像','Olympus | AI Film Series','Olympus｜AI映像シリーズ'],
    '出海竖屏短剧系列 · 8 段影像 ❧':['出海竖屏短剧系列 · 8 段影像 ❧','International vertical drama · 8 excerpts ❧','海外向け縦型ドラマ · 8本の映像 ❧'],
    '学生影像作品｜教学实践':['学生影像作品｜教学实践','Student Films | Teaching Practice','学生映像作品｜指導実績'],
    '真人短剧、短片、2D 与 3D 动画 ❧':['真人短剧、短片、2D 与 3D 动画 ❧','Drama, short films, 2D & 3D animation ❧','実写ドラマ・短編、2D・3Dアニメーション ❧'],
    '学生作品由学员创作，我承担课程教学与创作指导。':['学生作品由学员创作，我承担课程教学与创作指导。','Students created these films; my role was teaching and creative mentorship.','作品は学生が制作し、私は授業と制作指導を担当しました。'],
    'FILM × VISUAL DESIGN × AIGC ❦ 作品与经历持续更新':['影像 × 视觉设计 × AIGC ❦ 作品与经历持续更新','FILM × VISUAL DESIGN × AIGC ❦ Work in progress','映像 × デザイン × AIGC ❦ 随時更新'],
    '精选项目':['精选项目','Selected Projects','主な作品'],
    'SELECTED WORK · 代表作品':['代表作品','SELECTED WORK','代表作品'],
    '影像创作 · 学生影像 · 视觉设计':['影像创作 · 学生影像 · 视觉设计','AI film · Student films · Visual design','AI映像 · 学生作品 · ビジュアルデザイン'],
    'FILM · STUDENT WORK · DESIGN':['个人项目与教学成果','PERSONAL & TEACHING WORK','個人制作・指導実績'],
    '01 / 影像创作':['01 / 影像创作','01 / AI Film','01 / AI映像制作'],
    '02 / 学生作品':['02 / 学生作品','02 / Student Films','02 / 学生作品'],
    '03 / 视觉设计':['03 / 视觉设计','03 / Visual Design','03 / ビジュアルデザイン'],
    'SELECTED DESIGN / デザイン作品':['精选设计','SELECTED DESIGN','デザイン作品'],
    '从品牌角色到界面与插画，选择原作中的图形与画面重新组织。每件作品保留自己的色彩和造型，由花藤、弧线与版画式框架串联。':['从品牌角色到界面与插画，选择原作中的图形与画面重新组织。每件作品保留自己的色彩和造型，由花藤、弧线与版画式框架串联。','Selected identity, interface and illustration work, recomposed from the original artwork. Each design keeps its own colour and form within a botanical editorial frame.','ブランドのキャラクターからUI、イラストまで、元の作品を再構成。作品固有の色と形を保ち、植物文様と曲線でつなぎます。'],
    '品牌视觉':['品牌视觉','Brand Identity','ブランドデザイン'],
    'BRAND / ブランド':['品牌与 IP','BRAND & IP','ブランド・キャラクター'],
    'UI 设计':['UI 设计','UI Design','UIデザイン'],
    'UI / UIデザイン':['界面作品','INTERFACES','画面デザイン'],
    '其他设计':['其他设计','Other Design','その他のデザイン'],
    'OTHER / その他':['插画与海报','ILLUSTRATION & POSTERS','イラスト・ポスター'],
    'BRAND IDENTITY / ブランドデザイン':['品牌与 IP','BRAND IDENTITY','ブランドデザイン'],
    'INTERFACE DESIGN / UIデザイン':['界面体验','INTERFACE DESIGN','UIデザイン'],
    'ILLUSTRATION & POSTER / イラスト・ポスター':['插画与海报','ILLUSTRATION & POSTER','イラスト・ポスター'],
    '水圆圆｜杭州水务 IP':['水圆圆｜杭州水务 IP','Shui Yuanyuan | Hangzhou Water','水円円｜杭州水務のキャラクター'],
    '杭州水务吉祥物的角色设定、三视造型与视觉应用。':['杭州水务吉祥物的角色设定、三视造型与视觉应用。','Mascot development for Hangzhou Water, from character views to visual applications.','杭州水務のキャラクター設計。三面図から展開デザインまで。'],
    '绿小马｜博物文化 IP':['绿小马｜博物文化 IP','Green Pony | Museum Culture','緑のポニー｜ミュージアム向けキャラクター'],
    '博物文化吉祥物的角色形象与表情应用。':['博物文化吉祥物的角色形象与表情应用。','Character design and expressive applications for a museum culture project.','博物館文化事業に向けたキャラクターと表情展開。'],
    'Zinlo｜社交应用':['Zinlo｜社交应用','Zinlo | Social App','Zinlo｜ソーシャルアプリ'],
    '以清晰的信息层级与轻快色彩组织社交应用界面。':['以清晰的信息层级与轻快色彩组织社交应用界面。','A social app interface with clear hierarchy and a playful colour system.','情報の優先順位と軽やかな色彩を整えたソーシャルアプリのUI。'],
    '乐音汇｜音乐播放器':['乐音汇｜音乐播放器','Yueyinhui | Music Player','楽音匯｜音楽プレーヤー'],
    '深色音乐界面中的内容发现、播放与个人页面。':['深色音乐界面中的内容发现、播放与个人页面。','Discovery, playback and profile screens in a dark music interface.','ダークテーマの音楽アプリ。楽曲の発見、再生、プロフィール画面。'],
    'Heal｜冥想界面':['Heal｜冥想界面','Heal | Meditation UI','Heal｜瞑想アプリ'],
    '以森林与柔和绿调构建冥想、音频播放和状态记录界面。':['以森林与柔和绿调构建冥想、音频播放和状态记录界面。','Forest imagery and calm greens shape meditation, audio and wellbeing screens.','森のイメージと穏やかな緑で、瞑想・音声再生・記録画面を設計。'],
    '骑龙少年｜叙事插画':['骑龙少年｜叙事插画','The Dragon Rider | Narrative Illustration','竜に乗る少年｜物語イラスト'],
    '以少年与龙的旅行为线索展开的场景插画。':['以少年与龙的旅行为线索展开的场景插画。','Illustrations following a young rider and a dragon through an imagined world.','少年と竜の旅を描いた物語性のあるイラスト。'],
    '活动视觉｜海报':['活动视觉｜海报','Event Visuals | Posters','イベントビジュアル｜ポスター'],
    '节庆与商业活动海报中的插画、文字和信息层级。':['节庆与商业活动海报中的插画、文字和信息层级。','Illustration, typography and information hierarchy for event posters.','イベントポスターにおけるイラスト、文字組み、情報設計。'],
    '点击下方集数切换片段，可直接在本页播放。':['点击下方集数切换片段，可直接在本页播放。','Choose an episode below to watch it here.','下のエピソードを選ぶと、このページで再生できます。'],
    'FEATURED COLLECTION · 代表系列':['代表系列','FEATURED SERIES','代表シリーズ'],
    '奥林匹斯':['奥林匹斯','Olympus','オリンポス'],
    '以出海竖屏短剧为创作方向，按片段呈现系列中的人物关系、画面风格与叙事节奏。':['以出海竖屏短剧为创作方向，按片段呈现系列中的人物关系、画面风格与叙事节奏。','A vertical drama series made for an international audience. These excerpts reveal its character dynamics, visual language and narrative pace.','海外視聴者に向けた縦型ショートドラマ。人物関係、映像のトーン、物語のテンポを各シーンからご覧いただけます。'],
    '项目类型':['项目类型','Format','作品形式'],
    '出海竖屏短剧':['出海竖屏短剧','International vertical drama','海外向け縦型ショートドラマ'],
    '我的作品':['我的作品','My Role','担当領域'],
    'AIGC 影像创作':['AIGC 影像创作','AI filmmaking','AI映像制作'],
    '展示内容':['展示内容','On View','公開内容'],
    '8 段可播放片段':['8 段可播放片段','8 playable excerpts','再生可能な8本の映像'],
    '片段索引 / EPISODE INDEX / エピソード':['片段索引','EPISODE INDEX','エピソード一覧'],
    '另一个系列 · 短剧影像':['另一个系列 · 短剧影像','ANOTHER SERIES · SHORT DRAMA','別シリーズ · ショートドラマ'],
    'My Idol Is a Vampire':['My Idol Is a Vampire','My Idol Is a Vampire','My Idol Is a Vampire'],
    '吸血鬼偶像系列':['吸血鬼偶像系列','Vampire Idol Series','ヴァンパイア・アイドル シリーズ'],
    '本次收录第 6 至 10 集。点击集数可在页面内观看；前面集数待补充。':['本次收录第 6 至 10 集。点击集数可在页面内观看；前面集数待补充。','Episodes 6–10 are available to watch here. Earlier episodes will be added later.','第6～10話をこのページでご覧いただけます。前のエピソードは後日追加予定です。'],
    '5 集可播放影像':['5 集可播放影像','5 playable episodes','再生可能な5話'],
    '第 6–10 集 / EPISODES / エピソード':['第 6–10 集','EPISODES 6–10','第6～10話'],
    '按集数选择并直接播放。':['按集数选择并直接播放。','Select an episode to watch it here.','エピソードを選ぶと、このページで再生できます。'],
    '从概念到视觉系统':['从概念到视觉系统','From Concept to Visual System','構想を、形に。'],
    'DESIGN PRACTICE · デザイン':['设计实践','DESIGN PRACTICE','デザイン実績'],
    '品牌视觉、IP 与界面设计的项目经历。这里将以完整案例呈现设计目标、构思过程、视觉系统与最终应用。':['品牌视觉、IP 与界面设计的项目经历。这里将以完整案例呈现设计目标、构思过程、视觉系统与最终应用。','Work across brand identity, character IP and interface design. Selected case studies will show the brief, design process, visual system and applications.','ブランドビジュアル、キャラクターIP、UIデザインの実績。今後、課題設定から制作過程、デザインシステム、展開例までを事例ごとに紹介します。'],
    '品牌视觉 / BRAND IDENTITY':['品牌视觉','Brand Identity','ブランドデザイン'],
    '标识、识别规范与应用延展':['标识、识别规范与应用延展','Logos, identity systems and applications','ロゴ、VI設計、各媒体への展開'],
    'IP 与插画 / CHARACTER & ILLUSTRATION':['IP 与插画','Character IP & Illustration','キャラクター・イラスト'],
    '角色设定、视觉语言与系列延展':['角色设定、视觉语言与系列延展','Character design, visual language and series development','キャラクター設定、表現設計、シリーズ展開'],
    '界面设计 / UI DESIGN':['界面设计','Interface Design','UIデザイン'],
    '信息层级、视觉规范与使用场景':['信息层级、视觉规范与使用场景','Information hierarchy, visual systems and use cases','情報設計、ビジュアルルール、利用シーン'],
    '视觉案例素材待你选定后加入；此处暂不展示未经确认的作品。':['视觉案例素材待你选定后加入；此处暂不展示未经确认的作品。','Case studies will appear here once the final selection is approved.','掲載する事例は選定・確認後に追加します。'],
    'STUDENT FILMS · 学生映像作品':['学生影像','STUDENT FILMS','学生映像作品'],
    '学生影像作品':['学生影像作品','Student Films','学生映像作品'],
    '学生在课程中完成的真人短剧、短片与动画作品。这里展示学生创作成果，以及我在 AIGC 影视教学与创作指导中的实践；作品可直接在本页播放。':['学生在课程中完成的真人短剧、短片与动画作品。这里展示学生创作成果，以及我在 AIGC 影视教学与创作指导中的实践；作品可直接在本页播放。','Live-action drama, short films and animation created by students in my classes. The films reflect their work and my teaching and creative mentorship; each can be played here.','授業で学生が制作した実写ドラマ、短編映画、アニメーションを紹介します。学生の成果と、私が担当した授業・制作指導の実践をご覧ください。作品はこのページで再生できます。'],
    '作品类型':['作品类型','Formats','作品ジャンル'],
    '国产短剧 · 出海短剧 · 真人短片 · 2D 动漫 · 3D 动画':['国产短剧 · 出海短剧 · 真人短片 · 2D 动漫 · 3D 动画','Domestic & international short drama · Live-action shorts · 2D & 3D animation','国内・海外向けショートドラマ · 実写短編 · 2D・3Dアニメーション'],
    '观看方式':['观看方式','Watch','視聴方法'],
    '在当前页面选片并播放完整影像':['在当前页面选片并播放完整影像','Select a film and play it on this page','作品を選び、このページで全編を再生'],
    '教学实践':['教学实践','Teaching Practice','指導実績'],
    '创意、分镜与影像表达':['创意、分镜与影像表达','Concept, storyboards and visual storytelling','企画、絵コンテ、映像表現'],
    '学生国产短剧':['学生国产短剧','Chinese Short Drama','国内向けショートドラマ'],
    'CHINESE SHORT DRAMA · 中国ショートドラマ':['学生短剧','STUDENT PRODUCTIONS','学生制作作品'],
    '学生出海短剧':['学生出海短剧','International Short Drama','海外向けショートドラマ'],
    'OVERSEAS SHORT DRAMA · 海外ショートドラマ':['学生短剧','STUDENT PRODUCTIONS','学生制作作品'],
    '学生真人微电影与短片':['学生真人微电影与短片','Live-action Short Films','実写短編映画'],
    'LIVE ACTION SHORT FILMS · 実写短編映画':['学生创作','STUDENT FILMS','学生制作作品'],
    '学生 2D 动漫作品':['学生 2D 动漫作品','2D Animation','2Dアニメーション'],
    '学生 3D 动画作品':['学生 3D 动画作品','3D Animation','3Dアニメーション'],
    '2D ANIMATION · 2Dアニメーション':['学生创作','STUDENT FILMS','学生制作作品'],
    '3D ANIMATION · 3Dアニメーション':['学生创作','STUDENT FILMS','学生制作作品'],
    '临时标题 · 作品名待更新 / TITLE PENDING / 作品名更新予定':['作品名待更新','Title to be confirmed','作品名は後日更新'],
    '临时编号 · 作品名待更新 / TITLE PENDING / 作品名更新予定':['作品名待更新','Title to be confirmed','作品名は後日更新'],
    '学生作品 · STUDENT WORK · 学生作品':['学生作品','STUDENT FILM','学生作品'],
    '作品即将加入 / COMING SOON / 近日公開':['作品即将加入','More work coming soon','近日公開'],
    '这个系列的位置已经留好。可在“编辑作品”里添加内容。':['这个系列的位置已经留好。可在“编辑作品”里添加内容。','This section is ready for the next project. Add it through Edit Works.','このカテゴリーには今後作品を追加します。「作品を編集」から登録できます。'],
    'New work will appear here. / 新しい作品はこちらに掲載されます。':['新作品将于此展示。','New work will appear here.','新しい作品はこちらに掲載します。'],
    '一个套系中的影像作品 / FILM COLLECTION / 映像シリーズ':['同一系列的影像作品','FILM SERIES','同一シリーズの映像作品'],
    '视频加载失败。请刷新页面，或在新窗口播放。':['视频加载失败。请刷新页面，或在新窗口播放。','The video could not load. Refresh the page or open it in a new tab.','動画を読み込めませんでした。ページを更新するか、別のタブで開いてください。'],
    '新窗口播放 / OPEN VIDEO':['在新窗口播放','Open video in a new tab','別のタブで再生'],
    '点击查看项目介绍 / View project / 作品を見る':['查看项目介绍','View the project','作品の詳細を見る'],
    '查看项目 / VIEW / 詳細 ❧':['查看项目 ❧','View project ❧','作品の詳細 ❧'],
    '点击播放视频':['点击播放视频','Play the video','動画を再生'],
    '❧ 播放视频 / PLAY / 再生':['❧ 播放视频','❧ Play video','❧ 動画を再生'],
    '暂无介绍':['暂无介绍','Description coming soon','紹介文は準備中です'],
    '观看 / VIEW / 作品を見る ❧':['观看作品 ❧','View work ❧','作品を見る ❧'],
    'EDIT WORKS · 作品を編集':['作品管理','EDIT WORKS','作品の編集'],
    '修改先存在这个浏览器。导出数据发给我后，我可以同步到预览网站。':['修改先存在这个浏览器。导出数据发给我后，我可以同步到预览网站。','Changes are saved in this browser. Export the data and send it to me to update the preview site.','変更内容はこのブラウザーに保存されます。書き出したデータを送っていただければ、プレビューサイトに反映できます。'],
    '＋ 新增作品':['＋ 新增作品','＋ Add work','＋ 作品を追加'],
    '作品名称 / TITLE / 作品名':['作品名称','Work title','作品名'],
    '所属系列 / SERIES / シリーズ':['所属系列','Category','カテゴリー'],
    '套系名称 / COLLECTION / シリーズ名':['套系名称','Series name','シリーズ名'],
    'English title / 英文标题':['英文标题','English title','英語タイトル'],
    '日本語タイトル / 日文标题':['日文标题','Japanese title','日本語タイトル'],
    '年份 / 类型':['年份 / 类型','Year / Format','制作年・形式'],
    '作品介绍 / 中文':['中文介绍','Description in Chinese','中国語の紹介文'],
    'English description':['英文介绍','Description in English','英語の紹介文'],
    '日本語紹介':['日文介绍','Description in Japanese','日本語の紹介文'],
    '封面图片网址':['封面图片网址','Cover image URL','カバー画像のURL'],
    '作品链接':['作品链接','Project URL','作品のURL'],
    '保存作品 / SAVE / 保存':['保存作品','Save work','作品を保存'],
    '删除作品':['删除作品','Delete work','作品を削除'],
    '导出数据':['导出数据','Export data','データを書き出す'],
    '导入数据':['导入数据','Import data','データを読み込む'],
    '个人照片位置已经留好。把照片发给我后即可替换。网页无法彻底禁止截图或录屏。':['网页无法彻底禁止截图或录屏。','Screenshots and screen recordings cannot be fully prevented on a website.','Webサイト上でスクリーンショットや画面録画を完全に防ぐことはできません。']
  };

  const CATEGORY = {
    film:['个人 AIGC 影像','AI Film','個人制作のAI映像'], design:['视觉设计','Visual Design','ビジュアルデザイン'], students:['学生作品','Student Films','学生作品'],
    animation:['动画系列','Animation','アニメーション'], shortfilm:['微电影短片系列','Short Films','短編映画'], drama:['短剧系列','Short-form Drama','ショートドラマ'], script:['编剧剧本系列','Screenwriting','脚本・シナリオ'],
    brand:['品牌视觉设计','Brand Identity','ブランドデザイン'], ui:['UI 设计','UI Design','UIデザイン'], other:['其他设计','Other Design','その他のデザイン'],
    'student-drama':['国产短剧','Chinese Short Drama','国内向けショートドラマ'], 'student-overseas-drama':['出海短剧','International Short Drama','海外向けショートドラマ'],
    'student-animation':['2D 动漫系列','2D Animation','2Dアニメーション'], 'student-3d':['3D 动画系列','3D Animation','3Dアニメーション'], 'student-live':['真人系列','Live-action Films','実写映像']
  };
  const DESCRIPTIONS = {
    animation:['二维、三维与风格化影像','2D, 3D and stylized moving images.','2D・3Dを中心とした多彩なアニメーション表現。'],
    shortfilm:['完整故事与情绪表达','Short films built around story and emotion.','物語と感情を丁寧に描く短編映画。'],
    drama:['高密度叙事与角色冲突','Character-driven stories told at a brisk pace.','人物の葛藤をテンポよく描くショートドラマ。'],
    script:['故事设定、剧本与结构设计','Story worlds, scripts and narrative structure.','世界観の構築から脚本、物語構成まで。'],
    brand:['标识、视觉识别与品牌应用','Identity systems and brand applications.','ロゴ、VI設計から各媒体への展開まで。'],
    ui:['界面、信息层级与交互体验','Interfaces shaped by clear hierarchy and interaction.','情報設計と使いやすさを両立したUI。'],
    other:['海报、插画与跨媒介设计','Posters, illustration and work across media.','ポスター、イラスト、媒体を横断するデザイン。'],
    'student-drama':['学生竖屏短剧创作','Student-made vertical short dramas.','学生が制作した縦型ショートドラマ。'],
    'student-overseas-drama':['学生出海竖屏短剧创作','Vertical dramas made for an international audience.','海外視聴者に向けて学生が制作した縦型ドラマ。'],
    'student-animation':['学生二维动画与叙事练习','Student 2D animation and visual storytelling.','学生による2Dアニメーションと物語表現。'],
    'student-3d':['学生三维动画与角色叙事','Student 3D animation and character-led stories.','学生による3Dアニメーションとキャラクター表現。'],
    'student-live':['学生真人影像创作','Live-action films created by students.','学生が制作した実写映像作品。']
  };
  const TITLE_OVERRIDES = {
    'student-cha-wenjiang-2d':[null,'Seven Seconds After the Cherry Blossoms Fall','桜が散ってから7秒'],
    'student-dragon-knight-trailer':[null,'The Dragon and the Knight · Teaser','竜と騎士 · ティーザー']
  };
  const STUDENT_DESCRIPTIONS = {
    'student-animation':[null,'A 2D animated short created by a student. Watch it here.','学生が制作した2Dアニメーションです。このページでご覧いただけます。'],
    'student-3d':[null,'A 3D animated short created by a student. Watch it here.','学生が制作した3Dアニメーションです。このページでご覧いただけます。'],
    'student-live':[null,'A live-action short created by a student. Watch the full film here.','学生が制作した実写短編です。このページで全編をご覧いただけます。'],
    'student-drama':[null,'Working title. Watch the student-made short drama here.','仮題です。学生制作のショートドラマをご覧いただけます。'],
    'student-overseas-drama':[null,'Working title. Watch the student-made vertical drama here.','仮題です。学生制作の縦型ショートドラマをご覧いただけます。']
  };
  const LANGS=['zh','en','ja'];
  const INDEX={zh:0,en:1,ja:2};
  const originalNodes=new WeakMap();
  const normalize=s=>s.replace(/\s+/g,' ').trim();
  let locale='zh', scheduled=false;
  try { const saved=localStorage.getItem('carey-locale'); if(LANGS.includes(saved))locale=saved; } catch {}

  function itemFor(text){
    if(typeof items==='undefined')return null;
    return items.find(i=>i.title===text||i.description===text||i.year===text)||null;
  }
  function itemTitle(item){
    const index=INDEX[locale];
    if(item.series==='student-drama'&&locale!=='zh'){
      const number=String(items.filter(i=>i.series==='student-drama').indexOf(item)+1).padStart(2,'0');
      return locale==='en'?'Student Short Drama '+number:'学生ショートドラマ '+number;
    }
    if(item.series==='student-overseas-drama'&&locale!=='zh'){
      const number=String(items.filter(i=>i.series==='student-overseas-drama').indexOf(item)+1).padStart(2,'0');
      return locale==='en'?'International Short Drama '+number:'海外向けショートドラマ '+number;
    }
    return TITLE_OVERRIDES[item.id]?.[index]||[item.title,item.titleEn||item.title,item.titleJa||item.title][index];
  }
  function itemDescription(item){
    if(item.id==='student-dragon-knight-trailer')return [item.description||'3D 动画先导片；点击播放，在页面内观看。','A student-made teaser for a 3D animated film. Watch it here.','学生が制作した3Dアニメーションのティーザーです。このページでご覧いただけます。'][INDEX[locale]];
    return STUDENT_DESCRIPTIONS[item.series]?.[INDEX[locale]]||[item.description||'暂无介绍',item.descEn||'Description coming soon.',item.descJa||'紹介文は準備中です。'][INDEX[locale]];
  }
  function localized(text){
    const key=normalize(text), index=INDEX[locale];
    if(COPY[key])return COPY[key][index];
    const category=Object.entries(CATEGORY).find(([id,names])=>categories.some(c=>c.id===id&&c.name===key)||groups.some(g=>g.id===id&&g.name===key));
    if(category)return category[1][index];
    const info=Object.entries(DESCRIPTIONS).find(([id])=>categories.some(c=>c.id===id&&c.intro===key));
    if(info)return info[1][index];
    const item=itemFor(key);
    if(item){
      if(key===item.title)return itemTitle(item);
      if(key===item.description)return itemDescription(item);
      if(key===item.year){const year=localizedYear(key);if(year!==key)return year;}
    }
    if(key.startsWith('竖屏短剧 · ')){
      const chinese=key.match(/(\d+)分(\d+)秒/),clock=key.match(/(\d+:\d+)/);
      const duration=clock?.[1]||(chinese?`${chinese[1]}:${chinese[2].padStart(2,'0')}`:'');
      return ['竖屏短剧 · '+(chinese?`${chinese[1]}分${chinese[2]}秒`:duration),'Vertical drama'+(duration?' · '+duration:''),'縦型ショートドラマ'+(duration?' · '+duration:'')][index];
    }
    if(key.startsWith('学生作品 · '))return [key,key.replace('学生作品','Student film').replace('动漫','animation').replace('动画','animation').replace('真人微电影','live-action short film').replace('真人短片','live-action short film').replace('国产短剧','Chinese short drama').replace('出海短剧','international short drama'),key.replace('学生作品','学生作品').replace('动漫','アニメーション').replace('动画','アニメーション').replace('真人微电影','実写短編映画').replace('真人短片','実写短編映画').replace('国产短剧','国内向けショートドラマ').replace('出海短剧','海外向けショートドラマ')][index];
    const numbered=key.match(/^(SHORT DRAMA|OVERSEAS DRAMA|FILM) (\d+)(?: \/ (2D ANIMATION|3D ANIMATION|LIVE ACTION))?$/);
    if(numbered){
      const [,type,number,format]=numbered;
      const kind=type==='FILM'?['作品','FILM','作品'][index]:type==='SHORT DRAMA'?['国产短剧','SHORT DRAMA','国内向けドラマ'][index]:['出海短剧','INTERNATIONAL DRAMA','海外向けドラマ'][index];
      const medium=format?(' / '+({'2D ANIMATION':['2D 动画','2D ANIMATION','2Dアニメーション'],'3D ANIMATION':['3D 动画','3D ANIMATION','3Dアニメーション'],'LIVE ACTION':['真人影像','LIVE ACTION','実写映像']}[format][index])):'';
      return kind+' '+number+medium;
    }
    return null;
  }
  function localizedYear(text){
    const index=INDEX[locale];
    const map={'学生作品 · 2D 动漫':['学生作品 · 2D 动漫','Student film · 2D animation','学生作品 · 2Dアニメーション'], '学生作品 · 3D 动画':['学生作品 · 3D 动画','Student film · 3D animation','学生作品 · 3Dアニメーション'], '学生作品 · 真人微电影':['学生作品 · 真人微电影','Student film · Live-action short','学生作品 · 実写短編映画'], '学生作品 · 真人短片':['学生作品 · 真人短片','Student film · Live-action short','学生作品 · 実写短編映画'], '学生作品 · 国产短剧':['学生作品 · 国产短剧','Student film · Chinese short drama','学生作品 · 国内向けショートドラマ'], '学生作品 · 出海短剧':['学生作品 · 出海短剧','Student film · International drama','学生作品 · 海外向けショートドラマ']};
    return map[text]?.[index]||text;
  }
  function textNodes(){
    const roots=[document.querySelector('header'),document.querySelector('.locale-bar'),document.querySelector('#app'),document.querySelector('.contactbar'),document.querySelector('#detail'),document.querySelector('#editor')].filter(Boolean);
    for(const root of roots){
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      while(walker.nextNode()){
        const node=walker.currentNode,parent=node.parentElement;
        if(!parent||parent.closest('script,style,svg,.locale-options,[data-i18n-managed]'))continue;
        let entry=originalNodes.get(node);
        if(!entry||node.nodeValue!==entry.last){entry={base:node.nodeValue,last:node.nodeValue};originalNodes.set(node,entry)}
        const source=entry.base,key=normalize(source),replacement=localized(key);
        if(replacement==null)continue;
        const whitespace=source.match(/^(\s*)[\s\S]*?(\s*)$/);
        const next=(whitespace?.[1]||'')+replacement+(whitespace?.[2]||'');
        if(node.nodeValue!==next)node.nodeValue=next;
        entry.last=next;
      }
    }
  }
  function setText(el,value){if(el&&el.textContent!==value)el.textContent=value;}
  function mark(el){if(el)el.dataset.i18nManaged='';return el;}
  function specialPages(){
    const index=INDEX[locale],page=document.querySelector('.works-page');
    if(typeof studentLiveFilms!=='undefined')document.querySelectorAll('.student-live-feature').forEach((feature,n)=>{
      const film=studentLiveFilms[n];if(!film)return;
      setText(mark(feature.querySelector('.student-live-latin')),['真人微电影与短片','LIVE-ACTION SHORT FILM','実写短編映画'][index]);
      setText(mark(feature.querySelector('.student-live-copy p')),[film.year,'Student film · Live-action short','学生作品 · 実写短編映画'][index]);
    });
    if(page&&typeof state!=='undefined'){
      const group=groups.find(g=>g.id===state.group),category=categories.find(c=>c.id===state.series);
      if(group&&category){
        setText(mark(page.querySelector('.back')),['❧ 返回总览','❧ Back to portfolio','❧ 作品一覧へ戻る'][index]);
        setText(mark(page.querySelector(':scope>.eyebrow')),CATEGORY[group.id][index]);
        setText(mark(page.querySelector(':scope>.title')),CATEGORY[category.id][index]);
        setText(mark(page.querySelector(':scope>.title-translation')),['作品系列','SELECTED SERIES','作品シリーズ'][index]);
        setText(mark(page.querySelector(':scope>.desc')),DESCRIPTIONS[category.id]?.[index]||[category.intro,langs[category.id]?.[2],langs[category.id]?.[3]][index]);
        for(const card of page.querySelectorAll('.work')){
          const heading=card.querySelector('.work-info h3');
          if(!heading)continue;
          const raw=originalNodes.get(heading.firstChild)?.base?.trim()||heading.textContent;
          const item=items.find(i=>[i.title,i.titleEn,i.titleJa].includes(raw));
          if(!item)continue;
          setText(mark(heading),itemTitle(item));
          const visualTitle=card.querySelector('.visual>span');
          if(visualTitle)setText(mark(visualTitle),itemTitle(item));
          setText(mark(card.querySelector('.work-info small:first-of-type')),CATEGORY[category.id][index]);
          setText(mark(card.querySelector('.work-info small:nth-of-type(2)')),localized(item.year||'')||CATEGORY[category.id][index]);
          setText(mark(card.querySelector('.work-overlay .eyebrow')),CATEGORY[category.id][index]);
          const description=card.querySelector('.video-description,.work-overlay p');
          if(description)setText(mark(description),itemDescription(item));
        }
      }
    }
    const dialog=document.querySelector('#detail');
    if(dialog?.open){
      const title=dialog.querySelector('#detailTitle');
      const current=title?.textContent||'';
      const item=items.find(i=>current.startsWith(i.title+' ·'))||items.find(i=>dialog.dataset.itemId===i.id);
      if(item){dialog.dataset.itemId=item.id;setText(mark(title),itemTitle(item));setText(mark(dialog.querySelector('#detailSeries')),CATEGORY[item.series]?.[index]||'');setText(mark(dialog.querySelector('#detailDesc')),itemDescription(item));}
    }
  }
  function translateAttributes(){
    document.querySelectorAll('[placeholder]').forEach(el=>{
      const base=el.dataset.basePlaceholder||el.getAttribute('placeholder');
      el.dataset.basePlaceholder=base;
      if(base==='例如 Olympus；同一套系填写相同名称')el.placeholder=['例如 Olympus；同一套系填写相同名称','For example, Olympus. Use the same name for every episode.','例：Olympus。同じシリーズには同じ名前を入力してください。'][INDEX[locale]];
    });
    const bar=document.querySelector('.locale-bar');
    if(bar)bar.setAttribute('aria-label',['语言切换','Select language','言語を選択'][INDEX[locale]]);
    document.querySelectorAll('.locale-options button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.locale===locale)));
    document.title=['Carey 蒋皓泽｜影像与设计作品集','Carey Jiang | Film & Visual Design Portfolio','Carey 蒋皓泽｜映像・デザイン作品集'][INDEX[locale]];
  }
  function apply(){scheduled=false;textNodes();specialPages();translateAttributes();}
  function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(apply)}
  function setLocale(next){if(!LANGS.includes(next))return;locale=next;document.documentElement.lang={zh:'zh-CN',en:'en',ja:'ja'}[next];document.body.dataset.locale=next;try{localStorage.setItem('carey-locale',next)}catch{}schedule()}
  window.i18nMessage=key=>({deleteConfirm:['确认删除这件作品？','Delete this work?','この作品を削除しますか？'],invalidData:['作品数据格式不正确','The work file has an invalid format.','作品データの形式が正しくありません。']}[key]||[])[INDEX[locale]];
  const masthead=document.querySelector('.site-header');
  if(masthead){
    const measure=()=>{const height=masthead.getBoundingClientRect().height;if(height)document.documentElement.style.setProperty('--site-header-height',height+'px')};
    if(typeof ResizeObserver!=='undefined')new ResizeObserver(measure).observe(masthead);
    else addEventListener('resize',measure);
    measure();
  }
  document.querySelectorAll('.locale-options button').forEach(button=>button.addEventListener('click',()=>setLocale(button.dataset.locale)));
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,characterData:true});
  setLocale(locale);
})();
