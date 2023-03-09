import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CollectionsServiceService {

  private collectionsKey = 'movie-collections';

  constructor() { }

  getCollections(): any[] {
    const collectionsString = localStorage.getItem(this.collectionsKey);
    return collectionsString ? JSON.parse(collectionsString) : [];
  }

  saveCollections(collections: any[]) {
    localStorage.setItem(this.collectionsKey, JSON.stringify(collections));
  }

  createCollection(title: string, description: string) {
    const collections = this.getCollections();
    const newCollection = { title, description, movies: [] };
    collections.push(newCollection);
    this.saveCollections(collections);
  }

}
