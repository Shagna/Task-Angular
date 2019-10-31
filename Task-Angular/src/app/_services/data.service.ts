import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private POSTS = "https://jsonplaceholder.typicode.com/posts";
  private TODOS = "https://jsonplaceholder.typicode.com/users/1/todos";
  private API_SERVER = "https://jsonplaceholder.typicode.com/posts/1/comments";

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    // return this.httpClient.get(this.POSTS);
    return this.httpClient.get(this.API_SERVER);
  }
  public sendGetRequest1(){
    return this.httpClient.get(this.POSTS);
    // return this.httpClient.get(this.API_SERVER);
  }
  public sendGetRequest2(){
    return this.httpClient.get(this.TODOS);
    // return this.httpClient.get(this.API_SERVER);
  }
}