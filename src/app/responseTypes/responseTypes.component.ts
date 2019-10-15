import { Component, OnInit } from '@angular/core';
import { ResponseTypeService } from 'src/app/responseType.service';
import { ResponseType } from '../responseType.model';
import { ResponseService } from 'src/app/response.service';
import { Response } from '../response.model';

@Component({
  selector: 'app-response-types',
  templateUrl: './responseTypes.component.html',
  styleUrls: ['./responseTypes.component.scss']
})
export class ResponseTypesComponent implements OnInit {

  responseTypes: ResponseType[];
  responses: Response[];
  constructor(private responseTypeService: ResponseTypeService,
              private responseService: ResponseService) { }

  ngOnInit() {
    this.responseTypeService.getresponseTypes().subscribe(data => {
      this.responseTypes = data.map(i => {
        return {
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        } as ResponseType;
      });
    });
  }

  addBeer(responseType: ResponseType, personName: string) {
    this.responseTypeService.addBeer(responseType);
    this.responseService.createResponse(responseType, personName);
  }

  subtractBeer(responseType: ResponseType) {
    this.responseTypeService.subtractBeer(responseType);
  }

  owesBeer(numResponses: number): boolean {
    return numResponses > 0;
  }
}
