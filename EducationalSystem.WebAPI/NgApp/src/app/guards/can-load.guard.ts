import { Injectable } from '@angular/core';
import { FeatureFlagsService } from '../services/feature-flags.service';
import {
    ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot
} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class FeatureGuard implements CanActivate {
    constructor(
        private featureFlagsService: FeatureFlagsService,
        private router: Router
    ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let feature = route.data.feature as string;  
        if (feature) {
            const isEnabled = this.featureFlagsService.isFeatureEnabled(feature);
            if (isEnabled) {
                return true;
            }
        }
        this.router.navigate(['/']);
        return false;
    }
}
