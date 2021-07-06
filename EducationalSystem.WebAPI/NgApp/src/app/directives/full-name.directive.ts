import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[fullname]',
})
export class FullNameDirective {

    private showFullName: boolean;

    constructor(private viewContainer: ViewContainerRef,
                private templateRef: TemplateRef<any>) {
    }

    @Input()
    set fullname(condition) {
        this.showFullName = condition;
        this.updateView();
    }

    private updateView(): void {
        this.showFullName ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
    }
}
