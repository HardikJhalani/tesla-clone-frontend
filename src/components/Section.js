import styled from "styled-components";
import { Fade } from "react-reveal";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImage,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      {/* heading  */}
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      {/* button group  */}
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 36px;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 45, 0.95);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 460px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
`;
const RightButton = styled(LeftButton)`
  color: black;
  background-color: rgba(255, 255, 255);
  opacity: 0.8;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 2s;
  overflow-x: hidden;
  cursor: pointer;
`;
