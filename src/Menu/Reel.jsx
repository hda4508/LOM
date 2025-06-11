// src/Menu/Reel.jsx
import React, { useState } from 'react';
import '../styles/Reel.css';
import Reel1 from '../img/Reel1.jpg';
import Reel2 from '../img/Reel2.jpg';
import Reel3 from '../img/Reel3.jpg';
import Reel4 from '../img/Reel4.jpg';
import Reel5 from '../img/Reel5.jpg';
import Reel6 from '../img/Reel6.jpg';
import Reel7 from '../img/Reel7.jpg';

const films = [
  {
    id: 1,
    title: '우아한 거짓말',
    poster: Reel1,
    director: '이한',
    genre: '영화',
    date: '2014.03.13',
    rating: '12세 이상 관람가',
    category: '학원, 휴먼, 사회고발',
    country: '대한민국',
    duration: '117분',
    synopsis: '마트에서 일하며 생계를 책임지고 있지만 언제나 주책 맞을 정도로 쿨하고 당당한 엄마 현숙. 남의 일엔 관심 없고, 가족 일에도 무덤덤한 시크한 성격의 언니 만지. 그런 엄마와 언니에게 언제나 착하고 살갑던 막내 천지가 어느 날 갑자기 세상을 떠난다. 세 가족 중 가장 밝고 웃음 많던 막내의 갑작스런 죽음에 현숙과 만지는 당황하지만, 씩씩한 현숙은 만지와 함께 천지가 없는 삶에 익숙해 지기 위해 애쓴다. 그러던 어느 날, 우연히 천지의 친구들을 만난 만지는 가족들이 몰랐던 숨겨진 다른 이야기, 그리고 그 중심에 천지와 가장 절친했던 화연이 있음을 알게 된다. 아무 말 없이 떠난 동생의 비밀을 찾던 만지는 빨간 털실 속 천지가 남기고 간 메시지가 있음을 알게 되는데…',
    quote: '그 애가 죽었어요. 근데 아무도 그 애가 왜 죽었는지 몰라요.'
  },
  {
    id: 2,
    title: '82년생 김지영',
    poster: Reel2,
    director: '김도영',
    genre: '영화',
    date: '2019.10.23',
    rating: '12세 이상 관람가',
    category: '드라마',
    country: '대한민국',
    duration: '118분',
    synopsis: '1982년 봄에 태어나 누군가의 딸이자 아내, 동료이자 엄마로 2019년 오늘을 살아가는 ‘지영’. 때론 어딘가 갇힌 듯 답답하기도 하지만 남편 ‘대현’과 사랑스러운 딸, 그리고 자주 만나지 못해도 항상 든든한 가족들이 ‘지영’에겐 큰 힘이다. 하지만 언젠가부터 마치 다른 사람이 된 것처럼 말하는 ‘지영’. ‘대현’은 아내가 상처 입을까 두려워 그 사실을 털어놓지 못하고 ‘지영’은 이런 ‘대현’에게 언제나 “괜찮다”라며 웃어 보이기만 하는데… 모두가 알지만 아무도 몰랐던 당신과 나의 이야기',
    quote: '저는요, 그냥... 저로 살고 싶었어요.'
  },
  {
    id: 3,
    title: '러브레터',
    poster: Reel3,
    director: '이와이 슌지',
    genre: '영화',
    date: '1999.11.20',
    rating: '전체 관람가',
    category: '멜로, 로맨스',
    country: '일본',
    duration: '117분',
    synopsis: '중학교 시절, 같은 반에 같은 이름을 가진 남자애가 있었습니다. 그로부터 10년이 지난 어느 날, 잊고 살았던 그 남자애의 연인에게서 편지가 왔습니다. "잘 지내고 있나요? 저는 잘 지내고 있습니다." 무심코 편지에 답장을 쓸 때만 해도 저는 몰랐습니다. 가려졌던 제 기억 속 첫사랑이 누구였는지 깨닫게 될 줄은... "아직도 마음속 그리움이 남아 있습니까?"',
    quote: '오겡키데스카...? 와타시와 겐키데스...',
  },
  {
    id: 4,
    title: '콜 미 바이 유어 네임',
    poster: Reel4,
    director: '루카 구아다니노',
    genre: '영화',
    date: '2018.03.22',
    rating: '청소년 관람 불가',
    category: '멜로, 로맨스',
    country: '이탈리아, 프랑스, 브라질, 미국',
    duration: '132분',
    synopsis: '1983년 이탈리아, 열 일곱 소년 Elio는 가족 별장에서 여름이 끝나기만을 기다리고 있다. 어느 오후, 스물 넷 청년 Oliver가 아버지의 보조 연구원으로 찾아오면서 모든 날들이 특별해지는데...',
    quote: 'Call me by your name and I’ll call you by mine.',
  },
  {
    id: 5,
    title: '노트북',
    poster: Reel5,
    director: '닉 카사베츠',
    genre: '영화',
    date: '2004.11.26',
    rating: '15세 이상 관람가',
    category: '멜로, 로맨스',
    country: '미국',
    duration: '123분',
    synopsis: '노아는 여름 휴가로 시골에 온 앨리에게 한 눈에 반한다. 하지만 가정 환경 차이로 이별하게 되고, 시간이 흘러 다시 만나며 기억을 되찾아가는 이야기.',
    quote: 'If you’re a bird, I’m a bird.',
  },
  {
    id: 6,
    title: '플립',
    poster: Reel6,
    director: '롭 라이너',
    genre: '영화',
    date: '2017.07.12',
    rating: '12세 이상 관람가',
    category: '멜로, 로맨스',
    country: '미국',
    duration: '90분',
    synopsis: '줄리는 옆집 소년 브라이스를 짝사랑하지만 마음을 몰라주는 그에게 실망하게 되고, 결국 브라이스는 진심을 깨닫게 되는 성장 이야기.',
    quote: 'Some of us get dipped in flat, some in satin, some in gloss...',
  },
  {
    id: 7,
    title: '파과',
    poster: Reel7,
    director: '이란희',
    genre: '영화',
    date: '2025.04.30',
    rating: '15세 이상 관람가',
    category: '액션, 미스터리',
    country: '대한민국',
    duration: '122분',
    synopsis: '바퀴벌레 같은 인간들을 제거하며 살아온 전설의 킬러 ‘조각’. 어느 날 우연히 만난 수의사 가족과의 관계를 통해 감정의 변화를 겪고, 후계자 투우와 갈등하며 인생 마지막 전투를 맞이하게 되는 이야기.',
    quote: '죽음은 가까워지고 있지만, 그 죽음은 나에게서 멀어져 있지 않다.',
  }
];

