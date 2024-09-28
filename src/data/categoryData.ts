import { CategoryData } from '../types/category.type';

const categoryData: CategoryData = {
  '처음 만났어요': [
    { question: '학교 / 학년 / 학과', content: 'ex. 무슨 학과야? 몇 학년이야?' },
    { question: '나이 / 생일', content: 'ex. 몇 살이세요? 생일 언제야?' },
    { question: 'MBTI', content: 'ex. MBTI가 뭐야?'},
    { question: '사는 곳', content: 'ex. 어디 살아?\n기숙사 / 자취 / 통학'}
  ],
  '시간 조율': [
    { question: '회의 시간', content: 'ex. 언제 시간 돼?' },
    { question: '시간표', content: 'ex. 공강이 언제야?' },
    { question: '학교 생활', content: 'ex. 몇학점 들어? 무슨 수업 들어? 동아리 활동 하는 거 있어?' },
  ],
  '스몰토크': [
    { question: '동아리 활동', content: 'ex. 무슨 동아리 해?' },
    { question: 'SNS', content: 'ex. 인스타 해? 맞팔하자!' },
    { question: '가족 구성', content: 'ex. 형제 자매 있어?' },
    { question: '연애', content: 'ex. 지금 연애 해? 어떻게 만났어?' },
    { question: '연애', content: '연하, 동갑, 연상 중에 뭐가 좋아?' },
    { question: '이상형', content: 'ex. 이상형이 어떻게 돼? 좋아하는 스타일이 뭐야?' },
    { question: '영화 / 드라마', content: 'ex. 요즘 보는 드라마 있어? 무슨 영화 좋아해?' },
    { question: '좋아하는 유튜브', content: 'ex. 유튜브 자주 봐? 좋아하는 채널 추천해줘' },
    { question: '좋아하는 음식', content: 'ex. 제일 좋아하는 음식이 뭐야?' },
    { question: '날씨 / 계절', content: 'ex. 오늘 날씨 너무 좋지 않아? 좋아하는 계절이 뭐야?' },
    { question: '관심사', content: 'ex. 요즘 관심사가 뭐야?' },
    { question: '취미', content: 'ex. 쉬는 날에 주로 뭐해? 취미 있어?' }
  ]
};

export default categoryData;