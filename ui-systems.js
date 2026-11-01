/* Interactive screen prototype built from Carey's individual source UI frames. */
(() => {
  const ASSETS=window.UI_ASSETS;
  const tr=(zh,en,ja)=>({zh,en,ja});
  const el=(tag,cls)=>{const node=document.createElement(tag);if(cls)node.className=cls;return node};
  const copy=(tag,value,cls)=>{const node=el(tag,cls);node.dataset.i18nManaged='';node.dataset.zh=value.zh;node.dataset.en=value.en;node.dataset.ja=value.ja;node.textContent=value[document.body.dataset.locale]||value.zh;return node};
  const image=(entry)=>{const node=el('img');node.src=entry.src;node.alt=entry.label;node.loading='lazy';return node};
  const cases=[
    {slug:'zinlo',title:'Zinlo',sub:tr('社交与匹配应用','Social & matching app','出会い・マッチングアプリ'),eyebrow:'01 / SOCIAL EXPERIENCE',
     statement:tr('从认识、探索到建立联系','From discovery to a first conversation','出会いから最初の会話まで'),
     intro:tr('以探索、筛选、匹配与消息为主线，呈现中英文两套界面的信息层级与操作反馈；登录、资料与账户管理构成完整的辅助路径。','Chinese and English screens trace discovery, filters, matching and messaging, supported by onboarding, profile and account flows.','中国語版と英語版の画面をもとに、探索・絞り込み・マッチング・メッセージまでを構成。登録、プロフィール、アカウント管理も展開。'),
     files:{zh:ASSETS['zinlo-zh'],en:ASSETS['zinlo-en']},
     paths:[
       {name:tr('进入与注册','Join & sign in','登録・ログイン'),note:tr('引导、登录与验证','Onboarding, sign-in and verification','導入、ログイン、認証'),terms:{zh:['启动 1','登录 1','核实 1'],en:['Logo','Sign In 1','Verify 1']}},
       {name:tr('发现与筛选','Explore & filter','探索・絞り込み'),note:tr('探索视图与条件弹层','Explore views and filter sheets','探索画面と条件設定'),terms:{zh:['探索 1','探索 2','筛选 2'],en:['Explore 1','Explore 2','Filter 2']}},
       {name:tr('匹配与对话','Match & connect','マッチング・会話'),note:tr('喜欢反馈、匹配和消息','Like, match and messaging','「いいね」、マッチ、メッセージ'),terms:{zh:['主页','匹配','信息'],en:['Home 1','Match','Messenger']}},
       {name:tr('个人与安全','Profile & settings','プロフィール・設定'),note:tr('资料、语言与安全','Profile, language and security','プロフィール、言語、セキュリティ'),terms:{zh:['简介 2','语言','安全'],en:['Profile 2','Language','Security']}}
     ],
     type:tr('中英文均以无衬线字形组织界面：姓名和页面标题建立首要识别，正文承载资料与对话，标签及时间退居辅助层。紫色用于主操作与状态反馈。','A sans-serif hierarchy gives names and page titles priority, body copy room for profiles and conversation, and metadata a quieter role. Purple marks primary actions and feedback.','サンセリフ体の階層で名前と見出しを明確にし、本文でプロフィールや会話を伝え、ラベルと時刻を補助情報に。紫を主要操作と状態表示に使用。'),
     palette:[['#b752ed','主操作 / ACTION'],['#e9e9ef','界面底色 / SURFACE'],['#f4a6d9','反馈色 / FEEDBACK'],['#242138','文字 / TYPE']]},
    {slug:'music',title:'乐音汇',sub:tr('音乐社区与创作应用','Music community & creation app','音楽コミュニティ・制作アプリ'),eyebrow:'02 / MUSIC EXPERIENCE',
     statement:tr('听见、交流，然后创作','Discover, connect and create','聴く、つながる、つくる'),
     intro:tr('从推荐、搜索与直播进入音乐社区，通过合唱、消息和演唱创作延伸到作品编辑与发布。同一界面结构分别呈现浅色与深色两套视觉。','From feed and live discovery to duet, messages, singing, editing and publishing, the same product structure is shown in light and dark themes.','おすすめ・検索・ライブから、デュエット、会話、歌唱、編集、投稿へ。ライトとダークの両テーマで同じ構造を展開。'),
     files:{light:ASSETS['music-light'],dark:ASSETS['music-dark']},
     paths:[
       {name:tr('内容发现','Feed & discovery','フィード・発見'),note:tr('推荐、关注、附近与搜索','Recommended, following, nearby and search','おすすめ、フォロー、近く、検索'),prefix:['01','02','03','04']},
       {name:tr('直播互动','Live & conversation','ライブ・交流'),note:tr('直播详情、在线成员与礼物','Live details, audience and gifts','配信詳細、参加者、ギフト'),prefix:['12','13','16','17']},
       {name:tr('关系与合唱','Messaging & duet','メッセージ・デュエット'),note:tr('好友、合唱邀请与聊天','Friends, duet and chat','友だち、デュエット、会話'),prefix:['19','20','21','24']},
     {name:tr('演唱与发布','Sing & publish','歌唱・投稿'),note:tr('选曲、歌词、编辑与发布','Songs, lyrics, editing and publishing','選曲、歌詞、編集、投稿'),prefix:['29','31','33','35']}
     ],
     type:tr('歌曲名和直播标题形成第一层信息，用户内容与互动操作构成第二层，播放量、评论和标签保持辅助层级。浅深两套界面沿用粉色主操作，以背景明度区分观看环境。','Song and live titles lead, user content and controls form the next level, and counts and tags remain secondary. Pink actions connect the light and dark themes.','曲名と配信タイトルを第一階層、投稿と操作を第二階層に配置。再生数やタグは補助情報とし、ライト・ダーク両テーマでピンクの操作色を共通化。'),
     palette:[['#f01767','主操作 / ACTION'],['#faf9f9','浅色 / LIGHT'],['#171824','深色 / DARK'],['#8b59cf','直播氛围 / LIVE']]}
  ];
  const find=(files,label)=>{const norm=v=>v.toLowerCase().replace(/[_–—-]/g,' ').replace(/\s+/g,' ').trim();return files.find(f=>norm(f.label)===norm(label))||files.find(f=>norm(f.label).startsWith(norm(label)))||files[0]};
  const byNumber=(files,n)=>files.find(f=>f.label.startsWith(String(n).padStart(2,'0'))) || files[0];
  const viewImage=(entry)=>{const figure=el('figure','ui-flow-image');figure.append(image(entry));const cap=el('figcaption');cap.textContent=entry.label;figure.append(cap);return figure};
  function zinloTerms(locale){return locale==='zh'?{
    splash:'启动 1',onboarding:'启动 2',onboarding2:'启动 3',sign:'登录 1',sign2:'登录 2',verify:'核实 1',verify2:'核实 2',password:'密码 1',password2:'密码 2',username:'用户名 1',username2:'用户名 2',basic:'基本信息',home:'主页',home2:'主页 2',like:'喜欢',dislike:'不喜欢',match:'匹配',explore:'探索 1',map:'探索 2',list:'探索 3',filter:'筛选 1',gender:'筛选 2',location:'筛选 3',messages:'信息',search:'搜索',call:'电话 1',call2:'电话 2',profile:'简介 1',profile2:'简介 2',settings:'设置',language:'语言',security:'安全',email:'邮箱 1',email2:'邮箱 2',changePassword:'更改密码 1',changePassword2:'更改密码 2',forgot:'忘记密码 1',newpassword:'新密码',camera:'相机'}:{
    splash:'Logo',onboarding:'Onboarding 1',onboarding2:'Onboarding 2',onboarding3:'Onboarding 3',sign:'Sign In 1',sign2:'Sign In 2',verify:'Verify 1',verify2:'Verify 2',password:'Password 1',password2:'Password 2',username:'Username 1',username2:'Username 2',basic:'Basic',home:'Home 1',home2:'Home 2',like:'Like',dislike:'Dislike',match:'Match',explore:'Explore 1',map:'Explore 2',list:'Explore 3',filter:'Filter 1',gender:'Filter 2',location:'Filter 3',messages:'Messenger',search:'Search',call:'Call 1',call2:'Call 2',profile:'Profile 1',profile2:'Profile 2',settings:'Settings',language:'Language',security:'Security',email:'Email 1',email2:'Email 2',changePassword:'Changepassword 1',changePassword2:'Changepassword 2',forgot:'Forgotpassword 1',newpassword:'Newpassword 1',camera:'Camera'} }
  const rect=(x,y,w,h,to,label,kind='navigate')=>({x,y,w,h,to,label,kind});
  function routes(def,key,entry,history){
    const paths=[];const add=(...r)=>paths.push(...r);
    if(def.slug==='music'){
      const num=Number(entry.label.slice(0,2));const go=n=>byNumber(def.files[key],n);
      const parent={2:1,3:1,4:1,5:4,6:5,7:5,8:5,9:1,10:9,11:10,12:1,13:12,14:13,15:13,16:13,17:13,18:12,19:1,20:19,21:20,22:21,23:19,24:19,25:1,26:25,27:25,28:1,29:28,30:29,31:30,32:31,33:32,34:33,35:33,36:35,37:35};
      const back=history.at(-1)||go(parent[num]||1);
      // Search has a right-hand Cancel; live sheets dismiss above the sheet.
      if([4,5,6,7,8].includes(num))add(rect(84,4,16,13,back,'取消搜索','back'));
      else if([10,11,14,15,16,17].includes(num))add(rect(0,7,100,36,back,'关闭弹层','back'));
      else if([13,18].includes(num))add(rect(88,3,12,13,back,'退出直播','back'));
      else if(num>1&&![2,3,9,12,19,25,28].includes(num))add(rect(0,3,15,11,back,'返回','back'));
      if([1,2,3,12,19,20,21,25,28].includes(num))add(rect(0,89,17,11,go(1),'推荐','tab'),rect(17,89,18,11,go(12),'直播','tab'),rect(37,87,25,13,go(28),'演唱','tab'),rect(65,89,17,11,go(19),'消息','tab'),rect(82,89,18,11,go(25),'我的','tab'));
      const map={
        1:[[2,7,22,10,go(2),'关注','tab'],[29,7,27,10,go(3),'附近','tab'],[86,7,13,11,go(4),'搜索'],[8,49,84,34,go(9),'观看作品']],
        2:[[1,7,19,10,go(1),'推荐','tab'],[54,7,19,10,go(3),'附近','tab'],[86,7,13,11,go(4),'搜索'],[8,20,84,65,go(9),'观看动态']],
        3:[[1,7,19,10,go(1),'推荐','tab'],[25,7,24,10,go(2),'关注','tab'],[86,7,13,11,go(4),'搜索'],[5,18,90,68,go(9),'观看作品']],
        4:[[3,7,78,10,go(5),'输入搜索词'],[5,18,89,10,go(5),'历史搜索'],[5,29,89,21,go(5),'搜索建议'],[5,58,89,30,go(5),'热搜词']],
        5:[[4,16,91,51,go(6),'查看搜索结果'],[75,89,25,11,go(6),'搜索']],
        6:[[4,18,28,9,go(6),'职业','tab'],[34,18,25,9,go(7),'伴奏','tab'],[63,18,27,9,go(8),'作者','tab'],[4,28,92,60,go(9),'观看作品']],
        7:[[4,18,28,9,go(6),'职业','tab'],[63,18,27,9,go(8),'作者','tab'],[4,28,74,60,go(29),'歌曲详情'],[80,28,20,60,go(30),'演唱']],
        8:[[4,18,28,9,go(6),'职业','tab'],[34,18,25,9,go(7),'伴奏','tab']],
        9:[[20,86,58,13,go(10),'评论']],
        10:[[5,44,90,40,go(11),'查看回复']],
        11:[[5,86,90,13,go(10),'发送回复','complete']],
        12:[[72,6,19,10,go(18),'声音直播'],[5,20,90,67,go(13),'进入直播']],
        13:[[0,4,30,12,go(14),'主播资料'],[68,4,20,13,go(16),'在线用户'],[4,15,65,15,go(15),'热门榜'],[83,89,17,11,go(17),'礼物']],
        14:[[5,43,90,10,go(13),'关注主播','complete']],
        15:[[5,53,90,38,go(14),'查看主播']],
        16:[[5,46,90,44,go(14),'查看在线用户']],
        17:[[76,89,24,11,go(13),'赠送礼物','complete']],
        18:[[4,4,60,14,go(16),'在线用户'],[82,89,18,11,go(17),'礼物']],
        19:[[0,5,19,12,go(20),'找朋友'],[79,5,20,12,go(20),'搜索朋友'],[5,35,90,11,go(20),'寻找朋友'],[5,46,90,11,go(23),'系统通知'],[5,57,90,30,go(24),'聊天']],
        20:[[4,17,28,16,go(21),'二重奏'],[35,17,30,16,go(24),'聊天'],[5,39,90,48,go(22),'发起邀请']],
        21:[[5,28,90,58,go(22),'合唱邀请']],
        22:[[4,28,92,58,go(24),'开始聊天']],
        24:[[12,89,72,10,go(24),'发送消息','stay']],
        25:[[93,4,7,9,go(27),'编辑个人资料'],[36,27,27,12,go(26),'粉丝']],
        28:[[85,5,14,12,go(4),'搜索歌曲'],[3,42,94,44,go(29),'选曲']],
        29:[[62,21,33,13,go(30),'开始演唱'],[5,45,88,39,go(30),'选择歌曲']],
        30:[[5,84,90,15,go(31),'开始演唱']],
        31:[[85,89,15,11,go(32),'完成录制']],
        32:[[24,88,58,12,go(33),'下一步编辑']],
        33:[[27,34,55,11,go(34),'选择封面'],[24,88,58,12,go(35),'下一步发布']],
        34:[[5,22,90,66,go(33),'选择封面','complete']],
        35:[[75,3,24,12,go(37),'发布作品'],[73,55,27,13,go(36),'编辑标签'],[73,84,27,13,go(37),'同步账号']],
        36:[[6,91,88,9,go(35),'完成标签','complete']],
        37:[[75,3,24,12,go(25),'完成发布','complete']]
      };
      (map[num]||[]).forEach(r=>add(rect(...r)));return paths;
    }
    const terms=zinloTerms(key),file=def.files[key];const at=k=>find(file,terms[k]);const is=k=>Boolean(terms[k])&&entry.src===at(k).src;
    const parent={home2:'home',match:'home',explore:'home',map:'explore',list:'explore',filter:'explore',gender:'filter',location:'filter',messages:'home',search:'messages',call:'messages',call2:'call',profile:'settings',profile2:'settings',settings:'home',security:'settings',email:'security',email2:'email',changePassword:'security',changePassword2:'changePassword',password:'sign',password2:'password',language:'settings',camera:'profile2',forgot:'sign',newpassword:'forgot'};
    const currentKey=Object.keys(terms).find(is);
    const back=history.at(-1)||at(parent[currentKey]||'home');
    if(!['splash','onboarding','onboarding2','onboarding3'].some(is))add(rect(0,0,17,10,back,'返回','back'));
    if(['home','explore','map','list','messages','settings'].some(is))add(rect(0,89,23,11,at('home'),'主页'),rect(24,89,23,11,at('explore'),'探索'),rect(48,89,22,11,at('messages'),'消息'),rect(72,89,28,11,at('settings'),'设置'));
    const steps=[['splash','onboarding'],['onboarding','onboarding2'],['onboarding2',terms.onboarding3?'onboarding3':'sign'],['onboarding3','sign'],['sign','sign2'],['sign2','verify'],['verify','verify2'],['verify2','password'],['password','password2'],['password2','username'],['username','username2'],['username2','basic'],['basic','home']];
    for(const [a,b] of steps)if(is(a))add(rect(9,73,82,24,at(b),'继续'));
    if(is('home'))add(rect(10,12,80,63,at('home2'),'查看个人资料'),rect(12,78,26,11,at('dislike'),'不喜欢','dislike'),rect(62,78,27,11,at('like'),'喜欢','like'));
    if(is('home2'))add(rect(9,84,31,12,at('dislike'),'不喜欢','dislike'),rect(61,84,31,12,at('like'),'喜欢','like'));
    if(is('like')||is('dislike'))add(rect(8,65,84,23,at(is('like')?'match':'home2'),'继续'));
    if(is('match'))add(rect(8,79,84,8,at('messages'),'发消息'),rect(25,88,50,8,at('home2'),'继续搜索','complete'));
    if(is('explore'))add(rect(35,4,31,10,at('list'),'列表'),rect(79,4,19,10,at('filter'),'筛选'),rect(3,15,20,14,at('map'),'地图'),rect(23,26,55,42,at('home2'),'查看用户'));
    if(is('map'))add(rect(5,19,88,67,at('home2'),'查看用户'),rect(37,4,28,10,at('list'),'列表'),rect(78,4,20,10,at('filter'),'筛选'));
    if(is('list'))add(rect(6,16,88,70,at('home2'),'查看用户'),rect(7,4,27,10,at('explore'),'附近'),rect(78,4,20,10,at('filter'),'筛选'));
    if(is('filter'))add(rect(5,35,90,17,at('gender'),'性别'),rect(5,52,90,20,at('location'),'位置'),rect(13,79,74,16,at('map'),'应用筛选'));
    if(is('gender')||is('location'))add(rect(10,65,80,26,at('filter'),'应用选项'));
    if(is('messages'))add(rect(75,3,24,14,at('search'),'搜索'),rect(7,18,86,70,at('call'),'联系人'));
    if(is('search'))add(rect(7,20,86,63,at('messages'),'打开消息'));
    if(is('call'))add(rect(6,66,44,30,at('messages'),'挂断','complete'),rect(50,66,44,30,at('call2'),'通话选项'));
    if(is('call2'))add(rect(6,66,44,30,at('messages'),'挂断','complete'));
    if(is('settings'))add(rect(34,10,32,20,at('profile2'),'编辑个人资料'),rect(5,39,90,9,at('security'),'安全'),rect(5,56,90,9,at('language'),'语言'));
    if(is('security'))add(rect(5,14,90,8,at('email'),'邮箱'),rect(5,23,90,8,at('changePassword'),'密码'));
    if(is('email'))add(rect(8,16,84,13,at('email2'),'输入邮箱'));
    if(is('email2'))add(rect(10,62,80,10,at('security'),'发送邮箱','complete'));
    if(is('changePassword'))add(rect(8,16,84,30,at('changePassword2'),'输入新密码'));
    if(is('changePassword2'))add(rect(10,62,80,10,at('security'),'保存密码','complete'));
    if(is('profile')||is('profile2'))add(rect(14,10,72,36,at('camera'),'更换照片'),rect(10,76,80,20,at('settings'),'保存资料','complete'));
    if(is('camera'))add(rect(11,75,78,18,at('profile2'),'拍摄完成','complete'));
    if(is('forgot'))add(rect(10,75,80,18,at('newpassword'),'找回密码'));
    if(is('newpassword'))add(rect(10,75,80,18,at('sign'),'重新登录','complete'));
    return paths;
  }
  function makeSimulator(def,key,host){
    const files=def.files[key];const history=[];let current=def.slug==='music'?byNumber(files,1):find(files,zinloTerms(key).home);
    const shell=el('div','ui-simulator'),header=el('div','ui-simulator-head');header.append(copy('span',tr('交互体验','INTERACTIVE EXPERIENCE','操作できるプロトタイプ')),copy('p',tr('直接点按手机中的页面区域，按流程体验界面。','Tap the screen to follow the interface flows.','画面内をタップして操作の流れを体験できます。')));
    const workspace=el('div','ui-simulator-workspace'),phone=el('div','ui-simulator-phone'),glass=el('div','ui-simulator-glass'),screenImg=image(current),hotspots=el('div','ui-hotspots'),speaker=el('span','ui-simulator-island');screenImg.loading='eager';glass.append(screenImg,hotspots,speaker);phone.append(glass);
    const panel=el('div','ui-simulator-panel'),locator=el('div','ui-simulator-locator'),name=el('strong'),counter=el('small'),hint=el('p','ui-simulator-hint');locator.append(name,counter);panel.append(locator,hint);
    const sceneHead=copy('span',tr('从这里选择体验路径','CHOOSE A FLOW','体験する流れを選択'),'ui-scene-heading');panel.append(sceneHead);
    const sceneButtons=el('div','ui-scene-buttons');panel.append(sceneButtons);
    const controls=el('div','ui-simulator-controls'),back=el('button'),restart=el('button');[back,restart].forEach(b=>b.type='button');back.append(copy('span',tr('❧ 返回','❧ Back','❧ 戻る')));restart.append(copy('span',tr('回到首页','Restart','最初に戻る')));controls.append(back,restart);panel.append(controls);
    const indexWrap=el('details','ui-simulator-index'),indexSummary=el('summary');indexSummary.append(copy('span',tr('所有界面索引','All designed screens','全画面の一覧')));indexWrap.append(indexSummary);const index=el('div','ui-simulator-index-grid');indexWrap.append(index);panel.append(indexWrap);
    workspace.append(phone,panel);shell.append(header,workspace);host.append(shell);
    let choiceTimer=null,choosing=false,suppressClick=false;
    const activate=(entry,record=true)=>{
      if(!entry)return;
      if(record&&current.src!==entry.src)history.push(current);
      current=entry;screenImg.src=entry.src;screenImg.alt=def.title+' · '+entry.label;name.textContent=entry.label;counter.textContent=String(files.findIndex(f=>f.src===entry.src)+1).padStart(2,'0')+' / '+files.length;
      hotspots.replaceChildren();const options=routes(def,key,entry,history);hint.textContent=[...new Set(options.filter(r=>r.kind!=='back').map(r=>r.label))].slice(0,8).join(' · ');
      options.forEach(r=>{const button=el('button','ui-hotspot');button.type='button';button.style.left=r.x+'%';button.style.top=r.y+'%';button.style.width=r.w+'%';button.style.height=r.h+'%';button.setAttribute('aria-label',r.label+'：'+r.to.label);button.onfocus=()=>{hint.textContent=r.label};button.onclick=()=>{if(suppressClick||choosing)return;if(r.kind==='back')goBack();else if(r.kind==='like'||r.kind==='dislike')choose(r.kind);else if(r.kind==='complete')finish(r.to);else if(r.kind==='tab')activate(r.to,false);else if(r.kind==='stay')hint.textContent=r.label;else activate(r.to)};hotspots.append(button)});
      phone.classList.remove('ui-sim-enter');void phone.offsetWidth;phone.classList.add('ui-sim-enter');index.querySelectorAll('button').forEach(b=>{const on=b.dataset.src===entry.src;b.classList.toggle('active',on);b.setAttribute('aria-current',on?'page':'false')});
      back.disabled=history.length===0&&!options.some(r=>r.kind==='back'&&r.to.src!==entry.src);
    };
    const goBack=()=>{clearTimeout(choiceTimer);choosing=false;const fallback=routes(def,key,current,[]).find(r=>r.kind==='back')?.to;const previous=history.pop()||fallback;if(previous&&previous.src!==current.src)activate(previous,false)};
    const finish=entry=>{const i=history.findLastIndex(item=>item.src===entry.src);if(i>=0)history.length=i;else history.length=0;activate(entry,false)};
    const choose=kind=>{if(def.slug!=='zinlo'||choosing)return;choosing=true;const origin=current,terms=zinloTerms(key);const get=k=>find(files,terms[k]);if(kind==='like')history.push(origin);activate(get(kind),false);choiceTimer=setTimeout(()=>{activate(kind==='like'?get('match'):origin,false);choosing=false},560)};
    const jump=entry=>{clearTimeout(choiceTimer);choosing=false;history.length=0;activate(entry,false)};
    const scenes=def.slug==='music'?[
      [tr('发现音乐','Discover','音楽を探す'),1],[tr('进入直播','Live','ライブ'),12],[tr('聊天合唱','Connect','つながる'),19],[tr('演唱发布','Create','歌って投稿する'),28]
    ]:[
      [tr('登录与注册','Join','登録・ログイン'),'sign'],[tr('探索附近','Explore','近くを探す'),'explore'],[tr('匹配聊天','Match','マッチング'),'home'],[tr('个人设置','Profile','プロフィール'),'settings']
    ];
    scenes.forEach(([label,target])=>{const button=el('button');button.type='button';button.append(copy('span',label));button.onclick=()=>jump(def.slug==='music'?byNumber(files,target):find(files,zinloTerms(key)[target]));sceneButtons.append(button)});
    files.forEach((entry,i)=>{const button=el('button');button.type='button';button.dataset.src=entry.src;button.textContent=String(i+1).padStart(2,'0')+' / '+entry.label;button.onclick=()=>{jump(entry);indexWrap.open=false};index.append(button)});
    back.onclick=goBack;restart.onclick=()=>jump(def.slug==='music'?byNumber(files,1):find(files,zinloTerms(key).home));
    let start=null;glass.addEventListener('pointerdown',e=>{if(def.slug!=='zinlo'||choosing)return;const terms=zinloTerms(key);if(current.src!==find(files,terms.home).src&&current.src!==find(files,terms.home2).src)return;start={x:e.clientX,y:e.clientY,id:e.pointerId}});
    glass.addEventListener('pointerup',e=>{if(!start||start.id!==e.pointerId)return;const dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.25){suppressClick=true;choose(dx>0?'like':'dislike');setTimeout(()=>suppressClick=false,450);e.preventDefault()}});
    glass.addEventListener('pointercancel',()=>start=null);
    activate(current,false);return {show:jump,files};
  }
  function buildCase(def){
    const root=el('article','ui-case ui-case--'+def.slug);root.id='ui-case-'+def.slug;
    const mast=el('div','ui-case-mast'),eyebrow=el('span','ui-case-kicker');eyebrow.textContent=def.eyebrow;const title=el('h4');title.textContent=def.title;title.append(copy('small',def.sub));const side=el('div','ui-case-statement');side.append(copy('strong',def.statement),copy('p',def.intro));mast.append(eyebrow,title,side);root.append(mast);
    const variant=el('div','ui-variant-switch'),simHost=el('div','ui-simulator-host');variant.setAttribute('role','group');variant.setAttribute('aria-label',def.slug==='zinlo'?'语言版本':'界面主题');const keys=Object.keys(def.files);let sim;
    const showcase=el('div','ui-feature-board ui-feature-board--prototype');showcase.append(variant,simHost);root.append(showcase);
    const heading=el('div','ui-journal-head');heading.append(copy('span',tr('产品结构与界面流程','PRODUCT FLOWS','画面構成と導線')),copy('p',tr('重点画面按照操作路径排布，保留原始界面的完整比例。','Key screens follow the user journey at their original proportions.','主要画面を操作の流れに沿って、元の比率のまま並べています。')));root.append(heading);
    const journeys=el('div','ui-journeys');root.append(journeys);
    const rules=el('div','ui-rules'),type=el('div','ui-typography');type.append(copy('small',tr('字形与信息层级','TYPE & INFORMATION HIERARCHY','文字と情報の階層')),el('span','ui-rules-glyph'),copy('h5',tr('让内容与操作各有重心','Hierarchy in use','情報と操作の優先順位')),copy('p',def.type));type.querySelector('.ui-rules-glyph').textContent='Aa';
    const colours=el('div','ui-colours');colours.append(copy('small',tr('界面取样色','COLOURS SAMPLED FROM UI','画面から抽出した色')));def.palette.forEach(([hex,label])=>{const row=el('div','ui-colour-row'),swatch=el('i');swatch.style.background=hex;row.append(swatch,el('span'),el('b'));row.children[1].textContent=label;row.children[2].textContent=hex.toUpperCase();colours.append(row)});rules.append(type,colours);root.append(rules);
    function display(key){variant.querySelectorAll('button').forEach(b=>{const on=b.dataset.key===key;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});simHost.replaceChildren();sim=makeSimulator(def,key,simHost);journeys.replaceChildren();def.paths.forEach((flow,i)=>{const section=el('section','ui-journey'),head=el('div','ui-journey-title'),n=el('span');n.textContent=String(i+1).padStart(2,'0');head.append(n,copy('h5',flow.name),copy('p',flow.note));const gallery=el('div','ui-journey-screens');const entries=def.slug==='zinlo'?flow.terms[key].map(x=>find(def.files[key],x)):flow.prefix.map(x=>byNumber(def.files[key],x));entries.forEach(entry=>gallery.append(viewImage(entry)));section.append(head,gallery);journeys.append(section)})}
    keys.forEach(key=>{const b=el('button');b.type='button';b.dataset.key=key;b.textContent=key==='zh'?'中文界面':key==='en'?'English UI':key==='light'?'浅色 LIGHT':'深色 DARK';b.onclick=()=>display(key);variant.append(b)});display(keys[0]);return root;
  }
  function buildHeal(){const root=el('article','ui-case ui-case--heal');root.id='ui-case-heal';const mast=el('div','ui-case-mast'),eyebrow=el('span','ui-case-kicker');eyebrow.textContent='03 / WELLBEING INTERFACE';const h=el('h4');h.textContent='Heal';h.append(copy('small',tr('冥想与声音体验','Meditation & sound','瞑想とサウンド')));const side=el('div','ui-case-statement');side.append(copy('strong',tr('让声音与自然景观一起引导情绪','A quieter place to listen','自然と音で気持ちを整える')),copy('p',tr('以森林意象串联声音内容、播放控制与睡眠记录。','Forest imagery connects sound content, playback controls and sleep tracking.','森のイメージを通じ、音声コンテンツ、再生操作、睡眠記録をつなぎます。')));mast.append(eyebrow,h,side);root.append(mast);const gallery=el('div','ui-heal-gallery');[['https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/design/heal-interface.webp','Heal · 播放与森林视觉'],['https://carey-olympus-private-preview.careyjustgo.chatgpt.site/assets/design/heal-details.webp','Heal · 内容与睡眠记录']].forEach(([src,label])=>gallery.append(viewImage({src,label})));root.append(gallery);const rules=el('div','ui-rules'),type=el('div','ui-typography');type.append(copy('small',tr('字形与信息层级','TYPE & INFORMATION HIERARCHY','文字と情報の階層')),el('span','ui-rules-glyph'),copy('h5',tr('在深色环境中保持平静与清晰','Calm, readable type','落ち着きと読みやすさ')),copy('p',tr('内容标题、播放操作与睡眠数据分层呈现；薄荷色按钮作为暗色界面中的视觉焦点。','Titles, playback controls and sleep data occupy distinct levels. Mint controls focus attention against the dark interface.','コンテンツ名、再生操作、睡眠データを階層化。ミント色の操作ボタンが暗色画面の焦点になります。')));type.querySelector('.ui-rules-glyph').textContent='Aa';const colour=el('div','ui-colours');colour.append(copy('small',tr('界面配色','COLOUR SYSTEM','カラーパレット')));[['#1e3430','DARK FOREST'],['#65c3ad','MINT ACTION'],['#e6f2e9','TYPE & DETAIL']].forEach(([hex,label])=>{const row=el('div','ui-colour-row'),swatch=el('i');swatch.style.background=hex;row.append(swatch,el('span'),el('b'));row.children[1].textContent=label;row.children[2].textContent=hex;colour.append(row)});rules.append(type,colour);root.append(rules);return root}
  function renderUiSystems(target){const root=el('div','ui-systems'),intro=el('div','ui-systems-intro');intro.append(copy('span',tr('界面设计 / 社交 · 音乐 · 声音','INTERFACE DESIGN / SOCIAL · MUSIC · SOUND','UIデザイン / 出会い・音楽・サウンド')),copy('p',tr('Zinlo 与乐音汇各设一部可直接操作的手机，展现主要路径与全部界面；下方以原作画面梳理产品流程。','Zinlo and Yueyinhui each include one interactive phone with their full screen sets. The original screens below map key flows.','Zinlo と楽音匯は、それぞれ一台の操作可能な端末で全画面を体験できます。下段では主な導線を紹介します。')));root.append(intro);cases.forEach(def=>root.append(buildCase(def)));root.append(buildHeal());target.append(root)}
  window.renderUiSystems=renderUiSystems;
})();
