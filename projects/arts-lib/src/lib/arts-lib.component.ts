import {
  ChangeDetectorRef,
  Component, ElementRef,
  HostBinding,
  HostListener,
  Input, NgZone,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'button[libButton]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      ::ng-deep button.appearance-filled.size-tiny {
        padding: .3125rem .625rem;
      }

      ::ng-deep button.appearance-filled.size-small {
        padding: .4375rem .875rem;
      }

      ::ng-deep button.appearance-filled.size-medium {
        padding: .6875rem 1.125rem;
      }

      ::ng-deep button.appearance-filled.size-large {
        padding: .8125rem 1.125rem;
      }

      ::ng-deep button.appearance-filled.size-giant {
        padding: .9375rem 1.375rem;
      }

      ::ng-deep button.appearance-filled.status-info {
        background-color: #0095ff;
        border-color: #0095ff;
        color: #ffffff;
      }

      ::ng-deep button.appearance-filled.status-primary {
        background-color: #3366ff;
        border-color: #3366ff;
        color: #ffffff;
      }

      ::ng-deep button.appearance-filled.status-success {
        background-color: #00d68f;
        border-color: #00d68f;
        color: #ffffff;
      }

      ::ng-deep button.appearance-filled.status-warning {
        background-color: #ffaa00;
        border-color: #ffaa00;
        color: #ffffff;
      }

      ::ng-deep button.appearance-filled.status-danger {
        background-color: #ff3d71;
        border-color: #ff3d71;
        color: #ffffff;
      }

      ::ng-deep button.appearance-filled.status-basic {
        background-color: #edf1f7;
        border-color: #edf1f7;
        color: #222b45;
      }

      ::ng-deep button.appearance-filled.status-control {
        background-color: #ffffff;
        border-color: #ffffff;
        color: #222b45;
      }

      ::ng-deep button.shape-rectangle {
        border-radius: 0.25rem;
      }

      ::ng-deep button.appearance-filled {
        border-style: solid;
        border-width: .0625rem;
        text-transform: uppercase;
      }

      ::ng-deep button.appearance-filled.size-tiny {
        font-size: .625rem;
        line-height: 1rem;
      }

      ::ng-deep button.appearance-filled.size-small {
        font-size: .75rem;
        line-height: 1rem;
      }

      ::ng-deep button.size-medium {
        font-size: .875rem;
        line-height: 1rem;
      }

      ::ng-deep button.appearance-filled.size-large {
        font-size: 1rem;
        line-height: 1.25rem;
      }

      ::ng-deep button.appearance-filled.size-giant {
        font-size: 1.125rem;
        line-height: 1.5rem;
      }

      ::ng-deep button.btn-disabled {
        background-color: rgba(143, 155, 129, .24) !important;
        border-color: rgba(143, 155, 129, .24) !important;
        color: rgba(143, 155, 129, .48) !important;
      }
    `
  ]
})
export class ArtsLibComponent  {
  @Input() appearance: ButtonAppearance = 'filled';
  @Input() shape: ComponentShape = 'rectangle';
  @Input() size: ComponentSize = 'medium';
  @Input() status: ComponentOrCustomStatus = 'basic';

  @Input()
  @HostBinding('attr.aria-disabled')
  @HostBinding('class.btn-disabled')
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    if (this.disabled !== convertToBoolProperty(value)) {
      this._disabled = !this.disabled;
      this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
    }
  }
  private _disabled: boolean = false;
  static ngAcceptInputType_disabled: BooleanInput;

  @Input()
  @HostBinding('class.status-primary')
  get primary() {
    return this.status === 'primary';
  }

  @HostBinding('class.status-info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.status-success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.status-warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.status-danger')
  get danger() {
    return this.status === 'danger';
  }

  @HostBinding('class.status-basic')
  get basic() {
    return this.status === 'basic';
  }

  @HostBinding('class.status-control')
  get control() {
    return this.status === 'control';
  }

  @HostBinding('class.size-tiny')
  get tiny() {
    return this.size === 'tiny';
  }

  @HostBinding('class.size-small')
  get small() {
    return this.size === 'small';
  }

  @HostBinding('class.size-medium')
  get medium() {
    return this.size === 'medium';
  }

  @HostBinding('class.size-large')
  get large() {
    return this.size === 'large';
  }

  @HostBinding('class.size-giant')
  get giant() {
    return this.size === 'giant';
  }

  @HostBinding('class.shape-rectangle')
  get rectangle() {
    return this.shape === 'rectangle';
  }

  @HostBinding('class.shape-round')
  get round() {
    return this.shape === 'round';
  }

  @HostBinding('class.shape-semi-round')
  get semiRound() {
    return this.shape === 'semi-round';
  }

  /**
   * Sets `filled` appearance
   */
  @Input()
  @HostBinding('class.appearance-filled')
  get filled(): boolean {
    return this.appearance === 'filled';
  }
  set filled(value: boolean) {
    if (convertToBoolProperty(value)) {
      this.appearance = 'filled';
    }
  }
  static ngAcceptInputType_filled: BooleanInput;

  /**
   * Sets `outline` appearance
   */
  @Input()
  @HostBinding('class.appearance-outline')
  get outline(): boolean {
    return this.appearance === 'outline';
  }
  set outline(value: boolean) {
    if (convertToBoolProperty(value)) {
      this.appearance = 'outline';
    }
  }
  static ngAcceptInputType_outline: BooleanInput;


  @HostListener('click', ['$event'])
  onClick(event: { preventDefault: () => void; stopImmediatePropagation: () => void; }) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  constructor(
    protected renderer: Renderer2,
    protected hostElement: ElementRef<HTMLElement>,
    protected cd: ChangeDetectorRef,
    protected zone: NgZone,
  ) {}
}

export type ButtonAppearance = 'filled' | 'outline' | 'ghost' | 'hero';
export type ComponentShape = 'rectangle' | 'semi-round' | 'round';
export type ComponentSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
export type ComponentStatus = 'basic' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'control';
export type ComponentOrCustomStatus = ComponentStatus | string;
export type NullableInput = string | null | undefined;
export type BooleanInput = boolean | NullableInput;

export function convertToBoolProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();

    return val === 'true' || val === '';
  }

  return !!val;
}
