import { Controller, Get } from "@nestjs/common";


@Controller("coingecko")
export class CoingeckoAPI{
    @Get("/")
    ngOnInit(): void {
        const CoinGecko = require('coingecko-api');

        const CoinGeckoClient = new CoinGecko();

        return CoinGeckoClient.coins.list()
        // .then((res) => console.log(res));
}
}
