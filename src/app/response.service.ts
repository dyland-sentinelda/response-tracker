import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Response } from './response.model';
import { ResponseType } from './responseType.model';
import * as firebase from 'firebase';
import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private firestore: AngularFirestore) { }

  getResponses() {
    return this.firestore.collection('responses', ref => ref.orderBy('timeStamp', 'desc')).snapshotChanges();
  }

  createResponse(responseType: ResponseType, textInput: string) {
    return this.firestore.collection('responses').add({
      responseType: responseType.responseTypeName,
      responseTypeId: responseType.id,
      timeStamp: firebase.firestore.Timestamp.now().toDate().toString(),
      subject: textInput,
      closeStamp: 'null',
      timeDifference: 0
    });
  }

  closeResponse(response: Response) {
    this.firestore.doc('responses/' + response.id).update({
      closeStamp: firebase.firestore.Timestamp.now().toDate().toString()
    });
  }

  updateTime(response: Response) {
    this.firestore.doc('responses/' + response.id).update({
      // timeDifference: response.timeStamp - response.closeStamp
    });
  }

  updateResponse(response: Response) {
    delete response.id;
    this.firestore.doc('responses/' + response.id).update(response);
  }

  addBeer(response: Response) {
    this.firestore.doc('responses/' + response.id).update({
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  deleteResponse(responseId: string) {
    this.firestore.doc('responses/' + responseId).delete();
  }
}
