import BaseElement from "../base/baseElement.js";

export default class Slider extends BaseElement {
    async setRating(target, duration){
        return await this.wdioElement.dragAndDrop(target, duration);
    }
}