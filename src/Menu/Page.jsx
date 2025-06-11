// src/Menu/Page.jsx
import React, { useRef, useEffect, useState } from 'react';
import '../styles/Page.css';

import Page1 from '../img/Page1.jpg';
import Page2 from '../img/Page2.jpg';
import Page3 from '../img/Page3.jpg';
import Page4 from '../img/Page4.jpg';
import Page5 from '../img/Page5.jpg';
import Page6 from '../img/Page6.jpg';
import Page7 from '../img/Page7.jpg';
import Page8 from '../img/Page8.jpg';
import Page9 from '../img/Page9.jpg';
import Page10 from '../img/Page10.jpg';

/* ── 카드 데이터 ───────────────────────────────── */
const initialBooks = [
  {
    id: 1,
    image: Page1,
    title: '우아한 거짓말',
    author: '김려령',
    desc: '왕따·가정폭력을 겪은 한 소녀의 숨겨진 이야기.',
    detail: `나를 지키기 위한 잔인한 거짓말...『우아한 거짓말』은 평범해 보이던 열네 살 소녀 천지의 죽음으로 시작된다. 언니 만지는 동생이 남긴 흔적을 좇으며 퍼즐을 맞추어 가고, 숨겨져 있던 진실은 조금씩 모습을 드러낸다. 이 작품은 추리소설 같은 구성과 복선, 산 자와 죽은 자의 교차 서술로 인물들의 심리를 촘촘히 그려낸다.

    가까웠던 친구 화연은 친구들 사이에서 자신의 자리를 지키기 위해 천지를 이용했고, 가족들은 그녀의 고민을 끝내 알아주지 못했다. 그러나 천지는 자신이 미워했고 또 사랑했던 이들에게 용서의 편지를 남기는데….

‘죽은 자’ 천지의 내레이션을 통해 드러나는 아픈 기억과 고통, 그리고 남겨진 사람들의 죄책감은 우리에게 “나는 누군가에게 어떤 존재였을까”라는 질문을 던진다. 〈완득이〉와는 전혀 다른 분위기지만, 한층 깊고 넓어진 김려령의 문학 세계를 만날 수 있다.`,
  },
  {
    id: 2,
    image: Page2,
    title: '82년생 김지영',
    author: '조남주',
    desc: '세대·성별을 관통하는 평범함 속의 구조적 차별.',
    detail:`슬하에 딸을 두고 있는 서른네 살 김지영 씨가 어느 날 갑자기 이상 증세를 보인다. 시댁 식구들이 모여 있는 자리에서 친정 엄마로 빙의해 속말을 뱉어 내고, 남편의 결혼 전 애인으로 빙의해 그를 식겁하게 만들기도 한다. 이를 이상하게 여긴 남편이 김지영 씨의 정신 상담을 주선하고, 지영 씨는 정기적으로 의사를 찾아가 자신의 삶을 이야기한다. 리포트에 기록된 김지영 씨의 기억은 ‘여성’이라는 젠더적 기준으로 선별된 에피소드로 구성된다.

    1999년 남녀차별을 금지하는 법안이 제정되고 이후 여성부가 출범함으로써 성평등을 위한 제도적 장치가 마련된 이후, 즉 제도적 차별이 사라진 시대에 보이지 않는 방식으로 존재하는 내면화된 성차별적 요소가 작동하는 방식을 보여 준다. 지나온 삶을 거슬러 올라가며 미처 못다 한 말을 찾는 이 과정은 지영 씨를 알 수 없는 증상으로부터 회복시켜 줄 수 있을까? 김지영 씨로 대변되는 ‘그녀’들의 인생 마디마디에 존재하는 성차별적 요소를 핍진하게 묘사하고 있다.`
  },
  {
    id: 3,
    image: Page3,
    title: '러브레터',
    author: '이와이 슌지',
    desc: '편지가 소환한 첫사랑의 기억과 잔상.',
    detail:`첫사랑을 떠올리게 하는 가장 아련한 추억
겨울 로맨스의 대표작 《러브 레터》 원작소설

눈 내리는 산에서 돌아오지 못한 약혼자 후지이 이츠키의 기일,
와타나베 히로코는 추억 속에 머물고 있는 그의 안부를 묻듯 이츠키가 중학교 시절 살았던 오타루의 주소로 편지를 보낸다.
그런데 이젠 국도가 되었다는 그 주소에서, 바로 후지이 이츠키에게서 답장이 온 것 아닌가.
이건 천국에서 그가 보낸 편지일까? 히로코는 다시 답신을 보내고
기묘한 편지의 왕래가 이어지는데.
로맨스 영화의 명작, 《러브 레터》의 원작 소설.`
  },
  // ... (나머지 데이터 동일)
  { id: 4, 
    image: Page4, 
    title: '콜 미 바이 유어 네임', 
    author: '안드레 애치먼', 
    desc: '한여름 이탈리아에서 시작된 열여섯 감정의 결정체.' ,
    detail:`내 눈의 빛, 세상의 빛, 내 인생의 빛 같은 사람!

    소설은 훗날 성장한 엘리오가 그해 여름을 회상하는 것으로 시작해, 올리버와 함께 보낸 리비에라에서의 6주, 로마에서의 특별한 날들을 배경으로 언제까지나 함께 할 수 없고 누구에게도 말할 수도 없는 비밀을 안은 채 특별한 친밀함을 쌓아 나가는 과정을 그리고 있다. 이탈리아 해안가의 별장에서 여름을 맞이한 열일곱 살의 엘리오.
엘리오는 자유분방하면서도 신비한 매력으로 만나는 사람마다 매료시키는 올리버에게 첫눈에 반하면서 거침없이 빠져든다. 마음을 온전히 열어 보이지 않는 올리버를 향해 욕망을 떨쳐낼 수 없는 지경에 이른 엘리오. 올리버는 엘리오가 다가갈 때마다 “나중에!”라며 피하지만, 결국 둘은 멈출 수 없는 사랑을 나눈다. 하이든, 리스트, 바흐와 헤라클레이토스, 파울 첼란, 퍼시 셸리, 레오파르디를 넘나드는 두 사람의 의식 세계와 온전히 하나가 되고자 열망하는 몸짓이 세련되고 품위 있는 로맨스를 완성해 낸다.`
  },
  { id: 5, 
    image: Page5, 
    title: '작은 아씨들', 
    author: '루이자 메이 올콧', 
    desc: '네 자매가 써 내려가는 성장·자립·사랑의 기록.' ,
    detail:`<작은 아씨들> 은 루이자 메이 올컷을 미국의 대표적인 여성 작가로 떠오르게 한 가정 소설이자 성장 소설이다. 이 책은 성격이 다른 네 자매가 어려운 가장 환경 속에서도 자신의 꿈을 키우면서 아름답고 당당하게 성장해 가는 모습을 따뜻하면서도 감동적으로 그리고 있다.

작품 속의 자매들은 아버지가 전장(남북전쟁)에 나가 있어 경제적으로 몹시 어려운 상황이지만 헌신적이고 자상한 어머니의 가정교육과 아버지의 도덕적 가르침으로 인해 씩씩하고 당당하게 어려움을 극복해 나간다.

또한 이웃집 로리와의 따뜻한 우정과 로렌스 할아버지와 교류 등의 에피소드를 통해 잔잔하고 감동적이면서도 재미있는 에피소드가 작품 곳곳에 펼쳐지고, 이로 인해 네 자매는 각각의 단점을 극복해 나간다.`
  },
  { id: 6, 
    image: Page6, 
    title: '너의 췌장을 먹고 싶어', 
    author: '스미노 요루', 
    desc: '죽음과 함께 피어나는 공감과 우정.' ,
    detail:`잔혹한 비밀을 가진 소녀와 임시 친구 계약을 맺은 소년의 이야기!

2016년 일본 서점 대상 2위에 오른 스미노 요루의 첫 소설이다. 시한부 선고를 받은 소녀와 함께한 어느 소년의 이야기를 그리고 있다. ‘요루노 야스미’라는 필명으로 소설 투고 웹사이트 〈소설가가 되자〉에 원고를 올리기 시작한 것이 이 작품의 시작이었다.

자의적인 은둔형 외톨이 남학생 ‘나’는 우연히 초긍정 인기 만점 동급생인 사쿠라의 〈공병문고〉를 발견하고 비밀을 공유하면서 그녀와 잠정적인 친구 계약을 맺는다. ‘네가 죽기 전까지’ 임시 친구 계약을 맺은 사이일 뿐이라고 생각했는데 왠지 점점 자신에게는 없는 그녀의 뭔가가 옮겨온다. 게다가 묘한 감정까지 쌓여가는 것 같다...`
  },
  { id: 7, 
    image: Page7, 
    title: '채식주의자', 
    author: '한강', 
    desc: '고기 섭취 거부로 드러난 억압·폭력·욕망의 껍질.' ,
    detail:`인터내셔널 부커상, 산클레멘테 문학상 수상작
전세계가 주목한 한강의 역작을 다시 만나다

『채식주의자』는 어느 날부터 육식을 거부하며 가족들과 갈등을 빚기 시작하는 ‘영혜’가 중심인물로 등장하는 장편소설이다. 하지만 소설은 영혜를 둘러싼 세 인물인 남편, 형부, 언니의 시선에서 서술되며 영혜는 단 한번도 주도적인 화자의 위치를 얻지 못한다. 가족의 이름으로 자행되는 가부장의 폭력, 그리고 그 폭력에 저항하며 금식을 통해 동물성을 벗어던지고 나무가 되고자 한 영혜가 보여주는 식물적 상상력의 경지는 모든 세대 독자를 아우르며 더 크나큰 공명을 이루어낼 것이다.`
  
  },
  { id: 8, 
    image: Page8, 
    title: '파과', 
    author: '구병모', 
    desc: '퇴물 킬러가 맞닥뜨린 인간성의 마지막 파편.' ,
    detail:`한국 소설에 가장 강렬하게 새겨질 새로운 여성 서사를 탄생시킨 구병모 작가의 《파과》가 새 옷을 갈아입었다. 40여 년간 날카롭고 냉혹하게 청부 살인을 업으로 삼아온 60대 여성 킬러 ‘조각(爪角)’. 몸도 기억도 예전 같지 않게 삐걱거리기 시작하면서 이제는 퇴물 취급을 받는다. 노화와 쇠잔의 과정을 겪으며 조각은 새삼스레 ‘타인’의 눈 속에 둥지를 튼 공허를 발견하게 된다. 소멸의 한 지점을 향해 부지런히 허물어지고 있는 모든 것, 깨지고 상하고 뒤틀린 살아 있는 모든 것에 대해 연민을 느끼며, 조각의 마음속에 어느새 지키고 싶은 것들이 하나둘 생겨나기 시작한다. 《파과》는 짧은 시간 빛나다 사라질 살아 있는 모든 것들에 대한 뜨거운 찬사다.`
  },
  { id: 9, 
    image: Page9, 
    title: '노트북', 
    author: '니콜라스 스파크스', 
    desc: '기억을 넘어선 사랑의 회복과 기적.' ,
    detail:`대체 불가능한 레전드 클래식 로맨스 《노트북》
새 번역·새 표지로 한층 더 화려하게 재탄생하다!

출간 즉시 전 세계 수천만 독자를 사로잡으며 현대 로맨스 거장의 탄생을 알린 《노트북》이 마침내 모모에서 전격 재출간됐다. 1998년 국내 첫 출간 이후 약 30년 만에 완전히 새로운 번역과 표지로 재탄생한 전면 개정판이다. 작가가 실화를 바탕으로 집필한 소설로 알려진 이 작품은 주인공 노아와 앨리의 순애보를 애틋한 감성으로 그려내며 독자들의 눈물샘을 뜨겁게 자극했다. 2004년 라이언 고슬링·레이첼 맥아담스 주연의 동명의 영화로 개봉해 멜로의 역사를 다시 쓴 것은 물론, 수십 년이 지난 지금까지 꾸준히 회자되며 복간 요청이 끊이지 않았다. 세대를 막론하는 클래식의 힘으로 진정한 사랑과 낭만의 의미를 되짚는 이 기적 같은 스토리가 또 한 번 눈부신 설렘과 감동을 선사할 것이다.`
  },
  { id: 10, 
    image: Page10, 
    title: '플립', 
    author: '웬들린 밴 드라닌', 
    desc: '엇갈린 시간 위에 피어난 첫사랑의 역설.' ,
    detail:`생을 살며 누구나 만나는 첫사랑! 지나간 이에게는 아련한 추억이 되고, 현재 진행 중인 이에게는 부푼 행복과 가슴 아픈 고민이 되며, 다가올 이에게는 환상과 설렘을 선사하는 첫사랑은, 그래서 언제나 누구에게나 사랑받는 주제다. 이 첫사랑을 주제로 다룬, 첫사랑의 흔적만큼이나 오래도록 독자들의 뇌리와 가슴에 새겨질 소설, 『플립』은 괴짜 소녀 줄리와 외모만 번듯한 소심 소년 브라이스, 이 두 주인공이 마치 일기를 쓰듯 각자의 속마음을 번갈아 서술하는 1인칭 시점으로 이야기가 진행된다. 그래서 첫사랑의 진통을, 그것이 진통인지조차 모른 채 겪는 소년 소녀의 다양한 감정과 심리 묘사가 더욱 진정성 있게 그려진다.`
  },
];

