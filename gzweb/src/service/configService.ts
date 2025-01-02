import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: any;

  constructor(private client: HttpClient) {}

  loadConfig() {
    return lastValueFrom(this.client.get('./assets/config/config.json'))
      .then((config) => (this.config = config))
      .catch((e) => console.error(e));
  }

  get(key: any): any {
    return this.config[key]
  }
}
