import { Module } from "@nestjs/common";
import { CovalentAPI } from "./covalent.controller";

@Module({
    controllers:[CovalentAPI]
})

export class CovalentModule {}