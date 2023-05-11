define("lib/my-lib.service", ["require", "exports", "tslib", "@angular/core", "rxjs"], function (require, exports, tslib_1, core_1, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MyLibService = void 0;
    var MyLibService = /** @class */ (function () {
        function MyLibService() {
            this.graphs = new rxjs_1.Subject();
            this.subscription = new rxjs_1.Subscription();
        }
        MyLibService.prototype.registerWorker = function () {
            if (typeof Worker !== 'undefined') {
                // Create a new
                // this.worker = new Worker(new URL('./worker/app.worker', import.meta.url), {type: 'module'});
                this.worker.onmessage = function (_a) {
                    var data = _a.data;
                    console.log("on Message");
                };
            }
            else {
                // Web Workers are not supported in this environment.
            }
        };
        MyLibService.prototype.export = function () {
            var _a;
            if (!this.worker) {
                // lazy initialize worker & theme subscription.
                this.registerWorker();
            }
            (_a = this.worker) === null || _a === void 0 ? void 0 : _a.postMessage({});
        };
        MyLibService.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
            if (this.worker) {
                this.worker.terminate();
            }
        };
        MyLibService = tslib_1.__decorate([
            (0, core_1.Injectable)({
                providedIn: 'root'
            })
        ], MyLibService);
        return MyLibService;
    }());
    exports.MyLibService = MyLibService;
});
define("lib/my-lib.component", ["require", "exports", "tslib", "@angular/core"], function (require, exports, tslib_2, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        MyLibComponent.prototype.ngOnInit = function () {
        };
        MyLibComponent = tslib_2.__decorate([
            (0, core_2.Component)({
                selector: 'lib-my-lib',
                template: "\n    <p>\n      my-lib works!\n    </p>\n  ",
                styles: []
            })
        ], MyLibComponent);
        return MyLibComponent;
    }());
});
define("lib/my-lib.module", ["require", "exports", "tslib", "@angular/core", "lib/my-lib.component"], function (require, exports, tslib_3, core_3, my_lib_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MyLibModule = void 0;
    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        MyLibModule = tslib_3.__decorate([
            (0, core_3.NgModule)({
                declarations: [
                    my_lib_component_1.MyLibComponent
                ],
                imports: [],
                exports: [
                    my_lib_component_1.MyLibComponent
                ]
            })
        ], MyLibModule);
        return MyLibModule;
    }());
    exports.MyLibModule = MyLibModule;
});
define("lib/graph-util", ["require", "exports", "yfiles"], function (require, exports, yfiles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphWorkerUtil = /** @class */ (function () {
        function GraphWorkerUtil() {
            var hlayout = new yfiles_1.HierarchicLayout();
            var multiPageLayout = new yfiles_1.MultiPageLayout({
                coreLayout: hlayout,
                maximumPageSize: new yfiles_1.YDimension(112, 200),
                createProxyReferenceNodes: false
            });
        }
        GraphWorkerUtil.prototype.setLicense = function (lic) {
        };
        return GraphWorkerUtil;
    }());
});
/*
 * Public API Surface of my-lib
 */
define("public-api", ["require", "exports", "tslib", "lib/my-lib.service", "lib/my-lib.component", "lib/my-lib.module", "lib/graph-util"], function (require, exports, tslib_4, my_lib_service_1, my_lib_component_2, my_lib_module_1, graph_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    tslib_4.__exportStar(my_lib_service_1, exports);
    tslib_4.__exportStar(my_lib_component_2, exports);
    tslib_4.__exportStar(my_lib_module_1, exports);
    tslib_4.__exportStar(graph_util_1, exports);
});
/// <reference lib="webworker" />
// const HierarchicLayout = require("yfiles/yfiles");
define("lib/worker/app.worker", ["require", "exports", "yfiles"], function (require, exports, yfiles_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    addEventListener('message', function (_a) {
        var data = _a.data;
        //  const hlayout = new HierarchicLayout();
        // //const graphUtil = new GraphWorkerUtil();
        // const multiPageLayout = new MultiPageLayout({
        //   coreLayout: hlayout,
        //   maximumPageSize: new YDimension(112, 200),
        //   createProxyReferenceNodes: false
        // });
        var response = "worker response to ".concat(yfiles_2.HierarchicLayout);
        postMessage({});
    });
});
//# sourceMappingURL=bundle.js.map