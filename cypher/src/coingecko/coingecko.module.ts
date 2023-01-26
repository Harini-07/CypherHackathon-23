import { Module } from "@nestjs/common";
import { CoingeckoAPI } from "./coingecko.controller";
@Module({
    controllers:[CoingeckoAPI]
})

export class CoinGeckoModule {}