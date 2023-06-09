import { Container } from "./styles";
import { Sides } from "../../types/Sides";

type Props = {
  x: number;
  y: number;
  side: Sides;
}

export const Character = ({x,y, side}: Props) =>{
  const size = 30;
  const sides={
    down:0,
    left: -30,
    right: -60,
    up: -90
  }

  return(
    <Container left={x * size} top={y* size} size={size} sidePos={sides[side] ?? 0}>
    </Container>
  )
}