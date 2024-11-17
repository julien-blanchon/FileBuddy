import type { BoundingBox } from "./Overlay/types";

export type PdfContentChunk = {
    id: number;
    bbox: BoundingBox
    content: string;
    page: number;
};