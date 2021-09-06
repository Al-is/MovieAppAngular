import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, name: 'Movie1', description: 'Nice!', imageUrl: '1.jpg' },
      { id: 2, name: 'Movie2', description: 'Great!', imageUrl: '2.jpg' },
      { id: 3, name: 'Movie3', description: 'Kötü', imageUrl: '3.jpg' },
      { id: 4, name: 'Movie4', description: 'İdare eder', imageUrl: '4.jpg' },
      { id: 5, name: 'Movie5', description: 'Eh işte', imageUrl: '5.jpg' },
      { id: 6, name: 'Movie6', description: 'Sanane', imageUrl: '6.jpg' },
    ];
    return{movies};
  }

  constructor() {}
}
