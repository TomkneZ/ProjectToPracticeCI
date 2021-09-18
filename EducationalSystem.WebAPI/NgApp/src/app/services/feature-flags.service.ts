import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { get, has } from "lodash";
import { FeatureConfig } from "../models/feature-config";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FeatureFlagsService {
  public config: FeatureConfig;
  private getFeatureFlagsUrl = "Features";  

  constructor(private http: HttpClient) {}

  public async load(): Promise<void> {
    console.log('in FeatureFlagsService.load()');
    this.config = <FeatureConfig>await this.getFeatureFlags().toPromise();
    console.log('got FeatureConfig: ' + this.config["no-auth"]);
  }

  public getFeatureFlags(): Observable<FeatureConfig> {
    return this.http.get<FeatureConfig>(`${environment.apiUrl}${this.getFeatureFlagsUrl}`);
  }

  isFeatureEnabled(key: string) {
    if (this.config && has(this.config, key)) {
      return get(this.config, key, false);
    }
   return false;
  }
}
