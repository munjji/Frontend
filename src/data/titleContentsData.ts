import { titleContents } from 'types/titleContents';

const titleContentsData: { [key: string]: titleContents } = {
  vs: {
    title: '밸런스 게임',
    content:
      'A와 B 둘 중 하나를 선택하고,\n 자유롭게 대화를 나눠보세요.\n 짧은 시간 내에 서로의 취향과\n 성격을 파악할 수 있어요!',
  },
  cloud: {
    title: '스몰토크 주제',
    content:
      '제시된 주제를 통해 가볍고 즐거운 \n이야기를 나누며 서로를 알아가는 \n시간을 가져보세요!',
  },
  game: {
    title: '미니 게임',
    content:
      '간단한 게임으로 어색함을 풀고, \n함께 웃으며 즐겨보세요! \n벌칙을 자유롭게 정해서 진행하면 \n더욱 재미있게 즐길 수 있어요.',
  },
};

export default titleContentsData;
