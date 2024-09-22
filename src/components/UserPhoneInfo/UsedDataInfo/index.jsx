import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { Container, ProgressbarWrapper, Wrapper } from './UsedDataInfo.style';
import 'react-circular-progressbar/dist/styles.css';
import * as S from './UsedDataInfo.style';

const PATH_COLOR = '#ff017c'; // 차트에 표시될 선
const TRAIL_COLOR = '#fbd3f0'; // 차트의 배경선

export default function UsedDataInfo({ data }) {
  return (
    <Container>
      <Wrapper>
        <S.h4>데이터</S.h4>
        <S.p size={1.2}>
          {data?.month} 잔여량 <S.span size={1.2}>&#40;남은기간 {data?.remainDay}일&#41;</S.span>
        </S.p>
        <S.p size={1.4}>
          {data?.remainData}GB <S.span size={1.4}>/ {data?.usingData.toFixed(2)}GB</S.span>
        </S.p>
      </Wrapper>
      <ProgressbarWrapper>
        <CircularProgressbarWithChildren
          value={(data?.remainData / data?.usingData) * 100}
          className="progressbar"
          strokeWidth={10}
          styles={buildStyles({
            pathColor: PATH_COLOR,
            trailColor: TRAIL_COLOR,
            textColor: '#ff017c',
          })}
        >
          <S.chartText>
            {Math.round(data?.remainData / data?.usingData * 100 )}
            <S.chartSmallText>%</S.chartSmallText>
          </S.chartText>
        </CircularProgressbarWithChildren>
      </ProgressbarWrapper>
    </Container>
  );
}
