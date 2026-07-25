const WORDS = [
  {id:1,cat:'인사·기본',hanzi:'你好',pinyin:'nǐ hǎo',koPron:'니 하오',ko:'안녕하세요',en:'hello'},
  {id:2,cat:'인사·기본',hanzi:'您好',pinyin:'nín hǎo',koPron:'닌 하오',ko:'안녕하세요 (존댓말)',en:'hello (polite)'},
  {id:3,cat:'인사·기본',hanzi:'再见',pinyin:'zài jiàn',koPron:'짜이 지앤',ko:'안녕히 가세요 / 또 봐요',en:'goodbye'},
  {id:4,cat:'인사·기본',hanzi:'谢谢',pinyin:'xiè xie',koPron:'씨에 씨에',ko:'감사합니다',en:'thank you'},
  {id:5,cat:'인사·기본',hanzi:'不客气',pinyin:'bú kè qi',koPron:'부 커치',ko:'천만에요',en:"you're welcome"},
  {id:6,cat:'인사·기본',hanzi:'对不起',pinyin:'duì bu qǐ',koPron:'뚜이 부 치',ko:'미안합니다',en:"I'm sorry"},
  {id:7,cat:'인사·기본',hanzi:'没关系',pinyin:'méi guān xi',koPron:'메이 관시',ko:'괜찮아요',en:"it's okay"},
  {id:8,cat:'인사·기본',hanzi:'请',pinyin:'qǐng',koPron:'칭',ko:'부디 / 부탁합니다',en:'please'},
  {id:9,cat:'인사·기본',hanzi:'是',pinyin:'shì',koPron:'스',ko:'~이다 / 맞다',en:'to be / yes'},
  {id:10,cat:'인사·기본',hanzi:'不是',pinyin:'bú shì',koPron:'부 스',ko:'아니다',en:'is not / no'},

  {id:11,cat:'사람·가족',hanzi:'我',pinyin:'wǒ',koPron:'워',ko:'나 / 저',en:'I / me'},
  {id:12,cat:'사람·가족',hanzi:'你',pinyin:'nǐ',koPron:'니',ko:'너 / 당신',en:'you'},
  {id:13,cat:'사람·가족',hanzi:'他',pinyin:'tā',koPron:'타',ko:'그',en:'he / him'},
  {id:14,cat:'사람·가족',hanzi:'她',pinyin:'tā',koPron:'타',ko:'그녀',en:'she / her'},
  {id:15,cat:'사람·가족',hanzi:'我们',pinyin:'wǒ men',koPron:'워먼',ko:'우리',en:'we / us'},
  {id:16,cat:'사람·가족',hanzi:'朋友',pinyin:'péng you',koPron:'펑요우',ko:'친구',en:'friend'},
  {id:17,cat:'사람·가족',hanzi:'老师',pinyin:'lǎo shī',koPron:'라오스',ko:'선생님',en:'teacher'},
  {id:18,cat:'사람·가족',hanzi:'学生',pinyin:'xué sheng',koPron:'쉬에성',ko:'학생',en:'student'},
  {id:19,cat:'사람·가족',hanzi:'妈妈',pinyin:'mā ma',koPron:'마마',ko:'엄마',en:'mother / mom'},
  {id:20,cat:'사람·가족',hanzi:'爸爸',pinyin:'bà ba',koPron:'빠바',ko:'아빠',en:'father / dad'},

  {id:21,cat:'숫자',hanzi:'一',pinyin:'yī',koPron:'이',ko:'하나 / 1',en:'one'},
  {id:22,cat:'숫자',hanzi:'二',pinyin:'èr',koPron:'얼',ko:'둘 / 2',en:'two'},
  {id:23,cat:'숫자',hanzi:'三',pinyin:'sān',koPron:'싼',ko:'셋 / 3',en:'three'},
  {id:24,cat:'숫자',hanzi:'四',pinyin:'sì',koPron:'쓰',ko:'넷 / 4',en:'four'},
  {id:25,cat:'숫자',hanzi:'五',pinyin:'wǔ',koPron:'우',ko:'다섯 / 5',en:'five'},
  {id:26,cat:'숫자',hanzi:'六',pinyin:'liù',koPron:'리우',ko:'여섯 / 6',en:'six'},
  {id:27,cat:'숫자',hanzi:'七',pinyin:'qī',koPron:'치',ko:'일곱 / 7',en:'seven'},
  {id:28,cat:'숫자',hanzi:'八',pinyin:'bā',koPron:'빠',ko:'여덟 / 8',en:'eight'},
  {id:29,cat:'숫자',hanzi:'九',pinyin:'jiǔ',koPron:'지우',ko:'아홉 / 9',en:'nine'},
  {id:30,cat:'숫자',hanzi:'十',pinyin:'shí',koPron:'스',ko:'열 / 10',en:'ten'},

  {id:31,cat:'장소·방향',hanzi:'家',pinyin:'jiā',koPron:'지아',ko:'집 / 가정',en:'home / family'},
  {id:32,cat:'장소·방향',hanzi:'学校',pinyin:'xué xiào',koPron:'쉬에샤오',ko:'학교',en:'school'},
  {id:33,cat:'장소·방향',hanzi:'公司',pinyin:'gōng sī',koPron:'궁쓰',ko:'회사',en:'company'},
  {id:34,cat:'장소·방향',hanzi:'商店',pinyin:'shāng diàn',koPron:'상디앤',ko:'상점 / 가게',en:'shop / store'},
  {id:35,cat:'장소·방향',hanzi:'医院',pinyin:'yī yuàn',koPron:'이위앤',ko:'병원',en:'hospital'},
  {id:36,cat:'장소·방향',hanzi:'这里',pinyin:'zhè lǐ',koPron:'쩌리',ko:'여기',en:'here'},
  {id:37,cat:'장소·방향',hanzi:'那里',pinyin:'nà lǐ',koPron:'나리',ko:'저기 / 거기',en:'there'},
  {id:38,cat:'장소·방향',hanzi:'上',pinyin:'shàng',koPron:'상',ko:'위 / 올라가다',en:'up / above'},
  {id:39,cat:'장소·방향',hanzi:'下',pinyin:'xià',koPron:'시아',ko:'아래 / 내려가다',en:'down / below'},
  {id:40,cat:'장소·방향',hanzi:'里面',pinyin:'lǐ miàn',koPron:'리미앤',ko:'안쪽 / 내부',en:'inside'},

  {id:41,cat:'음식·음료',hanzi:'水',pinyin:'shuǐ',koPron:'쉐이',ko:'물',en:'water'},
  {id:42,cat:'음식·음료',hanzi:'茶',pinyin:'chá',koPron:'차',ko:'차',en:'tea'},
  {id:43,cat:'음식·음료',hanzi:'咖啡',pinyin:'kā fēi',koPron:'카페이',ko:'커피',en:'coffee'},
  {id:44,cat:'음식·음료',hanzi:'米饭',pinyin:'mǐ fàn',koPron:'미판',ko:'밥 / 쌀밥',en:'cooked rice'},
  {id:45,cat:'음식·음료',hanzi:'面条',pinyin:'miàn tiáo',koPron:'미앤탸오',ko:'국수 / 면',en:'noodles'},
  {id:46,cat:'음식·음료',hanzi:'面包',pinyin:'miàn bāo',koPron:'미앤빠오',ko:'빵',en:'bread'},
  {id:47,cat:'음식·음료',hanzi:'水果',pinyin:'shuǐ guǒ',koPron:'쉐이궈',ko:'과일',en:'fruit'},
  {id:48,cat:'음식·음료',hanzi:'苹果',pinyin:'píng guǒ',koPron:'핑궈',ko:'사과',en:'apple'},
  {id:49,cat:'음식·음료',hanzi:'菜',pinyin:'cài',koPron:'차이',ko:'채소 / 요리',en:'vegetable / dish'},
  {id:50,cat:'음식·음료',hanzi:'好吃',pinyin:'hǎo chī',koPron:'하오츠',ko:'맛있다',en:'delicious'},

  {id:51,cat:'일상 동작',hanzi:'吃',pinyin:'chī',koPron:'츠',ko:'먹다',en:'to eat'},
  {id:52,cat:'일상 동작',hanzi:'喝',pinyin:'hē',koPron:'허',ko:'마시다',en:'to drink'},
  {id:53,cat:'일상 동작',hanzi:'去',pinyin:'qù',koPron:'취',ko:'가다',en:'to go'},
  {id:54,cat:'일상 동작',hanzi:'来',pinyin:'lái',koPron:'라이',ko:'오다',en:'to come'},
  {id:55,cat:'일상 동작',hanzi:'看',pinyin:'kàn',koPron:'칸',ko:'보다',en:'to look / watch'},
  {id:56,cat:'일상 동작',hanzi:'听',pinyin:'tīng',koPron:'팅',ko:'듣다',en:'to listen'},
  {id:57,cat:'일상 동작',hanzi:'说',pinyin:'shuō',koPron:'슈어',ko:'말하다',en:'to speak / say'},
  {id:58,cat:'일상 동작',hanzi:'读',pinyin:'dú',koPron:'두',ko:'읽다',en:'to read'},
  {id:59,cat:'일상 동작',hanzi:'写',pinyin:'xiě',koPron:'시에',ko:'쓰다',en:'to write'},
  {id:60,cat:'일상 동작',hanzi:'睡觉',pinyin:'shuì jiào',koPron:'쉐이자오',ko:'자다',en:'to sleep'},

  {id:61,cat:'상태·느낌',hanzi:'好',pinyin:'hǎo',koPron:'하오',ko:'좋다',en:'good'},
  {id:62,cat:'상태·느낌',hanzi:'大',pinyin:'dà',koPron:'따',ko:'크다',en:'big'},
  {id:63,cat:'상태·느낌',hanzi:'小',pinyin:'xiǎo',koPron:'샤오',ko:'작다',en:'small'},
  {id:64,cat:'상태·느낌',hanzi:'多',pinyin:'duō',koPron:'뚜어',ko:'많다',en:'many / much'},
  {id:65,cat:'상태·느낌',hanzi:'少',pinyin:'shǎo',koPron:'샤오',ko:'적다',en:'few / little'},
  {id:66,cat:'상태·느낌',hanzi:'热',pinyin:'rè',koPron:'러',ko:'덥다 / 뜨겁다',en:'hot'},
  {id:67,cat:'상태·느낌',hanzi:'冷',pinyin:'lěng',koPron:'렁',ko:'춥다 / 차갑다',en:'cold'},
  {id:68,cat:'상태·느낌',hanzi:'高兴',pinyin:'gāo xìng',koPron:'까오싱',ko:'기쁘다',en:'happy'},
  {id:69,cat:'상태·느낌',hanzi:'累',pinyin:'lèi',koPron:'레이',ko:'피곤하다',en:'tired'},
  {id:70,cat:'상태·느낌',hanzi:'漂亮',pinyin:'piào liang',koPron:'퍄오량',ko:'예쁘다 / 아름답다',en:'beautiful'},

  {id:71,cat:'교통·여행',hanzi:'车',pinyin:'chē',koPron:'처',ko:'차 / 차량',en:'car / vehicle'},
  {id:72,cat:'교통·여행',hanzi:'公交车',pinyin:'gōng jiāo chē',koPron:'궁자오처',ko:'버스',en:'bus'},
  {id:73,cat:'교통·여행',hanzi:'地铁',pinyin:'dì tiě',koPron:'띠톄',ko:'지하철',en:'subway'},
  {id:74,cat:'교통·여행',hanzi:'火车',pinyin:'huǒ chē',koPron:'훠처',ko:'기차',en:'train'},
  {id:75,cat:'교통·여행',hanzi:'飞机',pinyin:'fēi jī',koPron:'페이지',ko:'비행기',en:'airplane'},
  {id:76,cat:'교통·여행',hanzi:'机场',pinyin:'jī chǎng',koPron:'지창',ko:'공항',en:'airport'},
  {id:77,cat:'교통·여행',hanzi:'车站',pinyin:'chē zhàn',koPron:'처짠',ko:'정류장 / 역',en:'station'},
  {id:78,cat:'교통·여행',hanzi:'票',pinyin:'piào',koPron:'퍄오',ko:'표 / 티켓',en:'ticket'},
  {id:79,cat:'교통·여행',hanzi:'左边',pinyin:'zuǒ biān',koPron:'쭤비앤',ko:'왼쪽',en:'left side'},
  {id:80,cat:'교통·여행',hanzi:'右边',pinyin:'yòu biān',koPron:'요우비앤',ko:'오른쪽',en:'right side'},

  {id:81,cat:'공부·생활',hanzi:'中文',pinyin:'Zhōng wén',koPron:'중원',ko:'중국어',en:'Chinese language'},
  {id:82,cat:'공부·생활',hanzi:'英语',pinyin:'Yīng yǔ',koPron:'잉위',ko:'영어',en:'English language'},
  {id:83,cat:'공부·생활',hanzi:'韩国',pinyin:'Hán guó',koPron:'한궈',ko:'한국',en:'Korea'},
  {id:84,cat:'공부·생활',hanzi:'中国',pinyin:'Zhōng guó',koPron:'중궈',ko:'중국',en:'China'},
  {id:85,cat:'공부·생활',hanzi:'工作',pinyin:'gōng zuò',koPron:'궁쭤',ko:'일 / 일하다',en:'work / to work'},
  {id:86,cat:'공부·생활',hanzi:'学习',pinyin:'xué xí',koPron:'쉬에시',ko:'공부하다 / 배우다',en:'to study / learn'},
  {id:87,cat:'공부·생활',hanzi:'电脑',pinyin:'diàn nǎo',koPron:'디앤나오',ko:'컴퓨터',en:'computer'},
  {id:88,cat:'공부·생활',hanzi:'手机',pinyin:'shǒu jī',koPron:'쇼우지',ko:'휴대전화',en:'mobile phone'},
  {id:89,cat:'공부·생활',hanzi:'书',pinyin:'shū',koPron:'슈',ko:'책',en:'book'},
  {id:90,cat:'공부·생활',hanzi:'钱',pinyin:'qián',koPron:'치앤',ko:'돈',en:'money'},

  {id:91,cat:'시간·필수',hanzi:'今天',pinyin:'jīn tiān',koPron:'진톈',ko:'오늘',en:'today'},
  {id:92,cat:'시간·필수',hanzi:'明天',pinyin:'míng tiān',koPron:'밍톈',ko:'내일',en:'tomorrow'},
  {id:93,cat:'시간·필수',hanzi:'昨天',pinyin:'zuó tiān',koPron:'쭤톈',ko:'어제',en:'yesterday'},
  {id:94,cat:'시간·필수',hanzi:'早上',pinyin:'zǎo shang',koPron:'짜오상',ko:'아침',en:'morning'},
  {id:95,cat:'시간·필수',hanzi:'晚上',pinyin:'wǎn shang',koPron:'완상',ko:'저녁 / 밤',en:'evening / night'},
  {id:96,cat:'시간·필수',hanzi:'天气',pinyin:'tiān qì',koPron:'톈치',ko:'날씨',en:'weather'},
  {id:97,cat:'시간·필수',hanzi:'生病',pinyin:'shēng bìng',koPron:'성빙',ko:'아프다 / 병이 나다',en:'to be sick'},
  {id:98,cat:'시간·필수',hanzi:'医生',pinyin:'yī shēng',koPron:'이성',ko:'의사',en:'doctor'},
  {id:99,cat:'시간·필수',hanzi:'帮助',pinyin:'bāng zhù',koPron:'빵주',ko:'돕다 / 도움',en:'help / to help'},
  {id:100,cat:'시간·필수',hanzi:'厕所',pinyin:'cè suǒ',koPron:'처쒀',ko:'화장실',en:'restroom / toilet'}
];

