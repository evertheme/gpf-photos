import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

import { Image } from './inventory.interface';

export class Upload {

  $key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}

@Injectable()
export class InventoryService {

  imageCollectionRef: AngularFirestoreCollection<Image>;
  image$: Observable<Image[]>;
  basePath: string;

  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase
  ) {
    this.basePath = 'inventory';
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

  // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
        return undefined;
      }
    );
  }

  writeFile(file) {
    console.log('writeFile: ', file);
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

}
