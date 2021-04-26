"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-extend-native
Array.prototype.get = function (index) {
    if (this.length <= index) {
        return null;
    }
    return this[index];
};
// eslint-disable-next-line no-extend-native
Array.prototype.first = function () {
    return this.get(0);
};
//# sourceMappingURL=arrayExtension.js.map