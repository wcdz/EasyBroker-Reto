import axios from 'axios'
import { config } from 'dotenv'
config();

export class EasyBroker {

    get paramsEasyBroker() {
        return { 'page': 1, 'limit': 20, }
    }

    get headersEasyBroker() {
        return { 'X-Authorization': process.env.EasyBroker_KEY || 'l7u502p8v46ba3ppgvj5y2aad50lb9' }
    }

    public async title() {
        try {

            const instance = axios.create({
                baseURL: 'https://api.stagingeb.com/v1',
                params: this.paramsEasyBroker,
                headers: this.headersEasyBroker
            });

            const resp = await instance.get('/properties');

            return resp.data.content.map((t: any) => ({
                title: t.title
            }));

        } catch (error) {
            console.error(error);
            return [];
        }
    }

}

const main = async () => {
    const easyBroker: EasyBroker = new EasyBroker();
    const titles = await easyBroker.title();
    titles.forEach((t: any, i: number) => {
        console.log(`${(i + 1)}. ${t.title}`);
    });
}

main();