import { Children } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({ Children, leftWeight = 1, rightWeight = 3 }) => {
  const [left, right] = Children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
