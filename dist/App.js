"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyBroker = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class EasyBroker {
    get paramsEasyBroker() {
        return { 'page': 1, 'limit': 20, };
    }
    get headersEasyBroker() {
        return { 'X-Authorization': process.env.EasyBroker_KEY || 'l7u502p8v46ba3ppgvj5y2aad50lb9' };
    }
    title() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const instance = axios_1.default.create({
                    baseURL: 'https://api.stagingeb.com/v1',
                    params: this.paramsEasyBroker,
                    headers: this.headersEasyBroker
                });
                const resp = yield instance.get('/properties');
                return resp.data.content.map((t) => ({
                    title: t.title
                }));
            }
            catch (error) {
                console.error(error);
                return [];
            }
        });
    }
}
exports.EasyBroker = EasyBroker;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const easyBroker = new EasyBroker();
    const titles = yield easyBroker.title();
    titles.forEach((t, i) => {
        console.log(`${(i + 1)}. ${t.title}`);
    });
});
main();
