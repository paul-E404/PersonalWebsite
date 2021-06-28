import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

    middleScreenWidthReached: boolean = false;
    legalNoticeShown: boolean = false;
    dataProtectionShown: boolean = false;

    /**
     * Checks if window screen width is equal or less than 1200px.
     */
    checkForMiddleScreenWidth() {
        if (window.innerWidth <= 1200) {
            this.middleScreenWidthReached = true;
        }
    }

    /**
     * Closes opened dialogs like legal notice or data protection.
     */
    closeDialog() {
        document.body.style.overflow = "auto";
        this.legalNoticeShown = false;
        this.dataProtectionShown = false;
    }

}