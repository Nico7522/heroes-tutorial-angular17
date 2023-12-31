import { Injectable, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  debounce,
  debounceTime,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService implements OnInit {
  private _messages: string[] = [];
  private _messages$ = new Subject<string[]>();
  messageList$ = this._messages$.asObservable();
  constructor() {}

  add(message: string) {
    this._messages.push(message);
    this._messages$.next(this._messages);
    setTimeout(() => {
      this.clear();
    }, 2000);
  }

  clear() {
    this._messages = [];
    this._messages$.next(this._messages);
  }

  ngOnInit(): void {}
}
