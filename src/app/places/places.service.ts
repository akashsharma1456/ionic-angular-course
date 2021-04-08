import { Injectable } from '@angular/core';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Sahil Hotel',
      'In the heart of city Roopnagar.',
      'https://r1imghtlak.mmtcdn.com/c55df05a7dfd11e78bf8025f77df004f.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg',
      149.99
    ),
    new Place(
      'p2',
      'Vikrant Hotel',
      'A romantic place in city Roopnagar.',
      'https://media-cdn.tripadvisor.com/media/photo-o/01/e9/1f/54/kikar-lodge.jpg',
      199.99
    ),
    new Place(
      'p3',
      'Taj Hotel',
      'A lovely place in city Roopnagar.',
      'https://media-cdn.tripadvisor.com/media/photo-w/16/62/2c/68/fun-n-celebration.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }x
  constructor() { }
  getPlace(id: string) {
    return {...this._places.find(
      p => p.id === id)};
  }
}
