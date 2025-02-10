import { Component, inject } from "@angular/core";
import { MenuItem } from "primeng/api";
import { PanelMenuModule } from "primeng/panelmenu";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-panel-menu",
  standalone: true,
  imports: [PanelMenuModule],
  template: ` <p-panelMenu [model]="items" styleClass="w-full" /> `,
})
export class PanelMenuComponent {
  private authService = inject(AuthService);
  public readonly items: MenuItem[] = [
    {
      label: "Accueil",
      icon: "pi pi-home",
      routerLink: ["/home"],
    },
    {
      label: "Produits",
      icon: "pi pi-barcode",
      routerLink: ["/products/list"],
    },
    {
      label: "Login",
      icon: "pi pi-sign-in",
      routerLink: ["/login/"],
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => this.authService.logout(),
    },
  ];
}
