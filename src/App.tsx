import React, {useEffect} from 'react';
import {Container, Map} from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter();
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  
  }, [])

  //e.code retorna a tecla apertada
  const handleKeyDown = (e: KeyboardEvent) =>{
    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft()
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()

      break;
    }
  }

  return (
    <Container>
      <Map>
        <Character x={char.x} y={char.y} side={char.side}/>
      </Map>
    </Container>
  );
}

export default App;