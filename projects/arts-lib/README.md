# ButtonAngularLib

## <g-emoji class="g-emoji" alias="open_file_folder" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c2.png">📂</g-emoji> | Installation

<pre>npm i button-angular-lib</pre>

## <g-emoji class="g-emoji" alias="scroll" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dc.png">📜</g-emoji> | Setup

```html
ButtonAppearance = 'filled' | 'outline' | 'ghost' | 'hero';
ComponentShape = 'rectangle' | 'semi-round' | 'round';
ComponentSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';
ComponentStatus = 'basic' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'control';
```

## <g-emoji class="g-emoji" alias="writing_hand" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/270d.png">✍</g-emoji> | Examples

```html
<button libButton status="info" size="medium" (click)="clickFunction($event)" disabled>Hello</button>
<button libButton status="success" size="large" (click)="clickFunction($event)">Hello</button>
<button libButton status="basic" size="small" (click)="clickFunction($event)">Hello</button>
<button libButton status="danger" size="giant" (click)="clickFunction($event)" disabled>Hello</button>
<button libButton status="primary" size="tiny" (click)="clickFunction($event)">Hello</button>
<button libButton status="control" size="medium" (click)="clickFunction($event)">Hello</button>
```
