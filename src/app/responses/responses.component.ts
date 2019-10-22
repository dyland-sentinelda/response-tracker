import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/response.service';
import { Response } from '../response.model';
import { ResponseTypeService } from 'src/app/responseType.service';
import { ResponseType } from '../responseType.model';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  responses: Response[];
  strings: string[];
  responseType: ResponseType;
  responseTypeName: string;
  displayedColumns: string[] = ['responseType', 'subject', 'timeStampString', 'closeStampString', 'timeDifference', 'delete'];
  constructor(private responseService: ResponseService,
              private responseTypeService: ResponseTypeService) { }

  ngOnInit() {
    this.responseService.getResponses().subscribe(data => {
      this.responses = data.map(i => {
        return {
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        } as Response;
      });
    });
  }

  close(response: Response) {
    this.responseService.closeResponse(response);
  }

  update(response: Response) {
    this.responseService.updateResponse(response);
  }

  addResponse(response: Response) {
    this.responseService.addResponse(response);
  }

  delete(response: Response) {
    this.responseService.deleteResponse(response.id);
    this.responseTypeService.updateResponseType(response.responseTypeId);
  }
}
