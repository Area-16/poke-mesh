import { Get, Controller } from '@nestjs/common'

@Controller()
export default class AppController {
	@Get()
	root() : string {
    return 'Hello World!'
  }
}
