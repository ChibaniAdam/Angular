import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }
  getCount(list:any[],criteria: string, value: any):number{
    let count=0
    for(let i of list){
      if (i[criteria]===value)
        count++
    }
    return count;
  }
}
