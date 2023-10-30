import { travelController } from "../controllers/travel.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { travelSchema } from "../schemas/travel.schema.js";

const travelRouter = Router()

travelRouter.post("/travels", validateSchema(travelSchema), travelController.create)

export default travelRouter
