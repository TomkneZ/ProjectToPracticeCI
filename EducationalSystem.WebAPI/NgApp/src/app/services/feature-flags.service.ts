import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { get, has } from "lodash";
import { FeatureConfig } from "../models/feature-config";
import { AppConfiguration } from "read-appsettings-json";

@Injectable({
  providedIn: "root"
})
export class FeatureFlagsService {
  config: FeatureConfig = null;
  configUrl = ``; // <-- URL for getting the config

  constructor(private http: HttpClient) {}

  loadConfig() {
    let value =AppConfiguration.Setting().noauth;
    this.config = {
      "no-auth": value,
      "feature": false
    };
  }

  isFeatureEnabled(key: string) {
    if (this.config && has(this.config, key)) {
      return get(this.config, key, false);
    }
   return false;
  }
}
