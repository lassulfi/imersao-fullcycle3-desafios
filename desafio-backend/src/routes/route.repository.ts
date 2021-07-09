import { Route } from './entities/route.entity';
import { v4 as uuidv4 } from 'uuid';

const randomPosition = () =>
  Number((Math.random() * (10 - 90) + 90).toFixed(4));

export const routes: Route[] = [
  {
    id: uuidv4(),
    title: 'Casa - Trabalho',
    startPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
    endPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
  },
  {
    id: uuidv4(),
    title: 'Casa - Faculdade',
    startPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
    endPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
  },
  {
    id: uuidv4(),
    title: 'Casa - Academia',
    startPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
    endPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
  },
  {
    id: uuidv4(),
    title: 'Trabalho - Academia',
    startPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
    endPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
  },
  {
    id: uuidv4(),
    title: 'Percurso ciclismo',
    startPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
    endPosition: {
      latitude: randomPosition(),
      longitude: randomPosition(),
    },
  },
];
