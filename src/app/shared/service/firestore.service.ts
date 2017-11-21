import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Image {
  id?: string;
  oldId?: string;
  dateCreated: number,
  category: string;
  fileName: string;
  width: number;
  height: number;
  name?: string;
  price?: number;
  priceDescription?: string;
  credit?: string;
  tags?: string[];
  flowers?: string[];
  colors?: string[];
  seasons?: string[];
  types?: string[];
}

@Injectable()
export class FirestoreService {

  imageCollection: AngularFirestoreCollection<Image>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.imageCollection = this.afs.collection('inventory' );
  }

  getData(): Observable<Image[]> {
    return this.imageCollection.valueChanges();
  }

  getSnapshot() {
    return this.imageCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        return { id: a.payload.doc.id, ...a.payload.doc.data() }
      })
    })
  }

  getImage(id) {
    return this.afs.doc<Image>('inventory/' + id);
  }

  create(config: any) {
    const image: Image = {
      id: config.id,
      oldId: config.oldId,
      dateCreated: config.dateCreated,
      category: config.category,
      fileName: config.fileName,
      width: config.width,
      height: config.height,
      name: config.name,
      price: config,
      priceDescription: config.priceDescription,
      credit: config.credit,
      tags: config.tags,
      flowers: config.flowers,
      colors: config.colors,
      seasons: config.seasons,
      types: config.types
    };
    return this.imageCollection.add(image);
  }

  updateImage(id, data) {
    return this.getImage(id).update(data)
  }

  deleteImage(id) {
    return this.getImage(id).delete()
  }
}
