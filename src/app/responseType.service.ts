import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { ResponseType } from './responseType.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ResponseTypeService {

  constructor(private firestore: AngularFirestore) { }

  getresponseTypes() {
    return this.firestore.collection('responseTypes', ref => ref.orderBy('responseTypeName', 'desc')).snapshotChanges();
  }

  addResponse(responseType: ResponseType) {
    this.firestore.doc('responseTypes/' + responseType.id).update({
      numResponses: firebase.firestore.FieldValue.increment(1)
    });
  }

  subtractResponse(responseType: ResponseType) {
    if (responseType.numResponses > 0) {
      this.firestore.doc('responseTypes/' + responseType.id).update({
        numResponses: firebase.firestore.FieldValue.increment(-1)
      });
    }
  }

  updateResponseType(responseTypeId: string) {
    this.firestore.doc('responseTypes/' + responseTypeId).update({
      numResponses: firebase.firestore.FieldValue.increment(-1)
    });
  }
}
