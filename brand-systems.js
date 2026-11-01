/* Complete brand cases, composed from the two supplied VIS manuals. Every numbered
   specification plate is represented by its original artwork, without stretching. */
(() => {
  const triple=(zh,en,ja)=>({zh,en,ja});
  const gengBasics=['标志与网格','单色与反白','保护空间与最小尺寸','中文标准字','英文标准字','标准色','背景色组合','标志组合','错误使用'];
  const gengUses=['名片','手提袋','文件夹','档案袋','工作证','纸杯','品牌伞','玻璃门与灯箱','办公室门牌'];
  const bowuBasics=['标志释义','标志网格','标准色','指定中英文字体','背景配色','标志反白','辅助图形'];
  const bowuOffice=['名片','工作证','笔记本与办公笔','办公用笔','文件夹','信封','信纸','纸杯','手提袋'];
  const bowuSpace=['旗帜','前台','玻璃门色带','户外灯箱','户外广告牌','车身广告','门牌'];
  const plateLabels={
    '标志与网格':['Logo & Grid','ロゴとグリッド'],'单色与反白':['Monochrome & Reverse','単色・白抜き'],'保护空间与最小尺寸':['Clear Space & Minimum Size','余白と最小使用サイズ'],'中文标准字':['Chinese Logotype','中国語ロゴタイプ'],'英文标准字':['Latin Logotype','欧文ロゴタイプ'],'标准色':['Brand Colours','ブランドカラー'],'背景色组合':['Background Variations','背景色の組み合わせ'],'标志组合':['Logo Lockups','ロゴの組み合わせ'],'错误使用':['Incorrect Usage','禁止事項'],
    '名片':['Business Cards','名刺'],'手提袋':['Carrier Bag','ショッパー'],'文件夹':['Folders','フォルダー'],'档案袋':['Document Envelope','書類袋'],'工作证':['Staff Badge','社員証'],'纸杯':['Paper Cups','紙コップ'],'品牌伞':['Branded Umbrella','ブランド傘'],'玻璃门与灯箱':['Glass Graphics & Lightbox','ガラス面・ライトボックス'],'办公室门牌':['Office Signs','室名サイン'],'企业汇报 PPT 模板':['Presentation Template','企業向けプレゼン資料'],
    '标志释义':['Logo Concept','ロゴの意図'],'标志网格':['Logo Grid','ロゴグリッド'],'指定中英文字体':['Chinese & Latin Type','中国語・欧文書体'],'背景配色':['Background Colours','背景色'],'标志反白':['Reversed Logo','白抜きロゴ'],'辅助图形':['Supporting Graphic','補助図形'],'笔记本与办公笔':['Notebook & Pen','ノートとペン'],'办公用笔':['Office Pen','オフィス用ペン'],'信封':['Envelopes','封筒'],'信纸':['Letterhead','レターヘッド'],'旗帜':['Flags','フラッグ'],'前台':['Reception','受付'],'玻璃门色带':['Glass Door Graphic','ガラス扉のグラフィック'],'户外灯箱':['Outdoor Lightbox','屋外ライトボックス'],'户外广告牌':['Billboards','屋外看板'],'车身广告':['Vehicle Graphics','車両広告'],'门牌':['Door Signs','室名サイン'],
    '角色三视造型':['Character Views','キャラクター三面図'],'表情系统':['Expression System','表情展開'],'宣传视觉':['Campaign Graphic','告知ビジュアル'],'角色造型与三视图':['Character Views','キャラクター三面図'],'表情与动作':['Expressions & Poses','表情とポーズ'],'系列包装':['Packaging Series','パッケージ展開'],'宣传物料':['Communication Materials','告知媒体'],
    '耿耿｜三维角色':['Geng Geng | 3D Character','耿耿｜3Dキャラクター'],'耿耿｜动作与姿态':['Geng Geng | Poses','耿耿｜ポーズ展開'],'耿耿｜二维表情包':['Geng Geng | Stickers','耿耿｜2Dスタンプ'],'耿耿｜周边应用':['Geng Geng | Merchandise','耿耿｜グッズ展開'],'劳动节主题海报':['Labour Day Poster','労働節ポスター'],'生活主题海报':['Lifestyle Posters','ライフスタイルのポスター'],'主题造型海报':['Costume Posters','衣装バリエーションのポスター'],'角色动画画面':['Character Animation Stills','キャラクターアニメの静止画'],'角色场景画面':['Character Scene Stills','キャラクター場面の静止画'],'商业广告画面':['Commercial Film Stills','広告映像の静止画'],'企业网站界面':['Company Website Design','企業サイトのデザイン'],'绿小马｜造型变化':['Green Pony | Variations','緑のポニー｜デザイン展開'],'绿小马｜表情包':['Green Pony | Stickers','緑のポニー｜スタンプ'],'绿小马｜宣传视觉':['Green Pony | Campaign','緑のポニー｜告知ビジュアル']
  };
  const specs=(prefix,start,names)=>names.map((name,i)=>({name,pic:`https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/${prefix}-${String(start+i).padStart(2,'0')}.webp`,page:String(start+i).padStart(2,'0')}));
  const cases=[
    {slug:'geng',name:'耿介传媒',latin:'GLORY MEDIA',jp:'耿介メディア',summary:triple('从胶片标志的完整 VIS，到吉祥物「耿耿」的造型、表情、海报与传播画面，再延伸到企业网站和汇报模板，按同一品牌项目完整呈现。','The VIS identity, Geng Geng mascot, expressions, posters, moving-image stills, website and presentation design are presented together as one brand project.','フィルムを着想源としたVISから、マスコット「耿耿」の造形・スタンプ・ポスター・映像の静止画、企業サイトまで、一つのブランド事例として掲載。'),chapters:[{title:triple('01 基础识别系统','01 Identity System','01 基本デザインシステム'),note:triple('标志、比例、字色、组合与禁用规范','Logo, typography, colours and usage rules','ロゴ・書体・色彩・使用規定'),plates:specs('geng',2,gengBasics)},{title:triple('02 办公与空间应用','02 Applications','02 媒体・空間への展開'),note:triple('名片、文具、周边及场景导视','Stationery, merchandise and wayfinding','事務用品・ノベルティ・サイン'),plates:specs('geng',11,gengUses)},{title:triple('03 耿耿｜角色系统','03 Geng Geng | Character System','03 耿耿｜キャラクター'),note:triple('三维造型、逐帧角色表情与衍生周边','3D views, frame-by-frame character animation and merchandise','3D造形・コマ撮りアニメーション・グッズ'),plates:[{name:'耿耿｜三维角色',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-3d.webp',page:'IP 01'},{name:'耿耿｜动作与姿态',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-poses.webp',page:'IP 02'},{name:'耿耿｜周边应用',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-merch.webp',page:'IP 03'}]},{title:triple('04 耿耿｜海报与影像传播','04 Posters & Motion','04 ポスター・映像展開'),note:triple('原作中的主题海报、动画与广告截帧；PDF 未附可播放的原片','Posters and film stills from the portfolio; the source PDF contains no playable video','ポスターと映像の静止画。元のPDFには再生可能な動画は含まれていません'),plates:[{name:'劳动节主题海报',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-poster-labor.webp',page:'AD 01'},{name:'生活主题海报',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-posters-daily.webp',page:'AD 02'},{name:'主题造型海报',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-posters-costume.webp',page:'AD 03'},{name:'角色动画画面',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-film-frames.webp',page:'FILM 01'},{name:'角色场景画面',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-film-variants.webp',page:'FILM 02'},{name:'商业广告画面',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-ad-frames.webp',page:'FILM 03'}]},{title:triple('05 网站与企业传播','05 Digital & Corporate','05 ウェブ・企業向け制作'),note:triple('耿介传媒网页设计及企业汇报模板','Website design and company presentation','企業サイトとプレゼン資料'),plates:[{name:'企业网站界面',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-website.webp',page:'WEB'},{name:'企业汇报 PPT 模板',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-ppt.webp',page:'PPT'}]}]},
    {slug:'bowu',name:'博物文化',latin:'MUSEUM CLOUD',jp:'博物文化',summary:triple('完整 VIS 手册之后，继续展示「绿小马」角色的造型变化、表情包与宣传视觉。表情包是品牌 IP 的实际传播应用，不应被省略。','The complete VIS manual is followed by the Green Pony character variants, sticker expressions and campaign graphics as part of the brand IP system.','VISマニュアルに続き、「緑のポニー」のデザイン展開・スタンプ・告知ビジュアルを、ブランドIPの一部として掲載。'),chapters:[{title:triple('01 基础识别系统','01 Identity System','01 基本デザインシステム'),note:triple('标志释义、比例、颜色、字体和辅助图形','Logo rationale, grid, colour, type and supporting motif','ロゴの意図・グリッド・色彩・書体・補助図形'),plates:specs('bowu',2,bowuBasics)},{title:triple('02 办公用品系统','02 Stationery','02 事務用品'),note:triple('名片、证件、文具、信封、纸杯与包装','Cards, badges, stationery and packaging','名刺・社員証・文具・封筒・紙コップなど'),plates:specs('bowu',9,bowuOffice)},{title:triple('03 环境与传播应用','03 Environmental Applications','03 空間・広告への展開'),note:triple('前台、门面、户外、车身及导视','Reception, signage, outdoor and vehicle graphics','受付・サイン・屋外広告・車両'),plates:specs('bowu',18,bowuSpace)},{title:triple('04 绿小马｜品牌 IP 延展','04 Green Pony | Brand IP','04 緑のポニー｜ブランドIP'),note:triple('角色三视图、造型变化、表情包与传播画面','Character views, variations, sticker expressions and campaign graphics','三面図・デザイン展開・スタンプ・告知ビジュアル'),plates:[{name:'角色三视造型',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/bowu-pony-views.webp',page:'IP 01'},{name:'绿小马｜造型变化',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/bowu-pony-alt.webp',page:'IP 02'},{name:'绿小马｜表情包',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/bowu-pony-expressions.webp',page:'IP 03'},{name:'绿小马｜宣传视觉',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/bowu-pony-campaign.webp',page:'IP 04'}]}]},
    {slug:'water',name:'杭州水务｜水圆圆',latin:'HANGZHOU WATER · CHARACTER',jp:'杭州水務｜水円円',summary:triple('水圆圆的角色造型与品牌应用，延伸为二十二款可循环播放的动态表情，涵盖日常对话和水务主题。','Shui Yuanyuan extends from character design into twenty-two looping animated stickers for everyday conversation and water themed communication.','キャラクターデザインから、日常会話と水道事業のテーマを表現する22種類の動くスタンプへ展開。'),chapters:[{title:triple('角色与应用','Character & Applications','キャラクターと展開'),note:triple('角色造型、动态表情与品牌延展','Character design, animated stickers and applications','キャラクター造形・動くスタンプ・ブランド展開'),plates:[{name:'角色造型与三视图',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/water-expressions.webp',page:'01'},{name:'表情与动作',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/water-packaging.webp',page:'02'},{name:'系列包装',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/water-logo.webp',page:'03'},{name:'宣传物料',pic:'https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/water-merch.webp',page:'04'}]}]}
  ];
  const make=(tag,cls)=>{let el=document.createElement(tag);if(cls)el.className=cls;return el};
  function mark(el,value){el.classList.add('brand-i18n');el.dataset.i18nManaged='';el.dataset.zh=value.zh;el.dataset.en=value.en;el.dataset.ja=value.ja;el.textContent=value.zh;return el}
  const sourceImage=(src,alt,cls)=>{let img=make('img',cls);img.src=src;img.alt=alt;img.loading='lazy';return img};
  function makeHero(project,mast){
    const hero=make('div','brand-editorial-hero brand-editorial-hero--'+project.slug);
    const art=make('div','brand-editorial-art');art.setAttribute('aria-label',project.name+' 品牌图形与角色的组合展示');
    const orbit=make('div','brand-editorial-orbit');orbit.setAttribute('aria-hidden','true');
    const seal=make('div','brand-editorial-seal');
    if(project.slug==='geng'){
      seal.append(sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-logo.webp','耿介传媒原标志'));
      art.append(orbit,sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-poster-labor.webp','耿耿主题海报','brand-editorial-poster'),sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-cutout.webp','耿耿原作角色','brand-editorial-character'),seal);
      art.append(sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-motion/head-happy.webp?v=67','耿耿透明底开心头像','brand-editorial-emote brand-editorial-emote--one'),sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-motion/head-defiant.webp?v=67','耿耿透明底不服气头像','brand-editorial-emote brand-editorial-emote--two'));
    }else if(project.slug==='bowu'){
      seal.append(sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/bowu-logo.webp','博物文化原标志'));
      art.append(orbit,sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/bowu-pony-campaign.webp','绿小马宣传视觉','brand-editorial-poster'),sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/bowu-pony-cutout.webp','绿小马原作角色','brand-editorial-character'),seal);
      art.append(extracted('pony-expression-12.png','绿小马原作表情','brand-editorial-emote brand-editorial-emote--one'),extracted('pony-expression-17.png','绿小马原作表情','brand-editorial-emote brand-editorial-emote--two'));
    }else{
      art.append(orbit,extracted('water-pose-06.png','水圆圆原作独立角色','brand-editorial-character'),sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/water-stickers/hello.gif','水圆圆动态表情：你好呀','brand-editorial-water-small'));
    }
    const flourish=make('span','brand-editorial-flourish');flourish.textContent='❦ 01 · 02 · 03 ❦';art.append(flourish);
    hero.append(mast,art);return hero;
  }
  function makeIdentity(project){
    if(project.slug==='water')return null;
    const isGeng=project.slug==='geng';const spread=make('div','brand-identity-spread');
    const index=make('div','brand-identity-heading');index.append(mark(make('span'),triple('系统识别','IDENTITY SYSTEM','識別システム')),mark(make('h5'),triple('一套标志如何延伸到真实场景','From a mark to a working system','ロゴから実際の利用場面へ')));
    const columns=make('div','brand-identity-columns');
    const logo=make('div','brand-identity-mark');logo.append(sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/'+(isGeng?'geng':'bowu')+'-logo.webp',project.name+' 原标志'));
    const swatches=make('div','brand-identity-colours');const ink=make('span','brand-swatch brand-swatch--ink');const accent=make('span','brand-swatch brand-swatch--accent');const pale=make('span','brand-swatch brand-swatch--pale');swatches.append(ink,accent,pale);
    const swatchCaption=mark(make('small'),triple('标志 · 标准色 · 延展','MARK · COLOUR · APPLICATION','ロゴ・色彩・展開'));logo.append(swatches,swatchCaption);
    const application=make('div','brand-identity-application');application.append(extracted((isGeng?'geng':'bowu')+'-card-1.png',project.name+' 名片正面原作','brand-identity-card brand-identity-card--one'),extracted((isGeng?'geng':'bowu')+'-card-2.png',project.name+' 名片背面原作','brand-identity-card brand-identity-card--two'));
    const code=make('span','brand-identity-code');code.textContent=isGeng?'C73 M20 Y23 K0  /  C75 M72 Y14 K0':'C34 M90 Y90 K1  /  K100';application.append(code);
    columns.append(logo,application);spread.append(index,columns);return spread;
  }
  function makeCharacterFeature(project){
    const isGeng=project.slug==='geng';const panel=make('div','brand-character-feature');
    const numeral=make('span','brand-character-index');numeral.textContent=isGeng?'G / 01':'M / 01';
    const ring=make('span','brand-character-ring');ring.setAttribute('aria-hidden','true');
    const figure=sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/'+(isGeng?'geng-geng-cutout.webp':'bowu-pony-cutout.webp'),isGeng?'耿耿原作独立角色':'绿小马原作独立角色','brand-character-figure');
    const label=make('div','brand-character-label');
    label.append(mark(make('small'),triple('品牌角色 / 原作造型','BRAND CHARACTER / ORIGINAL ART','ブランドキャラクター / 原画')),
      mark(make('strong'),triple(isGeng?'耿耿':'绿小马',isGeng?'GENG GENG':'GREEN PONY',isGeng?'耿耿':'緑のポニー')),
      mark(make('p'),triple(isGeng?'从人物造型到表情、动作与主题传播，形成可延展的品牌形象。':'由标准造型展开三视图、表情与宣传应用，建立品牌的亲和力。',isGeng?'A character developed through poses, expressions and campaign imagery.':'A character system carried into views, expressions and campaign materials.',isGeng?'造形からポーズ・表情・告知媒体へ展開するブランドキャラクター。':'基本造形から三面図・表情・告知媒体へと広がるキャラクター。')));
    const folio=make('span','brand-character-folio');folio.textContent='❧  ART · IDENTITY · STORY  ❧';
    panel.append(numeral,ring,figure,label,folio);return panel;
  }
  function extracted(name,alt,cls){return sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/composed/'+name,alt,cls)}
  const waterStickers=[
    ['日常对话','Everyday Conversation','日常の会話',[
      ['hello','你好呀','Hello','こんにちは'],['goodbye','再见哦','See you','またね'],['handshake','握手','Handshake','握手'],['thanks','谢谢','Thank you','ありがとう'],['okay','OK','OK','OK'],['thumbs-up','为你点赞','Well done','いいね'],
      ['happy','好开心呀','So happy','うれしい'],['moved','好感动呀','So touched','感動した'],['shy','好害羞呀','So shy','照れちゃう'],['sorry','好对不起呀','I am sorry','ごめんなさい'],
      ['poor','好可怜呀','Feeling down','しょんぼり'],['cheer','加油呀','You can do it','がんばって'],['welcome','热烈欢迎','Welcome','ようこそ'],['holiday','节日快乐','Happy holidays','よい祝日を']
    ]],
    ['水务主题','Water & Community','水道と地域',[
      ['water-source','饮水思源','Remember the source','水の恵みを忘れずに'],['save-water','节约用水','Save water','節水しよう'],['conduit','引水不沾水，通水不落水','Deliver water without waste','水を無駄にせず届ける'],['ballast','压舱石','A steady foundation','確かな支え'],
      ['ace','王牌军','Ace team','精鋭チーム'],['pioneer','开拓者','Pioneer','開拓者'],['water-spirit','原水精神','Waterworks spirit','水道に込めた志'],['complete','圆圆满满','A full circle','円満に']
    ]]
  ];
  function makeWaterStickerSpread(){
    const spread=make('div','brand-expression-spread brand-expression-spread--water brand-water-stickers');
    const intro=make('div','brand-expression-intro');intro.append(mark(make('small'),triple('水圆圆 / 动态表情系统','SHUI YUANYUAN / ANIMATED STICKERS','水円円 / 動くスタンプ')),
      mark(make('h6'),triple('让角色在对话中动起来','A character in motion','会話の中で動き出すキャラクター')),
      mark(make('p'),triple('二十二款原作动态表情，保留透明背景与完整动作。','Twenty-two original animated stickers, shown with their transparent backgrounds and full motion.','22種類のオリジナル動くスタンプを、透過背景と動きを保ったまま掲載。')));
    spread.append(intro);
    let index=0;waterStickers.forEach(([zh,en,ja,items])=>{
      const group=make('section','brand-water-sticker-group');const heading=make('div','brand-water-sticker-heading');heading.append(mark(make('h6'),triple(zh,en,ja)),make('span'));heading.lastChild.textContent=String(++index).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');group.append(heading);
      const figures=make('div','brand-expression-figures');items.forEach(([slug,cn,english,japanese])=>{
        const figure=make('figure','brand-expression-figure');const img=sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/water-stickers/'+slug+'.gif','水圆圆动态表情：'+cn);img.decoding='async';figure.append(img,mark(make('figcaption'),triple(cn,english,japanese)));figures.append(figure)
      });group.append(figures);spread.append(group)
    });return spread;
  }
  const gengStickerGroups=[
    {heading:triple('01 / 头像表情','01 / Expressive portraits','01 / 顔の表情'),note:triple('保留原作神态，去除黄色圆底与描边。','Original expressions without the yellow disc or outline.','原作の表情を生かし、黄色い背景と輪郭線を取り除きました。'),items:[
      ['head-surprise','惊讶','Surprised','びっくり','surprise'],['head-defiant','不服气','Defiant','負けず嫌い','defiant'],['head-happy','开心','Delighted','うれしい','delight'],['head-sad','委屈','Feeling blue','しょんぼり','melancholy'],['head-sleepy','困了','Sleepy','眠たい','dreamy'],['head-curious','好奇','Curious','気になる','curious'],['head-proud','小得意','Feeling proud','ちょっと得意げ','playful']
    ]},
    {heading:triple('02 / 基础动作','02 / Everyday gestures','02 / 日常のしぐさ'),note:triple('挥手、欢呼、致谢与道歉，保留完整人物动作。','A full-body vocabulary of greetings, celebration, gratitude and apology.','あいさつ・喜び・感謝・謝意を全身の動きで表現。'),items:[
      ['basic-hello','你好','Hello','こんにちは','wave'],['basic-cheer','太棒了','Hooray','やった！','jump'],['basic-thanks','谢谢','Thank you','ありがとう','bow'],['basic-sorry','对不起','Sorry','ごめんなさい','bow']
    ]},
    {heading:triple('03 / 传媒工作','03 / Media production','03 / 映像制作'),note:triple('把拍摄、打板、剪辑与录音转化成耿耿的工作表情。','Camera, slate, edit and sound work become character-led reactions.','撮影・カチンコ・編集・録音をキャラクターの動きに。'),items:[
      ['media-camera','开机拍摄','Rolling camera','撮影開始','camera'],['media-clapboard','准备开拍','Action!','本番いきます','clap'],['media-edit','剪辑中','In the edit','編集中','edit'],['media-sound','收音中','Sound check','音声チェック','listen']
    ]}
  ];
  function makeGengStickerSpread(){
    const spread=make('div','brand-expression-spread brand-expression-spread--geng brand-geng-stickers');
    const intro=make('div','brand-expression-intro');intro.append(
      mark(make('small'),triple('耿耿 / 逐帧角色动画','GENG GENG / FRAME ANIMATION','耿耿 / コマ撮りアニメーション')),
      mark(make('h6'),triple('从表情，到工作现场','From feeling to filmmaking','表情から、映像の現場へ')),
      mark(make('p'),triple('头像表情、基础动作与传媒工作三组透明底逐帧循环。增加过渡姿势，并调整动作的预备、强调与收尾节奏。','Three transparent frame animation sets—expressions, everyday gestures and media production—with added in-between poses and paced anticipation, accent and settle.','表情・日常のしぐさ・映像制作の三組を透過アニメーションで展示。中割りを増やし、予備動作から見せ場、余韻までの間を整えました。')));
    spread.append(intro);
    gengStickerGroups.forEach((group,i)=>{
      const section=make('section','geng-sticker-group');section.dataset.group=String(i+1);
      const header=make('div','geng-sticker-group-head');header.append(mark(make('h6'),group.heading),mark(make('p'),group.note));
      const figures=make('div','brand-expression-figures');
      group.items.forEach(([slug,zh,en,ja,motion])=>{
        const figure=make('figure','brand-expression-figure geng-sticker');figure.dataset.motion=motion;
        const stage=make('div','geng-sticker-stage');const img=sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-motion/'+(slug==='basic-hello'?'hello':slug)+'.webp?v=67','耿耿：'+zh,'geng-sticker-image');img.decoding='async';stage.append(img);
        figure.append(stage,mark(make('figcaption'),triple(zh,en,ja)));figures.append(figure);
      });section.append(header,figures);spread.append(section);
    });return spread;
  }
  function makeExpressionSpread(project){
    if(project.slug==='water')return makeWaterStickerSpread();
    if(project.slug==='geng')return makeGengStickerSpread();
    const kind=project.slug,people=kind==='bowu'?'绿小马':'水圆圆';
    const names=Array.from({length:23},(_,i)=>`pony-expression-${String(i+1).padStart(2,'0')}.png`);
    const spread=make('div','brand-expression-spread brand-expression-spread--'+kind);
    const intro=make('div','brand-expression-intro');intro.append(mark(make('small'),triple('从原作中逐个提取','EXTRACTED FROM THE ORIGINAL ART','原画から個別に抽出')),
      mark(make('h6'),triple(kind==='geng'?'情绪，有一整套表情':kind==='bowu'?'让角色进入每一次对话':'一个角色的多种叙事姿态',kind==='geng'?'A LANGUAGE OF EXPRESSIONS':kind==='bowu'?'A CHARACTER IN EVERY CONVERSATION':'A CHARACTER IN MOTION',kind==='geng'?'表情から広がるキャラクター表現':kind==='bowu'?'会話へと広がるキャラクター':'さまざまな場面のキャラクター')),
      mark(make('p'),triple(kind==='geng'?'从原作提取九种情绪表情，按统一尺寸与基线排列为完整的三行三列。':kind==='bowu'?'不同动作与神态各自独立，再用统一的留白与线饰串成系列。':'从原作画面提取不同动作，重新编排为连续的角色谱系。',
      'Individual original character poses are arranged as a new editorial sequence.','原画の表情やポーズを一つずつ切り出し、新たな構成に並べました。')));
    const figures=make('div','brand-expression-figures');names.forEach((name,i)=>{let figure=make('figure','brand-expression-figure');figure.append(extracted(name,people+' 原作表情 '+String(i+1)));let label=make('figcaption');label.textContent=String(i+1).padStart(2,'0');figure.append(label);figures.append(figure)});
    spread.append(intro,figures);return spread;
  }
  function makeOutfitSpread(){
    const wrap=make('div','brand-outfit-spread');const copy=make('div','brand-outfit-copy');
    copy.append(mark(make('small'),triple('造型延展','CHARACTER VARIATIONS','衣装バリエーション')),
      mark(make('h6'),triple('同一个耿耿，两个造型','One character, two identities','一つのキャラクター、二つの姿')),
      mark(make('p'),triple('摄影造型与古风造型各自从原作提取，再放在统一尺度中对照。','The original filmmaker and historical variants are isolated and presented at one scale.','撮影用と古風の二つの原画を切り出し、同じ基準で比較します。')));
    const row=make('div','brand-outfit-row');[['https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-geng-cutout.webp','摄影造型'],['https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/composed/geng-outfit-04.png','古风造型']].forEach(([src,alt])=>{let item=make('div','brand-outfit-item');item.append(sourceImage(src,'耿耿 '+alt));row.append(item)});
    wrap.append(copy,row);return wrap;
  }
  function makePosterSpread(){
    const wrap=make('div','brand-poster-spread');const intro=make('div','brand-poster-intro');
    intro.append(mark(make('small'),triple('九张独立画面','NINE ORIGINAL POSTERS','九つのポスター')),
      mark(make('h6'),triple('一位角色，多种传播语境','ONE CHARACTER, MANY WORLDS','一つのキャラクター、さまざまな世界')));
    const names=['labour','camper','music','pilot','coffee','costume-red','costume-blue','costume-black','costume-green'];const wall=make('div','brand-poster-wall');
    names.forEach((name,i)=>{const src=`https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/composed/geng-poster-${name}.jpg`;let button=make('button','brand-poster-item');button.type='button';button.setAttribute('aria-label','查看耿耿原作海报 '+(i+1));button.append(sourceImage(src,'耿耿原作独立海报 '+(i+1)));button.onclick=()=>detailOpen({series:'brand',title:'耿耿｜主题海报 '+(i+1),titleEn:'Geng Geng · Poster '+(i+1),titleJa:'耿耿｜ポスター '+(i+1),description:'从原作中单独提取的完整海报。',cover:src});wall.append(button)});
    wrap.append(intro,wall);return wrap;
  }
  function makeFilmSpread(){
    const wrap=make('div','brand-film-spread');const label=make('div','brand-film-label');label.append(mark(make('small'),triple('影像画面 / 原作节选','MOVING IMAGE / SELECTED STILLS','映像作品 / 静止画')),
      mark(make('h6'),triple('角色走进镜头','THE CHARACTER ON SCREEN','スクリーンの中のキャラクター')),
      mark(make('p'),triple('按镜头节奏重新编排独立画面。原 PDF 只有静帧，未附可播放影片。','Original film stills arranged as a sequence. The supplied PDF contains no playable film.','元の映像の静止画を連続する構成に再編集。PDFに再生可能な動画は含まれていません。')));
    const reel=make('div','brand-film-reel');for(let i=1;i<=5;i++){let frame=make('figure','brand-film-frame');frame.append(extracted(`geng-film-${String(i).padStart(2,'0')}.jpg`,'耿耿影像原作画面 '+i),make('figcaption','',null));frame.lastChild.textContent='FRAME / '+String(i).padStart(2,'0');reel.append(frame)}wrap.append(label,reel);return wrap;
  }
  function makeDigitalSpread(){
    const block=make('div','brand-digital-spread');const intro=make('div','brand-digital-copy');intro.append(mark(make('small'),triple('数字触点与企业传播','DIGITAL & CORPORATE','ウェブ・企業向け制作')),
      mark(make('h6'),triple('从品牌角色，进入网站与汇报','From identity to digital touchpoints','ブランドからウェブ・資料へ')));
    const browser=make('div','brand-browser');const chrome=make('div','brand-browser-chrome');chrome.textContent='✦  GLORY MEDIA  /  WEB';browser.append(chrome,sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-website.webp','耿介传媒原作网站界面局部'));
    const slide=make('div','brand-digital-slide');slide.append(sourceImage('https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/brand/geng-ppt.webp','耿介传媒企业汇报模板局部'));block.append(intro,browser,slide);return block;
  }
  function renderBrandSystems(target){
    const root=make('div','brand-systems');root.setAttribute('aria-label','完整品牌视觉案例');
    cases.forEach((project,index)=>{
      const story=make('article','brand-system brand-system--'+project.slug);story.id='brand-'+project.slug;
      const mast=make('header','brand-system-head');const over=make('span','brand-system-overline');over.textContent=`0${index+1} / BRAND IDENTITY · ブランドデザイン`;
      const title=make('h4');title.textContent=project.name;const roman=make('small');roman.textContent=`${project.latin} / ${project.jp}`;title.append(roman);
      const desc=mark(make('p','brand-system-summary'),project.summary);
      const count=make('span','brand-system-count');count.textContent=project.slug==='water'?'CHARACTER · APPLICATION':'VIS  /  IP  /  APPLICATION';
      const claims=make('div','brand-editorial-claims');
      const claimTexts=project.slug==='geng'?[triple('品牌识别','VIS IDENTITY','ブランド識別'),triple('角色与表情','CHARACTER & EXPRESSIONS','キャラクターと表情'),triple('海报与传播','POSTERS & DIGITAL','ポスターとウェブ')]:
        project.slug==='bowu'?[triple('视觉识别','VIS IDENTITY','ブランド識別'),triple('绿小马 IP','GREEN PONY IP','緑のポニー'),triple('空间与传播','SPACE & CAMPAIGN','空間と広告')]:
        [triple('角色设定','CHARACTER DESIGN','キャラクター設計'),triple('动态表情','ANIMATED STICKERS','動くスタンプ'),triple('包装与物料','PACKAGING & MATERIALS','パッケージと媒体')];
      claimTexts.forEach((value,i)=>{const row=make('div','brand-editorial-claim');row.append(make('span','brand-editorial-claim-number'),mark(make('strong'),value));row.firstChild.textContent=String(i+1).padStart(2,'0');claims.append(row)});
      mast.append(over,title,desc,claims,count);story.append(makeHero(project,mast));
      const identity=makeIdentity(project);if(identity)story.append(identity);
      const systemCount=project.slug==='geng'?2:project.slug==='bowu'?3:0;
      let manual=null;if(systemCount){manual=make('details','brand-manual');const summary=make('summary');const glyph=make('i');glyph.textContent='❧';summary.append(mark(make('span'),triple('原始 VIS 手册图版 · 展开核对规范','Original VIS manual · source reference','VIS原本の図版 · 規定を確認')),glyph);manual.append(summary);story.append(manual)}
      const nav=make('nav','brand-chapter-nav');nav.setAttribute('aria-label',project.name+' 项目目录');
      project.chapters.forEach((chapter,c)=>{let a=make('a');a.href=`#${project.slug}-chapter-${c+1}`;mark(a,chapter.title);if(c<systemCount)a.addEventListener('click',()=>{manual.open=true});nav.append(a)});story.insertBefore(nav,manual||story.lastChild.nextSibling);
      project.chapters.forEach((chapter,c)=>{
        const section=make('section','brand-chapter '+(c<systemCount?'brand-chapter--manual':'brand-chapter--curated brand-chapter--'+project.slug+'-'+c));section.id=`${project.slug}-chapter-${c+1}`;
        const line=make('div','brand-chapter-heading');line.append(mark(make('h5'),chapter.title),mark(make('p'),chapter.note));section.append(line);
        if((project.slug==='geng'&&c===2)||(project.slug==='bowu'&&c===3))section.append(makeCharacterFeature(project));
        if(c>=systemCount){
          if(project.slug==='geng'&&c===2)section.append(makeOutfitSpread(),makeExpressionSpread(project));
          if(project.slug==='geng'&&c===3)section.append(makePosterSpread(),makeFilmSpread());
          if(project.slug==='geng'&&c===4)section.append(makeDigitalSpread());
          if(project.slug==='bowu'&&c===3)section.append(makeExpressionSpread(project));
          if(project.slug==='water'&&c===0)section.append(makeExpressionSpread(project));
          story.append(section);return;
        }
        const gallery=make('div','brand-plate-gallery');
        chapter.plates.forEach((plate,i)=>{
          const wide=/geng-website|geng-geng-film|geng-geng-ad-frames|geng-geng-posters-daily|geng-geng-posters-costume|geng-geng-merch|bowu-pony-expressions/.test(plate.pic);
          const button=make('button','brand-plate'+(wide?' brand-plate--wide':''));button.type='button';button.setAttribute('aria-label',project.name+' '+plate.name+' · 放大查看');
          const media=make('span','brand-plate-media');const img=make('img');img.src=plate.pic;img.alt=project.name+' · '+plate.name;img.loading='lazy';media.append(img);
          const caption=make('span','brand-plate-caption');const words=plateLabels[plate.name]||[plate.name,plate.name];const label=mark(make('span'),triple(plate.name,words[0],words[1]));const number=make('small');number.textContent=plate.page;caption.append(label,number);
          button.append(media,caption);button.onclick=()=>detailOpen({series:'brand',title:project.name+'｜'+plate.name,titleEn:project.latin+' · '+plate.name,titleJa:project.jp,description:project.summary.zh,cover:plate.pic});gallery.append(button);
        });section.append(gallery);(c<systemCount?manual:story).append(section)
      });root.append(story)
    });target.append(root);translateBrand(document.body.dataset.locale||'zh');
  }
  function translateBrand(locale){document.querySelectorAll('.brand-i18n').forEach(el=>{el.textContent=el.dataset[locale]||el.dataset.zh})}
  new MutationObserver(()=>translateBrand(document.body.dataset.locale||'zh')).observe(document.body,{attributes:true,attributeFilter:['data-locale']});
  window.renderBrandSystems=renderBrandSystems;
})();
