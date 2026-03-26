import { Injectable, signal } from "@angular/core";
import { SettingsViews } from "../enums/settings-views";

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modal = signal<boolean>(false);
    private view = signal<SettingsViews | null>(null);

    public modal$ = this.modal.asReadonly();
    public view$ = this.view.asReadonly();

    public openModal(view: SettingsViews): void {
        this.modal.set(true);
        this.view.set(view);
    }

    public closeModal(): void {
        this.modal.set(false);
        this.view.set(null);
    }

}
