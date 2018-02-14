import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class HttpRequestService extends HttpClient {

  public test() {
    return this.get(`/toybox/backend/api/hello`);
  }
}

