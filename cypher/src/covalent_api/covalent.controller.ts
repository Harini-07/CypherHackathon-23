
import { Covalent } from 'covalent-api';
import { Controller, Get } from '@nestjs/common';


@Controller("covalent")
export class CovalentAPI{
    @Get('/')
    ngOnInit(): void {

        let config = { api_key: 'ckey_9d3f3b8d4fc545f291c5dd64da3' };
        let cov = new Covalent(config);
    
        cov.getTokenBalancesForAddress('1', '0x52114fb7396dbe19096ffa343d18830f5d77b6c6')
        .then((res) => console.log(res));
    
    }
}
