import { Directive, ElementRef, Injectable, Input, OnInit, Renderer2, QueryList } from "@angular/core";
import { Subject } from "rxjs";

@Directive({
  selector: '[step]'
})
@Injectable()
export class NgxStepComponent implements OnInit {

  @Input("step")
  stepName: any;

  private _data: any;
  private _currentStep: boolean;
  private _stepChanged?: Subject<NgxStepComponent> = new Subject();

  stepShow: Subject<any> = new Subject();
  nextStep: Subject<any> = new Subject();
  previousStep: Subject<any> = new Subject();
  navigateToStep: Subject<any> = new Subject();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.hide();

    this._stepChanged.subscribe(step => {
      this.hide();
      step.show();
    });
  }

  set data(value: any) {
    this._data = value;
  }

  get stepChanged(): Subject<NgxStepComponent> {
    return this._stepChanged;
  }

  get isCurrentStep(): boolean {
    return this._currentStep;
  }

  private hide() {
    this._currentStep = false;
    this.renderer.setStyle(this.elementRef.nativeElement, "display", "none");
  }

  show() {
    this._currentStep = true;
    this.renderer.removeStyle(this.elementRef.nativeElement, "display");
    this.stepShow.next(this._data);
  }
}
