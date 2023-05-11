// import {
//     HierarchicLayout, MultiPageLayout, YDimension
//    } from 'yfiles';

export interface PaginateGraphMessage {
    graphString: string;
    maxPageHeight: number;
    maxPageWidth: number;
    license: Record<string, unknown>;
  }
  
  export class GraphWorkerUtil{
    constructor(){
      //  const hlayout = new HierarchicLayout();

        // const multiPageLayout = new MultiPageLayout({
        //   coreLayout: hlayout,
        //   maximumPageSize: new YDimension(112, 200),
        //   createProxyReferenceNodes: false
        // });
    }

    setLicense(lic: string){
  
    }
  }