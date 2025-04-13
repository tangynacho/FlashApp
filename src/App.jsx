import { useState } from 'react'
import './App.css'
import './FlipCard.css'

const terms = [
  {
    romaji: "konnichiwa",
    kana: "こんにちは",
    english: "Hello (daytime)"
  },
  {
    romaji: "ohayou",
    kana: "おはよう",
    english: "Good morning"
  },
  {
    romaji: "ohayou gozaimasu",
    kana: "おはようございます",
    english: "Good morning (formal)"
  },
  {
    romaji: "konbanwa",
    kana: "こんばんは",
    english: "Good evening"
  },
  {
    romaji: "oyasumi",
    kana: "おやすみ",
    english: "Good night"
  },
  {
    romaji: "oyasumi nasai",
    kana: "おやすみなさい",
    english: "Good night (formal)"
  },
  {
    romaji: "arigatou",
    kana: "ありがとう",
    english: "Thank you"
  },
  {
    romaji: "arigatou gozaimasu",
    kana: "ありがとうございます",
    english: "Thank you very much"
  },
  {
    romaji: "dou itashimashite",
    kana: "どういたしまして",
    english: "You're welcome"
  },
  {
    romaji: "onegai",
    kana: "おねがい",
    english: "Please"
  },
  {
    romaji: "onegai shimasu",
    kana: "おねがいします",
    english: "Please (formal/polite)"
  },
  {
    romaji: "sumimasen",
    kana: "すみません",
    english: "Excuse me / Sorry"
  },
  {
    romaji: "gomen nasai",
    kana: "ごめんなさい",
    english: "I'm sorry"
  },
  {
    romaji: "hai",
    kana: "はい",
    english: "Yes"
  },
  {
    romaji: "iie",
    kana: "いいえ",
    english: "No"
  },
  {
    romaji: "daijoubu",
    kana: "だいじょうぶ",
    english: "Okay / Alright"
  },
  {
    romaji: "hajimemashite",
    kana: "はじめまして",
    english: "Nice to meet you"
  },
  {
    romaji: "jaa ne",
    kana: "じゃあね",
    english: "See you"
  },
  {
    romaji: "mata ashita",
    kana: "またあした",
    english: "See you tomorrow"
  },
  {
    romaji: "sayounara",
    kana: "さようなら",
    english: "Goodbye (formal)"
  },
  {
    romaji: "genki desu ka?",
    kana: "げんきですか？",
    english: "How are you?"
  },
  {
    romaji: "genki desu",
    kana: "げんきです",
    english: "I'm fine"
  },
  {
    romaji: "onamae wa nan desu ka?",
    kana: "おなまえはなんですか？",
    english: "What’s your name?"
  },
  {
    romaji: "watashi no namae wa ___ desu",
    kana: "わたしのなまえは___です",
    english: "My name is ___"
  },
  {
    romaji: "wakarimasen",
    kana: "わかりません",
    english: "I don’t understand"
  },
  {
    romaji: "wakarimasu",
    kana: "わかります",
    english: "I understand"
  },
  {
    romaji: "sukoshi nihongo ga hanasemasu",
    kana: "すこしにほんごがはなせます",
    english: "I can speak a little Japanese"
  },
  {
    romaji: "nihongo wa hanasemasen",
    kana: "にほんごははなせません",
    english: "I can’t speak Japanese"
  },
  {
    romaji: "eigo o hanasemasu ka?",
    kana: "えいごをはなせますか？",
    english: "Do you speak English?"
  },
  {
    romaji: "tasukete!",
    kana: "たすけて！",
    english: "Help!"
  },
  {
    romaji: "shirimasen",
    kana: "しりません",
    english: "I don’t know"
  },
  {
    romaji: "hontou?",
    kana: "ほんとう？",
    english: "Really?"
  },
  {
    romaji: "chotto matte",
    kana: "ちょっとまって",
    english: "Wait a moment"
  },
  {
    romaji: "shou shou omachi kudasai",
    kana: "しょうしょうおまちください",
    english: "One moment please"
  },
  {
    romaji: "___ wa doko desu ka?",
    kana: "___はどこですか？",
    english: "Where is ___?"
  },
  {
    romaji: "toire",
    kana: "トイレ",
    english: "Bathroom"
  },
  {
    romaji: "mizu",
    kana: "みず",
    english: "Water"
  },
  {
    romaji: "tabemono",
    kana: "たべもの",
    english: "Food"
  },
  {
    romaji: "oishii",
    kana: "おいしい",
    english: "Delicious"
  },
  {
    romaji: "onaka suita",
    kana: "おなかすいた",
    english: "I'm hungry"
  },
  {
    romaji: "nodo ga kawaita",
    kana: "のどがかわいた",
    english: "I'm thirsty"
  },
  {
    romaji: "tabemashou",
    kana: "たべましょう",
    english: "Let's eat"
  },
  {
    romaji: "kanpai",
    kana: "かんぱい",
    english: "Cheers! (toast)"
  },
  {
    romaji: "chotto",
    kana: "ちょっと",
    english: "Excuse me (getting attention)"
  },
  {
    romaji: "tsukareta",
    kana: "つかれた",
    english: "I’m tired"
  },
  {
    romaji: "ureshii",
    kana: "うれしい",
    english: "I’m happy"
  },
  {
    romaji: "kanashii",
    kana: "かなしい",
    english: "I’m sad"
  },
  {
    romaji: "okotte iru",
    kana: "おこっている",
    english: "I’m angry"
  },
  {
    romaji: "ikimashou",
    kana: "いきましょう",
    english: "Let’s go"
  },
  {
    romaji: "koko ni kite",
    kana: "ここにきて",
    english: "Come here"
  },
  {
    romaji: "itte kimasu",
    kana: "いってきます",
    english: "I'm leaving (I'll be back)"
  },
  {
    romaji: "itterasshai",
    kana: "いってらっしゃい",
    english: "Take care (in response to 'itte kimasu')"
  },
  {
    romaji: "tadaima",
    kana: "ただいま",
    english: "I'm home"
  },
  {
    romaji: "okaerinasai",
    kana: "おかえりなさい",
    english: "Welcome home"
  },
  {
    romaji: "itadakimasu",
    kana: "いただきます",
    english: "Let's eat (before a meal)"
  },
  {
    romaji: "gochisousama deshita",
    kana: "ごちそうさまでした",
    english: "Thank you for the meal (after eating)"
  },
  {
    romaji: "omedetou",
    kana: "おめでとう",
    english: "Congratulations"
  },
  {
    romaji: "omedetou gozaimasu",
    kana: "おめでとうございます",
    english: "Congratulations (formal)"
  },
  {
    romaji: "tanoshii",
    kana: "たのしい",
    english: "Fun"
  },
  {
    romaji: "omoshiroi",
    kana: "おもしろい",
    english: "Interesting / Funny"
  },
  {
    romaji: "kowai",
    kana: "こわい",
    english: "Scary"
  },
  {
    romaji: "kawaii",
    kana: "かわいい",
    english: "Cute"
  },
  {
    romaji: "kakkoii",
    kana: "かっこいい",
    english: "Cool / Handsome"
  },
  {
    romaji: "urusai",
    kana: "うるさい",
    english: "Noisy / Annoying"
  },
  {
    romaji: "abunai",
    kana: "あぶない",
    english: "Dangerous"
  },
  {
    romaji: "ii",
    kana: "いい",
    english: "Good"
  },
  {
    romaji: "warui",
    kana: "わるい",
    english: "Bad"
  },
  {
    romaji: "takai",
    kana: "たかい",
    english: "Expensive / High"
  },
  {
    romaji: "yasui",
    kana: "やすい",
    english: "Cheap"
  },
  {
    romaji: "ookii",
    kana: "おおきい",
    english: "Big"
  },
  {
    romaji: "chiisai",
    kana: "ちいさい",
    english: "Small"
  },
  {
    romaji: "atarashii",
    kana: "あたらしい",
    english: "New"
  },
  {
    romaji: "furui",
    kana: "ふるい",
    english: "Old"
  },
  {
    romaji: "hayai",
    kana: "はやい",
    english: "Fast / Early"
  },
  {
    romaji: "osoi",
    kana: "おそい",
    english: "Slow / Late"
  },
  {
    romaji: "tsuyoi",
    kana: "つよい",
    english: "Strong"
  },
  {
    romaji: "yowai",
    kana: "よわい",
    english: "Weak"
  },
  {
    romaji: "samui",
    kana: "さむい",
    english: "Cold (weather)"
  },
  {
    romaji: "atsui",
    kana: "あつい",
    english: "Hot (weather/thing)"
  },
  {
    romaji: "suzushii",
    kana: "すずしい",
    english: "Cool (weather)"
  },
  {
    romaji: "atatakai",
    kana: "あたたかい",
    english: "Warm"
  },
  {
    romaji: "karai",
    kana: "からい",
    english: "Spicy"
  },
  {
    romaji: "amai",
    kana: "あまい",
    english: "Sweet"
  },
  {
    romaji: "nigai",
    kana: "にがい",
    english: "Bitter"
  },
  {
    romaji: "shoppai",
    kana: "しょっぱい",
    english: "Salty"
  },
  {
    romaji: "suppai",
    kana: "すっぱい",
    english: "Sour"
  },
  {
    romaji: "daijoubu desu",
    kana: "だいじょうぶです",
    english: "It's okay / I'm fine"
  },
  {
    romaji: "mou ichido onegai shimasu",
    kana: "もういちどおねがいします",
    english: "One more time, please"
  },
  {
    romaji: "yukkuri hanashite kudasai",
    kana: "ゆっくりはなしてください",
    english: "Please speak slowly"
  },
  {
    romaji: "nihongo de nan to iimasu ka?",
    kana: "にほんごでなんといいますか？",
    english: "How do you say it in Japanese?"
  },
  {
    romaji: "eigo de nan to iimasu ka?",
    kana: "えいごでなんといいますか？",
    english: "How do you say it in English?"
  },
  {
    romaji: "shitsumon ga arimasu",
    kana: "しつもんがあります",
    english: "I have a question"
  },
  {
    romaji: "wakarimashita",
    kana: "わかりました",
    english: "I understood / Got it"
  },
  {
    romaji: "wakarimasen deshita",
    kana: "わかりませんでした",
    english: "I didn’t understand"
  },
  {
    romaji: "ki ni shinai de",
    kana: "きにしないで",
    english: "Don’t worry about it"
  },
  {
    romaji: "ganbatte",
    kana: "がんばって",
    english: "Do your best / Good luck"
  },
  {
    romaji: "otsukaresama desu",
    kana: "おつかれさまです",
    english: "Thank you for your hard work"
  },
  {
    romaji: "taihen desu ne",
    kana: "たいへんですね",
    english: "That sounds tough"
  },
  {
    romaji: "sou desu ne",
    kana: "そうですね",
    english: "Yeah / Let me see"
  },
  {
    romaji: "sou ka",
    kana: "そうか",
    english: "I see / Is that so"
  },
  {
    romaji: "sou da ne",
    kana: "そうだね",
    english: "Yeah, that’s right"
  },
  {
    romaji: "chigaimasu",
    kana: "ちがいます",
    english: "That's wrong / It's different"
  },
  {
    romaji: "hontou ni",
    kana: "ほんとうに",
    english: "Really / Truly"
  },
  {
    romaji: "yokatta",
    kana: "よかった",
    english: "I'm glad / That's good"
  },
  {
    romaji: "zannen",
    kana: "ざんねん",
    english: "Too bad / That's unfortunate"
  },
  {
    romaji: "maamaa",
    kana: "まあまあ",
    english: "So-so / Not bad"
  },
  {
    romaji: "betsu ni",
    kana: "べつに",
    english: "Not really / Nothing in particular"
  },
  {
    romaji: "mendoukusai",
    kana: "めんどうくさい",
    english: "Troublesome / Annoying"
  },
  {
    romaji: "mou ii",
    kana: "もういい",
    english: "Forget it / That’s enough"
  },
  {
    romaji: "dame",
    kana: "だめ",
    english: "No good / Not allowed"
  },
  {
    romaji: "ii yo",
    kana: "いいよ",
    english: "It's okay / Sure"
  },
  {
    romaji: "daijoubu ka?",
    kana: "だいじょうぶか？",
    english: "Are you okay?"
  },
  {
    romaji: "nande?",
    kana: "なんで？",
    english: "Why?"
  },
  {
    romaji: "itsu?",
    kana: "いつ？",
    english: "When?"
  },
  {
    romaji: "doko?",
    kana: "どこ？",
    english: "Where?"
  },
  {
    romaji: "dare?",
    kana: "だれ？",
    english: "Who?"
  },
  {
    romaji: "nani?",
    kana: "なに？",
    english: "What?"
  },
  {
    romaji: "dou yatte?",
    kana: "どうやって？",
    english: "How?"
  },
  {
    romaji: "ikura?",
    kana: "いくら？",
    english: "How much?"
  },
  {
    romaji: "nanji?",
    kana: "なんじ？",
    english: "What time?"
  },
  {
    romaji: "nan nichi?",
    kana: "なんにち？",
    english: "What day?"
  },
  {
    romaji: "doushita?",
    kana: "どうした？",
    english: "What happened?"
  },
  {
    romaji: "doushiyou?",
    kana: "どうしよう？",
    english: "What should I do?"
  },
  {
    romaji: "yokoso",
    kana: "ようこそ",
    english: "Welcome"
  },
  {
    romaji: "irasshaimase",
    kana: "いらっしゃいませ",
    english: "Welcome (to a store)"
  },
  {
    romaji: "itte",
    kana: "いって",
    english: "Say it / Go"
  },
  {
    romaji: "mite",
    kana: "みて",
    english: "Look / Watch"
  },
  {
    romaji: "kiite",
    kana: "きいて",
    english: "Listen"
  },
  {
    romaji: "yonde",
    kana: "よんで",
    english: "Read"
  },
  {
    romaji: "kaite",
    kana: "かいて",
    english: "Write"
  },
  {
    romaji: "hanashite",
    kana: "はなして",
    english: "Speak / Talk"
  },
  {
    romaji: "yamete",
    kana: "やめて",
    english: "Stop it"
  },
  {
    romaji: "ganbarou",
    kana: "がんばろう",
    english: "Let’s do our best"
  },
  {
    romaji: "kangaete",
    kana: "かんがえて",
    english: "Think (about it)"
  },
  {
    romaji: "wasurenaide",
    kana: "わすれないで",
    english: "Don’t forget"
  },
  {
    romaji: "oboete",
    kana: "おぼえて",
    english: "Remember"
  },
  {
    romaji: "ki o tsukete",
    kana: "きをつけて",
    english: "Take care / Be careful"
  },
  {
    romaji: "hai, douzo",
    kana: "はい、どうぞ",
    english: "Here you go"
  },
  {
    romaji: "kekkou desu",
    kana: "けっこうです",
    english: "No, thank you / I'm fine"
  },
  {
    romaji: "mou sukoshi",
    kana: "もうすこし",
    english: "A little more"
  },
  {
    romaji: "mou chotto",
    kana: "もうちょっと",
    english: "Just a bit more"
  },
  {
    romaji: "yameru",
    kana: "やめる",
    english: "To quit / To stop"
  },
  {
    romaji: "dekiru",
    kana: "できる",
    english: "Can do"
  },
  {
    romaji: "shiru",
    kana: "しる",
    english: "To know"
  },
  {
    romaji: "ikiru",
    kana: "いきる",
    english: "To live"
  },
  {
    romaji: "shinu",
    kana: "しぬ",
    english: "To die"
  },
  {
    romaji: "iku",
    kana: "いく",
    english: "To go"
  },
  {
    romaji: "kuru",
    kana: "くる",
    english: "To come"
  },
  {
    romaji: "kaeru",
    kana: "かえる",
    english: "To return / Go home"
  },
  {
    romaji: "miru",
    kana: "みる",
    english: "To see / To watch"
  },
  {
    romaji: "kiku",
    kana: "きく",
    english: "To listen / To ask"
  },
  {
    romaji: "iu",
    kana: "いう",
    english: "To say"
  },
  {
    romaji: "hanasu",
    kana: "はなす",
    english: "To speak"
  },
  {
    romaji: "taberu",
    kana: "たべる",
    english: "To eat"
  },
  {
    romaji: "nomu",
    kana: "のむ",
    english: "To drink"
  },
  {
    romaji: "arau",
    kana: "あらう",
    english: "To wash"
  },
  {
    romaji: "kau",
    kana: "かう",
    english: "To buy"
  },
  {
    romaji: "uru",
    kana: "うる",
    english: "To sell"
  },
  {
    romaji: "kaku",
    kana: "かく",
    english: "To write"
  },
  {
    romaji: "yomu",
    kana: "よむ",
    english: "To read"
  },
  {
    romaji: "aruku",
    kana: "あるく",
    english: "To walk"
  },
  {
    romaji: "hashiru",
    kana: "はしる",
    english: "To run"
  },
  {
    romaji: "oyogu",
    kana: "およぐ",
    english: "To swim"
  },
  {
    romaji: "neru",
    kana: "ねる",
    english: "To sleep"
  },
  {
    romaji: "okiru",
    kana: "おきる",
    english: "To wake up"
  },
  {
    romaji: "benkyou suru",
    kana: "べんきょうする",
    english: "To study"
  },
  {
    romaji: "shigoto suru",
    kana: "しごとする",
    english: "To work"
  },
  {
    romaji: "yasumu",
    kana: "やすむ",
    english: "To rest / Take a break"
  },
  {
    romaji: "asobu",
    kana: "あそぶ",
    english: "To play / To hang out"
  },
  {
    romaji: "au",
    kana: "あう",
    english: "To meet"
  },
  {
    romaji: "tsukuru",
    kana: "つくる",
    english: "To make"
  },
  {
    romaji: "tsukau",
    kana: "つかう",
    english: "To use"
  },
  {
    romaji: "akeru",
    kana: "あける",
    english: "To open"
  },
  {
    romaji: "shimeru",
    kana: "しめる",
    english: "To close"
  },
  {
    romaji: "keru",
    kana: "ける",
    english: "To kick"
  },
  {
    romaji: "nageru",
    kana: "なげる",
    english: "To throw"
  },
  {
    romaji: "suwaru",
    kana: "すわる",
    english: "To sit"
  },
  {
    romaji: "tatsu",
    kana: "たつ",
    english: "To stand"
  },
  {
    romaji: "iru",
    kana: "いる",
    english: "To exist (for living things)"
  },
  {
    romaji: "aru",
    kana: "ある",
    english: "To exist (for non-living things)"
  },
  {
    romaji: "kawaii ne",
    kana: "かわいいね",
    english: "So cute!"
  },
  {
    romaji: "sugoi ne",
    kana: "すごいね",
    english: "That's amazing!"
  },
  {
    romaji: "yabai",
    kana: "やばい",
    english: "Oh no! / Awesome! (contextual slang)"
  },
  {
    romaji: "majide?",
    kana: "まじで？",
    english: "Seriously?"
  },
  {
    romaji: "uso!",
    kana: "うそ！",
    english: "No way! / You're kidding!"
  },
  {
    romaji: "mou",
    kana: "もう",
    english: "Already / Geez"
  },
  {
    romaji: "mada",
    kana: "まだ",
    english: "Still / Not yet"
  },
  {
    romaji: "sugu",
    kana: "すぐ",
    english: "Immediately / Soon"
  },
  {
    romaji: "tokidoki",
    kana: "ときどき",
    english: "Sometimes"
  },
  {
    romaji: "itsumo",
    kana: "いつも",
    english: "Always"
  },
  {
    romaji: "mainichi",
    kana: "まいにち",
    english: "Every day"
  },
  {
    romaji: "maiban",
    kana: "まいばん",
    english: "Every night"
  },
  {
    romaji: "asa",
    kana: "あさ",
    english: "Morning"
  },
  {
    romaji: "hiru",
    kana: "ひる",
    english: "Afternoon / Daytime"
  },
  {
    romaji: "yoru",
    kana: "よる",
    english: "Night"
  },
  {
    romaji: "ototoi",
    kana: "おととい",
    english: "The day before yesterday"
  },
  {
    romaji: "kinou",
    kana: "きのう",
    english: "Yesterday"
  }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const handleCardClick = () => {
    setFlipped(!flipped)
  }

  const handleNext = () => {
    if(flipped) {
      setFlipped(false)
      setTimeout(() => {
        setCurrentIndex(Math.floor(Math.random() * terms.length))
      }, 600) // 600 ms to match "transition: transform 0.6s;" in the FlipCard styling
    } else {
      setCurrentIndex(Math.floor(Math.random() * terms.length))
    }
  }

  const currentTerm = terms[currentIndex]

  return (
    <div className="app">
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="card-inner">
          <div className="card-front">
            <h2>{currentTerm.romaji}</h2>
            <p>{currentTerm.kana}</p>
          </div>
          <div className="card-back">
            <h2>{currentTerm.english}</h2>
          </div>
        </div>
      </div>

      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default App