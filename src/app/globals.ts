import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

    middleScreenWidthReached: boolean = false;

    checkForMiddleScreenWidth() {
        if (window.innerWidth <= 1200) {
            this.middleScreenWidthReached = true;
        }
    }

}