const GRAMMAR = [{"id":1,"cat":"문장 기초","title":"기본 어순: 주어 + 동사 + 목적어","level":"입문 01","pattern":"주어 + 동사 + 목적어","explanation":"중국어의 기본 문장은 한국어와 달리 동사가 목적어보다 먼저 옵니다. ‘나는 커피를 마셔요’는 ‘나 + 마시다 + 커피’ 순서로 말합니다.","tip":"시간이나 장소를 덧붙여도 핵심 뼈대는 주어–동사–목적어입니다.","examples":[{"zh":"我喝咖啡。","pinyin":"Wǒ hē kāfēi.","koPron":"워 허 카페이","ko":"나는 커피를 마셔요.","en":"I drink coffee."},{"zh":"她学习中文。","pinyin":"Tā xuéxí Zhōngwén.","koPron":"타 쉬에시 중원","ko":"그녀는 중국어를 공부해요.","en":"She studies Chinese."}],"quiz":{"question":"‘나는 책을 읽어요’에 알맞은 문장은?","options":["我读书。","我书读。","读我书。","书我读。"],"answer":0,"explain":"중국어 기본 어순은 주어 我 + 동사 读 + 목적어 书입니다."}},{"id":2,"cat":"문장 기초","title":"是: 명사와 명사를 연결하기","level":"입문 02","pattern":"A + 是 + B","explanation":"是(shì)는 ‘A는 B이다’처럼 사람의 신분, 국적, 사물의 정체를 말할 때 사용합니다.","tip":"‘예쁘다, 춥다’ 같은 형용사 앞에는 보통 是를 쓰지 않습니다.","examples":[{"zh":"我是学生。","pinyin":"Wǒ shì xuésheng.","koPron":"워 스 쉬에성","ko":"나는 학생이에요.","en":"I am a student."},{"zh":"他是韩国人。","pinyin":"Tā shì Hánguórén.","koPron":"타 스 한궈런","ko":"그는 한국인이에요.","en":"He is Korean."}],"quiz":{"question":"‘그녀는 선생님이에요’는?","options":["她老师是。","她是老师。","她很老师。","是她老师。"],"answer":1,"explain":"신분을 말할 때는 她 + 是 + 老师 순서입니다."}},{"id":3,"cat":"문장 기초","title":"형용사 문장과 很","level":"입문 03","pattern":"주어 + 很 + 형용사","explanation":"중국어 형용사는 그 자체로 서술어가 될 수 있습니다. 자연스러운 평서문에서는 很(hěn)을 넣어 ‘~하다’라고 말하는 경우가 많습니다.","tip":"여기서 很은 문맥에 따라 반드시 ‘매우’로 강하게 번역되지 않을 수 있습니다.","examples":[{"zh":"今天天气很冷。","pinyin":"Jīntiān tiānqì hěn lěng.","koPron":"진톈 톈치 헌 렁","ko":"오늘 날씨가 추워요.","en":"The weather is cold today."},{"zh":"她很漂亮。","pinyin":"Tā hěn piàoliang.","koPron":"타 헌 퍄오량","ko":"그녀는 예뻐요.","en":"She is beautiful."}],"quiz":{"question":"‘이 사과는 커요’에 가장 자연스러운 문장은?","options":["这个苹果是大。","这个苹果很大。","这个很苹果大。","很大这个苹果是。"],"answer":1,"explain":"형용사 大가 서술어일 때 보통 很을 앞에 둡니다."}},{"id":4,"cat":"문장 기초","title":"的: 소유와 꾸밈","level":"입문 04","pattern":"꾸미는 말 + 的 + 명사","explanation":"的(de)는 ‘~의’ 또는 명사를 꾸미는 표시입니다. 소유자나 설명이 먼저 오고, 뒤에 중심 명사가 옵니다.","tip":"가까운 가족 관계에서는 我的妈妈 대신 我妈妈처럼 的를 생략하기도 합니다.","examples":[{"zh":"这是我的书。","pinyin":"Zhè shì wǒ de shū.","koPron":"쩌 스 워 더 슈","ko":"이것은 내 책이에요.","en":"This is my book."},{"zh":"我喜欢漂亮的衣服。","pinyin":"Wǒ xǐhuan piàoliang de yīfu.","koPron":"워 시환 퍄오량 더 이푸","ko":"나는 예쁜 옷을 좋아해요.","en":"I like beautiful clothes."}],"quiz":{"question":"‘나의 친구’는?","options":["朋友的我","我的朋友","我朋友的","的我朋友"],"answer":1,"explain":"소유자 我 뒤에 的를 붙이고 중심 명사 朋友를 놓습니다."}},{"id":5,"cat":"질문","title":"吗: 예·아니오 질문","level":"입문 05","pattern":"평서문 + 吗？","explanation":"평서문 끝에 吗(ma)를 붙이면 ‘~입니까?’, ‘~해요?’라는 예·아니오 질문이 됩니다. 문장 어순은 바꾸지 않습니다.","tip":"대답은 동사나 형용사를 반복해 간단히 할 수 있습니다. 是 / 不是, 喜欢 / 不喜欢.","examples":[{"zh":"你是学生吗？","pinyin":"Nǐ shì xuésheng ma?","koPron":"니 스 쉬에성 마","ko":"당신은 학생인가요?","en":"Are you a student?"},{"zh":"你喜欢咖啡吗？","pinyin":"Nǐ xǐhuan kāfēi ma?","koPron":"니 시환 카페이 마","ko":"커피를 좋아하나요?","en":"Do you like coffee?"}],"quiz":{"question":"‘그는 의사인가요?’는?","options":["吗他是医生？","他吗是医生？","他是医生吗？","他是吗医生？"],"answer":2,"explain":"완성된 평서문 他是医生 뒤에 吗를 붙입니다."}},{"id":6,"cat":"질문","title":"A不A: 동사를 반복하는 질문","level":"입문 06","pattern":"동사 + 不 + 동사","explanation":"동사나 형용사를 ‘A不A’ 형태로 반복하면 ‘하니, 안 하니?’라는 선택형 예·아니오 질문을 만들 수 있습니다.","tip":"A不A 질문에는 보통 문장 끝에 吗를 또 붙이지 않습니다.","examples":[{"zh":"你去不去学校？","pinyin":"Nǐ qù bu qù xuéxiào?","koPron":"니 취 부 취 쉬에샤오","ko":"학교에 가요, 안 가요?","en":"Are you going to school or not?"},{"zh":"这个好不好？","pinyin":"Zhège hǎo bu hǎo?","koPron":"쩌거 하오 부 하오","ko":"이것은 좋아요, 안 좋아요?","en":"Is this good or not?"}],"quiz":{"question":"‘커피를 마실래요, 안 마실래요?’는?","options":["你喝不喝咖啡？","你不喝喝咖啡？","你喝咖啡吗不？","喝你不喝咖啡？"],"answer":0,"explain":"동사 喝를 喝不喝 형태로 반복합니다."}},{"id":7,"cat":"질문","title":"의문사는 묻는 자리에 그대로","level":"입문 07","pattern":"평서문 속 답 자리 → 의문사","explanation":"谁(누구), 什么(무엇), 哪儿(어디), 怎么(어떻게) 같은 의문사는 알고 싶은 답이 들어갈 자리에 그대로 놓습니다.","tip":"영어처럼 의문사를 문장 맨 앞으로 이동시키지 않아도 됩니다.","examples":[{"zh":"你叫什么名字？","pinyin":"Nǐ jiào shénme míngzi?","koPron":"니 지아오 선머 밍쯔","ko":"이름이 무엇인가요?","en":"What is your name?"},{"zh":"你去哪儿？","pinyin":"Nǐ qù nǎr?","koPron":"니 취 날","ko":"어디에 가요?","en":"Where are you going?"}],"quiz":{"question":"‘저 사람은 누구예요?’는?","options":["谁那个人是？","那个人是谁？","那是个人谁？","那个人吗谁？"],"answer":1,"explain":"원래 답이 들어갈 是 뒤 자리에 谁를 둡니다."}},{"id":8,"cat":"부정·존재","title":"不: 현재·습관·미래의 부정","level":"입문 08","pattern":"不 + 동사 / 형용사","explanation":"不(bù)는 현재의 상태, 습관적인 행동, 의지나 미래 행동을 부정할 때 주로 사용합니다.","tip":"不 뒤에 4성이 오면 실제 발음은 bú처럼 2성으로 바뀌지만 표기는 不로 유지합니다.","examples":[{"zh":"我不喝咖啡。","pinyin":"Wǒ bù hē kāfēi.","koPron":"워 부 허 카페이","ko":"나는 커피를 마시지 않아요.","en":"I do not drink coffee."},{"zh":"明天我不去。","pinyin":"Míngtiān wǒ bú qù.","koPron":"밍톈 워 부 취","ko":"내일 나는 가지 않아요.","en":"I am not going tomorrow."}],"quiz":{"question":"‘나는 영어를 배우지 않아요’는?","options":["我没英语学习。","我不学习英语。","我学习不英语。","不我学习英语。"],"answer":1,"explain":"부정부사 不는 동사 学习 바로 앞에 옵니다."}},{"id":9,"cat":"부정·존재","title":"没(有): 과거와 소유의 부정","level":"입문 09","pattern":"没(有) + 동사 / 명사","explanation":"没(méi)는 일어나지 않은 과거 행동을 부정하고, 没有(méiyǒu)는 ‘가지고 있지 않다’ 또는 ‘존재하지 않는다’를 나타냅니다.","tip":"완료된 과거 행동을 부정할 때는 보통 不보다 没를 씁니다.","examples":[{"zh":"我昨天没去学校。","pinyin":"Wǒ zuótiān méi qù xuéxiào.","koPron":"워 쭤톈 메이 취 쉬에샤오","ko":"나는 어제 학교에 가지 않았어요.","en":"I did not go to school yesterday."},{"zh":"我没有钱。","pinyin":"Wǒ méiyǒu qián.","koPron":"워 메이요우 치앤","ko":"나는 돈이 없어요.","en":"I do not have money."}],"quiz":{"question":"‘어제 커피를 마시지 않았어요’는?","options":["昨天我不喝咖啡。","昨天我没喝咖啡。","昨天我没有咖啡喝吗。","昨天没我喝咖啡。"],"answer":1,"explain":"완료되지 않은 과거 행동은 没 + 동사로 부정합니다."}},{"id":10,"cat":"부정·존재","title":"有: 소유와 존재","level":"입문 10","pattern":"사람 + 有 + 사물 / 장소 + 有 + 대상","explanation":"有(yǒu)는 ‘가지고 있다’와 ‘~에 …이 있다’ 두 가지 기본 의미로 쓰입니다.","tip":"有의 부정은 不有가 아니라 没有입니다.","examples":[{"zh":"我有一本书。","pinyin":"Wǒ yǒu yì běn shū.","koPron":"워 요우 이 번 슈","ko":"나는 책 한 권이 있어요.","en":"I have a book."},{"zh":"学校里有商店。","pinyin":"Xuéxiào lǐ yǒu shāngdiàn.","koPron":"쉬에샤오 리 요우 상디앤","ko":"학교 안에 가게가 있어요.","en":"There is a shop in the school."}],"quiz":{"question":"‘나는 휴대전화가 없어요’는?","options":["我不有手机。","我没有手机。","我手机没是。","没有我手机。"],"answer":1,"explain":"有의 부정형은 没有입니다."}},{"id":11,"cat":"시간·동작","title":"시간 표현의 위치","level":"입문 11","pattern":"주어 + 시간 + 동사 + 목적어","explanation":"今天, 明天, 八点 같은 시간 표현은 보통 주어 뒤, 동사 앞에 놓습니다. 강조할 때는 문장 맨 앞에도 올 수 있습니다.","tip":"중국어에서는 동사 모양을 바꾸지 않고 시간 표현으로 시점을 알려 줍니다.","examples":[{"zh":"我明天去北京。","pinyin":"Wǒ míngtiān qù Běijīng.","koPron":"워 밍톈 취 베이징","ko":"나는 내일 베이징에 가요.","en":"I am going to Beijing tomorrow."},{"zh":"今天我在家学习。","pinyin":"Jīntiān wǒ zài jiā xuéxí.","koPron":"진톈 워 짜이 지아 쉬에시","ko":"오늘 나는 집에서 공부해요.","en":"Today I study at home."}],"quiz":{"question":"‘나는 오늘 중국어를 공부해요’에 가장 자연스러운 문장은?","options":["我学习今天中文。","我今天学习中文。","今天中文我学习吗。","我中文学习今天。"],"answer":1,"explain":"시간어 今天은 보통 주어 我 뒤, 동사 学习 앞에 옵니다."}},{"id":12,"cat":"시간·동작","title":"在와 正在: 진행 중인 행동","level":"입문 12","pattern":"주어 + 在/正在 + 동사","explanation":"在 또는 正在를 동사 앞에 두면 ‘지금 ~하고 있다’는 진행을 나타냅니다. 正在가 진행 중임을 조금 더 분명히 강조합니다.","tip":"在는 ‘~에 있다’라는 장소 표현에도 쓰이므로 뒤에 동사가 오는지 장소가 오는지 확인하세요.","examples":[{"zh":"我在看书。","pinyin":"Wǒ zài kàn shū.","koPron":"워 짜이 칸 슈","ko":"나는 책을 보고 있어요.","en":"I am reading a book."},{"zh":"他正在吃饭。","pinyin":"Tā zhèngzài chīfàn.","koPron":"타 정짜이 츠판","ko":"그는 지금 밥을 먹고 있어요.","en":"He is eating right now."}],"quiz":{"question":"‘그녀는 지금 자고 있어요’는?","options":["她正在睡觉。","她睡觉了正在。","正在她觉睡。","她是正在睡觉。"],"answer":0,"explain":"진행 표현 正在는 동사 睡觉 앞에 둡니다."}},{"id":13,"cat":"시간·동작","title":"了: 동작의 완료","level":"입문 13","pattern":"동사 + 了","explanation":"동사 뒤의 了(le)는 어떤 행동이 완료되었음을 나타냅니다. 단순히 모든 과거 문장에 붙이는 표지가 아니라 ‘완료’에 초점이 있습니다.","tip":"목적어가 구체적이거나 뒤에 수량 표현이 오면 문장이 더 자연스러운 경우가 많습니다.","examples":[{"zh":"我吃了饭。","pinyin":"Wǒ chī le fàn.","koPron":"워 츠 러 판","ko":"나는 밥을 먹었어요.","en":"I ate a meal."},{"zh":"他买了一本书。","pinyin":"Tā mǎi le yì běn shū.","koPron":"타 마이 러 이 번 슈","ko":"그는 책 한 권을 샀어요.","en":"He bought a book."}],"quiz":{"question":"‘나는 커피를 마셨어요’는?","options":["我了喝咖啡。","我喝咖啡了喝。","我喝了咖啡。","了我喝咖啡。"],"answer":2,"explain":"완료 표지 了는 동사 喝 뒤에 놓습니다."}},{"id":14,"cat":"시간·동작","title":"过: 해 본 경험","level":"입문 14","pattern":"동사 + 过","explanation":"过(guo)는 과거 어느 때에 ‘~해 본 적이 있다’는 경험을 나타냅니다.","tip":"경험이 없다고 할 때는 没(有) + 동사 + 过를 사용합니다.","examples":[{"zh":"我去过中国。","pinyin":"Wǒ qù guo Zhōngguó.","koPron":"워 취 궈 중궈","ko":"나는 중국에 가 본 적이 있어요.","en":"I have been to China."},{"zh":"我没吃过这个菜。","pinyin":"Wǒ méi chī guo zhège cài.","koPron":"워 메이 츠 궈 쩌거 차이","ko":"나는 이 요리를 먹어 본 적이 없어요.","en":"I have never eaten this dish."}],"quiz":{"question":"‘나는 지하철을 타 본 적이 있어요’는?","options":["我坐过地铁。","我过坐地铁。","我坐地铁了吗过。","过我地铁坐。"],"answer":0,"explain":"경험 표지 过는 동사 坐 뒤에 둡니다."}},{"id":15,"cat":"수량·부사","title":"양사: 숫자와 명사 사이","level":"입문 15","pattern":"숫자 + 양사 + 명사","explanation":"중국어에서는 물건의 수를 셀 때 숫자와 명사 사이에 个, 本, 杯 같은 양사를 넣습니다.","tip":"个는 가장 널리 쓰이는 기본 양사지만 모든 명사에 항상 个만 쓰는 것은 아닙니다.","examples":[{"zh":"一个朋友","pinyin":"yí ge péngyou","koPron":"이 거 펑요우","ko":"친구 한 명","en":"one friend"},{"zh":"两杯咖啡","pinyin":"liǎng bēi kāfēi","koPron":"량 베이 카페이","ko":"커피 두 잔","en":"two cups of coffee"}],"quiz":{"question":"‘책 세 권’은?","options":["三书本","三本书","本三书","书三本"],"answer":1,"explain":"책의 양사 本은 숫자 三과 명사 书 사이에 옵니다."}},{"id":16,"cat":"수량·부사","title":"二와 两의 기본 구별","level":"입문 16","pattern":"숫자·번호: 二 / 수량 + 양사: 两","explanation":"二(èr)는 숫자 자체, 날짜, 번호를 읽을 때 많이 쓰고, 两(liǎng)은 보통 양사 앞에서 ‘두 개의’라는 수량을 나타냅니다.","tip":"전화번호나 소수점처럼 숫자를 하나씩 읽을 때는 二를 사용합니다.","examples":[{"zh":"二月二日","pinyin":"èryuè èr rì","koPron":"얼위에 얼 르","ko":"2월 2일","en":"February 2nd"},{"zh":"两个人","pinyin":"liǎng ge rén","koPron":"량 거 런","ko":"두 사람","en":"two people"}],"quiz":{"question":"‘사과 두 개’에 알맞은 표현은?","options":["二个苹果","两苹果个","两个苹果","苹果二个"],"answer":2,"explain":"양사 个 앞에서 수량 ‘둘’을 말할 때 两을 씁니다."}},{"id":17,"cat":"수량·부사","title":"也와 都의 위치","level":"입문 17","pattern":"주어 + 也/都 + 술어","explanation":"也(yě)는 ‘~도’, 都(dōu)는 ‘모두’를 나타내는 부사입니다. 보통 동사나 형용사 같은 술어 앞에 놓습니다.","tip":"여러 사람을 주어로 삼고 ‘모두’를 말할 때는 주어 뒤에 都를 둡니다.","examples":[{"zh":"我也喜欢中文。","pinyin":"Wǒ yě xǐhuan Zhōngwén.","koPron":"워 예 시환 중원","ko":"나도 중국어를 좋아해요.","en":"I also like Chinese."},{"zh":"我们都是学生。","pinyin":"Wǒmen dōu shì xuésheng.","koPron":"워먼 떠우 스 쉬에성","ko":"우리는 모두 학생이에요.","en":"We are all students."}],"quiz":{"question":"‘그들도 모두 가요’는?","options":["他们也都去。","他们去都也。","也他们去都。","他们都是去吗。"],"answer":0,"explain":"부사 也와 都는 주어 他们 뒤, 동사 去 앞에 놓습니다."}},{"id":18,"cat":"비교·연결","title":"比: 두 대상을 비교하기","level":"입문 18","pattern":"A + 比 + B + 형용사","explanation":"比(bǐ)는 ‘A가 B보다 ~하다’라는 비교를 만들 때 사용합니다. 비교되는 기준 B 뒤에 형용사가 옵니다.","tip":"比 문장에서 형용사 앞에 很을 일반적으로 함께 쓰지 않습니다.","examples":[{"zh":"他比我高。","pinyin":"Tā bǐ wǒ gāo.","koPron":"타 비 워 까오","ko":"그는 나보다 키가 커요.","en":"He is taller than me."},{"zh":"今天比昨天冷。","pinyin":"Jīntiān bǐ zuótiān lěng.","koPron":"진톈 비 쭤톈 렁","ko":"오늘은 어제보다 추워요.","en":"Today is colder than yesterday."}],"quiz":{"question":"‘이 책은 저 책보다 커요’는?","options":["这本书大比那本书。","这本书比那本书大。","比这本书那本书大。","这本书很比那本书大。"],"answer":1,"explain":"A 这本书 + 比 + B 那本书 + 형용사 大 순서입니다."}},{"id":19,"cat":"비교·연결","title":"和와 跟: ‘~와/과’","level":"입문 19","pattern":"A + 和/跟 + B","explanation":"和(hé)와 跟(gēn)은 명사나 사람을 연결하여 ‘A와 B’를 나타냅니다. 跟은 회화에서 ‘~와 함께’라는 느낌으로도 자주 쓰입니다.","tip":"완전한 두 문장을 연결하는 영어 and처럼 아무 곳에나 和를 쓰지는 않습니다.","examples":[{"zh":"我喜欢茶和咖啡。","pinyin":"Wǒ xǐhuan chá hé kāfēi.","koPron":"워 시환 차 허 카페이","ko":"나는 차와 커피를 좋아해요.","en":"I like tea and coffee."},{"zh":"我跟朋友去学校。","pinyin":"Wǒ gēn péngyou qù xuéxiào.","koPron":"워 껀 펑요우 취 쉬에샤오","ko":"나는 친구와 학교에 가요.","en":"I go to school with a friend."}],"quiz":{"question":"‘엄마와 아빠’는?","options":["妈妈和爸爸","妈妈是爸爸","妈妈比爸爸","妈妈吗爸爸"],"answer":0,"explain":"두 명사를 연결할 때 和를 사용할 수 있습니다."}},{"id":20,"cat":"비교·연결","title":"因为…所以…: 원인과 결과","level":"입문 20","pattern":"因为 + 원인， 所以 + 결과","explanation":"因为(yīnwèi)는 ‘~때문에’, 所以(suǒyǐ)는 ‘그래서’를 뜻합니다. 두 표현을 짝으로 사용하면 원인과 결과가 분명해집니다.","tip":"회화에서는 문맥이 분명하면 因为 또는 所以 중 하나가 생략되기도 합니다.","examples":[{"zh":"因为下雨，所以我不去。","pinyin":"Yīnwèi xiàyǔ, suǒyǐ wǒ bú qù.","koPron":"인웨이 샤위, 쒀이 워 부 취","ko":"비가 오기 때문에 나는 가지 않아요.","en":"Because it is raining, I am not going."},{"zh":"因为我很累，所以我想睡觉。","pinyin":"Yīnwèi wǒ hěn lèi, suǒyǐ wǒ xiǎng shuìjiào.","koPron":"인웨이 워 헌 레이, 쒀이 워 샹 쉐이자오","ko":"나는 매우 피곤해서 자고 싶어요.","en":"Because I am tired, I want to sleep."}],"quiz":{"question":"‘날씨가 추워서 집에 있어요’의 알맞은 연결은?","options":["因为天气很冷，所以我在家。","所以天气很冷，因为我在家。","天气因为所以我在家冷。","我在家比天气很冷。"],"answer":0,"explain":"因为 뒤에 원인, 所以 뒤에 결과를 놓습니다."}}];

