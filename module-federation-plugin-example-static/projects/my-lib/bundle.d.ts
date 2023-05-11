/// <reference lib="webworker" />
declare module "lib/my-lib.service" {
    import { OnDestroy } from '@angular/core';
    import { Subject, Subscription } from 'rxjs';
    export class MyLibService implements OnDestroy {
        worker: Worker | undefined;
        graphs: Subject<[]>;
        subscription: Subscription;
        constructor();
        registerWorker(): void;
        export(): void;
        ngOnDestroy(): void;
    }
}
declare module "lib/my-lib.component" { }
declare module "lib/my-lib.module" {
    export class MyLibModule {
    }
}
declare module "lib/graph-util" {
    export interface PaginateGraphMessage {
        graphString: string;
        maxPageHeight: number;
        maxPageWidth: number;
        license: Record<string, unknown>;
    }
}
declare module "public-api" {
    export * from "lib/my-lib.service";
    export * from "lib/my-lib.component";
    export * from "lib/my-lib.module";
    export * from "lib/graph-util";
}
declare module "lib/worker/app.worker" { }
