/// <reference path="ControllerBase.ts" />

namespace Controllers {
    export class LayoutController extends ControllerBase<Application> {
        private _mainContainer: HTMLDivElement;
        private _mainView: HTMLElement;
        private _sidebarContainer: HTMLDivElement;
        private _sidebarView: HTMLElement;

        constructor(parent: Application) {
            super(parent);
            $layout = this;

            this._mainContainer = document.querySelector('#main') as HTMLDivElement;
            this._sidebarContainer = document.querySelector('#sidebar > div') as HTMLDivElement;

            this.clearMain();
            this.clearSidebar();
        }

        public showLightbox(view: HTMLElement) {
            Views.LightboxContainer.showLightbox(view);
        }

        public hideLightbox(view: HTMLElement) {
            Views.LightboxContainer.hideLightbox(view);
        }

        public showMain(view: HTMLElement) {
            this.clearMain();

            this._mainView = view;
            this._mainContainer.appendChild(view);
        }

        public clearMain() {
            $(this._mainContainer).children().detach();
            this._mainView = null;
        }

        public showSidebar(view: HTMLElement) {
            this.clearSidebar();

            this._sidebarView = view;
            this._sidebarContainer.appendChild(view);
        }

        public clearSidebar() {
            $(this._sidebarContainer).children().detach();
            this._sidebarView = null;
        }
    }
}

declare var $layout: Controllers.LayoutController;