const GRAMMAR_CATEGORIES = ['전체', ...new Set(GRAMMAR.map(g => g.cat))];

const CATEGORIES = ['전체', ...new Set(WORDS.map(w => w.cat))];
const storage = (() => {
  const memory = {};
  try {
    const testKey = '__hc_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return window.localStorage;
  } catch (_) {
    return {
      getItem: key => Object.prototype.hasOwnProperty.call(memory, key) ? memory[key] : null,
      setItem: (key, value) => { memory[key] = String(value); },
      removeItem: key => { delete memory[key]; }
    };
  }
})();
const state = {
  view: 'home',
  category: '전체',
  search: '',
  hideLearned: false,
  grammarCategory: '전체',
  grammarSearch: '',
  hideGrammarCompleted: false,
  grammarCompleted: new Set(JSON.parse(storage.getItem('hcGrammarCompleted') || '[]')),
  favorites: new Set(JSON.parse(storage.getItem('hcFavorites') || '[]')),
  learned: new Set(JSON.parse(storage.getItem('hcLearned') || '[]')),
  quizStats: JSON.parse(storage.getItem('hcQuizStats') || '{"correct":0,"total":0}'),
  daily: JSON.parse(storage.getItem('hcDaily') || 'null'),
  cardDeck: [...WORDS],
  cardIndex: 0,
  quiz: null,
  deferredPrompt: null
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const el = (tag, cls, html='') => { const n=document.createElement(tag); if(cls)n.className=cls; n.innerHTML=html; return n; };
const save = () => {
  storage.setItem('hcFavorites', JSON.stringify([...state.favorites]));
  storage.setItem('hcLearned', JSON.stringify([...state.learned]));
  storage.setItem('hcGrammarCompleted', JSON.stringify([...state.grammarCompleted]));
  storage.setItem('hcQuizStats', JSON.stringify(state.quizStats));
};
const clean = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ');
const randomItems = (arr, count) => [...arr].sort(() => Math.random()-.5).slice(0,count);

function showToast(message){
  const t=$('#toast'); t.textContent=message; t.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>t.classList.remove('show'),1600);
}

