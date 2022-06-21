"use strict"

import { Router } from "express"

const router = Router()

const serviceMock = router.get("", (req, res) => {
	return res.status(200).json({ success: true })
})

export default serviceMock
