import { AfterViewInit, Component, ContentChildren, OnInit, QueryList, ReflectiveInjector } from "@angular/core";
import { Subject } from "rxjs";
import { NgxStepComponent } from "./ngx-step.component";


@Component({
  selector: 'step-content',
  template: '<ng-content></ng-content>'
})
export class NgxStepContentComponent implements OnInit, AfterViewInit {

  @ContentChildren(NgxStepComponent)
  private steps: QueryList<NgxStepComponent>;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.steps.forEach((step, i) => {
      if (i == 0) step.show();
      step.previousStep = this.navigationStepByPosition(step, i - 1);
      step.nextStep = this.navigationStepByPosition(step, i + 1);
      step.navigateToStep = this.navigationStepByName(step);
      this.createStepToken(step);
    });
  }

  private createStepToken(step: NgxStepComponent) {
    ReflectiveInjector.resolveAndCreate([
      { provide: NgxStepComponent, useValue: step }
    ]);
  }

  private navigationStepByPosition(step: NgxStepComponent, index: number): Subject<any> {
    if (index < 0 || index >= this.steps.length) return null;

    let changed = new Subject<any>();
    changed.subscribe((data) => this.stepShowByIndex(step, index, data));
    return changed;
  }

  private navigationStepByName(step: NgxStepComponent): Subject<any> {
    let changed = new Subject<{name: string, data?: any}>();
    changed.subscribe(cfg => this.stepShowByName(step, cfg.name, cfg.data));
    return changed;
  }

  private stepShowByIndex(step: NgxStepComponent, indexToShow: number, data?: any) {
    let stepShown = this.steps.find((step, i) => i == indexToShow);
    this.navigateToStep(step, stepShown, data);
  }

  private stepShowByName(step: NgxStepComponent, name: string, data?: any) {
    let stepShown = this.steps.find((step) => step.stepName == name);
    this.navigateToStep(step, stepShown, data);
  }

  private navigateToStep(fromStep: NgxStepComponent, toStep: NgxStepComponent, data?: any){
    toStep.data = data;
    fromStep.stepChanged.next(toStep);
  }

  get(stepName: string): NgxStepComponent {
    return this.steps.find(step => step.stepName == stepName);
  }

}
