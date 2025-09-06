import { Response } from "express";
interface goodBye {
    query: {
        name: string;
    };
}
export declare const sayGoodBye: (req: goodBye, res: Response) => Response<any, Record<string, any>>;
export {};
//# sourceMappingURL=goodBy.Controls.d.ts.map