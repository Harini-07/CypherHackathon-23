import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovalentModule } from './covalent_api/covalent.module';
import { CoinGeckoModule } from './coingecko/coingecko.module';


@Module({
  imports: [CovalentModule, CoinGeckoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
