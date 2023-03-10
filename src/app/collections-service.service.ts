import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CollectionsServiceService {

  private collectionsKey = 'movie-collections';
  private currentID:number=0;
  constructor() { }

  getCollections(): any[] {
    const collectionsString = localStorage.getItem(this.collectionsKey);
    return collectionsString ? JSON.parse(collectionsString) : [];
  }
  getCollection(id: number): any {
    const collections = this.getCollections();
    return collections.find(collection => collection.id === id);
  }
  

  saveCollections(collections: any[]) {
    localStorage.setItem(this.collectionsKey, JSON.stringify(collections));
  }

  createCollection(title: string, description: string) {
    const collections = this.getCollections();
    const newCollection = {id:this.currentID, title, description, movies: [] };
    this.currentID++;
    collections.push(newCollection);
    this.saveCollections(collections);
  }

  resetCollections() {
    localStorage.removeItem(this.collectionsKey);
    this.currentID = 0;
  }
  
}
  