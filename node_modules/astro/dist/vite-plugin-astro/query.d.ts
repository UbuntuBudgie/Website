interface AstroQuery {
    astro?: boolean;
    src?: boolean;
    type?: 'script' | 'template' | 'style' | 'custom';
    index?: number;
    lang?: string;
    raw?: boolean;
    inline?: boolean;
    container?: boolean;
}
interface ParsedRequestResult {
    filename: string;
    query: AstroQuery;
}
export declare function parseAstroRequest(id: string): ParsedRequestResult;
export {};
