const SONGS = [
  {
  "title": "Hooligan",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(從 00:07 前奏變化這邊開始喊)",
      "practiceText": "(從 00:07 前奏變化這邊開始喊)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "practiceText": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "roman": "Kim Namjoon! Kim Seokjin! Min Yoongi! Jeong Hoseok! Park Jimin! Kim Taehyung! Jeon Jung kook! BTS!"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "hooligan",
      "highlight": "hooligan"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "We pop out, we actin’ a fool again",
      "practiceText": "fool again",
      "highlight": "fool again"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan",
      "practiceText": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "Watch this, watch this beat goin’ hooligan"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Why this bassline slappin’ so rude",
      "practiceText": "Why this bassline slappin’ so rude"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Drop it lower than chopped and screwed",
      "practiceText": "Drop it lower than chopped and screwed"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan",
      "practiceText": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "Watch this, watch this beat goin’ hooligan"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Man, I’m ’bout to blow a fuse",
      "practiceText": "Man, I’m ’bout to blow a fuse"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "통제불능, 머리 춤",
      "practiceText": "통제불능, 머리 춤"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뛰어 미친놈인 듯",
      "practiceText": "뛰어 미친놈인 듯"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Me everywhere, 얼쑤",
      "practiceText": "얼쑤",
      "highlight": "얼쑤",
      "roman": "eol ssu"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody move",
      "practiceText": "Somebody move"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody move",
      "practiceText": "Somebody move"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "다들 모여 하나 둘",
      "practiceText": "다들 모여 하나 둘"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can never ever choose",
      "practiceText": "I can never ever choose"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every one o’ you a muse",
      "practiceText": "Every one o’ you a muse"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Crowd lookin’ like a campus",
      "practiceText": "Crowd lookin’ like a campus"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Beat drop 우린 dancin’",
      "practiceText": "Beat drop 우린 dancin’"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "hooligan",
      "highlight": "hooligan"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "We pop out, we actin’ a fool again",
      "practiceText": "fool again",
      "highlight": "fool again"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan",
      "practiceText": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "Watch this, watch this beat goin’ hooligan"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Why this bassline slappin’ so rude",
      "practiceText": "Why this bassline slappin’ so rude"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Drop it lower than chopped and screwed",
      "practiceText": "Drop it lower than chopped and screwed"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan",
      "practiceText": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "Watch this, watch this beat goin’ hooligan"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I go cuckoo crazy loco save me",
      "practiceText": "I go cuckoo crazy loco save me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Like El Cucuy 굳이 말 안 해도 알잖아",
      "practiceText": "Like El Cucuy 굳이 말 안 해도 알잖아"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hooligan, like hooligan",
      "practiceText": "Hooligan, like hooligan"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "때려 부숴 like hooligan",
      "practiceText": "때려 부숴 like hooligan",
      "roman": "ttaeryeo buswo like hooligan"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "시간 됐으니 좀 비켜 좀",
      "practiceText": "시간 됐으니 좀 비켜 좀"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "All clear 이상 무",
      "practiceText": "이상 무",
      "highlight": "이상 무",
      "roman": "yisang mu"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Take you out",
      "practiceText": "Take you out"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Take you out",
      "practiceText": "Take you out"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "What’s the future?",
      "practiceText": "What’s the future?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Where’s the now?",
      "practiceText": "Where’s the now?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This is international",
      "practiceText": "This is international"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Make it unforgettable",
      "practiceText": "Make it unforgettable"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "hooligan",
      "highlight": "hooligan"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "We pop out, we actin’ a fool again",
      "practiceText": "fool again",
      "highlight": "fool again"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan",
      "practiceText": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "Watch this, watch this beat goin’ hooligan"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "We the mess, gonna get a bigger mop here (mop here)",
      "practiceText": "(mop here)",
      "highlight": "(mop here)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "This that K, gotta get a better pop here (pop here)",
      "practiceText": "(pop here)",
      "highlight": "(pop here)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You gon’ hear this one playin’ round the clock, yeah",
      "practiceText": "You gon’ hear this one playin’ round the clock, yeah"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Round the clock clock clock clock",
      "practiceText": "clock clock clock clock",
      "highlight": "clock clock clock clock"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Why this bassline slappin’ so rude",
      "practiceText": "Why this bassline slappin’ so rude"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Drop it lower than chopped and screwed",
      "practiceText": "Drop it lower than chopped and screwed"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan",
      "practiceText": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "Watch this, watch this beat goin’ hooligan"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Why this bassline slappin’ so rude",
      "practiceText": "Why this bassline slappin’ so rude"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Drop it lower than chopped and screwed",
      "practiceText": "Drop it lower than chopped and screwed"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan",
      "practiceText": "(Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha) Hooligan"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Watch this, watch this beat goin’ hooligan",
      "practiceText": "Watch this, watch this beat goin’ hooligan"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Aliens",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This gon’ be the jam of the year",
      "practiceText": "This gon’ be the jam of the year"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "지루하고 따분해 모든게",
      "practiceText": "지루하고 따분해 모든게"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "시간은 참 빨라 tick-tock",
      "practiceText": "tick-tock",
      "highlight": "tick-tock"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "stadium으로 집합",
      "practiceText": "집합",
      "highlight": "집합",
      "roman": "jip hap"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "도대체 뭘 더 고민해?",
      "practiceText": "도대체 뭘 더 고민해?"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "태생부터 다른 seven aliens",
      "practiceText": "seven aliens",
      "highlight": "seven aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우릴 부러워하네 저 civilians",
      "practiceText": "우릴 부러워하네 저 civilians"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "굳이 설명하기 입아파",
      "practiceText": "굳이 설명하기 입아파"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "stadium으로 집합",
      "practiceText": "집합",
      "highlight": "집합",
      "roman": "jip hap"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "도대체 뭘 더 고민해?",
      "practiceText": "도대체 뭘 더 고민해?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hello this your, hello this your new honey",
      "practiceText": "Hello this your, hello this your new honey"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "박수쳐, 흔들어, 중모리",
      "practiceText": "박수쳐, 흔들어, 중모리"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh my god, do I look too funny?",
      "practiceText": "Oh my god, do I look too funny?"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "뭐 어쩔래 just move for me",
      "practiceText": "move for me",
      "highlight": "move for me"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah, move for me",
      "practiceText": "move for me",
      "highlight": "move for me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "From the 가나 to the 하",
      "practiceText": "From the 가나 to the 하"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우릴 보고 배워놔",
      "practiceText": "우릴 보고 배워놔"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we aliens",
      "practiceText": "Yeah we aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you wanna hit my house",
      "practiceText": "If you wanna hit my house"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "신발은 벗어놔",
      "practiceText": "신발은 벗어놔"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we aliens",
      "practiceText": "Yeah we aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어쩜 그래? shameless",
      "practiceText": "어쩜 그래? shameless"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "예의를 차려, we aliens",
      "practiceText": "예의를 차려, we aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "해는 동쪽에서 risin’",
      "practiceText": "해는 동쪽에서 risin’"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Aliens, aliens",
      "practiceText": "Aliens, aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every night every day",
      "practiceText": "Every night every day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭐든 더 빠르게",
      "practiceText": "뭐든 더 빠르게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "매일 밤 새워대",
      "practiceText": "매일 밤 새워대"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we livin’ that",
      "practiceText": "Yeah we livin’ that"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Aliens, aliens",
      "practiceText": "Aliens, aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every night every day",
      "practiceText": "Every night every day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭐든 더 빠르게",
      "practiceText": "뭐든 더 빠르게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "시대가 우릴 원해",
      "practiceText": "시대가 우릴 원해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we livin’ that",
      "practiceText": "Yeah we livin’ that"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Aliens, aliens",
      "practiceText": "Aliens, aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It goes, let me, honey, talk about the business",
      "practiceText": "It goes, let me, honey, talk about the business"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Everybody know now where the K is",
      "practiceText": "Everybody know now where the K is"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "어디까지 가니 이런 제길",
      "practiceText": "이런 제길",
      "highlight": "이런 제길",
      "roman": "yireon jegil"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "저주하니 아직? 흉즉대길",
      "practiceText": "흉즉대길",
      "highlight": "흉즉대길",
      "roman": "hyung jeuk dae gil"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Pardon 김구 선생님 tell me how you feel",
      "practiceText": "Pardon 김구 선생님 tell me how you feel"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "영어는 또 나밖에 못 해 but that is how we kill",
      "practiceText": "영어는 또 나밖에 못 해 but that is how we kill"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "눈만 허벌나게 큰 너희가 말하길",
      "practiceText": "눈만 허벌나게 큰 너희가 말하길"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Are they for real? for real?",
      "practiceText": "Are they for real? for real?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hello this your, hello this your new honey",
      "practiceText": "Hello this your, hello this your new honey"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "박수쳐, 흔들어, 중모리",
      "practiceText": "박수쳐, 흔들어, 중모리"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh my god, do I look too funny",
      "practiceText": "Oh my god, do I look too funny"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "뭐 어쩔래 just move for me",
      "practiceText": "move for me",
      "highlight": "move for me"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah, move for me",
      "practiceText": "move for me",
      "highlight": "move for me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "From the 가나 to the 하",
      "practiceText": "From the 가나 to the 하"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우리 보고 배워놔",
      "practiceText": "우리 보고 배워놔"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we aliens",
      "practiceText": "Yeah we aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you wanna hit my house",
      "practiceText": "If you wanna hit my house"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "신발은 벗어놔",
      "practiceText": "신발은 벗어놔"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we aliens",
      "practiceText": "Yeah we aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어쩜 그래? shameless",
      "practiceText": "어쩜 그래? shameless"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "예의 차려, we aliens",
      "practiceText": "예의 차려, we aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "해는 동쪽에서 risin’",
      "practiceText": "해는 동쪽에서 risin’"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Aliens, aliens",
      "practiceText": "Aliens, aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every night every day",
      "practiceText": "Every night every day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭐든 더 빠르게",
      "practiceText": "뭐든 더 빠르게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "매일 밤 새워대",
      "practiceText": "매일 밤 새워대"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we livin’ that",
      "practiceText": "Yeah we livin’ that"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Aliens, aliens",
      "practiceText": "Aliens, aliens"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every night every day",
      "practiceText": "Every night every day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭐든 더 빠르게",
      "practiceText": "뭐든 더 빠르게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "시대가 우릴 원해",
      "practiceText": "시대가 우릴 원해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we livin’ that",
      "practiceText": "Yeah we livin’ that"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Aliens, aliens",
      "practiceText": "Aliens, aliens"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "헛 둘!",
      "practiceText": "헛 둘!",
      "roman": "heot dul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we land on it",
      "practiceText": "Yeah we land on it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "헛 둘!",
      "practiceText": "헛 둘!",
      "roman": "heot dul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "And stand on it",
      "practiceText": "And stand on it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "헛 둘!",
      "practiceText": "헛 둘!",
      "roman": "heot dul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "찍어! Put that stamp on it",
      "practiceText": "찍어! Put that stamp on it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Stamp on it, stamp on it",
      "practiceText": "Stamp on it, stamp on it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "헛 둘!",
      "practiceText": "헛 둘!",
      "roman": "heot dul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we land on it",
      "practiceText": "Yeah we land on it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "헛 둘!",
      "practiceText": "헛 둘!",
      "roman": "heot dul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "And stand on it",
      "practiceText": "And stand on it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "헛 둘!",
      "practiceText": "헛 둘!",
      "roman": "heot dul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "찍어! Put that stamp on it",
      "practiceText": "찍어! Put that stamp on it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Stamp on it, stamp on it",
      "replaceText": "Stamp on it, stamp on it",
      "practiceText": "B! T! S!",
      "highlight": "B! T! S!"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Run BTS (달려라 방탄)",
  "note": "這首官方這次沒給應援指南，是依照以往經驗填寫",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "논현 100m 우리 자리",
      "practiceText": "논현 100m 우리 자리"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "학교 끝나면 회사 calling (예, 예)",
      "practiceText": "학교 끝나면 회사 calling (예, 예)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "아 지금 바로 딱 갈게요",
      "practiceText": "아 지금 바로 딱 갈게요"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "제발 집엔 보내지 마세요",
      "practiceText": "제발 집엔 보내지 마세요"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Oh) 가끔 그날의 꿈 꿔",
      "practiceText": "(Oh) 가끔 그날의 꿈 꿔"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Oh) 몸서리치다 눈 떠",
      "practiceText": "(Oh) 몸서리치다 눈 떠"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I don't wanna go go back again",
      "practiceText": "I don't wanna go go back again"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Let's go, let's go, let's go)",
      "practiceText": "(Let's go, let's go, let's go)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "10년을 wait, wait",
      "practiceText": "10년을 wait, wait"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "We from the bottom",
      "practiceText": "We from the bottom"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I caught you bae, bae",
      "practiceText": "I caught you bae, bae"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "우린 좀 빠름",
      "practiceText": "우린 좀 빠름",
      "roman": "u rin jom ppa reum"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We seven mate, mates",
      "practiceText": "We seven mate, mates"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "잘 봐 we got us",
      "practiceText": "잘 봐 we got us",
      "roman": "jal bwa we got us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Tell me what you wanna",
      "practiceText": "Tell me what you wanna"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Tell me what you wanna woah",
      "practiceText": "Tell me what you wanna woah"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(If we live fast, let us die young)",
      "practiceText": "(If we live fast, let us die young)",
      "roman": "請用力吶喊！"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "혼을 쏙 빼놓지",
      "practiceText": "혼을 쏙 빼놓지"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(make it move, left and right)",
      "practiceText": "(make it move, left and right)",
      "roman": "也可以嘶吼就好XD"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그게 누구든지",
      "practiceText": "그게 누구든지"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(make it move, left and right)",
      "practiceText": "(make it move, left and right)",
      "roman": "也可以嘶吼就好XD"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "두 맨발이 우리 가솔린",
      "practiceText": "두 맨발이 우리 가솔린"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이제 가자, are you ready?",
      "practiceText": "이제 가자, are you ready?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Okay, let's go!)",
      "practiceText": "(Okay, let's go!)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Run bulletproof, run, yeah you gotta run",
      "practiceText": "Run bulletproof, run, yeah you gotta run"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Run bulletproof, run, yeah you gotta run",
      "practiceText": "Run bulletproof, run, yeah you gotta run"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Run bulletproof, run, yeah you gotta run",
      "practiceText": "Run bulletproof, run, yeah you gotta run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run bulletproof, run",
      "practiceText": "Run bulletproof, run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내가 맞았어 논현동의 비가 새던 작업실에서",
      "practiceText": "내가 맞았어 논현동의 비가 새던 작업실에서"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "깡소주를 까며 신세타령이나 하며",
      "practiceText": "깡소주를 까며 신세타령이나 하며"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "다짐했던 그 말 성공하면 다들 뒤졌어",
      "practiceText": "다짐했던 그 말 성공하면 다들 뒤졌어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "방탄의 성공 이유? 나도 몰라 그딴 게 어딨어",
      "practiceText": "방탄의 성공 이유? 나도 몰라 그딴 게 어딨어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우리들이 모두 새빠지게 달린 거지",
      "practiceText": "우리들이 모두 새빠지게 달린 거지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭐라 하든 달린 거지",
      "practiceText": "뭐라 하든 달린 거지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "답은 여기 있어 하하하",
      "practiceText": "답은 여기 있어 하하하"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "위로, got them",
      "practiceText": "got them",
      "highlight": "got them"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "지조, got them",
      "practiceText": "got them",
      "highlight": "got them"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Good music, got them",
      "practiceText": "got them",
      "highlight": "got them"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Good team? Goddamn!",
      "practiceText": "Goddamn!",
      "highlight": "Goddamn!"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "U said u hot, oh man, u not",
      "practiceText": "U said u hot, oh man, u not"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뛰는 놈 위에 나는 놈 위에",
      "practiceText": "뛰는 놈 위에 나는 놈 위에"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "달리는 방탄 lezzzgo",
      "practiceText": "달리는 방탄 lezzzgo"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "10년을 wait, wait",
      "practiceText": "10년을 wait, wait"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "We from the bottom",
      "practiceText": "We from the bottom"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I caught you bae, bae",
      "practiceText": "I caught you bae, bae"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "우린 좀 빠름",
      "practiceText": "우린 좀 빠름",
      "roman": "u rin jom ppa reum"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We seven mate, mates",
      "practiceText": "We seven mate, mates"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "잘 봐 we got us",
      "practiceText": "잘 봐 we got us",
      "roman": "jal bwa we got us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Tell me what you wanna",
      "practiceText": "Tell me what you wanna"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Tell me what you wanna woah",
      "practiceText": "Tell me what you wanna woah"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(If we live fast, let us die young)",
      "practiceText": "(If we live fast, let us die young)",
      "roman": "請用力吶喊！"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "혼을 쏙 빼놓지",
      "practiceText": "혼을 쏙 빼놓지"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(make it move, left and right)",
      "practiceText": "(make it move, left and right)",
      "roman": "也可以嘶吼就好XD"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그게 누구든지",
      "practiceText": "그게 누구든지"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(make it move, left and right)",
      "practiceText": "(make it move, left and right)",
      "roman": "也可以嘶吼就好XD"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "두 맨발이 우리 가솔린",
      "practiceText": "두 맨발이 우리 가솔린"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이제 가자, are you ready?",
      "practiceText": "이제 가자, are you ready?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Let's go!)",
      "practiceText": "(Let's go!)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Run bulletproof, run, yeah you gotta run",
      "practiceText": "Run bulletproof, run, yeah you gotta run"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Run bulletproof, run, yeah you gotta run",
      "practiceText": "Run bulletproof, run, yeah you gotta run"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Run bulletproof, run, yeah you gotta run",
      "practiceText": "Run bulletproof, run, yeah you gotta run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run bulletproof, run",
      "practiceText": "Run bulletproof, run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "무식한 믿음으로",
      "practiceText": "무식한 믿음으로"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "걍 달려, 두 다리로",
      "practiceText": "걍 달려, 두 다리로"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "That's how we do it all",
      "practiceText": "That's how we do it all"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(AY AY)",
      "practiceText": "(AY AY)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그렇게 증명했어",
      "practiceText": "그렇게 증명했어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "일곱 초원이들",
      "practiceText": "일곱 초원이들"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "백만 불짜리로",
      "practiceText": "백만 불짜리로"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(AY AY)",
      "practiceText": "(AY AY)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "지민이, 뷔, 고생s",
      "practiceText": "지민이, 뷔, 고생s"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "남주니, 홉, 고생s",
      "practiceText": "남주니, 홉, 고생s"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "윤기형, 찐, 고생s",
      "practiceText": "윤기형, 찐, 고생s"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "정국이, 모두 so thanks",
      "practiceText": "정국이, 모두 so thanks"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Get ready, get ready, get ready,",
      "practiceText": "Get ready, get ready, get ready,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "get ready, get ready, 앞으로 더",
      "practiceText": "get ready, get ready, 앞으로 더"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Go get it, go get it, go get it, go get it, go get it,",
      "practiceText": "Go get it, go get it, go get it, go get it, go get it,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "달리자 run",
      "practiceText": "달리자 run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(If we live fast, let us die young)",
      "practiceText": "(If we live fast, let us die young)",
      "roman": "請用力吶喊！"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "혼을 쏙 빼놓지",
      "practiceText": "혼을 쏙 빼놓지"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(make it move, left and right)",
      "practiceText": "(make it move, left and right)",
      "roman": "也可以嘶吼就好XD"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그게 누구든지",
      "practiceText": "그게 누구든지"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(make it move, left and right)",
      "practiceText": "(make it move, left and right)",
      "roman": "也可以嘶吼就好XD"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "두 맨발이 우리 가솔린",
      "practiceText": "두 맨발이 우리 가솔린"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이제 가자, are you ready?",
      "practiceText": "이제 가자, are you ready?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah",
      "practiceText": "Yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run beautiful, run, yeah you gotta run",
      "practiceText": "Run beautiful, run, yeah you gotta run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run beautiful, run, yeah you gotta run",
      "practiceText": "Run beautiful, run, yeah you gotta run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run beautiful, run, yeah you gotta run",
      "practiceText": "Run beautiful, run, yeah you gotta run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run beautiful, run",
      "practiceText": "Run beautiful, run"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "they don’t know ’bout us",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can show you love, I can show you",
      "practiceText": "I can show you love, I can show you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you wanna know me, what can I do for you?",
      "practiceText": "If you wanna know me, what can I do for you?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "대체 뭐가 달랐냐고 자꾸 물어",
      "practiceText": "대체 뭐가 달랐냐고 자꾸 물어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나는 대답해, 나도 몰라",
      "practiceText": "나는 대답해, 나도 몰라"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Everybody hear the story that they wanna",
      "practiceText": "Everybody hear the story that they wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "쟤넨 이거 땜에 떴어 내가 맞어",
      "practiceText": "쟤넨 이거 땜에 떴어 내가 맞어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We just big boys a.k.a 촌놈",
      "practiceText": "We just big boys a.k.a 촌놈"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그냥 뭐 기세지 just shut up, just shut up",
      "practiceText": "그냥 뭐 기세지 just shut up, just shut up"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hold up, chill and take a bubble bath, bae",
      "practiceText": "Hold up, chill and take a bubble bath, bae"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Do the math, and go, just say what you say",
      "practiceText": "Do the math, and go, just say what you say"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh it’s hard and that we cannot explain",
      "practiceText": "Oh it’s hard and that we cannot explain"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every time we tryna tryna explain, we find",
      "practiceText": "Every time we tryna tryna explain, we find"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can show you love, I can show you",
      "practiceText": "I can show you love, I can show you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you wanna know me, what can I do for you?",
      "practiceText": "If you wanna know me, what can I do for you?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "대체 뭐가 달랐냐고 자꾸 물어",
      "practiceText": "대체 뭐가 달랐냐고 자꾸 물어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나는 대답해, 나도 몰라",
      "practiceText": "나는 대답해, 나도 몰라"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "항상 쉬운길만 찾기 바빠 괜시리",
      "practiceText": "항상 쉬운길만 찾기 바빠 괜시리"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "오지랖들은 태평양 쯤 뺀질이",
      "practiceText": "오지랖들은 태평양 쯤 뺀질이"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "알기 쉽게 설명 해줄까 baby",
      "practiceText": "알기 쉽게 설명 해줄까 baby"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "몰라도 돼 뭘 또 굳이 알려하니 uh",
      "practiceText": "몰라도 돼 뭘 또 굳이 알려하니 uh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "“걔넨 특별해",
      "practiceText": "“걔넨 특별해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Asian 중에”",
      "practiceText": "Asian 중에”"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "“영웅스러운 존재,",
      "practiceText": "“영웅스러운 존재,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Too hard to break”",
      "practiceText": "Too hard to break”"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We can’t relate,",
      "practiceText": "We can’t relate,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그냥 사람 일곱인데",
      "practiceText": "그냥 사람 일곱인데"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You said we changed?",
      "practiceText": "You said we changed?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We feel the same",
      "practiceText": "We feel the same"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "They don’t know ‘bout us",
      "practiceText": "They don’t know ‘bout us"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Even we don’t know ‘bout us)",
      "practiceText": "(Even we don’t know ‘bout us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(They don’t know about us)",
      "practiceText": "(They don’t know about us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "They don’t know ‘bout us)",
      "practiceText": "They don’t know ‘bout us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(They don’t know about us)",
      "practiceText": "(They don’t know about us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "They don’t know ‘bout us)",
      "practiceText": "They don’t know ‘bout us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(They don’t know about us)",
      "practiceText": "(They don’t know about us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "They don’t know ‘bout us)",
      "practiceText": "They don’t know ‘bout us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah damn ooo damn right ooo damn right",
      "practiceText": "Yeah damn ooo damn right ooo damn right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(They don’t know about us)",
      "practiceText": "(They don’t know about us)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "They don’t know ‘bout us)",
      "practiceText": "They don’t know ‘bout us)"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Like Animals",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Take me into your deep",
      "practiceText": "Take me into your deep"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I wanna lay in your world",
      "practiceText": "I wanna lay in your world"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So what, your shadow’s a mess",
      "practiceText": "So what, your shadow’s a mess"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m walkin’ with my own dirt",
      "practiceText": "I’m walkin’ with my own dirt"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We can go all night",
      "practiceText": "We can go all night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don’t you close your eyes",
      "practiceText": "Don’t you close your eyes"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don’t you fear the light",
      "practiceText": "Don’t you fear the light"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All night",
      "practiceText": "All night"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna be animals",
      "practiceText": "If you wanna be animals"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby we can be animals",
      "practiceText": "Baby we can be animals"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Eat this life ‘til your heart is full",
      "practiceText": "Eat this life ‘til your heart is full"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you want, you can have it all",
      "practiceText": "If you want, you can have it all"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Six feet down in the sand",
      "practiceText": "Six feet down in the sand"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "There’s creatures that made a hole",
      "practiceText": "There’s creatures that made a hole"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Do speak, I’m beggin’ you, please",
      "practiceText": "Do speak, I’m beggin’ you, please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "There’s beauty outside control",
      "practiceText": "There’s beauty outside control"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh we can go all night",
      "practiceText": "Oh we can go all night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We can go all night",
      "practiceText": "We can go all night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we should go all night",
      "practiceText": "Yeah we should go all night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All night",
      "practiceText": "All night"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna be animals",
      "practiceText": "If you wanna be animals"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby we can be animals",
      "practiceText": "Baby we can be animals"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Eat this life ‘til your heart is full",
      "practiceText": "Eat this life ‘til your heart is full"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you want, you can have it all",
      "practiceText": "If you want, you can have it all"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Got you in the wild",
      "practiceText": "Got you in the wild"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somewhere so far",
      "practiceText": "Somewhere so far"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "With your claws sharp",
      "practiceText": "With your claws sharp"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "And them fangs out",
      "practiceText": "And them fangs out"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Now you see a whole land full of animals",
      "practiceText": "Now you see a whole land full of animals"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "None of us are tameable",
      "practiceText": "None of us are tameable"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "None of us are tameable",
      "practiceText": "None of us are tameable"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Heart untameable",
      "practiceText": "Heart untameable"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Go and take it all",
      "practiceText": "Go and take it all"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna be animals",
      "practiceText": "If you wanna be animals"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby we can be animals",
      "practiceText": "Baby we can be animals"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Eat this life ’til your heart is full",
      "practiceText": "Eat this life ’til your heart is full"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Heart untameable)",
      "practiceText": "(Heart untameable)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you want, you can have it all",
      "practiceText": "If you want, you can have it all"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Go and take it all)",
      "practiceText": "(Go and take it all)"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "FAKE LOVE",
  "note": "演唱會是變奏版本唷～不熟悉沒喊到沒關係！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해서라면",
      "practiceText": "널 위해서라면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 슬퍼도 기쁜 척 할 수가 있었어",
      "practiceText": "난 슬퍼도 기쁜 척 할 수가 있었어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해서라면",
      "practiceText": "널 위해서라면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 아파도 강한 척 할 수가 있었어",
      "practiceText": "난 아파도 강한 척 할 수가 있었어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "사랑이 사랑만으로 완벽하길",
      "practiceText": "사랑이 사랑만으로 완벽하길"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내 모든 약점들은 다 숨겨지길",
      "practiceText": "내 모든 약점들은 다 숨겨지길"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이뤄지지 않는 꿈속에서",
      "practiceText": "이뤄지지 않는 꿈속에서"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "피울 수 없는 꽃을 키웠어",
      "practiceText": "피울 수 없는 꽃을 키웠어"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so sick of this fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so sorry, but it's fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I wanna be a good man just for you",
      "practiceText": "just for you",
      "highlight": "just for you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "세상을 줬네 just for you",
      "practiceText": "just for you",
      "highlight": "just for you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "전부 바꿨어 just for you",
      "practiceText": "just for you",
      "highlight": "just for you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Now I don't know me",
      "practiceText": "Now I don't know me"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "who are you",
      "practiceText": "who are you",
      "highlight": "who are you"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 우리만의 숲 (숲), 너는 없었어",
      "practiceText": "(숲)",
      "highlight": "(숲)",
      "roman": "(sup)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "내가 왔던 route (route) 잊어버렸어",
      "practiceText": "(route)",
      "highlight": "(route)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나도 내가 누구였는지도 잘 모르게 됐어",
      "practiceText": "나도 내가 누구였는지도 잘 모르게 됐어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "거울에다 지껄여봐, 너는 대체 누구니?",
      "practiceText": "거울에다 지껄여봐, 너는 대체 누구니?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해서라면",
      "practiceText": "널 위해서라면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 슬퍼도 기쁜 척 할 수가 있었어",
      "practiceText": "난 슬퍼도 기쁜 척 할 수가 있었어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해서라면",
      "practiceText": "널 위해서라면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 아파도 강한 척 할 수가 있었어",
      "practiceText": "난 아파도 강한 척 할 수가 있었어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "사랑이 사랑만으로 완벽하길",
      "practiceText": "사랑이 사랑만으로 완벽하길"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내 모든 약점들은 다 숨겨지길",
      "practiceText": "내 모든 약점들은 다 숨겨지길"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이뤄지지 않는 꿈속에서",
      "practiceText": "이뤄지지 않는 꿈속에서"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "피울 수 없는 꽃을 키웠어",
      "practiceText": "피울 수 없는 꽃을 키웠어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love you so bad, love you so bad",
      "practiceText": "Love you so bad, love you so bad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해 예쁜 거짓을 빚어내",
      "practiceText": "널 위해 예쁜 거짓을 빚어내"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love it's so mad, love it's so mad",
      "practiceText": "Love it's so mad, love it's so mad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "날 지워 너의 인형이 되려 해",
      "practiceText": "날 지워 너의 인형이 되려 해"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love you so bad, love you so bad",
      "practiceText": "Love you so bad, love you so bad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해 예쁜 거짓을 빚어내",
      "practiceText": "널 위해 예쁜 거짓을 빚어내"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love it's so mad, love it's so mad",
      "practiceText": "Love it's so mad, love it's so mad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "날 지워 너의 인형이 되려 해",
      "practiceText": "날 지워 너의 인형이 되려 해"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so sick of this fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so sorry, but it's fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Why you sad?",
      "practiceText": "Why you sad?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I don't know 난 몰라",
      "practiceText": "I don't know 난 몰라"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "웃어봐",
      "practiceText": "웃어봐",
      "roman": "useobwa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "사랑해 말해봐",
      "practiceText": "사랑해 말해봐"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "나를 봐",
      "practiceText": "나를 봐",
      "roman": "naleul bwa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나조차도 버린 나",
      "practiceText": "나조차도 버린 나"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너조차",
      "practiceText": "너조차",
      "roman": "neojocha"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이해할 수 없는 나",
      "practiceText": "이해할 수 없는 나"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "낯설다 하네, 니가 좋아하던 나로 변한 내가",
      "practiceText": "낯설다 하네, 니가 좋아하던 나로 변한 내가"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "아니라 하네, 예전에 니가 잘 알고 있던 내가",
      "practiceText": "아니라 하네, 예전에 니가 잘 알고 있던 내가"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "아니긴 뭐가 아냐?",
      "practiceText": "아니긴 뭐가 아냐?",
      "roman": "anigin mwoga anya"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 눈 멀었어",
      "practiceText": "난 눈 멀었어"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "사랑은 뭐가 사랑?",
      "practiceText": "사랑은 뭐가 사랑?",
      "roman": "sarangeun mwoga sarang"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It's all fake love",
      "practiceText": "It's all fake love"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Ooh, I don't know, I don't know, I don't know why",
      "practiceText": "Ooh, I don't know, I don't know, I don't know why"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Ooh 나도 날, 나도 날 모르겠어",
      "practiceText": "Ooh 나도 날, 나도 날 모르겠어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Ooh, I just know, I just know, I just know why",
      "practiceText": "Ooh, I just know, I just know, I just know why"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "'Cause it's all fake love, fake love, fake love",
      "practiceText": "'Cause it's all fake love, fake love, fake love"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love you so bad, love you so bad",
      "practiceText": "Love you so bad, love you so bad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해 예쁜 거짓을 빚어내",
      "practiceText": "널 위해 예쁜 거짓을 빚어내"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love it's so mad, love it's so mad",
      "practiceText": "Love it's so mad, love it's so mad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "날 지워 너의 인형이 되려 해",
      "practiceText": "날 지워 너의 인형이 되려 해"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love you so bad, love you so bad",
      "practiceText": "Love you so bad, love you so bad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해 예쁜 거짓을 빚어내",
      "practiceText": "널 위해 예쁜 거짓을 빚어내"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Love it's so mad, love it's so mad",
      "practiceText": "Love it's so mad, love it's so mad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "날 지워 너의 인형이 되려 해",
      "practiceText": "날 지워 너의 인형이 되려 해"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so sick of this fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so sorry, but it's fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fake love (Fake love)",
      "practiceText": "(Fake love)",
      "highlight": "(Fake love)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해서라면",
      "practiceText": "널 위해서라면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 슬퍼도 기쁜 척 할 수가 있었어",
      "practiceText": "난 슬퍼도 기쁜 척 할 수가 있었어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 위해서라면",
      "practiceText": "널 위해서라면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 아파도 강한 척 할 수가 있었어",
      "practiceText": "난 아파도 강한 척 할 수가 있었어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "사랑이 사랑만으로 완벽하길",
      "practiceText": "사랑이 사랑만으로 완벽하길"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내 모든 약점들은 다 숨겨지길",
      "practiceText": "내 모든 약점들은 다 숨겨지길"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이뤄지지 않는 꿈속에서",
      "practiceText": "이뤄지지 않는 꿈속에서"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "피울 수 없는 꽃을 키웠어",
      "practiceText": "피울 수 없는 꽃을 키웠어"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "SWIM",
  "note": "高陽場有用阿米棒跳舞，不知道高雄場官方應援會是什麼QQ",
  "chants": [
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Water falling off your skin",
      "practiceText": "Water falling off your skin"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I could spend a lifetime watching you",
      "practiceText": "I could spend a lifetime watching you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This is how it all begins",
      "practiceText": "This is how it all begins"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(B! T! S!)",
      "practiceText": "(B! T! S!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Bad world",
      "practiceText": "Bad world"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Gone away and I still wake up in this mad world",
      "practiceText": "mad world",
      "highlight": "mad world"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Name a place that I could breathe on this map, world",
      "practiceText": "map world",
      "highlight": "map, world"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Lookin’ like a goody goody in this bad world, bad world",
      "practiceText": "bad world, bad world",
      "highlight": "bad world, bad world"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Don’t know how to act, girl",
      "practiceText": "act, girl",
      "highlight": "act, girl"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I’m in the deep, tell me where the hell you at, girl?",
      "practiceText": "at, girl?",
      "highlight": "at, girl?"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Oh you ain’t even gotta love me bad, girl",
      "practiceText": "bad, girl",
      "highlight": "bad, girl"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know that I’m never holdin’ back, girl",
      "practiceText": "back, girl",
      "highlight": "back, girl"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So easy",
      "practiceText": "So easy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don’t make it so hard",
      "practiceText": "Don’t make it so hard"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Nights like these",
      "practiceText": "Nights like these"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna get lost",
      "practiceText": "I just wanna get lost"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Right here with the moon and the sharks",
      "practiceText": "Right here with the moon and the sharks"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I ain’t gotta think ’bout a thing, baby, I just",
      "practiceText": "I ain’t gotta think ’bout a thing, baby, I just"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Water falling off your skin",
      "practiceText": "Water falling off your skin"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I could spend a lifetime watching you",
      "practiceText": "I could spend a lifetime watching you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This is how it all begins",
      "practiceText": "This is how it all begins"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Water water so deep",
      "practiceText": "Water water so deep"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Water so deep",
      "practiceText": "Water so deep"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Take it off the ground",
      "practiceText": "Take it off the ground"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I ain’t never gettin’ cold feet",
      "practiceText": "I ain’t never gettin’ cold feet"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah, you know me",
      "practiceText": "Yeah, you know me"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Yeah, you know me",
      "practiceText": "Yeah, you know me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Sittin’ on the shore",
      "practiceText": "Sittin’ on the shore"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Now I’m ready for the whole sea",
      "practiceText": "Now I’m ready for the whole sea"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I can feel the high waves comin’ (comin’)",
      "practiceText": "(comin’)",
      "highlight": "(comin’)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Why you run away, you can run in (run in)",
      "practiceText": "(run in)",
      "highlight": "(run in)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Salt on my tongue, she’s stunnin’",
      "practiceText": "Salt on my tongue, she’s stunnin’"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You’re the only place that I wanna be, yeah",
      "practiceText": "You’re the only place that I wanna be, yeah"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Water falling off your skin",
      "practiceText": "Water falling off your skin"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I could spend a lifetime watching you",
      "practiceText": "I could spend a lifetime watching you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This is how it all begins",
      "practiceText": "This is how it all begins"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Splash (Splash)",
      "practiceText": "(Splash)",
      "highlight": "(Splash)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Drift (Drift)",
      "practiceText": "(Drift)",
      "highlight": "(Drift)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I make waves with my two fins",
      "practiceText": "I make waves with my two fins"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Splash (Splash)",
      "practiceText": "(Splash)",
      "highlight": "(Splash)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Drip (Drip)",
      "practiceText": "(Drip)",
      "highlight": "(Drip)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna take it across the line",
      "practiceText": "I just wanna take it across the line"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Under here we don’t chase the time",
      "practiceText": "Under here we don’t chase the time"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby, everything can’t be so sad",
      "practiceText": "Baby, everything can’t be so sad"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Turn my face from the land",
      "practiceText": "Turn my face from the land"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Water falling off your skin",
      "practiceText": "Water falling off your skin"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I could spend a lifetime watching you",
      "practiceText": "I could spend a lifetime watching you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let it all begin",
      "practiceText": "Let it all begin"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Swim, swim",
      "practiceText": "Swim, swim"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna dive",
      "practiceText": "I just wanna dive"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Merry Go Round",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I wish that I could tell you that it’s over",
      "practiceText": "I wish that I could tell you that it’s over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I wish that I could walk away from pain",
      "practiceText": "I wish that I could walk away from pain"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "My life is like a broken roller coaster",
      "practiceText": "My life is like a broken roller coaster"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But maybe I’m the only one to blame",
      "practiceText": "But maybe I’m the only one to blame"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can’t get off, this merry go round",
      "practiceText": "I can’t get off, this merry go round"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It spins me around",
      "practiceText": "It spins me around"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I do my best, but I can’t slow down",
      "practiceText": "I do my best, but I can’t slow down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This merry go round",
      "practiceText": "This merry go round"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "And I, I can’t get off of this ride",
      "practiceText": "And I",
      "highlight": "And I"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can’t get off of this ride",
      "practiceText": "I can’t get off of this ride"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I try, this happens every time",
      "practiceText": "I try",
      "highlight": "I try"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can’t get off of this ride",
      "practiceText": "I can’t get off of this ride"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어른이 된 것 같은 기분이지만 고민은 뭐 여전하지",
      "practiceText": "어른이 된 것 같은 기분이지만 고민은 뭐 여전하지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "매일 같은 일상 속 회전목마나 쳇바퀴나 매한가지",
      "practiceText": "매일 같은 일상 속 회전목마나 쳇바퀴나 매한가지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우 답이 없는 질문",
      "practiceText": "우 답이 없는 질문"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "미궁속에서의 질주",
      "practiceText": "미궁속에서의 질주"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "다들 괜찮은 척하며 웃고 있지 모두 다다다다",
      "practiceText": "다다다다",
      "highlight": "다다다다",
      "roman": "da da da da"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I wish that I could tell you that it’s over",
      "practiceText": "I wish that I could tell you that it’s over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I wish that I could walk away from pain",
      "practiceText": "I wish that I could walk away from pain"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "My life is like a broken roller coaster",
      "practiceText": "My life is like a broken roller coaster"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But maybe I’m the only one to blame",
      "practiceText": "But maybe I’m the only one to blame"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can’t get off, this merry go round",
      "practiceText": "I can’t get off, this merry go round"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It spins me around",
      "practiceText": "It spins me around"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I do my best, but I can’t slow down",
      "practiceText": "I do my best, but I can’t slow down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This merry go round",
      "practiceText": "This merry go round"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "And I, I can’t get off of this ride",
      "practiceText": "And I",
      "highlight": "And I"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can’t get off of this ride",
      "practiceText": "I can’t get off of this ride"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I try, this happens every time",
      "practiceText": "I try",
      "highlight": "I try"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I can’t get off of this ride",
      "practiceText": "I can’t get off of this ride"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Spinnin’ up down",
      "practiceText": "Spinnin’ up down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Just round ’n’ round",
      "practiceText": "Just round ’n’ round"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m fallin’ apart",
      "practiceText": "I’m fallin’ apart"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Still bound to ground",
      "practiceText": "Still bound to ground"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "멈출 수 없는 굴레 속",
      "practiceText": "멈출 수 없는 굴레 속"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내 동심이 소리치잖아",
      "practiceText": "내 동심이 소리치잖아"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나 원없이 탈만큼 탔으니",
      "practiceText": "나 원없이 탈만큼 탔으니"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Please take me out, ma",
      "practiceText": "Please take me out, ma"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "침대는 나의 관",
      "practiceText": "침대는 나의 관"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "My bed is my coffin",
      "practiceText": "My bed is my coffin"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어쩜 내 세상은",
      "practiceText": "어쩜 내 세상은"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "거대한 caffeine",
      "practiceText": "거대한 caffeine"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "매일 널 죽으러 가",
      "practiceText": "매일 널 죽으러 가"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "꿈을 끌 순 없나",
      "practiceText": "꿈을 끌 순 없나"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "멈출 수 없는 춤을 추고 있잖아",
      "practiceText": "멈출 수 없는 춤을 추고 있잖아"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "또 생각에 생각에 생각에 생각",
      "practiceText": "또 생각에 생각에 생각에 생각"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "생각하지 말잔 생각을 해 난",
      "practiceText": "생각하지 말잔 생각을 해 난"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "빙글 또 빙글 행복하니",
      "practiceText": "빙글 또 빙글 행복하니"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "웃어줘 끝까지",
      "practiceText": "웃어줘 끝까지"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "2.0",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그래 방탄처럼 그게 말은 쉽지",
      "practiceText": "그래 방탄처럼 그게 말은 쉽지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우린 뜀틀 누가 맨날 뛰어넘니",
      "practiceText": "우린 뜀틀 누가 맨날 뛰어넘니"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "웃기기는 한데 사실 안 웃기지",
      "practiceText": "웃기기는 한데 사실 안 웃기지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "10년은 말야 어림 반 푼어치",
      "practiceText": "10년은 말야 어림 반 푼어치"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Stop, ride",
      "practiceText": "Stop, ride"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Yuh yuh yuh yuh, yeah",
      "practiceText": "Yuh yuh yuh yuh, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Pull up at your block",
      "practiceText": "Pull up at your block"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We gon’",
      "practiceText": "We gon’"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "knock knock knock knock, yeah",
      "practiceText": "knock knock knock knock, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Had your little fun, fella?",
      "practiceText": "Had your little fun, fella?"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Pop pop pop pop, yeah",
      "practiceText": "Pop pop pop pop, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Came back for what’s mine, we don’t",
      "practiceText": "Came back for what’s mine, we don’t"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Stop, ride",
      "practiceText": "Stop, ride"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do do",
      "practiceText": "do do do do do do",
      "highlight": "do do do do do do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do",
      "practiceText": "do do do do do",
      "highlight": "do do do do do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "불을 붙여 brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "붙여 brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Yeah we on that brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You know how we do",
      "practiceText": "You know how we do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Ay ay ay",
      "practiceText": "Ay ay ay"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그래, 기분 마치 brand new",
      "practiceText": "그래, 기분 마치 brand new"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Spec 다른 step, 뛰지 않는 step two",
      "practiceText": "Spec 다른 step, 뛰지 않는 step two"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Two, two point oh 업데이트된 후",
      "practiceText": "Two, two point oh 업데이트된 후"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "여기저기 또 한 번 일냈네",
      "practiceText": "여기저기 또 한 번 일냈네"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "10 out of 10, 10",
      "practiceText": "10 out of 10, 10"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이젠 버려, 못 쓸 폐품",
      "practiceText": "이젠 버려, 못 쓸 폐품"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "수거하러 가",
      "practiceText": "수거하러 가"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "여유 있게 다시 수고하러",
      "practiceText": "여유 있게 다시 수고하러"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Stop, ride",
      "practiceText": "Stop, ride"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Yuh yuh yuh yuh, yeah",
      "practiceText": "Yuh yuh yuh yuh, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Pull up at your block",
      "practiceText": "Pull up at your block"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We gon’",
      "practiceText": "We gon’"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "knock knock knock knock, yeah",
      "practiceText": "knock knock knock knock, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Had your little fun, fella?",
      "practiceText": "Had your little fun, fella?"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Pop pop pop pop, yeah",
      "practiceText": "Pop pop pop pop, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Came back for what’s mine, we don’t",
      "practiceText": "Came back for what’s mine, we don’t"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Stop, ride",
      "practiceText": "Stop, ride"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do do",
      "practiceText": "do do do do do do",
      "highlight": "do do do do do do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do",
      "practiceText": "do do do do do",
      "highlight": "do do do do do do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "불을 붙여 brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "붙여 brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Yeah we on that brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You know how we do",
      "practiceText": "You know how we do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Pop pop pop pop pop pop pop pop pop pop",
      "practiceText": "Pop pop pop pop pop pop pop pop pop pop"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby gettin’ too lit",
      "practiceText": "Baby gettin’ too lit"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "rah rah rah rah rah rah",
      "practiceText": "rah rah rah rah rah rah"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hit ’em up like pop (pop!)",
      "practiceText": "(pop!)",
      "highlight": "(pop!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hit ’em with the truth like rah (rah!)",
      "practiceText": "(rah!)",
      "highlight": "(rah!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Time to pay your debt",
      "practiceText": "Time to pay your debt"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fear me or fear me not",
      "practiceText": "Fear me or fear me not"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let it be",
      "practiceText": "Let it be"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let it bleed",
      "practiceText": "Let it bleed"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hit a lick",
      "practiceText": "Hit a lick"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "In a split",
      "practiceText": "In a split"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Stop, ride",
      "practiceText": "Stop, ride"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Yuh yuh yuh yuh, yeah",
      "practiceText": "Yuh yuh yuh yuh, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Pull up at your block",
      "practiceText": "Pull up at your block"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We gon’",
      "practiceText": "We gon’"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "knock knock knock knock, yeah",
      "practiceText": "knock knock knock knock, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Had your little fun, fella?",
      "practiceText": "Had your little fun, fella?"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Pop pop pop pop, yeah",
      "practiceText": "Pop pop pop pop, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Came back for what’s mine, we don’t",
      "practiceText": "Came back for what’s mine, we don’t"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Stop, ride",
      "practiceText": "Stop, ride"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do do",
      "practiceText": "do do do do do do",
      "highlight": "do do do do do do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do",
      "practiceText": "do do do do do",
      "highlight": "do do do do do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "불을 붙여 brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "붙여 brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Yeah we on that brand new",
      "practiceText": "brand new",
      "highlight": "brand new"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You know how we do",
      "practiceText": "You know how we do"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do do",
      "replaceText": "do do do do do do",
      "practiceText": "BTS! BTS! BTS!",
      "highlight": "BTS! BTS! BTS!"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how I do do do do do",
      "replaceText": "do do do do do",
      "practiceText": "BTS! BTS! BTS!",
      "highlight": "BTS! BTS! BTS!"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "불을 붙여 brand new",
      "practiceText": "불을 붙여 brand new"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "붙여 brand new",
      "practiceText": "붙여 brand new"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah we on that brand new",
      "practiceText": "Yeah we on that brand new"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You know how we do",
      "practiceText": "You know how we do"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "NORMAL",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(從 00:01 開始喊)",
      "practiceText": "(從 00:01 開始喊)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "practiceText": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "roman": "Kim Namjoon! Kim Seokjin! Min Yoongi! Jeong Hoseok! Park Jimin! Kim Taehyung! Jeon Jung kook! BTS!"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Kerosene, dopamine, chemical induced",
      "practiceText": "Kerosene, dopamine, chemical induced"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fantasy and fame,",
      "practiceText": "Fantasy and fame,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "yeah the things we choose",
      "practiceText": "yeah the things we choose"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Show me hate, show me love",
      "practiceText": "Show me hate, show me love"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Make me bulletproof",
      "practiceText": "Make me bulletproof"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah, we call this shit normal",
      "practiceText": "Yeah, we call this shit normal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run away, out of sight",
      "practiceText": "Run away, out of sight"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "don’t know what I want",
      "practiceText": "don’t know what I want"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Wish I had a minute just to turn me off",
      "practiceText": "Wish I had a minute just to turn me off"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Kerosene, dopamine, what I gotta do?",
      "practiceText": "Kerosene, dopamine, what I gotta do?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah, we call this shit normal",
      "practiceText": "Yeah, we call this shit normal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Heavy is the head when you chasin’ true",
      "practiceText": "Heavy is the head when you chasin’ true"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Will you color me red?",
      "practiceText": "Will you color me red?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Will you color me blue?",
      "practiceText": "Will you color me blue?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Two sides of a coin, and they both ain’t true",
      "practiceText": "Two sides of a coin, and they both ain’t true"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Is it different for me?",
      "practiceText": "Is it different for me?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Is it different for you?",
      "practiceText": "Is it different for you?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Got me feelin’ things unusual, and I live them all",
      "practiceText": "Got me feelin’ things unusual, and I live them all"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Got me and my feelings up on this wall",
      "practiceText": "Got me and my feelings up on this wall"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "And my knees",
      "practiceText": "And my knees"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Kerosene, dopamine, chemical induced",
      "practiceText": "Kerosene, dopamine, chemical induced"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fantasy and fame,",
      "practiceText": "Fantasy and fame,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "yeah the things we choose",
      "practiceText": "yeah the things we choose"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Show me hate, show me love",
      "practiceText": "Show me hate, show me love"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Make me bulletproof",
      "practiceText": "Make me bulletproof"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah, we call this shit normal",
      "practiceText": "Yeah, we call this shit normal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run away, out of sight, don’t know what I want",
      "practiceText": "Run away, out of sight, don’t know what I want"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Wish I had a minute just to turn me off",
      "practiceText": "Wish I had a minute just to turn me off"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Kerosene, dopamine, what I gotta do?",
      "practiceText": "Kerosene, dopamine, what I gotta do?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah, we call this shit normal",
      "practiceText": "Yeah, we call this shit normal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "How I’m ’posed to feel?",
      "practiceText": "How I’m ’posed to feel?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Used to think that I was built with a heart made of steel",
      "practiceText": "Used to think that I was built with a heart made of steel"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Now I understand the truth, some pain don’t heal",
      "practiceText": "Now I understand the truth, some pain don’t heal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If everything’s just happy, that ain’t real",
      "practiceText": "If everything’s just happy, that ain’t real"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I breathe everything out like a thousand times",
      "practiceText": "I breathe everything out like a thousand times"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Normal and special, they are just some lines",
      "practiceText": "Normal and special, they are just some lines"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "One deep sigh, then it slips away, fades away",
      "practiceText": "One deep sigh, then it slips away, fades away"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "What I try to keep never want to stay",
      "practiceText": "What I try to keep never want to stay"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Runaway, pushin’ me, pullin’ me",
      "practiceText": "Runaway, pushin’ me, pullin’ me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Said you wanted all of me",
      "practiceText": "Said you wanted all of me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But what is even all of me?",
      "practiceText": "But what is even all of me?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Suddenly, part of me is hauntin’ me",
      "practiceText": "Suddenly, part of me is hauntin’ me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Heard the things they callin’ me",
      "practiceText": "Heard the things they callin’ me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "What the hell you want from me?",
      "practiceText": "What the hell you want from me?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Got me feelin’ things unusual, and I live them all",
      "practiceText": "Got me feelin’ things unusual, and I live them all"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Got me and my feelings up on this wall",
      "practiceText": "Got me and my feelings up on this wall"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "And my knees",
      "practiceText": "And my knees"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Kerosene, dopamine, chemical induced",
      "practiceText": "Kerosene, dopamine, chemical induced"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fantasy and fame,",
      "practiceText": "Fantasy and fame,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "yeah the things we choose",
      "practiceText": "yeah the things we choose"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Show me hate, show me love",
      "practiceText": "Show me hate, show me love"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Make me bulletproof",
      "practiceText": "Make me bulletproof"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah, we call this shit normal",
      "practiceText": "Yeah, we call this shit normal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Run away, out of sight, don’t know what I want",
      "practiceText": "Run away, out of sight, don’t know what I want"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Wish I had a minute just to turn me off",
      "practiceText": "Wish I had a minute just to turn me off"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Kerosene, dopamine, what I gotta do?",
      "practiceText": "Kerosene, dopamine, what I gotta do?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah, we call this shit normal",
      "practiceText": "Yeah, we call this shit normal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "No we, no we, no we call this shit normal",
      "practiceText": "No we, no we, no we call this shit normal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "No we, no we, no we call this shit normal, yeah",
      "practiceText": "No we, no we, no we call this shit normal, yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "No we, no we, no we call this shit normal",
      "practiceText": "No we, no we, no we call this shit normal"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Not Today",
  "note": "演唱會是變奏版本唷～不熟悉沒喊到沒關係！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All the underdogs in the world",
      "practiceText": "All the underdogs in the world"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "A day may come when we lose",
      "practiceText": "A day may come when we lose"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But it is not today",
      "practiceText": "But it is not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Today we fight",
      "practiceText": "Today we fight"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "No not today",
      "practiceText": "not today",
      "highlight": "not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "언젠가 꽃은 지겠지",
      "practiceText": "언젠가 꽃은 지겠지"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "But no not today",
      "practiceText": "not today",
      "highlight": "not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그 때가 오늘은 아니지",
      "practiceText": "그 때가 오늘은 아니지"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "No no not today",
      "practiceText": "not today",
      "highlight": "not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "아직은 죽기엔 Too good day (good day)",
      "practiceText": "(good day)",
      "highlight": "(good day)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "No no not today",
      "practiceText": "not today",
      "highlight": "not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "No no no not today",
      "practiceText": "No no no",
      "highlight": "No no no"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그래 우리는 Extra",
      "practiceText": "그래 우리는 Extra"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But still part of this world",
      "practiceText": "But still part of this world"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Extra + Ordinary",
      "practiceText": "Extra + Ordinary"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그것도 별 거 아녀",
      "practiceText": "그것도 별 거 아녀"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "오늘은 절대 죽지 말아",
      "practiceText": "죽지 말아",
      "highlight": "죽지 말아",
      "roman": "juk ji ma ra"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "빛은 어둠을 뚫고 나가",
      "practiceText": "뚫고 나가",
      "highlight": "뚫고 나가",
      "roman": "ttul ko  na ga"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "새 세상 너도 원해",
      "practiceText": "새 세상 너도 원해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh baby yes I want it",
      "practiceText": "Oh baby yes I want it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "날아갈 수 없음 뛰어",
      "practiceText": "날아갈 수 없음 뛰어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Today we will survive",
      "practiceText": "Today we will survive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뛰어갈 수 없음 걸어",
      "practiceText": "뛰어갈 수 없음 걸어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Today we will survive",
      "practiceText": "Today we will survive"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "걸어갈 수 없음 기어",
      "practiceText": "걸어갈 수 없음 기어"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "기어서라도 gear up (gear up)",
      "practiceText": "(gear up)",
      "highlight": "(gear up)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "겨눠 총 조준 발사",
      "practiceText": "겨눠 총 조준 발사"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS! BTS!)",
      "practiceText": "(BTS! BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS! BTS!)",
      "practiceText": "(BTS! BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 뱁새들아 다 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 친구들아 다 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 나를 믿는다면 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "총 조준 발사",
      "practiceText": "총 조준 발사"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "죽지 않아 묻지 마라 소리 질러",
      "practiceText": "죽지 않아 묻지 마라 소리 질러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "꿇지 마라 울지 않아 손을 들어",
      "practiceText": "꿇지 마라 울지 않아 손을 들어"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey~ Not not today",
      "practiceText": "Not not today",
      "highlight": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey~ Not not today",
      "practiceText": "Not not today",
      "highlight": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey~ Not not today",
      "practiceText": "Not not today",
      "highlight": "Not not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "총 조준 발사",
      "practiceText": "총 조준 발사"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Too hot 성공을 doublin’",
      "practiceText": "Too hot",
      "highlight": "Too hot"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Too hot 차트를 덤블링",
      "practiceText": "Too hot",
      "highlight": "Too hot"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Too high we on 트램펄린",
      "practiceText": "Too high",
      "highlight": "Too high"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Too high 누가 좀 멈추길",
      "practiceText": "Too high",
      "highlight": "Too high"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우린 할 수가 없었단다 실패",
      "practiceText": "우린 할 수가 없었단다 실패"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "서로가 서롤 전부 믿었기에",
      "practiceText": "서로가 서롤 전부 믿었기에"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "What you say yeah (say yeah)",
      "practiceText": "(say yeah)",
      "highlight": "(say yeah)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Not today yeah (day yeah)",
      "practiceText": "(day yeah)",
      "highlight": "(day yeah)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "오늘은 안 죽어 절대 yeah",
      "practiceText": "절대 yeah",
      "highlight": "절대 yeah",
      "roman": "jeol dae yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너의 곁에 나를 믿어",
      "practiceText": "너의 곁에 나를 믿어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Together we won’t die",
      "practiceText": "Together we won’t die"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나의 곁에 너를 믿어",
      "practiceText": "나의 곁에 너를 믿어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Together we won’t die",
      "practiceText": "Together we won’t die"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "함께라는 말을 믿어",
      "practiceText": "함께라는 말을 믿어"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "방탄이란 걸 믿어 (믿어)",
      "practiceText": "(믿어)",
      "highlight": "(믿어)",
      "roman": "mi deo"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "겨눠 총 조준 발사",
      "practiceText": "겨눠 총 조준 발사"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS! BTS!)",
      "practiceText": "(BTS! BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS! BTS!)",
      "practiceText": "(BTS! BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 뱁새들아 다 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 친구들아 다 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 나를 믿는다면 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "총 조준 발사",
      "practiceText": "총 조준 발사"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "죽지 않아 묻지 마라 소리 질러",
      "practiceText": "죽지 않아 묻지 마라 소리 질러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "꿇지 마라 울지 않아 손을 들어",
      "practiceText": "꿇지 마라 울지 않아 손을 들어"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey~ Not not today",
      "practiceText": "Not not today",
      "highlight": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey~ Not not today",
      "practiceText": "Not not today",
      "highlight": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey~ Not not today",
      "practiceText": "Not not today",
      "highlight": "Not not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "총 조준 발사",
      "practiceText": "총 조준 발사"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Throw it up Throw it up",
      "practiceText": "Throw it up Throw it up"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "니 눈 속의 두려움 따위는 버려",
      "practiceText": "니 눈 속의 두려움 따위는 버려"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Break it up Break it up",
      "practiceText": "Break it up Break it up"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 가두는 유리천장 따윈 부숴",
      "practiceText": "널 가두는 유리천장 따윈 부숴"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Turn it up! (Turn it up!)",
      "practiceText": "(Turn it up!)",
      "highlight": "(Turn it up!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Burn it up! (Burn it up!)",
      "practiceText": "(Burn it up!)",
      "highlight": "(Burn it up!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "승리의 날까지 (fight!)",
      "practiceText": "(fight!)",
      "highlight": "(fight!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "무릎 꿇지 마",
      "practiceText": "꿇지 마",
      "highlight": "꿇지 마",
      "roman": "kkul chi ma"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "무너지지마",
      "practiceText": "지지마",
      "highlight": "지지마",
      "roman": "ji ji ma"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "That’s (do) not today",
      "practiceText": "That’s (do) not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS! BTS!)",
      "practiceText": "(BTS! BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS! BTS!)",
      "practiceText": "(BTS! BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 뱁새들아 다 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 친구들아 다 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey 나를 믿는다면 hands up",
      "practiceText": "hands up",
      "highlight": "hands up",
      "roman": "前面的 Hey~ 也可以唱"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "총 조준 발사",
      "practiceText": "총 조준 발사"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "죽지 않아 묻지 마라 소리 질러",
      "practiceText": "죽지 않아 묻지 마라 소리 질러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "꿇지 마라 울지 않아 손을 들어",
      "practiceText": "꿇지 마라 울지 않아 손을 들어"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Hey Not not today",
      "practiceText": "Not not today"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "총 조준 발사",
      "practiceText": "총 조준 발사"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "MIC Drop",
  "note": "「咪啊餒翁媽」那邊請大聲給我喊下去！！！！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "（噗滋噗滋之後就可以開始喊了，喊兩遍謝謝🙏）",
      "practiceText": "（噗滋噗滋之後就可以開始喊了，喊兩遍謝謝🙏）"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "practiceText": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "roman": "Kim Namjoon! Kim Seokjin! Min Yoongi! Jeong Hoseok! Park Jimin! Kim Taehyung! Jeon Jung kook! BTS!"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "practiceText": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "roman": "Kim Namjoon! Kim Seokjin! Min Yoongi! Jeong Hoseok! Park Jimin! Kim Taehyung! Jeon Jung kook! BTS!"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah 누가 내 수저 더럽대",
      "practiceText": "Yeah 누가 내 수저 더럽대"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I don’t care 마이크 잡음 금수저 여럿 패",
      "practiceText": "I don’t care 마이크 잡음 금수저 여럿 패"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "버럭해 잘 못 익은 것들 스테끼 여러 개",
      "practiceText": "버럭해 잘 못 익은 것들 스테끼 여러 개"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "거듭해서 씹어줄게 스타의 저녁에",
      "practiceText": "거듭해서 씹어줄게 스타의 저녁에"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "World Business (bang bang) 핵심",
      "practiceText": "(bang bang)",
      "highlight": "(bang bang)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "섭외 1순위 (clap clap) 매진",
      "practiceText": "(clap clap)",
      "highlight": "(clap clap)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "많지 않지 이 class 가칠 만끽",
      "practiceText": "많지 않지 이 class 가칠 만끽"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "좋은 향기에 악췬 반칙",
      "practiceText": "좋은 향기에 악췬 반칙"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "Mic mic Bungee",
      "practiceText": "Mic mic Bungee"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Mic mic Bungee",
      "practiceText": "Bungee",
      "highlight": "Bungee"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Bright light 전진",
      "practiceText": "전진",
      "highlight": "전진",
      "roman": "jeon jin"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "망할 거 같았겠지만 I'm fine, sorry",
      "practiceText": "망할 거 같았겠지만 I'm fine, sorry"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "미안해 Billboard",
      "practiceText": "Billboard",
      "highlight": "Billboard"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "미안해 worldwide",
      "practiceText": "worldwide",
      "highlight": "worldwide"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "아들이 넘 잘나가서",
      "practiceText": "아들이 넘 잘나가서"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "미안해 엄마 (請超級大聲喊！)",
      "practiceText": "미안해 엄마 (請超級大聲喊！)",
      "roman": "mi an hae eom ma"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "대신해줘 니가 못한 효도",
      "practiceText": "대신해줘 니가 못한 효도"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우리 콘서트 절대 없어 포도",
      "practiceText": "우리 콘서트 절대 없어 포도"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I do it, I do it",
      "practiceText": "I do it, I do it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "넌 맛없는 라따뚜이",
      "practiceText": "넌 맛없는 라따뚜이"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "혹 배가 아프다면 고소해",
      "practiceText": "혹 배가 아프다면 고소해"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Sue it",
      "practiceText": "Sue it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Did you see my bag (bag)",
      "practiceText": "(bag)",
      "highlight": "(bag)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Did you see my bag (bag)",
      "practiceText": "(bag)",
      "highlight": "(bag)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "트로피들로 백이 가득해 (가득해)",
      "practiceText": "(가득해)",
      "highlight": "(가득해)",
      "roman": "ga deu kae"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "How you think bout that (that)",
      "practiceText": "(that)",
      "highlight": "(that)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "How you think bout that (that)",
      "practiceText": "(that)",
      "highlight": "(that)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hater들은 벌써 학을 떼 (학을 떼)",
      "practiceText": "(학을 떼)",
      "highlight": "(학을 떼)",
      "roman": "ha geul tte"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "이미 황금빛 황금빛 나의 성공 (성공)",
      "practiceText": "(성공)",
      "highlight": "(성공)",
      "roman": "seong gong"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so firin' firin' 성화봉송 (봉송)",
      "practiceText": "(봉송)",
      "highlight": "(봉송)",
      "roman": "bong song"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너는 황급히 황급히 도망 숑숑 (숑숑)",
      "practiceText": "(숑숑)",
      "highlight": "(숑숑)",
      "roman": "syong syong"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "How you dare",
      "practiceText": "How you dare"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "How you dare",
      "practiceText": "How you dare"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "How you dare",
      "practiceText": "How you dare"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내 손에 트로피 아 너무 많아",
      "practiceText": "내 손에 트로피 아 너무 많아"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너무 heavy 내 두 손이 모잘라",
      "practiceText": "너무 heavy 내 두 손이 모잘라"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "MIC Drop, MIC Drop",
      "practiceText": "MIC Drop, MIC Drop"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "발 발 조심",
      "practiceText": "발 발",
      "highlight": "발 발",
      "roman": "bal bal"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너네 말 말 조심",
      "practiceText": "말 말",
      "highlight": "말 말",
      "roman": "mal mal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Lodi dodi 아 너무 바빠",
      "practiceText": "Lodi dodi 아 너무 바빠"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너무 busy 내 온몸이 모잘라",
      "practiceText": "너무 busy 내 온몸이 모잘라"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "MIC Drop, MIC Drop",
      "practiceText": "MIC Drop, MIC Drop"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "발 발 조심",
      "practiceText": "발 발",
      "highlight": "발 발",
      "roman": "bal bal"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너네 말 말 조심",
      "practiceText": "말 말",
      "highlight": "말 말",
      "roman": "mal mal"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "이거 완전 네 글자 (자)",
      "practiceText": "(자)",
      "highlight": "(자)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "사필귀정 ah (ah)",
      "practiceText": "(ah)",
      "highlight": "(ah)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Once upon a time",
      "practiceText": "Once upon a time"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이솝우화 fly",
      "practiceText": "이솝우화 fly"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "니 현실을 봐라 쌔 쌤통",
      "practiceText": "쌔 쌤통",
      "highlight": "쌔 쌤통",
      "roman": "ssae ssaem tong"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "지금 죽어도 난 개행복",
      "practiceText": "개행복",
      "highlight": "개행복",
      "roman": "gae haeng bok"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이번엔 어느 나라 가",
      "practiceText": "이번엔 어느 나라 가"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "비행기 몇 시간을 타",
      "practiceText": "비행기 몇 시간을 타"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah I'm on the mountain",
      "practiceText": "Yeah I'm on the mountain"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah I'm on the bay",
      "practiceText": "Yeah I'm on the bay"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "무대에서 탈진",
      "practiceText": "무대에서 탈진"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "MIC Drop baam",
      "practiceText": "MIC Drop baam"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Did you see my bag (bag)",
      "practiceText": "(bag)",
      "highlight": "(bag)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Did you see my bag (bag)",
      "practiceText": "(bag)",
      "highlight": "(bag)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "트로피들로 백이 가득해 (가득해)",
      "practiceText": "(가득해)",
      "highlight": "(가득해)",
      "roman": "ga deu kae"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "How you think bout that (that)",
      "practiceText": "(that)",
      "highlight": "(that)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "How you think bout that (that)",
      "practiceText": "(that)",
      "highlight": "(that)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hater들은 벌써 학을 떼 (학을 떼)",
      "practiceText": "(학을 떼)",
      "highlight": "(학을 떼)",
      "roman": "ha geul tte"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "이미 황금빛 황금빛 나의 성공 (성공)",
      "practiceText": "(성공)",
      "highlight": "(성공)",
      "roman": "seong gong"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm so firin' firin' 성화봉송 (봉송)",
      "practiceText": "(봉송)",
      "highlight": "(봉송)",
      "roman": "bong song"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너는 황급히 황급히 도망 숑숑 (숑숑)",
      "practiceText": "(숑숑)",
      "highlight": "(숑숑)",
      "roman": "syong syong"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "How you dare",
      "practiceText": "How you dare"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "How you dare",
      "practiceText": "How you dare"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "How you dare",
      "practiceText": "How you dare"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내 손에 트로피 아 너무 많아",
      "practiceText": "내 손에 트로피 아 너무 많아"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너무 heavy 내 두 손이 모잘라",
      "practiceText": "너무 heavy 내 두 손이 모잘라"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "MIC Drop, MIC Drop",
      "practiceText": "MIC Drop, MIC Drop"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "발 발 조심",
      "practiceText": "발 발",
      "highlight": "발 발",
      "roman": "bal bal"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너네 말 말 조심",
      "practiceText": "말 말",
      "highlight": "말 말",
      "roman": "mal mal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Lodi dodi 아 너무 바빠",
      "practiceText": "Lodi dodi 아 너무 바빠"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너무 busy 내 온몸이 모잘라",
      "practiceText": "너무 busy 내 온몸이 모잘라"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "MIC Drop, MIC Drop",
      "practiceText": "MIC Drop, MIC Drop"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "발 발 조심",
      "practiceText": "발 발",
      "highlight": "발 발",
      "roman": "bal bal"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너네 말 말 조심",
      "practiceText": "말 말",
      "highlight": "말 말",
      "roman": "mal mal"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Haters gon' hate",
      "practiceText": "Haters gon' hate"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Players gon' play",
      "practiceText": "Players gon' play"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Live a life. man",
      "practiceText": "Live a life. man"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Good luck",
      "practiceText": "Good luck"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "더 볼 일 없어",
      "practiceText": "더 볼 일 없어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "마지막 인사야",
      "practiceText": "마지막 인사야",
      "roman": "ma ji mak in sa ya"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "할 말도 없어",
      "practiceText": "할 말도 없어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "사과도 하지 마",
      "practiceText": "사과도 하지 마",
      "roman": "sa gwa do ha ji ma"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "더 볼 일 없어",
      "practiceText": "더 볼 일 없어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "마지막 인사야",
      "practiceText": "마지막 인사야",
      "roman": "ma ji mak in sa ya"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "할 말도 없어",
      "practiceText": "할 말도 없어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "사과도 하지 마",
      "practiceText": "사과도 하지 마",
      "roman": "sa gwa do ha ji ma"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "잘 봐 넌 그 꼴 나지",
      "practiceText": "잘 봐",
      "highlight": "잘 봐",
      "roman": "jal bwa"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "우린 탁 쏴 마치 콜라지",
      "practiceText": "탁 쏴",
      "highlight": "탁 쏴",
      "roman": "tak sswa"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너의 각막 깜짝 놀라지",
      "practiceText": "각막",
      "highlight": "각막",
      "roman": "gak mak"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "꽤 꽤 폼나지",
      "practiceText": "폼나지",
      "highlight": "폼나지",
      "roman": "pom na ji"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "포 포 폼나지",
      "practiceText": "폼나지",
      "highlight": "폼나지",
      "roman": "pom na ji"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "FYA",
  "note": "後面跟 FIRE 接在一起，忘記也不要擔心，玩就對了！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(從 00:07 開始喊，或是數 8 次喘氣也可以)",
      "practiceText": "(從 00:07 開始喊，或是數 8 次喘氣也可以)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "practiceText": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "She wanna dance on fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Everything gas it’s fire",
      "practiceText": "Everything gas it’s fire"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "She wanna dance on fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything gas it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don’t stand too close, too close to fire",
      "practiceText": "Don’t stand too close, too close to fire"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Gimmie that gasoline",
      "practiceText": "Gimmie that gasoline"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Gimmie that make me fiend",
      "practiceText": "Gimmie that make me fiend"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Gimmie that make me sweat",
      "practiceText": "Gimmie that make me sweat"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somethin’ I can’t forget",
      "practiceText": "Somethin’ I can’t forget"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Burnin’ out with my slime",
      "practiceText": "Burnin’ out with my slime"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We in a flame, go wild",
      "practiceText": "We in a flame, go wild"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It’s 200 degrees",
      "practiceText": "It’s 200 degrees"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Club go psycho",
      "practiceText": "Club go psycho"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Might take you viral",
      "practiceText": "Might take you viral"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I go full thriller tonight",
      "practiceText": "I go full thriller tonight"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Club go crazy",
      "practiceText": "Club go crazy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Like Britney, baby",
      "practiceText": "Like Britney, baby"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hit me with it one more time",
      "practiceText": "Hit me with it one more time"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "She wanna dance on fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything gas it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don’t stand too close, too close to fire",
      "practiceText": "Don’t stand too close, too close to fire"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "뜨거워 뜨거워",
      "practiceText": "뜨거워 뜨거워",
      "roman": "tteu geo wo tteu geo wo"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "vibin’ 완전 핫뜨 뜨거워",
      "practiceText": "vibin’ 완전 핫뜨 뜨거워"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "무서워 무서워",
      "practiceText": "무서워 무서워",
      "roman": "mu seo wo mu seo wo"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "한겨울에도 엉뜨 필요없어",
      "practiceText": "한겨울에도 엉뜨 필요없어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We ragin’, 확 돌아 춤을 춰",
      "practiceText": "We ragin’, 확 돌아 춤을 춰"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "쭈뼛쭈뼛은 괴로워",
      "practiceText": "쭈뼛쭈뼛은 괴로워"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭘 고민해 걍 끼어들어 번지 뛰어들어",
      "practiceText": "뭘 고민해 걍 끼어들어 번지 뛰어들어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(We go right now)",
      "practiceText": "(We go right now)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Club go psycho",
      "practiceText": "Club go psycho"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Might take you viral",
      "practiceText": "Might take you viral"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I go full thriller tonight",
      "practiceText": "I go full thriller tonight"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Club go crazy",
      "practiceText": "Club go crazy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Like Britney, baby",
      "practiceText": "Like Britney, baby"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hit me with it one more time",
      "practiceText": "Hit me with it one more time"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "She wanna dance on fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything gas it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don’t stand too close, too close to fire",
      "practiceText": "Don’t stand too close, too close to fire"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything lit it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything big it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "She wanna dance on fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Everything gas it’s fire (fire)",
      "practiceText": "(fire)",
      "highlight": "(fire)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don’t stand too close, too close to fire",
      "practiceText": "Don’t stand too close, too close to fire"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(後面直接變奏接 FIRE 唷！！)",
      "practiceText": "(後面直接變奏接 FIRE 唷！！)"
    }
  ]
  },
  {
  "title": "불타오르네 (FIRE)",
  "note": "前面跟 FYA 接在一起，錯過不要擔心，玩就對了！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "불타오르네",
      "practiceText": "불타오르네"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Fire",
      "practiceText": "Fire"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Fire",
      "practiceText": "Fire"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Fire",
      "practiceText": "Fire"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Fire",
      "practiceText": "Fire"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "When I wake up in my room (room)",
      "practiceText": "(room)",
      "highlight": "(room)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 뭣도 없지 (뭣도 없지)",
      "practiceText": "난 뭣도 없지 (뭣도 없지)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "해가 지고 난 후 (후)",
      "practiceText": "(후)",
      "highlight": "(후)",
      "roman": "hu"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "비틀대며 걷지 (비틀대며 걷지)",
      "practiceText": "비틀대며 걷지 (비틀대며 걷지)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "다 만신창이로 취했어 (취했어)",
      "practiceText": "(취했어)",
      "highlight": "(취했어)",
      "roman": "chwi hae sseo"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "막 욕해 길에서 (길에서)",
      "practiceText": "(길에서)",
      "highlight": "(길에서)",
      "roman": "gi re seo"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나 맛이 갔지, 미친놈 같지",
      "practiceText": "나 맛이 갔지, 미친놈 같지"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "다 엉망진창 livin' like 삐이",
      "practiceText": "삐이",
      "highlight": "삐이",
      "roman": "bi~~"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "니 멋대로 살어 (살어)",
      "practiceText": "(살어)",
      "highlight": "(살어)",
      "roman": "sa reo"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "어차피 니 거야 (니 거야)",
      "practiceText": "(니 거야)",
      "highlight": "(니 거야)",
      "roman": "ni geo ya"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "애쓰지 좀 말어 (말어)",
      "practiceText": "(말어)",
      "highlight": "(말어)",
      "roman": "ma reo"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "져도 괜찮아 (괜찮아)",
      "practiceText": "(괜찮아)",
      "highlight": "(괜찮아)",
      "roman": "gwaen cha na"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Errbody say, la-la-la-la-la",
      "practiceText": "Errbody say, la-la-la-la-la"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(la-la-la-la-la)",
      "practiceText": "(la-la-la-la-la)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Say, la-la-la-la-la",
      "practiceText": "Say, la-la-la-la-la"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(la-la-la-la-la)",
      "practiceText": "(la-la-la-la-la)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "손을 들어, 소리 질러 burn it up",
      "practiceText": "손을 들어, 소리 질러 burn it up"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "불타오르네",
      "practiceText": "불타오르네"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS!)",
      "practiceText": "(BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Eh",
      "practiceText": "Eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Eh-oh, eh-oh",
      "practiceText": "Eh-oh, eh-oh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS!)",
      "practiceText": "(BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Eh",
      "practiceText": "Eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Eh-oh, eh-oh",
      "practiceText": "Eh-oh, eh-oh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey, burn it up (burn it up)",
      "practiceText": "(burn it up)",
      "highlight": "(burn it up)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "전부 다 태울 것 같이",
      "practiceText": "전부 다 태울 것 같이"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hey, turn it up (turn it up)",
      "practiceText": "(turn it up)",
      "highlight": "(turn it up)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "새벽이 다 갈 때까지",
      "practiceText": "새벽이 다 갈 때까지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그냥 살아도 돼",
      "practiceText": "그냥 살아도 돼"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "우린 젊기에",
      "practiceText": "우린 젊기에",
      "roman": "u rin jeom gi e"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그 말하는 넌",
      "practiceText": "그 말하는 넌"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "뭔 수저길래?",
      "practiceText": "뭔 수저길래?",
      "roman": "mwon su jeo gil rae"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "수저, 수저 거려? 난 사람인데",
      "practiceText": "수저, 수저 거려? 난 사람인데"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So what?",
      "practiceText": "So what?"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "니 멋대로 살어 (살어)",
      "practiceText": "(살어)",
      "highlight": "(살어)",
      "roman": "sa reo"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "어차피 니 거야 (니 거야)",
      "practiceText": "(니 거야)",
      "highlight": "(니 거야)",
      "roman": "ni geo ya"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "애쓰지 좀 말어 (말어)",
      "practiceText": "(말어)",
      "highlight": "(말어)",
      "roman": "ma reo"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "져도 괜찮아 (괜찮아)",
      "practiceText": "(괜찮아)",
      "highlight": "(괜찮아)",
      "roman": "gwaen cha na"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Errbody say, la-la-la-la-la",
      "practiceText": "Errbody say, la-la-la-la-la"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(la-la-la-la-la)",
      "practiceText": "(la-la-la-la-la)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Say, la-la-la-la-la",
      "practiceText": "Say, la-la-la-la-la"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(la-la-la-la-la)",
      "practiceText": "(la-la-la-la-la)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "손을 들어, 소리 질러 burn it up",
      "practiceText": "손을 들어, 소리 질러 burn it up"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "불타오르네",
      "practiceText": "불타오르네"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS!)",
      "practiceText": "(BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Eh",
      "practiceText": "Eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Eh-oh, eh-oh",
      "practiceText": "Eh-oh, eh-oh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(BTS! BTS!)",
      "practiceText": "(BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Eh",
      "practiceText": "Eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Eh-oh, eh-oh",
      "practiceText": "Eh-oh, eh-oh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(Fire) 겁 많은 자여, 여기로",
      "practiceText": "(Fire)",
      "highlight": "(Fire)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(Fire) 괴로운 자여, 여기로",
      "practiceText": "(Fire)",
      "highlight": "(Fire)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(Fire) 맨주먹을 들고 all night long",
      "practiceText": "(Fire)",
      "highlight": "(Fire)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(Fire) 진군하는 발걸음으로",
      "practiceText": "(Fire)",
      "highlight": "(Fire)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "(Fire) 뛰어봐",
      "practiceText": "(Fire)",
      "highlight": "(Fire)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "미쳐버려, 다",
      "practiceText": "미쳐버려, 다"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hot, hot, hot, hotter",
      "practiceText": "Hot, hot, hot, hotter"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hot, hot, hot, hotter",
      "practiceText": "Hot, hot, hot, hotter"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fire~",
      "practiceText": "Fire~"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "hot, hot, hot, hotter",
      "practiceText": "hot, hot, hot, hotter"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fire~",
      "practiceText": "Fire~"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fire~",
      "practiceText": "Fire~"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "hot, hot, hot, hotter",
      "practiceText": "hot, hot, hot, hotter"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fire~",
      "practiceText": "Fire~"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "싹 다 불태워라",
      "practiceText": "싹 다 불태워라"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Bow-wow-wow",
      "practiceText": "Bow-wow-wow"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "용서해 줄게",
      "practiceText": "용서해 줄게"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Body to Body",
  "note": "歌曲結束請用力揮舞阿米棒吶喊！！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "🐿️ j-hope: I need (第一次)",
      "practiceText": "🐿️ j-hope: I need (第一次)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "🐿️ j-hope: I need (第二次)",
      "practiceText": "🐿️ j-hope: I need (第二次)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(從第二次之後開始喊)",
      "practiceText": "(從第二次之後開始喊)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "practiceText": "김남준！김석진！민윤기！정호석！박지민！김태형！전정국！ＢＴＳ！",
      "roman": "Kim Namjoon! Kim Seokjin! Min Yoongi! Jeong Hoseok! Park Jimin! Kim Taehyung! Jeon Jung kook! BTS!"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I need the whole stadium to jump",
      "practiceText": "I need the whole stadium to jump"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Put your phone down, let’s get all the fun",
      "practiceText": "Put your phone down, let’s get all the fun"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I got my eyes on the row in the front",
      "practiceText": "I got my eyes on the row in the front"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "The vibe is high, if we bein’ blunt",
      "practiceText": "The vibe is high, if we bein’ blunt"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "The vibe is high, let the building (Hey!)",
      "practiceText": "(Hey!)",
      "highlight": "(Hey!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "B-T-uh",
      "practiceText": "B-T-uh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "from everywhere to Korea",
      "practiceText": "from everywhere to Korea"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "총 칼 키보드 다 좀 치워",
      "practiceText": "총 칼 키보드 다 좀 치워"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "인생은 짧아 증오는 비워",
      "practiceText": "인생은 짧아 증오는 비워"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It’s big in real life",
      "practiceText": "It’s big in real life"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭘 체면 따져 내려놔, 야 인마",
      "practiceText": "뭘 체면 따져 내려놔, 야 인마"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hop in",
      "practiceText": "Hop in"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "좀 더 가까이 와 skin to skin",
      "practiceText": "skin to skin",
      "highlight": "skin to skin"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I need some body to body",
      "practiceText": "I need some body to body"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All of your body beside me",
      "practiceText": "All of your body beside me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "저기 저 달에 닿게 손에 손",
      "practiceText": "저기 저 달에 닿게 손에 손"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너와 나 we on and on",
      "practiceText": "너와 나 we on and on"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Sunrise, but we don’t go home",
      "practiceText": "Sunrise, but we don’t go home"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody like you",
      "practiceText": "Somebody like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody like",
      "practiceText": "Somebody like"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Errbody like you",
      "practiceText": "Errbody like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It’s so tight",
      "practiceText": "It’s so tight"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I mean",
      "practiceText": "I mean"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너와의 사이",
      "practiceText": "너와의 사이"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I mean",
      "practiceText": "I mean"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우리만의 그 style",
      "practiceText": "우리만의 그 style"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I mean",
      "practiceText": "I mean"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "we livin’ the life",
      "practiceText": "we livin’ the life"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "두 눈을 감지 않을 이 밤",
      "practiceText": "두 눈을 감지 않을 이 밤"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "솟구치는 겨레의 마음",
      "practiceText": "솟구치는 겨레의 마음"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Be about it, be about it, be about it",
      "practiceText": "Be about it, be about it, be about it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You could see about it",
      "practiceText": "You could see about it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Or you read about it",
      "practiceText": "Or you read about it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I need some body to body",
      "practiceText": "I need some body to body"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All of your body beside me",
      "practiceText": "All of your body beside me"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "저기 저 달에 닿게 손에 손",
      "practiceText": "손에 손",
      "highlight": "손에 손",
      "roman": "so ne son"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "너와 나 we on and on",
      "practiceText": "on and on",
      "highlight": "on and on"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Sunrise, but we don’t go home",
      "practiceText": "Sunrise, but we don’t go home"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody like you",
      "practiceText": "Somebody like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody like",
      "practiceText": "Somebody like"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Errbody like you",
      "practiceText": "Errbody like you"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Somebody like you (Somebody like you)",
      "practiceText": "(Somebody like you)",
      "highlight": "(Somebody like you)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody like you",
      "practiceText": "Somebody like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Somebody like",
      "practiceText": "Somebody like"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Errbody like you",
      "practiceText": "Errbody like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(請用力揮舞阿米棒並大聲唱 “阿里郎”)",
      "practiceText": "(請用力揮舞阿米棒並大聲唱 “阿里郎”)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "아리랑, 아리랑, 아라리요~",
      "practiceText": "아리랑, 아리랑, 아라리요~",
      "roman": "Arirang, Arirang, Arariyo~"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "아리랑 고개로 넘어간다",
      "practiceText": "아리랑 고개로 넘어간다",
      "roman": "Arirang Gogaero Neomeoganda"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "나를 버리고 가시는 님은",
      "practiceText": "나를 버리고 가시는 님은",
      "roman": "Nareul Beorigo Gasineun Nimeun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "십리도 못 가서 발병난다",
      "practiceText": "십리도 못 가서 발병난다",
      "roman": "Simnido Mot Gaseo Balbyeongnanda"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I need the whole stadium to jump (BTS!)",
      "practiceText": "(BTS!)",
      "highlight": "(BTS!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Put your phone down, let’s get all the fun (BTS!)",
      "practiceText": "(BTS!)",
      "highlight": "(BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You at the side, at the back, at the front",
      "practiceText": "You at the side, at the back, at the front"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "IDOL",
  "note": "這邊是繞境時間，直接狂歡就好了！！！！",
  "chants": [
    {
      "type": "chant",
      "time": "應援",
      "text": "You can call me artist (artist)",
      "practiceText": "(artist)",
      "highlight": "(artist)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You can call me idol (idol)",
      "practiceText": "(idol)",
      "highlight": "(idol)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "아님 어떤 다른",
      "practiceText": "아님 어떤 다른"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭐라 해도 I don't care",
      "practiceText": "뭐라 해도 I don't care"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I'm proud of it (proud of it)",
      "practiceText": "(proud of it)",
      "highlight": "(proud of it)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "난 자유롭네 (자유롭네)",
      "practiceText": "(자유롭네)",
      "highlight": "(자유롭네)",
      "roman": "ja yu lom ne"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "No more irony (irony)",
      "practiceText": "(irony)",
      "highlight": "(irony)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나는 항상 나였기에",
      "practiceText": "나는 항상 나였기에"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "손가락질 해",
      "practiceText": "손가락질 해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나는 전혀 신경 쓰지 않네",
      "practiceText": "나는 전혀 신경 쓰지 않네"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나를 욕하는 너의",
      "practiceText": "나를 욕하는 너의"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그 이유가 뭐든 간에",
      "practiceText": "그 이유가 뭐든 간에"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I know what I am (I know what I am)",
      "practiceText": "(I know what I am)",
      "highlight": "(I know what I am)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I know what I want (I know what I want)",
      "practiceText": "(I know what I want)",
      "highlight": "(I know what I want)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "I never gon' change (I never gon' change)",
      "practiceText": "(I never gon' change)",
      "highlight": "(I never gon' change)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I never gon' trade",
      "practiceText": "I never gon' trade"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "Trade off",
      "practiceText": "Trade off"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭘 어쩌고저쩌고 떠들어대셔?",
      "practiceText": "뭘 어쩌고저쩌고 떠들어대셔?"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Talkin', talkin', talkin'",
      "practiceText": "Talkin', talkin', talkin'"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I do what I do",
      "practiceText": "I do what I do"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그니까 넌 너나 잘하셔",
      "practiceText": "그니까 넌 너나 잘하셔"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "얼쑤 좋다",
      "practiceText": "얼쑤 좋다",
      "roman": "eol su jo ta"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "지화자 좋다",
      "practiceText": "지화자 좋다",
      "roman": "ji hwa ja jo ta"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh, whoa-ooh-whoa",
      "practiceText": "Oh-oh-ooh, whoa-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "덩기덕 쿵더러러",
      "practiceText": "덩기덕 쿵더러러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(얼쑤)",
      "practiceText": "(얼쑤)",
      "roman": "eol ssu"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh, whoa-ooh-whoa",
      "practiceText": "Oh-oh-ooh, whoa-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "덩기덕 쿵더러러",
      "practiceText": "덩기덕 쿵더러러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(얼쑤)",
      "practiceText": "(얼쑤)",
      "roman": "eol ssu"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Face off 마치 오우삼 ay",
      "practiceText": "Face off 마치 오우삼 ay"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Top star with that spotlight, ay",
      "practiceText": "Top star with that spotlight, ay"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "때론 superhero가 돼",
      "practiceText": "때론 superhero가 돼"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "돌려대, 너의 Anpanman",
      "practiceText": "Anpanman",
      "highlight": "Anpanman"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "24시간이 적지",
      "practiceText": "24시간이 적지",
      "roman": "Yi ship sa si gani jeok ji"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "헷갈림, 내겐 사치",
      "practiceText": "헷갈림, 내겐 사치",
      "roman": "het gar lim nae gen sa chi"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I do my thang",
      "practiceText": "I do my thang"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I love myself",
      "practiceText": "I love myself"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I love myself",
      "practiceText": "I love myself"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I love my fans",
      "practiceText": "I love my fans"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "love my dance and my what",
      "practiceText": "love my dance and my what"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "내 속 안엔 몇 십 몇 백명의 내가 있어",
      "practiceText": "내 속 안엔 몇 십 몇 백명의 내가 있어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "오늘 또 다른 날 맞이해",
      "practiceText": "오늘 또 다른 날 맞이해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어차피 전부 다 나이기에",
      "practiceText": "어차피 전부 다 나이기에"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "고민보다는 걍 달리네",
      "practiceText": "고민보다는 걍 달리네"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Runnin' man, runnin' man, runnin' man",
      "practiceText": "Runnin' man, runnin' man, runnin' man"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "뭘 어쩌고저쩌고 떠들어대셔?",
      "practiceText": "뭘 어쩌고저쩌고 떠들어대셔?"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Talkin', talkin', talkin'",
      "practiceText": "Talkin', talkin', talkin'"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I do what I do",
      "practiceText": "I do what I do"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그니까 넌 너나 잘하셔",
      "practiceText": "그니까 넌 너나 잘하셔"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "얼쑤 좋다",
      "practiceText": "얼쑤 좋다",
      "roman": "eol su jo ta"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "지화자 좋다",
      "practiceText": "지화자 좋다",
      "roman": "ji hwa ja jo ta"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh, whoa-ooh-whoa",
      "practiceText": "Oh-oh-ooh, whoa-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "덩기덕 쿵더러러",
      "practiceText": "덩기덕 쿵더러러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(얼쑤)",
      "practiceText": "(얼쑤)",
      "roman": "eol su"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh, whoa-ooh-whoa",
      "practiceText": "Oh-oh-ooh, whoa-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "덩기덕 쿵더러러",
      "practiceText": "덩기덕 쿵더러러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(얼쑤)",
      "practiceText": "(얼쑤)",
      "roman": "eol su"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I'm so fine wherever I go",
      "practiceText": "I'm so fine wherever I go"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "가끔 멀리 돌아가도 oh",
      "practiceText": "가끔 멀리 돌아가도 oh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It's okay",
      "practiceText": "It's okay"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I'm in love with my, myself",
      "practiceText": "I'm in love with my, myself"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "It's okay",
      "practiceText": "It's okay"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "난 이 순간 행복해",
      "practiceText": "난 이 순간 행복해"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "얼쑤 좋다",
      "practiceText": "얼쑤 좋다",
      "roman": "eol su jo ta"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "지화자 좋다",
      "practiceText": "지화자 좋다",
      "roman": "ji hwa ja jo ta"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You can't stop me lovin' myself",
      "practiceText": "You can't stop me lovin' myself"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh, whoa-ooh-whoa",
      "practiceText": "Oh-oh-ooh, whoa-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "덩기덕 쿵더러러",
      "practiceText": "덩기덕 쿵더러러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(얼쑤)",
      "practiceText": "(얼쑤)",
      "roman": "eol su"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh, whoa-ooh-whoa",
      "practiceText": "Oh-oh-ooh, whoa-ooh-whoa"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Oh-oh-ooh-whoa",
      "practiceText": "Oh-oh-ooh-whoa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "덩기덕 쿵더러러",
      "practiceText": "덩기덕 쿵더러러"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "(얼쑤)",
      "practiceText": "(얼쑤)",
      "roman": "eol su"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Come Over",
  "note": "韓國場這首是開手機手電筒應援唷！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "텅 빈 듯한 밤이 오면",
      "practiceText": "텅 빈 듯한 밤이 오면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이렇게 또 너를 불러",
      "practiceText": "이렇게 또 너를 불러"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna say I’m sorry",
      "practiceText": "I just wanna say I’m sorry"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이런 내가 너무 싫어",
      "practiceText": "이런 내가 너무 싫어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby, don’t do me like that",
      "practiceText": "Baby, don’t do me like that"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "벌써 시간이 많이 지났네",
      "practiceText": "벌써 시간이 많이 지났네"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우리 멀어진 그날 뒤에",
      "practiceText": "우리 멀어진 그날 뒤에"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "각자 이야긴 묻어 둘까",
      "practiceText": "각자 이야긴 묻어 둘까"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "미안 좀 늦었지",
      "practiceText": "미안 좀 늦었지"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "그동안 별일 없이 잘 지냈지",
      "practiceText": "잘 지냈지",
      "highlight": "잘 지냈지",
      "roman": "jal ji naet ji"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "다시 시작하는 우리",
      "practiceText": "다시 시작하는 우리"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "두 번 다신 헤어지지 마",
      "practiceText": "두 번 다신 헤어지지 마"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "텅 빈 듯한 밤이 오면",
      "practiceText": "텅 빈 듯한 밤이 오면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이렇게 또 너를 불러",
      "practiceText": "이렇게 또 너를 불러"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna say I’m sorry",
      "practiceText": "I just wanna say I’m sorry"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이런 내가 너무 싫어",
      "practiceText": "이런 내가 너무 싫어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You’ll never love me like the way you did before",
      "practiceText": "You’ll never love me like the way you did before"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But would you open up if I knocked on your door",
      "practiceText": "But would you open up if I knocked on your door"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Knock knock",
      "replaceText": "Knock knock",
      "practiceText": "(B! T! S!)",
      "highlight": "(B! T! S!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Knockin’ on your door",
      "practiceText": "Knockin’ on your door"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "My blood on the floor",
      "practiceText": "My blood on the floor"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Just checkin’ on your door",
      "practiceText": "Just checkin’ on your door"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(What the hell am I doin’ this for?)",
      "practiceText": "(What the hell am I doin’ this for?)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You act like",
      "practiceText": "You act like"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Done with past life",
      "practiceText": "Done with past life"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Then you pass like",
      "practiceText": "Then you pass like"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Dust in a flashlight",
      "practiceText": "Dust in a flashlight"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Smoke in black night",
      "practiceText": "Smoke in black night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "We so dead, right?",
      "practiceText": "We so dead, right?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But I hate metaphors",
      "practiceText": "But I hate metaphors"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "텅 빈 듯한 밤이 오면",
      "practiceText": "텅 빈 듯한 밤이 오면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이렇게 또 너를 불러",
      "practiceText": "이렇게 또 너를 불러"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I just wanna say I’m sorry",
      "practiceText": "I just wanna say I’m sorry"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이런 내가 너무 싫어",
      "practiceText": "이런 내가 너무 싫어"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah I’m lost, can I come over",
      "practiceText": "Yeah I’m lost, can I come over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You’ll never love me like the way you did before",
      "practiceText": "You’ll never love me like the way you did before"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "But would you open up if I knocked on your door",
      "practiceText": "But would you open up if I knocked on your door"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Knock knock",
      "practiceText": "Knock knock"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "네 심장을 두드려 보란 듯이 right now",
      "practiceText": "네 심장을 두드려 보란 듯이 right now"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "앞뒤가 없는 삶 그저 벼랑 끝 그 앞, 앞",
      "practiceText": "앞뒤가 없는 삶 그저 벼랑 끝 그 앞, 앞"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "아프고 또 울고 상관없어 can I, I?",
      "practiceText": "아프고 또 울고 상관없어 can I, I?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너라면 다 개의치는 않아 my savior",
      "practiceText": "너라면 다 개의치는 않아 my savior"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "날카로워 또 베여도 그것도 나의 page",
      "practiceText": "날카로워 또 베여도 그것도 나의 page"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m past the pain 매일 나와 싸운 이유인지",
      "practiceText": "I’m past the pain 매일 나와 싸운 이유인지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그래 답을 찾은 rover, 난 노 저어",
      "practiceText": "그래 답을 찾은 rover, 난 노 저어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Can I come over, o-over",
      "practiceText": "Can I come over, o-over"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "’Cause it’s not over",
      "practiceText": "’Cause it’s not over"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Butter",
  "note": "這是官方2021版本，跟不上就唱整首吧：Ｄ",
  "chants": [
    
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Smooth like butter",
      "practiceText": "Smooth like butter"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Like a criminal undercover",
      "practiceText": "Like a criminal undercover"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Gon’ pop like trouble",
      "practiceText": "Gon’ pop like trouble"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Breakin’ into your heart like that",
      "replaceText": "that",
      "practiceText": "(B! T! S!)",
      "highlight": "(B! T! S!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Cool shade stunner",
      "practiceText": "stunner",
      "highlight": "stunner"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah I owe it all to my mother",
      "practiceText": "Yeah I owe it all to my mother"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hot like summer",
      "practiceText": "summer",
      "highlight": "summer"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah I’m makin’ you sweat like that",
      "practiceText": "Yeah I’m makin’ you sweat like that"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Break it down",
      "practiceText": "Break it down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh when I look in the mirror",
      "practiceText": "Oh when I look in the mirror"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll melt your heart into 2",
      "practiceText": "I’ll melt your heart into 2"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I got that superstar glow so",
      "practiceText": "I got that superstar glow so"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Do the boogie like",
      "practiceText": "Do the boogie like"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Side step right left to my beat",
      "replaceText": "my beat",
      "practiceText": "(BTS! BTS!)",
      "highlight": "(BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "High like the moon rock with me baby",
      "practiceText": "High like the moon rock with me baby"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Know that I got that heat",
      "practiceText": "Know that I got that heat"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let me show you ’cause talk is cheap",
      "practiceText": "Let me show you ’cause talk is cheap"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Side step right left to my beat",
      "practiceText": "Side step right left to my beat"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Get it, let it roll",
      "practiceText": "Get it, let it roll"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Smooth like butter",
      "practiceText": "butter",
      "highlight": "butter"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Pull you in like no other",
      "practiceText": "Pull you in like no other"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Don’t need no Usher",
      "practiceText": "Usher",
      "highlight": "Usher"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "To remind me you got it bad",
      "practiceText": "To remind me you got it bad"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Ain’t no other",
      "practiceText": "other",
      "highlight": "other"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "That can sweep you up like a robber",
      "practiceText": "That can sweep you up like a robber"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Straight up, I got ya",
      "practiceText": "got ya",
      "highlight": "got ya"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Making you fall like that",
      "practiceText": "Making you fall like that"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Break it down",
      "practiceText": "Break it down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh when I look in the mirror",
      "practiceText": "Oh when I look in the mirror"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll melt your heart into 2",
      "practiceText": "I’ll melt your heart into 2"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I got that superstar glow so",
      "practiceText": "I got that superstar glow so"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Do the boogie like",
      "practiceText": "Do the boogie like"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Side step right left to my beat",
      "replaceText": "my beat",
      "practiceText": "(BTS! BTS!)",
      "highlight": "(BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "High like the moon rock with me baby",
      "practiceText": "High like the moon rock with me baby"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Know that I got that heat",
      "practiceText": "Know that I got that heat"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let me show you ’cause talk is cheap",
      "practiceText": "Let me show you ’cause talk is cheap"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Side step right left to my beat",
      "practiceText": "Side step right left to my beat"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Get it, let it roll",
      "practiceText": "Get it, let it roll"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "BTS! 김남준! BTS! 김석진! BTS! 민윤기! BTS! 정호석!",
      "practiceText": "BTS! 김남준! BTS! 김석진! BTS! 민윤기! BTS! 정호석!",
      "roman": "BTS! Kim Namjoon! BTS! Kim Seokjin! BTS! Min Yoongi! BTS! Jeong Hoseok!"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Get it, let it roll)",
      "practiceText": "(Get it, let it roll)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "BTS! 박지민! BTS! 김태형! BTS! 전정국! BTS! let it roll",
      "practiceText": "BTS! 박지민! BTS! 김태형! BTS! 전정국! BTS! let it roll",
      "roman": "BTS! Park Jimin! BTS! Kim Taehyung! BTS! Jeon Jung kook! BTS! let it roll"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Get it, let it roll) 同步結束",
      "practiceText": "(Get it, let it roll) 同步結束"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "No ice on my wrist",
      "practiceText": "No ice on my wrist"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m that n-ice guy",
      "practiceText": "I’m that n-ice guy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Got that right body and that right mind",
      "practiceText": "Got that right body and that right mind"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Rollin’ up to party got the right vibe",
      "practiceText": "Rollin’ up to party got the right vibe"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Smooth like butter",
      "practiceText": "butter",
      "highlight": "butter"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hate us love us",
      "practiceText": "love us",
      "highlight": "love us"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fresh boy pull up and we lay low",
      "practiceText": "Fresh boy pull up and we lay low"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All the playas get movin’ when the bass low",
      "practiceText": "All the playas get movin’ when the bass low"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Got ARMY right behind us when we say so",
      "practiceText": "Got ARMY right behind us when we say so"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "BTS!",
      "practiceText": "BTS!"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Let’s go!",
      "practiceText": "Let’s go!"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Side step right left to my beat",
      "replaceText": "my beat",
      "practiceText": "(BTS! BTS!)",
      "highlight": "(BTS! BTS!)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "High like the moon rock with me baby",
      "practiceText": "High like the moon rock with me baby"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Know that I got that heat",
      "practiceText": "Know that I got that heat"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let me show you ’cause talk is cheap",
      "practiceText": "Let me show you ’cause talk is cheap"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Side step right left to my beat (heartbeat)",
      "practiceText": "Side step right left to my beat (heartbeat)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Get it, let it roll",
      "practiceText": "Get it, let it roll"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Smooth like (butter)",
      "practiceText": "(butter)",
      "highlight": "(butter)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Cool shade (stunner)",
      "practiceText": "(stunner)",
      "highlight": "(stunner)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "And you know we don’t stop",
      "practiceText": "we don’t stop",
      "highlight": "we don’t stop"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hot like (summer)",
      "practiceText": "(summer)",
      "highlight": "(summer)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Ain’t no (bummer)",
      "practiceText": "(bummer)",
      "highlight": "(bummer)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "You be like oh my god",
      "practiceText": "oh my god",
      "highlight": "oh my god"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "We gon’ make you rock and you say (yeah)",
      "practiceText": "(yeah)",
      "highlight": "(yeah)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "We gon’ make you bounce and you say (yeah)",
      "practiceText": "(yeah)",
      "highlight": "(yeah)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hotter?",
      "practiceText": "Hotter?"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Sweeter!",
      "practiceText": "Sweeter!"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Cooler?",
      "practiceText": "Cooler?"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Butter! (BTS!)",
      "practiceText": "(BTS!)",
      "highlight": "(BTS!)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Get it, let it roll",
      "practiceText": "let it roll",
      "highlight": "let it roll"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Dynamite",
  "note": "這是官方2020版本，跟不上就唱整首吧：Ｄ",
  "chants": [
    {
      "type": "chant",
      "time": "應援",
      "text": "Cos ah ah I’m in the stars tonight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "So watch me bring the fire and set the night alight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Shoes on get up in the morn",
      "practiceText": "Shoes on get up in the morn"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Cup of milk let’s rock and roll",
      "practiceText": "Cup of milk let’s rock and roll"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "King Kong",
      "practiceText": "King Kong"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "kick the drum rolling on like a rolling stone",
      "practiceText": "kick the drum rolling on like a rolling stone"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Sing song",
      "practiceText": "Sing song"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "when I’m walking home",
      "practiceText": "when I’m walking home"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Jump up to the top Lebron",
      "practiceText": "Jump up to the top Lebron"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Ding dong",
      "practiceText": "Ding dong"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "call me on my phone",
      "practiceText": "call me on my phone"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Ice tea and a game of ping pong",
      "practiceText": "Ice tea and a game of ping pong"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This is getting heavy",
      "practiceText": "This is getting heavy"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Can you hear the bass boom, I’m ready (whoo-hoo)",
      "practiceText": "(whoo-hoo)",
      "highlight": "(whoo-hoo)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Life is sweet as honey",
      "practiceText": "Life is sweet as honey"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Yeah this beat cha ching like money",
      "practiceText": "Yeah this beat cha ching like money"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Disco overload",
      "practiceText": "Disco overload"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m into that I’m good to go",
      "practiceText": "I’m into that I’m good to go"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I’m diamond",
      "practiceText": "I’m diamond"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You know I glow up",
      "practiceText": "You know I glow up"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hey, so let’s go",
      "practiceText": "Hey, so let’s go"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Cos ah ah I’m in the stars tonight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "So watch me bring the fire and set the night alight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Shining through the city with a little funk and soul",
      "practiceText": "Shining through the city with a little funk and soul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So I’mma light it up",
      "practiceText": "So I’mma light it up"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Like dynamite, woah",
      "practiceText": "Like dynamite, woah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Bring a friend join the crowd",
      "practiceText": "Bring a friend join the crowd"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Whoever wanna come along",
      "practiceText": "Whoever wanna come along"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Word up talk the talk just move like we off the wall",
      "practiceText": "Word up talk the talk just move like we off the wall"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Day or night the sky’s alight",
      "practiceText": "Day or night the sky’s alight"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So we dance to the break of dawn",
      "practiceText": "So we dance to the break of dawn"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Ladies and gentlemen, I go the medicine so you should keep ya eyes on the ball, huh",
      "practiceText": "Ladies and gentlemen, I go the medicine so you should keep ya eyes on the ball, huh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "This is getting heavy",
      "practiceText": "This is getting heavy"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Can you hear the bass boom, I’m ready (whoo-hoo)",
      "practiceText": "(whoo-hoo)",
      "highlight": "(whoo-hoo)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Life is sweet as honey",
      "practiceText": "Life is sweet as honey"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah this beat cha ching like money",
      "practiceText": "Yeah this beat cha ching like money"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Disco overload",
      "practiceText": "Disco overload"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m into that I’m good to go",
      "practiceText": "I’m into that I’m good to go"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I’m diamond",
      "practiceText": "I’m diamond"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You know I glow up",
      "practiceText": "You know I glow up"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let’s go",
      "practiceText": "Let’s go"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Cos ah ah I’m in the stars tonight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "So watch me bring the fire and set the night alight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Shining through the city with a little funk and soul",
      "practiceText": "Shining through the city with a little funk and soul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So I’mma light it up",
      "practiceText": "So I’mma light it up"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Like dynamite, woah",
      "practiceText": "Like dynamite, woah"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana",
      "practiceText": "Dynnnnnanana"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Life is dynamite",
      "practiceText": "Life is dynamite"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana",
      "practiceText": "Dynnnnnanana"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Life is dynamite",
      "practiceText": "Life is dynamite"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Shining through the city with a little funk and soul",
      "practiceText": "Shining through the city with a little funk and soul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So I’mma light it up",
      "practiceText": "So I’mma light it up"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Like dynamite, woah",
      "practiceText": "Like dynamite, woah"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana eh",
      "practiceText": "Dynnnnnanana eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana eh",
      "practiceText": "Dynnnnnanana eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana eh",
      "practiceText": "Dynnnnnanana eh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Light it up like dynamite",
      "practiceText": "Light it up like dynamite"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana eh",
      "practiceText": "Dynnnnnanana eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana eh",
      "practiceText": "Dynnnnnanana eh"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana eh",
      "practiceText": "Dynnnnnanana eh"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Light it up like dynamite",
      "practiceText": "Light it up like dynamite"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Cos ah ah I’m in the stars tonight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "So watch me bring the fire and set the night alight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Shining through the city with a little funk and soul",
      "practiceText": "Shining through the city with a little funk and soul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So I’mma light it up",
      "practiceText": "So I’mma light it up"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Like dynamite",
      "practiceText": "Like dynamite"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Cos ah ah I’m in the stars tonight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "So watch me bring the fire and set the night alight (BTS)",
      "practiceText": "(BTS)",
      "highlight": "(BTS)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Shining through the city with a little funk and soul",
      "practiceText": "Shining through the city with a little funk and soul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So I’mma light it up",
      "practiceText": "So I’mma light it up"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Like dynamite, woah",
      "practiceText": "Like dynamite, woah"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana",
      "practiceText": "Dynnnnnanana"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Life is dynamite",
      "practiceText": "Life is dynamite"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dynnnnnanana",
      "practiceText": "Dynnnnnanana"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Life is dynamite",
      "practiceText": "Life is dynamite"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Shining through the city with a little funk and soul",
      "practiceText": "Shining through the city with a little funk and soul"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "So I’mma light it up",
      "practiceText": "So I’mma light it up"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Like dynamite, woah",
      "practiceText": "Like dynamite, woah"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Please",
  "note": "正常巡迴是唱這首！（釜山場改成唱 One More Night）",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do that thing for ya",
      "practiceText": "I’ll do that thing for ya"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "세상이 우릴 갈라놓을 때",
      "practiceText": "세상이 우릴 갈라놓을 때"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "한 걸음 더 다가설게",
      "practiceText": "한 걸음 더 다가설게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m on my knees",
      "practiceText": "I’m on my knees"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "함께해줘 나의 worst day",
      "practiceText": "함께해줘 나의 worst day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 더 세게 안을게 right now",
      "practiceText": "널 더 세게 안을게 right now"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Even hell, I’m down",
      "practiceText": "Even hell, I’m down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All I want is you",
      "practiceText": "All I want is you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "네가 있는 곳이라면 나 따라가리",
      "practiceText": "네가 있는 곳이라면 나 따라가리"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "가시밭길쯤은 나 쉽게 즈려밟지",
      "practiceText": "가시밭길쯤은 나 쉽게 즈려밟지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "세상은 말야 항상 우리 사이를 막지",
      "practiceText": "세상은 말야 항상 우리 사이를 막지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "결국엔 우린 돌고 돌아서 제자리",
      "practiceText": "결국엔 우린 돌고 돌아서 제자리"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You and me just all day, all night",
      "practiceText": "You and me just all day, all night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hug me from the front, back, left, right",
      "practiceText": "Hug me from the front, back, left, right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I need you like oh me, oh my",
      "practiceText": "I need you like oh me, oh my"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh you got me",
      "practiceText": "Oh you got me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh you got me like",
      "practiceText": "Oh you got me like"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "세상이 우릴 갈라놓을 때",
      "practiceText": "세상이 우릴 갈라놓을 때"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "한 걸음 더 다가설게",
      "practiceText": "한 걸음 더 다가설게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m on my knees",
      "practiceText": "I’m on my knees"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "함께해줘 나의 worst day",
      "practiceText": "함께해줘 나의 worst day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 더 세게 안을게 right now",
      "practiceText": "널 더 세게 안을게 right now"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Even hell, I’m down",
      "practiceText": "Even hell, I’m down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All I want is you",
      "practiceText": "All I want is you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do that thing for ya",
      "practiceText": "I’ll do that thing for ya"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do a thing for ya",
      "practiceText": "I’ll do a thing for ya"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do that thing for ya",
      "practiceText": "I’ll do that thing for ya"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do a thing",
      "practiceText": "I’ll do a thing"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "나, 기쁨을 느꼈다면",
      "practiceText": "나, 기쁨을 느꼈다면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너에게 오직",
      "practiceText": "너에게 오직"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "봐, 내 잔이 넘치니",
      "practiceText": "봐, 내 잔이 넘치니"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Come and get a sip",
      "practiceText": "Come and get a sip"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah 염원하며 영원히",
      "practiceText": "Yeah 염원하며 영원히"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "서로의 영혼이",
      "practiceText": "서로의 영혼이"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그대 안에 기댈래",
      "practiceText": "그대 안에 기댈래"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby, baby, please",
      "practiceText": "Baby, baby, please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "You and me just all day, all night",
      "practiceText": "You and me just all day, all night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Hug me from the front, back, left, right",
      "practiceText": "Hug me from the front, back, left, right"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I need you like oh me, oh my",
      "practiceText": "I need you like oh me, oh my"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh you got me",
      "practiceText": "Oh you got me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Oh you got me like",
      "practiceText": "Oh you got me like"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "세상이 우릴 갈라놓을 때",
      "practiceText": "세상이 우릴 갈라놓을 때"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "한 걸음 더 다가설게",
      "practiceText": "한 걸음 더 다가설게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m on my knees",
      "practiceText": "I’m on my knees"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "함께해줘 나의 worst day",
      "practiceText": "함께해줘 나의 worst day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 더 세게 안을게 right now",
      "practiceText": "널 더 세게 안을게 right now"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Even hell, I’m down",
      "practiceText": "Even hell, I’m down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All I want is you",
      "practiceText": "All I want is you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do that thing for ya",
      "practiceText": "I’ll do that thing for ya"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do a thing for ya",
      "practiceText": "I’ll do a thing for ya"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll do that thing for ya",
      "practiceText": "I’ll do that thing for ya"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "If you wanna, if you wanna",
      "practiceText": "If you wanna, if you wanna"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "세상이 우릴 갈라놓을 때",
      "practiceText": "세상이 우릴 갈라놓을 때"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Baby, oh please",
      "practiceText": "Baby, oh please"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "한 걸음 더 다가설게",
      "practiceText": "한 걸음 더 다가설게"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m on my knees",
      "practiceText": "I’m on my knees"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "함께해줘 나의 worst day",
      "practiceText": "함께해줘 나의 worst day"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 더 세게 안을게 right now",
      "practiceText": "널 더 세게 안을게 right now"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Even hell, I’m down",
      "practiceText": "Even hell, I’m down"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All I want is you",
      "practiceText": "All I want is you"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "One More Night (釜山場限定)",
  "note": "限定版，不知道會不會突然掉落！正常巡迴是唱 Please！",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "언젠가 너로 인해",
      "practiceText": "언젠가 너로 인해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "한참을 울게 되겠지",
      "practiceText": "한참을 울게 되겠지"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "난 그 골목길에 서 있었어",
      "practiceText": "난 그 골목길에 서 있었어"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fallin’ back to me",
      "practiceText": "Fallin’ back to me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I feel you back to me",
      "practiceText": "I feel you back to me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "두려운건",
      "practiceText": "두려운건"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "벌써 슬픈건",
      "practiceText": "벌써 슬픈건"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너무 닮아버린 그림자",
      "practiceText": "너무 닮아버린 그림자"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "24 hours in the tub",
      "practiceText": "24 hours in the tub"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "24 hours of your thought",
      "practiceText": "24 hours of your thought"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Z Z Z don’t wake me up",
      "practiceText": "Z Z Z",
      "highlight": "Z Z Z"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "꿈이면 깨기 싫어 내",
      "practiceText": "꿈이면 깨기 싫어 내"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "It’s a fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "It’s a fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You’re my fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let’s repeat it",
      "practiceText": "Let’s repeat it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "One more night",
      "practiceText": "One more night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give me one more night",
      "practiceText": "Give me one more night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give me one more",
      "practiceText": "Give me one more"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fantasy, fantasy",
      "practiceText": "Fantasy, fantasy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "기분은 왠종일 like cloud nine",
      "practiceText": "기분은 왠종일 like cloud nine"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "All day, walkin' it, side by side",
      "practiceText": "All day, walkin' it, side by side"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이런 내 변화에 나도 놀라",
      "practiceText": "이런 내 변화에 나도 놀라"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "존재 자체로 선물이야",
      "practiceText": "존재 자체로 선물이야"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너와 함께 맞는 아침",
      "practiceText": "너와 함께 맞는 아침"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "말이 없어도 다 알기에",
      "practiceText": "말이 없어도 다 알기에"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "굳이 대단한 말 대신",
      "practiceText": "굳이 대단한 말 대신"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그저 곁에만 있어줘",
      "practiceText": "그저 곁에만 있어줘"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "24 hours in the tub",
      "practiceText": "24 hours in the tub"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "24 hours of your thought",
      "practiceText": "24 hours of your thought"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Z Z Z don’t wake me up",
      "practiceText": "Z Z Z",
      "highlight": "Z Z Z"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "꿈이면 깨기 싫어 내",
      "practiceText": "꿈이면 깨기 싫어 내"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "It’s a fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "It’s a fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You’re my fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let’s repeat it",
      "practiceText": "Let’s repeat it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "One more night",
      "practiceText": "One more night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give me one more night",
      "practiceText": "Give me one more night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give me one more",
      "practiceText": "Give me one more"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fantasy, fantasy",
      "practiceText": "Fantasy, fantasy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(One more night)",
      "practiceText": "(One more night)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fallin'",
      "practiceText": "Fallin'"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "헤어나올 수 없이 수놓인",
      "practiceText": "헤어나올 수 없이 수놓인"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "별들과 너를",
      "practiceText": "별들과 너를"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(One more night)",
      "practiceText": "(One more night)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Rollin'",
      "practiceText": "Rollin'"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "깨어나올 수 없이, bad mornin’",
      "practiceText": "깨어나올 수 없이, bad mornin’"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "한여름 밤의 꿈을",
      "practiceText": "한여름 밤의 꿈을"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "떠오른 moonlight",
      "practiceText": "떠오른 moonlight"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Selene 같은 너",
      "practiceText": "Selene 같은 너"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어젯밤처럼",
      "practiceText": "어젯밤처럼"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "아름다워줘 내 곁에서,",
      "practiceText": "아름다워줘 내 곁에서,"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어둠을 깨서",
      "practiceText": "어둠을 깨서"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Yeah yeah",
      "practiceText": "Yeah yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "단 한 밤만",
      "practiceText": "단 한 밤만"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "더 볼 수 있다면",
      "practiceText": "더 볼 수 있다면"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "새벽을 지나",
      "practiceText": "새벽을 지나"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Hit it",
      "practiceText": "Hit it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Get it",
      "practiceText": "Get it"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Do it again",
      "practiceText": "Do it again"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "24 hours in the tub",
      "practiceText": "24 hours in the tub"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "24 hours of your thought",
      "practiceText": "24 hours of your thought"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Z Z Z don’t wake me up",
      "practiceText": "Z Z Z",
      "highlight": "Z Z Z"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "꿈이면 깨기 싫어 내",
      "practiceText": "꿈이면 깨기 싫어 내"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "It’s a fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "It’s a fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "You’re my fantasy (Fantasy)",
      "practiceText": "(Fantasy)",
      "highlight": "(Fantasy)"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Let’s repeat it",
      "practiceText": "Let’s repeat it"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "One more night",
      "practiceText": "One more night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give me one more night",
      "practiceText": "Give me one more night"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give me one more",
      "practiceText": "Give me one more"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Fantasy, fantasy",
      "practiceText": "Fantasy, fantasy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Close your eyes, tell me what you see",
      "practiceText": "Close your eyes, tell me what you see"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby I, baby I",
      "practiceText": "Baby I, baby I"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give it to you, all night yeah",
      "practiceText": "Give it to you, all night yeah"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every night is our fantasy",
      "practiceText": "Every night is our fantasy"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby I, baby I",
      "practiceText": "Baby I, baby I"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Give me right at your time yeah",
      "practiceText": "Give me right at your time yeah"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(用力揮舞阿米棒吶喊！)"
    }
  ]
  },
  {
  "title": "Into the Sun",
  "note": "最後一首了唷！這時候會放煙火～",
  "chants": [
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby, you remind me",
      "practiceText": "Baby, you remind me"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I want someone like you",
      "practiceText": "I want someone like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Fires are never dying",
      "practiceText": "Fires are never dying"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I want someone like you",
      "practiceText": "I want someone like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Nobody knows me, honey",
      "practiceText": "Nobody knows me, honey"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "No one like you",
      "practiceText": "No one like you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "If you wanna go there",
      "practiceText": "If you wanna go there"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’m ready to be with you",
      "practiceText": "I’m ready to be with you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "You call",
      "practiceText": "You call"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I run",
      "practiceText": "I run"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dark days",
      "practiceText": "Dark days"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "And find the sun",
      "practiceText": "And find the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I don’t care",
      "practiceText": "I don’t care"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "How far",
      "practiceText": "How far"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Just wait",
      "practiceText": "Just wait"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Dawn",
      "practiceText": "Dawn"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby, what you want",
      "practiceText": "Baby, what you want"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Baby, what you need",
      "practiceText": "Baby, what you need"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Tell me how you feel",
      "practiceText": "Tell me how you feel"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Every night I’m thinkin’ of",
      "practiceText": "Every night I’m thinkin’ of"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "해 질 때의 바람",
      "practiceText": "해 질 때의 바람"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "해 뜰 때의 온도",
      "practiceText": "해 뜰 때의 온도"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "네가 느껴야 할",
      "practiceText": "네가 느껴야 할"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "저녁부터 아침의 볕",
      "practiceText": "저녁부터 아침의 볕"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "잃은 너의 것",
      "practiceText": "잃은 너의 것"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "좀 이른 어둠의 문턱",
      "practiceText": "좀 이른 어둠의 문턱"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "동이 틀 때까지 난",
      "practiceText": "동이 틀 때까지 난"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "널 지키며 into the sun",
      "practiceText": "널 지키며 into the sun"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "24, 24/7 feel like 24",
      "practiceText": "24, 24/7 feel like 24"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "태양을 향해 뛰어도",
      "practiceText": "태양을 향해 뛰어도"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "가까워지진 않아도",
      "practiceText": "가까워지진 않아도"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Don't be afraid 기억해",
      "practiceText": "Don't be afraid 기억해"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "그저 잠시뿐인걸",
      "practiceText": "그저 잠시뿐인걸"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "어두운 밤을 지나",
      "practiceText": "어두운 밤을 지나"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "아침이 오는 걸 맞으며",
      "practiceText": "아침이 오는 걸 맞으며"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "눈을 떠 into the sun",
      "practiceText": "눈을 떠 into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "You call",
      "practiceText": "You call"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I run",
      "practiceText": "I run"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dark days",
      "practiceText": "Dark days"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "And find the sun",
      "practiceText": "And find the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I don’t care",
      "practiceText": "I don’t care"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "How far",
      "practiceText": "How far"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Just wait",
      "practiceText": "Just wait"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Dawn",
      "practiceText": "Dawn"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "개와 늑대의 시간",
      "practiceText": "개와 늑대의 시간"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "부서진 짐승들의 나침반",
      "practiceText": "부서진 짐승들의 나침반"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "우리들의 피난",
      "practiceText": "우리들의 피난"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "소란들과 미련 앞",
      "practiceText": "소란들과 미련 앞"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "숨 쉬며 반항하는 인간",
      "practiceText": "숨 쉬며 반항하는 인간"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "난 집에 가고파",
      "practiceText": "난 집에 가고파",
      "roman": "nan ji be ga go pa"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "네가 있는 곳",
      "practiceText": "네가 있는 곳"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "풀이 뜨고",
      "practiceText": "풀이 뜨고"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "별 지는 곳",
      "practiceText": "별 지는 곳"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "불을 건네줘",
      "practiceText": "불을 건네줘"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "이 기름 속",
      "practiceText": "이 기름 속"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "너는 멋지고",
      "practiceText": "너는 멋지고"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "달은 아마 뜨지 않을거야 오늘",
      "practiceText": "달은 아마 뜨지 않을거야 오늘"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "And if we run out of time",
      "practiceText": "And if we run out of time"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "I’ll chase the feeling",
      "practiceText": "I’ll chase the feeling"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "Never too far behind",
      "practiceText": "Never too far behind"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "You call",
      "practiceText": "You call"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I run",
      "practiceText": "I run"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Never behind)",
      "practiceText": "(Never behind)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Dark days",
      "practiceText": "Dark days"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "And find the sun",
      "practiceText": "And find the sun"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Never behind)",
      "practiceText": "(Never behind)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I don’t care",
      "practiceText": "I don’t care"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "How far",
      "practiceText": "How far"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Never behind)",
      "practiceText": "(Never behind)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Just wait",
      "practiceText": "Just wait"
    },
    {
      "type": "chant",
      "time": "應援",
      "text": "Dawn",
      "practiceText": "Dawn"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I’ll follow you",
      "practiceText": "I’ll follow you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I’ll follow you",
      "practiceText": "I’ll follow you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I’ll follow you",
      "practiceText": "I’ll follow you"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Ah~)",
      "practiceText": "(Ah~)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "I’ll follow you",
      "practiceText": "I’ll follow you"
    },
    {
      "type": "lyrics",
      "time": "歌詞",
      "text": "(Into the sun)",
      "practiceText": "(Into the sun)"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "sing",
      "time": "跟唱",
      "text": "Into the sun",
      "practiceText": "Into the sun"
    },
    {
      "type": "cheer",
      "time": "歡呼",
      "text": "(用力揮舞阿米棒吶喊！)",
      "practiceText": "(最後一首了！！！！！)"
    }
  ]
  }
];