interface Position {
    latitude: number;
    longitude: number;
}

export interface Route {
    id: string;
    title: string;
    startPosition: Position;
    endPosition: Position; 
}

export const routes: Route[] = [
    {
        id: '7b9beb48-e6ad-453c-b9bb-dd2017ce2e7f',
        title: 'Casa - Trabalho',
        startPosition: {
            latitude: 14.5984,
            longitude: 56.2945,
        },
        endPosition: {
            latitude: 14.5984,
            longitude: 56.2945,
        }
    },
    {
        id: '7b9beb48-e6ad-453c-b9bb-dd2017ce2e7f',
        title: 'Casa - Academia',
        startPosition: {
            latitude: 14.5984,
            longitude: 56.2945,
        },
        endPosition: {
            latitude: 14.5984,
            longitude: 56.2945,
        }
    },
    {
        id: '7b9beb48-e6ad-453c-b9bb-dd2017ce2e7f',
        title: 'Casa - Faculdade',
        startPosition: {
            latitude: 14.5984,
            longitude: 56.2945,
        },
        endPosition: {
            latitude: 14.5984,
            longitude: 56.2945,
        }
    }
];