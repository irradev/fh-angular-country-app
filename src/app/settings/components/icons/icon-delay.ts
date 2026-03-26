import { Component, input } from "@angular/core";

@Component({
    selector: 'icon-delay',
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h12v6l-4 4l4 4v6H6v-6l4-4l-4-4zm10 14.5l-4-4l-4 4V20h8zm-4-5l4-4V4H8v3.5zM10 6h4v.75l-2 2l-2-2z"/></svg>
    `
})
export class IconDelay {

    public size = input<number>(24);

}