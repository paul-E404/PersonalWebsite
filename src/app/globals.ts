import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

    middleScreenWidthReached: boolean = false;
    legalNoticeShown: boolean = false;

    checkForMiddleScreenWidth() {
        if (window.innerWidth <= 1200) {
            this.middleScreenWidthReached = true;
        }
    }

    closeDialog() {
        document.body.style.overflow = "auto";
        this.legalNoticeShown = false;
    }

}