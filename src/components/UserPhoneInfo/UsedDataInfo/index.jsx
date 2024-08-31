import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { Container, ProgressbarWrapper, Wrapper } from './UsedDataInfo.style';
import 'react-circular-progressbar/dist/styles.css';
import * as S from './UsedDataInfo.style';

const VALUE = 30;
const PATH_COLOR = '#ff017c'; // 차트에 표시될 선
const TRAIL_COLOR = '#fbd3f0'; // 차트의 배경선

export default function UsedDataInfo(props) {
  return (
    <Container>
      <Wrapper>
        <S.h4>데이터</S.h4>
        <S.p size={1.2}>
          8월 잔여량 <S.span size={1.2}>(남은기간 0일)</S.span>
        </S.p>
        <S.p size={1.4}>
          11.61GB <S.span size={1.4}>/ 41.00GB</S.span>
        </S.p>
      </Wrapper>
      <ProgressbarWrapper>
        <CircularProgressbarWithChildren
          value={30}
          className="progressbar"
          strokeWidth={10}
          styles={buildStyles({
            pathColor: PATH_COLOR,
            trailColor: TRAIL_COLOR,
            textColor: '#ff017c',
          })}
        >
          <S.chartText>
            {VALUE}
            <S.chartSmallText>%</S.chartSmallText>
          </S.chartText>
        </CircularProgressbarWithChildren>
      </ProgressbarWrapper>
    </Container>
  );
}
