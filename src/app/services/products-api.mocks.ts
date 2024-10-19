export const ProductsApiMocks = {

    getList: {
        res: {
            "data": [
                {
                    "id": "001",
                    "name": "Producto Nuevo",
                    "description": "Descripción del producto nuevo",
                    "logo": "assets-001.png",
                    "date_release": "2024-10-18",
                    "date_revision": "2024-10-19"
                }
            ]
        }
    },

    getOne: {
        req: "001",
        res: {
            "id": "001",
            "name": "Producto Nuevo",
            "description": "Descripción del producto nuevo",
            "logo": "assets-001.png",
            "date_release": "2024-10-18",
            "date_revision": "2024-10-19"
        }
    },

    getOneError: {
        req: "002",
        res: {
            "name": "NotFoundError",
            "message": "Not product found with that identifier",
            "stack": "Error: \n    at new HttpError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\HttpError.ts:16:18)\n    at new NotFoundError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\NotFoundError.ts:10:5)\n    at ProductController.getOne (D:\\Devsu\\RetoAngular\\repo-interview-main\\src\\controllers\\ProductControllers.ts:39:13)\n    at ActionMetadata.callMethod (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\metadata\\ActionMetadata.ts:252:44)\n    at D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\RoutingControllers.ts:123:28\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
        }
    },

    create: {
        req: {
            "id": "001",
            "name": "Producto Nuevo",
            "description": "Descripción del producto nuevo",
            "logo": "assets-001.png",
            "date_release": "2024-10-18",
            "date_revision": "2024-10-19"
        },
        res: {
            "message": "Product added successfully",
            "data": {
                "id": "001",
                "name": "Producto Nuevo",
                "description": "Descripción del producto nuevo",
                "logo": "assets-001.png",
                "date_release": "2024-10-18",
                "date_revision": "2024-10-19"
            }
        }
    },

    createError: {
        req: {
            "id": "001",
            "name": "Producto Nuevo",
            "description": "Descripción del producto nuevo",
            "logo": "assets-001.png",
            "date_release": "2024-10-18",
            "date_revision": "2024-10-19"
        },
        res: {
            "name": "BadRequestError",
            "message": "Duplicate identifier found in the database",
            "stack": "Error: \n    at new HttpError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\HttpError.ts:16:18)\n    at new BadRequestError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\BadRequestError.ts:10:5)\n    at ProductController.createItem (D:\\Devsu\\RetoAngular\\repo-interview-main\\src\\controllers\\ProductControllers.ts:50:13)\n    at ActionMetadata.callMethod (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\metadata\\ActionMetadata.ts:252:44)\n    at D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\RoutingControllers.ts:123:28\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
        }
    },

    edit: {
        req: {
            "id": "001",
            "name": "Producto Nuevo Editado",
            "description": "Descripción del producto nuevo editado",
            "logo": "assets-001-edit.png",
            "date_release": "2024-10-18",
            "date_revision": "2024-10-19"
        },
        res: {
            "message": "Product updated successfully",
            "data": {
                "id": "001",
                "name": "Producto Nuevo Editado",
                "description": "Descripción del producto nuevo editado",
                "logo": "assets-001-edit.png",
                "date_release": "2024-10-18",
                "date_revision": "2024-10-19"
            }
        }
    },

    editError: {
        req: {
            "id": "999",
            "name": "Producto que no existe",
            "description": "Descripción del producto que no existe",
            "logo": "assets-001-edit.png",
            "date_release": "2024-10-18",
            "date_revision": "2024-10-19"
        },
        res: {
            "name": "NotFoundError",
            "message": "Not product found with that identifier",
            "stack": "Error: \n    at new HttpError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\HttpError.ts:16:18)\n    at new NotFoundError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\NotFoundError.ts:10:5)\n    at ProductController.put (D:\\Devsu\\RetoAngular\\repo-interview-main\\src\\controllers\\ProductControllers.ts:65:13)\n    at ActionMetadata.callMethod (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\metadata\\ActionMetadata.ts:252:44)\n    at D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\RoutingControllers.ts:123:28\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
        }
    },

    delete: {
        req: "001",
        res: {
            "message": "Product removed successfully"
        }
    },

    deleteError: {
        req: "999",
        res: {
            "name": "NotFoundError",
            "message": "Not product found with that identifier",
            "stack": "Error: \n    at new HttpError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\HttpError.ts:16:18)\n    at new NotFoundError (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\http-error\\NotFoundError.ts:10:5)\n    at ProductController.remove (D:\\Devsu\\RetoAngular\\repo-interview-main\\src\\controllers\\ProductControllers.ts:83:13)\n    at ActionMetadata.callMethod (D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\metadata\\ActionMetadata.ts:252:44)\n    at D:\\Devsu\\RetoAngular\\repo-interview-main\\node_modules\\src\\RoutingControllers.ts:123:28\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"
        }
    },

};