function Reel() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <main className="reel-page">
      {films.map((film) => (
        <div
          className="reel-detail"
          key={film.id}
          onClick={() => setSelectedFilm(film)}
        >
          <div className="reel-header">
            <h2>{film.title}</h2>
          </div>

          <div className="reel-body">
            <div className="reel-image">
              <img src={film.poster} alt={`${film.title} 포스터`} />
            </div>

            <div className="reel-info">
              <p><strong>Director:</strong> {film.director} | <strong>Genre:</strong> {film.genre}</p>
              <p>
                {film.date}<br />
                {film.rating}<br />
                {film.category}<br />
                {film.country}<br />
                {film.duration}
              </p>
              <p className="synopsis">{film.synopsis}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedFilm && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedFilm(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedFilm(null)}
            >
              ✕
            </button>

            {/* 2단 레이아웃 */}
            <div className="modal-body">
              <div className="modal-img">
                <img src={selectedFilm.poster} alt={selectedFilm.title} />
              </div>

              <div className="modal-info">
                <h3>{selectedFilm.title}</h3>
                <p className="modal-author">{selectedFilm.director}</p>
                <p className="modal-desc">“{selectedFilm.quote}”</p>
                <p className="modal-date">{selectedFilm.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}


    </main>
  );
}

export default Reel;