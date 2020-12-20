import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject();

  public sendMessage(message: string): void {
    this.subject.next({ text: message });
  }

  public getMessasge(): Observable<any> {
    return this.subject.asObservable();
  }
}