export default function Page() {
  const scrollRef = useRef(null);
  const [likedBooks, setLikedBooks] = useState(() => JSON.parse(localStorage.getItem('likedBooks')) || []);
  const [selectedBook, setSelectedBook] = useState(null);

  /* ── 수평 스크롤 ── */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  /* ♥ 로컬 저장 */
  useEffect(() => localStorage.setItem('likedBooks', JSON.stringify(likedBooks)), [likedBooks]);

  const toggleLike = (book) =>
    setLikedBooks((prev) =>
      prev.some((b) => b.id === book.id) ? prev.filter((b) => b.id !== book.id) : [...prev, book]
    );

  return (
    <main className="main">
      {/* ---- 책 카드 리스트 ---- */}
      <div className="card-container" ref={scrollRef}>
        {initialBooks.map((book) => {
          const liked = likedBooks.some((b) => b.id === book.id);
          return (
            <div key={book.id} className="book-card" onClick={() => setSelectedBook(book)}>
              <div className="book-image">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="book-info">
                <span className="book-title">{book.title} - {book.author}</span>
                <button
                  className="like-button"
                  onClick={(e) => { e.stopPropagation(); toggleLike(book); }}
                >
                  {liked ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ---- 모달 ---- */}
      {selectedBook && (
        <div className="modal-backdrop" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBook(null)}>✕</button>

            <div className="modal-body">
              {/* 왼쪽 이미지 */}
              <div className="modal-img">
                <img src={selectedBook.image} alt={selectedBook.title} />
              </div>

              {/* 오른쪽 텍스트 */}
              <div className="modal-info">
                <h3>{selectedBook.title}</h3>
                <p className="modal-author">{selectedBook.author}</p>
                <p className="modal-desc">
                  {selectedBook.detail || selectedBook.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
