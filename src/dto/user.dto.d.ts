declare module 'UserTypes' {

  export interface SearchParams {
    pageNo: number;
    pageSize: number;
    keyword: string;
    logTypes: string;
    timestampFrom: string | number;
    timestampTo: string | number;
    interval: string;
    timeZone: string;
  }

  export interface LogItem {
    logTime: string;
    logType: string;
    servername: string;
    logDetail: string;
  }

  export interface Date {
		date: string;
		time: string;
  }
}