function speak(text, lang='zh-CN', rate=.86){
  if(!('speechSynthesis' in window)){ showToast('이 기기에서는 음성 기능을 지원하지 않습니다.'); return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang=lang; u.rate=rate;
  const voices=speechSynthesis.getVoices();
  const prefix=lang.split('-')[0].toLowerCase();
  const voice=voices.find(v=>v.lang.toLowerCase()===lang.toLowerCase()) || voices.find(v=>v.lang.toLowerCase().startsWith(prefix));
  if(voice) u.voice=voice;
  u.onerror=()=>showToast('음성을 재생하지 못했습니다. 기기의 TTS 설정을 확인해 주세요.');
  speechSynthesis.speak(u);
}

function navigate(view){
  state.view=view;
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===`${view}View`));
  $$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  closeDrawer();
  if(view==='home') renderHome();
  if(view==='words') renderWords();
  if(view==='grammar') renderGrammar();
  if(view==='cards') renderCard();
  if(view==='quiz' && !state.quiz) startQuiz();
  if(view==='favorites') renderFavorites();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openDrawer(){ $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden','false'); $('#scrim').hidden=false; }
function closeDrawer(){ $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden','true'); $('#scrim').hidden=true; }

function renderStats(){
  $('#learnedCount').textContent=state.learned.size;
  $('#grammarCount').textContent=state.grammarCompleted.size;
  $('#favoriteCount').textContent=state.favorites.size;
  const {correct,total}=state.quizStats;
  $('#quizRate').textContent=total ? `${Math.round(correct/total*100)}%` : '0%';
  $('#quizTotal').textContent=`${total}문제`;
}

function getDaily(){
  const today=new Date().toISOString().slice(0,10);
  if(!state.daily || state.daily.date!==today || !Array.isArray(state.daily.ids)){
    state.daily={date:today,ids:randomItems(WORDS,5).map(w=>w.id)};
    storage.setItem('hcDaily',JSON.stringify(state.daily));
  }
  return state.daily.ids.map(id=>WORDS.find(w=>w.id===id)).filter(Boolean);
}

function renderHome(){
  renderStats();
  const box=$('#dailyList'); box.innerHTML='';
  getDaily().forEach(w=>{
    const c=el('article','daily-card',`<button aria-label="${w.hanzi} 중국어 듣기">🔊</button><strong>${w.hanzi}</strong><span class="pinyin">${w.pinyin}</span><small>${w.ko}</small>`);
    c.querySelector('button').addEventListener('click',()=>speak(w.hanzi));
    box.append(c);
  });
  renderDailyGrammar();
}

function renderCategoryFilters(){
  const wrap=$('#categoryFilters'); wrap.innerHTML='';
  CATEGORIES.forEach(cat=>{
    const b=el('button',cat===state.category?'active':'',cat);
    b.addEventListener('click',()=>{state.category=cat;renderCategoryFilters();renderWords();});
    wrap.append(b);
  });
}

function filteredWords(){
  const q=clean(state.search);
  return WORDS.filter(w=>{
    const categoryOK=state.category==='전체'||w.cat===state.category;
    const learnedOK=!state.hideLearned||!state.learned.has(w.id);
    const hay=clean([w.hanzi,w.pinyin,w.koPron,w.ko,w.en].join(' '));
    return categoryOK&&learnedOK&&(!q||hay.includes(q));
  });
}

function makeWordCard(w){
  const article=el('article','word-card');
  const speakBtn=el('button','speak-btn','🔊'); speakBtn.setAttribute('aria-label',`${w.hanzi} 중국어 듣기`); speakBtn.onclick=()=>speak(w.hanzi);
  const main=el('div','word-main',`<div class="word-hanzi"><strong>${w.hanzi}</strong><span>${w.pinyin}</span></div><div class="word-meta"><b>${w.koPron}</b><span>${w.ko}</span><span>EN · ${w.en}</span></div>`);
  const actions=el('div','word-actions');
  const koAudio=el('button','','한'); koAudio.title='한국어 뜻 듣기'; koAudio.onclick=()=>speak(w.ko,'ko-KR',.92);
  const enAudio=el('button','','EN'); enAudio.title='영어 뜻 듣기'; enAudio.onclick=()=>speak(w.en,'en-US',.86);
  const fav=el('button',state.favorites.has(w.id)?'active':'',state.favorites.has(w.id)?'★':'☆'); fav.title='즐겨찾기';
  fav.onclick=()=>{toggleFavorite(w.id);};
  const learned=el('button',state.learned.has(w.id)?'active':'','✓'); learned.title='학습 완료';
  learned.onclick=()=>{toggleLearned(w.id);};
  actions.append(koAudio,enAudio,fav,learned); article.append(speakBtn,main,actions); return article;
}

function renderWords(){
  renderCategoryFilters();
  const words=filteredWords(); $('#wordResultCount').textContent=`${words.length}개 단어`;
  const list=$('#wordList'); list.innerHTML='';
  if(!words.length){ list.append(el('div','empty-state card','<span>⌕</span><h2>찾은 단어가 없어요</h2><p>검색어나 필터를 바꿔 보세요.</p>')); return; }
  words.forEach(w=>list.append(makeWordCard(w)));
}

function toggleFavorite(id){
  state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id); save();
  showToast(state.favorites.has(id)?'즐겨찾기에 추가했습니다.':'즐겨찾기에서 뺐습니다.');
  renderStats();
  if(state.view==='words')renderWords();
  if(state.view==='favorites')renderFavorites();
  if(state.view==='cards')renderCard();
}
function toggleLearned(id){
  state.learned.has(id)?state.learned.delete(id):state.learned.add(id); save();
  showToast(state.learned.has(id)?'학습 완료로 표시했습니다.':'학습 완료를 취소했습니다.');
  renderStats();
  if(state.view==='words')renderWords();
  if(state.view==='cards')renderCard();
}

function renderFavorites(){
  renderStats();
  const items=WORDS.filter(w=>state.favorites.has(w.id));
  $('#favoriteList').innerHTML=''; $('#favoriteEmpty').hidden=items.length>0;
  items.forEach(w=>$('#favoriteList').append(makeWordCard(w)));
}


function dailyGrammarLesson(){
  const key=new Date().toLocaleDateString('en-CA');
  const seed=[...key].reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
  return GRAMMAR[seed%GRAMMAR.length];
}

function renderDailyGrammar(){
  const lesson=dailyGrammarLesson();
  const box=$('#dailyGrammar');
  if(!box)return;
  const example=lesson.examples[0];
  box.innerHTML=`<div class="grammar-spot-main"><span class="eyebrow">${lesson.level} · ${lesson.cat}</span><h3>${lesson.title}</h3><span class="pattern">${lesson.pattern}</span><p>${lesson.explanation}</p><p class="grammar-spot-example">${example.zh} · ${example.ko}</p></div><div class="grammar-spot-actions"><button class="secondary-btn" id="dailyGrammarSpeak">예문 듣기 🔊</button><button class="primary-btn" data-go="grammar">문법 열기</button></div>`;
  $('#dailyGrammarSpeak').onclick=()=>speak(example.zh);
  box.querySelector('[data-go]').onclick=()=>navigate('grammar');
}

function renderGrammarFilters(){
  const wrap=$('#grammarCategoryFilters');
  wrap.innerHTML='';
  GRAMMAR_CATEGORIES.forEach(cat=>{
    const b=el('button',cat===state.grammarCategory?'active':'',cat);
    b.addEventListener('click',()=>{state.grammarCategory=cat;renderGrammarFilters();renderGrammar();});
    wrap.append(b);
  });
}

function filteredGrammar(){
  const q=clean(state.grammarSearch);
  return GRAMMAR.filter(g=>{
    const categoryOK=state.grammarCategory==='전체'||g.cat===state.grammarCategory;
    const completedOK=!state.hideGrammarCompleted||!state.grammarCompleted.has(g.id);
    const exampleText=g.examples.map(x=>[x.zh,x.pinyin,x.koPron,x.ko,x.en].join(' ')).join(' ');
    const hay=clean([g.title,g.pattern,g.explanation,g.tip,exampleText].join(' '));
    return categoryOK&&completedOK&&(!q||hay.includes(q));
  });
}

function toggleGrammarComplete(id){
  state.grammarCompleted.has(id)?state.grammarCompleted.delete(id):state.grammarCompleted.add(id);
  save();
  showToast(state.grammarCompleted.has(id)?'문법 학습을 완료했습니다.':'문법 완료 표시를 취소했습니다.');
  renderStats();
  renderGrammar();
}

function makeGrammarCard(lesson){
  const details=el('details','grammar-card card');
  const completed=state.grammarCompleted.has(lesson.id);
  const summary=el('summary','',`<span class="grammar-number">${String(lesson.id).padStart(2,'0')}</span><div class="grammar-heading"><small>${lesson.level} · ${lesson.cat}</small><h2>${lesson.title}</h2><span class="pattern-chip">${lesson.pattern}</span></div><div class="grammar-status">${completed?'<span class="done-badge">학습 완료</span>':''}<span class="grammar-chevron">⌄</span></div>`);
  const body=el('div','grammar-body');
  body.append(el('div','grammar-pattern-box',`<small>핵심 문형</small><strong>${lesson.pattern}</strong>`));
  body.append(el('p','grammar-explain',lesson.explanation));
  body.append(el('div','grammar-tip',`<strong>기억하기</strong><br>${lesson.tip}`));
  const exWrap=el('div','grammar-examples');
  lesson.examples.forEach(example=>{
    const ex=el('article','grammar-example');
    const audio=el('button','','🔊');
    audio.setAttribute('aria-label',`${example.zh} 중국어 듣기`);
    audio.onclick=()=>speak(example.zh);
    const text=el('div','',`<strong>${example.zh}</strong><span class="pinyin">${example.pinyin}</span><span class="reading">한국어식 발음 · ${example.koPron}</span><p>${example.ko}<br><span>EN · ${example.en}</span></p>`);
    ex.append(audio,text); exWrap.append(ex);
  });
  body.append(exWrap);
  const practice=el('section','grammar-practice');
  practice.append(el('h3','','바로 연습'));
  practice.append(el('p','',lesson.quiz.question));
  const options=el('div','grammar-options');
  const feedback=el('div','grammar-feedback','');
  const buttons=[];
  lesson.quiz.options.forEach((option,index)=>{
    const b=el('button','grammar-option',option);
    buttons.push(b);
    b.onclick=()=>{
      if(buttons.some(x=>x.disabled))return;
      buttons.forEach(x=>x.disabled=true);
      if(index===lesson.quiz.answer){
        b.classList.add('correct');
        feedback.textContent=`정답입니다! ${lesson.quiz.explain}`;
      }else{
        b.classList.add('wrong');
        buttons[lesson.quiz.answer].classList.add('correct');
        feedback.textContent=`정답: ${lesson.quiz.options[lesson.quiz.answer]} · ${lesson.quiz.explain}`;
      }
      speak(lesson.examples[0].zh);
    };
    options.append(b);
  });
  practice.append(options,feedback); body.append(practice);
  const completeRow=el('div','grammar-complete-row');
  const completeBtn=el('button',`secondary-btn grammar-complete${completed?' done':''}`,completed?'✓ 학습 완료':'✓ 이 문법을 배웠어요');
  completeBtn.onclick=()=>toggleGrammarComplete(lesson.id);
  completeRow.append(completeBtn); body.append(completeRow);
  details.append(summary,body);
  return details;
}

function renderGrammar(){
  renderGrammarFilters();
  const items=filteredGrammar();
  $('#grammarResultCount').textContent=`${items.length}개 문법`;
  $('#grammarProgressText').textContent=`${state.grammarCompleted.size} / ${GRAMMAR.length}`;
  $('#grammarProgressBar').style.width=`${state.grammarCompleted.size/GRAMMAR.length*100}%`;
  const list=$('#grammarList'); list.innerHTML='';
  if(!items.length){
    list.append(el('div','empty-state card','<span>法</span><h2>표시할 문법이 없어요</h2><p>검색어나 필터를 바꿔 보세요.</p>'));
    return;
  }
  items.forEach(g=>list.append(makeGrammarCard(g)));
}

function populateCardCategories(){
  const select=$('#cardCategory');
  select.innerHTML=CATEGORIES.map(c=>`<option value="${c}">${c}</option>`).join('');
  select.addEventListener('change',()=>{
    state.cardDeck=select.value==='전체'?[...WORDS]:WORDS.filter(w=>w.cat===select.value);
    state.cardIndex=0; renderCard();
  });
}
function currentCard(){ return state.cardDeck[state.cardIndex]||WORDS[0]; }
function renderCard(){
  const w=currentCard(); if(!w)return;
  $('#flashcard').classList.remove('flipped');
  $('#cardIndex').textContent=`${state.cardIndex+1} / ${state.cardDeck.length}`;
  $('#cardHanzi').textContent=w.hanzi; $('#cardPinyin').textContent=w.pinyin;
  $('#cardKo').textContent=w.ko; $('#cardKoPron').textContent=`한국어식 발음 · ${w.koPron}`; $('#cardEn').textContent=`English · ${w.en}`;
  $('#cardFavorite').textContent=state.favorites.has(w.id)?'★ 저장됨':'☆ 즐겨찾기';
  $('#cardLearned').textContent=state.learned.has(w.id)?'✓ 외움 완료':'✓ 외웠어요';
}
function changeCard(delta){ state.cardIndex=(state.cardIndex+delta+state.cardDeck.length)%state.cardDeck.length; renderCard(); }

function startQuiz(){
  state.quiz={questions:randomItems(WORDS,10),index:0,score:0,answered:false};
  $('#quizPanel')?.removeAttribute('hidden');
  $('#quizResult').hidden=true; $('.quiz-panel').hidden=false; renderQuizQuestion();
}
function renderQuizQuestion(){
  const q=state.quiz; const w=q.questions[q.index]; q.answered=false;
  $('#quizProgress').textContent=`${q.index+1} / ${q.questions.length}`;
  $('#quizScore').textContent=`점수 ${q.score}`; $('#quizBar').style.width=`${(q.index+1)/q.questions.length*100}%`;
  $('#quizHanzi').textContent=w.hanzi; $('#quizPinyin').textContent=w.pinyin;
  $('#quizFeedback').textContent=''; $('#nextQuiz').disabled=true;
  const distractors=randomItems(WORDS.filter(x=>x.id!==w.id),3);
  const options=randomItems([w,...distractors],4);
  const box=$('#quizOptions'); box.innerHTML='';
  options.forEach(option=>{
    const b=el('button','quiz-option',`<span>${option.ko}</span><small style="display:block;margin-top:4px;color:var(--muted);font-weight:500">${option.en}</small>`);
    b.addEventListener('click',()=>answerQuiz(b,option,w)); box.append(b);
  });
}
function answerQuiz(button,chosen,correct){
  if(state.quiz.answered)return; state.quiz.answered=true;
  const right=chosen.id===correct.id;
  if(right){ state.quiz.score++; button.classList.add('correct'); $('#quizFeedback').textContent='정답입니다! 很好!'; }
  else {
    button.classList.add('wrong');
    [...$('#quizOptions').children].find(b=>b.querySelector('span').textContent===correct.ko)?.classList.add('correct');
    $('#quizFeedback').textContent=`정답: ${correct.ko} · ${correct.en}`;
  }
  [...$('#quizOptions').children].forEach(b=>b.disabled=true);
  state.quizStats.total++; if(right)state.quizStats.correct++; save(); renderStats(); $('#nextQuiz').disabled=false;
  speak(correct.hanzi);
}
function nextQuiz(){
  if(!state.quiz.answered)return;
  if(state.quiz.index<state.quiz.questions.length-1){ state.quiz.index++; renderQuizQuestion(); }
  else finishQuiz();
}
function finishQuiz(){
  $('.quiz-panel').hidden=true; $('#quizResult').hidden=false;
  const {score,questions}=state.quiz; $('#resultScore').textContent=`${score} / ${questions.length}`;
  $('#resultMessage').textContent=score===10?'완벽합니다! 100단어 마스터에 가까워졌어요.':score>=7?'아주 잘했어요. 틀린 단어만 다시 복습해 보세요.':score>=4?'좋은 시작이에요. 음성을 듣고 한 번 더 도전해 보세요.':'괜찮아요. 플래시카드로 천천히 익혀 보세요.';
}

function bindEvents(){
  $('#menuBtn').onclick=openDrawer; $('#closeDrawerBtn').onclick=closeDrawer; $('#scrim').onclick=closeDrawer;
  $$('[data-view]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));
  $$('[data-go]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));
  $('#refreshDaily').onclick=()=>{state.daily={date:new Date().toISOString().slice(0,10),ids:randomItems(WORDS,5).map(w=>w.id)};storage.setItem('hcDaily',JSON.stringify(state.daily));renderHome();};
  $('#searchInput').addEventListener('input',e=>{state.search=e.target.value;renderWords();});
  $('#clearSearch').onclick=()=>{state.search='';$('#searchInput').value='';renderWords();};
  $('#hideLearned').addEventListener('change',e=>{state.hideLearned=e.target.checked;renderWords();});
  $('#grammarSearchInput').addEventListener('input',e=>{state.grammarSearch=e.target.value;renderGrammar();});
  $('#clearGrammarSearch').onclick=()=>{state.grammarSearch='';$('#grammarSearchInput').value='';renderGrammar();};
  $('#hideGrammarCompleted').addEventListener('change',e=>{state.hideGrammarCompleted=e.target.checked;renderGrammar();});
  $('#flashcard').addEventListener('click',()=>$('#flashcard').classList.toggle('flipped'));
  $('#flashcard').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('#flashcard').classList.toggle('flipped');}});
  $('#prevCard').onclick=()=>changeCard(-1); $('#nextCard').onclick=()=>changeCard(1);
  $('#shuffleCards').onclick=()=>{state.cardDeck=randomItems(state.cardDeck,state.cardDeck.length);state.cardIndex=0;renderCard();showToast('카드를 섞었습니다.');};
  $('#cardSpeakZh').onclick=e=>{e.stopPropagation();speak(currentCard().hanzi);};
  $('#cardSpeakKo').onclick=e=>{e.stopPropagation();speak(currentCard().ko,'ko-KR',.92);};
  $('#cardSpeakEn').onclick=e=>{e.stopPropagation();speak(currentCard().en,'en-US',.86);};
  $('#cardFavorite').onclick=()=>toggleFavorite(currentCard().id); $('#cardLearned').onclick=()=>toggleLearned(currentCard().id);
  $('#quizSpeak').onclick=()=>speak(state.quiz.questions[state.quiz.index].hanzi); $('#nextQuiz').onclick=nextQuiz; $('#restartQuiz').onclick=startQuiz;
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();state.deferredPrompt=e;$('#installBtn').hidden=false;});
  $('#installBtn').onclick=async()=>{if(!state.deferredPrompt){showToast('브라우저 메뉴에서 홈 화면에 추가해 주세요.');return;}state.deferredPrompt.prompt();await state.deferredPrompt.userChoice;state.deferredPrompt=null;$('#installBtn').hidden=true;};
  window.addEventListener('appinstalled',()=>{showToast('앱이 설치되었습니다.');$('#installBtn').hidden=true;});
}

function init(){
  if(WORDS.length!==100) console.error(`단어 수 오류: ${WORDS.length}`);
  populateCardCategories(); bindEvents(); renderHome(); renderCategoryFilters(); renderWords(); renderGrammarFilters(); renderGrammar(); renderCard(); renderFavorites(); startQuiz(); navigate('home');
  if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}
init();
