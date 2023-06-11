//import { BitmapCoordinatesRenderingScope } from 'fancy-canvas';

import { IPaneRenderer } from './ipane-renderer';

export abstract class BitmapCoordinatesPaneRenderer implements IPaneRenderer {
    public draw(target: any, isHovered: any, hitTestData?: any): void {
        target.useBitmapCoordinateSpace(
            (scope: any) => this._drawImpl(scope, isHovered, hitTestData)
        );
    }

    // public drawBackground(target: CanvasRenderingTarget2D, isHovered: boolean, hitTestData?: unknown): void {
    // 	target.useBitmapCoordinateSpace(
    // 		(scope: BitmapCoordinatesRenderingScope) => this._drawBackgroundImpl(scope, isHovered, hitTestData)
    // 	);
    // }

    protected abstract _drawImpl(renderingScope: any, isHovered: boolean, hitTestData?: unknown): void;

    // protected _drawBackgroundImpl(renderingScope: BitmapCoordsRenderingScope, isHovered: boolean, hitTestData?: unknown): void {}
}