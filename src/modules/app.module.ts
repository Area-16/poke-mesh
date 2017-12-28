import { Module } from '@nestjs/common'
import App from './app.controller'

@Module({
  modules: [],
  controllers: [App],
  components: []
})
export class ApplicationModule {}
