import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [

    ]
})
export class AppComponent {
    birthday = new Date(1988, 3, 15);
}
