/// <reference lib="webworker" />
 const HierarchicLayout = require("yfiles/yfiles");

 //import { GraphWorkerUtil } from "my-lib";
// import { HierarchicLayout } from "yfiles";

// / import { GraphWorkerUtil } from '../util/graph-util';
// import { encodeSearchString } from 'sharedlib';
addEventListener('message', ({ data }) => {
 //  const hlayout = new HierarchicLayout();
   //const graphUtil = new HierarchicLayout();
  // encodeSearchString();
  // const multiPageLayout = new MultiPageLayout({
  //   coreLayout: hlayout,
  //   maximumPageSize: new YDimension(112, 200),
  //   createProxyReferenceNodes: false
  // });
  const response = `worker response to `;
  postMessage({HierarchicLayout: HierarchicLayout});
});
