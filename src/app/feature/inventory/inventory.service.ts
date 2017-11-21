import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Image } from './inventory.interface';

@Injectable()
export class InventoryService {

  imageCollectionRef: AngularFirestoreCollection<Image>;
  image$: Observable<Image[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.imageCollectionRef = this.afs.collection<Image>('inventory' );
    this.image$ = this.imageCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Image;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getData(): Observable<Image[]> {
    return this.image$;
  }

  create(config: any) {
    const image: Image = {
      newId: config.newId,
      oldId: config.oldId,
      category: config.category,
      name: config.name,
      fileName: config.fileName,
      price: config.price,
      caption: config.caption,
      credit: config.credit,
      tags: config.tags,
      archive: config.archive
    };
    return this.imageCollectionRef.add(image);
  }

  updateImage(image: Image) {
    this.imageCollectionRef.doc(image.id).update({
      newId: image.newId,
      oldId: image.oldId,
      category: image.category,
      name: image.name,
      fileName: image.fileName,
      price: image.price,
      caption: image.caption,
      credit: image.credit,
      tags: image.tags,
      archive: image.archive
    });
  }

  deleteImage(image: Image) {
    this.imageCollectionRef.doc(image.id).delete();
  }
}
