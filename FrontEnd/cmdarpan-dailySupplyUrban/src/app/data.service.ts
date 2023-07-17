import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  fetchData(uID:string) {
    return axios.post('http://localhost:3000/districts/fetch/'+uID)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }

  fetchAll() {
    return axios.post('http://localhost:3000/districts/fetchAll/')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }
}
